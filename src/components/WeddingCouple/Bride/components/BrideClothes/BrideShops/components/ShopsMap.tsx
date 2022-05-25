import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from "store/hooks";
import { coordinates, selectUserLocation, setUserLocation } from "store/locationSlice";

const shopsList = 
[
    {name: "Margarett", lat:  51.11947091656028, long: 17.033009024240343},
    {name: "Salon Sukien Ślubnych FLOSSMANN", lat: 51.1006178, long: 17.032131819},
    {name: "Bellissima Salon Sukien Ślubnych", lat: 51.11097878482248, long: 17.019324198126217},
    {name: "Salon Sukien Ślubnych LORETTA", lat: 51.11829907647684, long: 17.0395830288129},
    {name: "Suknie ślubne MAXIMA", lat: 51.10064273228717, long: 17.031644064394982},
    {name: "Lauren Salon Sukni Ślubnych", lat: 51.10309411064559, long: 17.028308346603943},
    {name: "Celebrity Salon Ślubny", lat: 51.12599490874000, long: 17.046279711021857},
    {name: "Suknie ślubne - Vogue", lat: 51.10935347794372, long: 17.036970011021857},
]

const ShopsMap = () => {
    const dispatch = useAppDispatch();
    const userLocationState: coordinates | undefined = useAppSelector(selectUserLocation);
    const [userPosition, setPosition] = useState(userLocationState);
    const [shopsCoordinates, setCoordinates] = useState(shopsList);

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
    }, [userLocationState]);




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
                    <p>Tu jesteś!</p>
                </Popup>
                </Marker> 
                {shopsCoordinates.map((shop,id)=>(
                    <Marker position={[shop.lat, shop.long]}>
                    <Popup>
                        <p>{shop.name}</p>
                    </Popup>
                    </Marker> 
                ))}  
            </MapContainer>
            ) : null
            }
            
        </Box>
    )
};

export default ShopsMap;