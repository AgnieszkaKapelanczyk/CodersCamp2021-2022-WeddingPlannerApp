import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from "store/hooks";
import { coordinates, selectUserLocation, setUserLocation } from "store/locationSlice";

const ShopMap = () => {
    const dispatch = useAppDispatch();
    const userLocationState: coordinates | undefined = useAppSelector(selectUserLocation);
    const [userPosition, setPosition] = useState(userLocationState);

    function MapPlaceholder() {
        return (
          <p>
            Mapa{' '}
            <noscript>You need to enable JavaScript to see this map.</noscript>
          </p>
        )
      }
 
    useEffect(()=> {
            navigator.geolocation.getCurrentPosition(function(position) {   
                    dispatch(setUserLocation({userLocation: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }}))
            });

    }, [dispatch]);

    useEffect(()=> {
        if (userLocationState){
            setPosition(userLocationState);
        }
    }, [userLocationState])


    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} style={{ margin:'1rem' }}>
            { userPosition ? (
                <MapContainer 
                    center={[userPosition.lat, userPosition.long]} 
                    zoom={13} 
                    scrollWheelZoom={false}
                    placeholder={<MapPlaceholder />}
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[userPosition.lat, userPosition.long]}>
                <Popup>
                    <p>Tak, tu mieszkam (:</p>
                </Popup>
                </Marker>   
            </MapContainer>
            ) : null
            }
            
        </Box>
    )
};

export default ShopMap;