import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from "store/hooks";
import { coordinates, selectUserLocation, setUserLocation } from "store/locationSlice";

const shopsList =
[
    {name: "Salon Digel-Alberto", lat:  51.10859198130387, long: 17.03666688952941},
    {name: "Diuk", lat: 51.102149370042476, long: 17.030119184289646},
    {name: "Vistula Magnolia", lat: 51.118823107432476, long: 16.989268530319663},
    {name: "PAWIS - Polskie Garnitury", lat: 51.1189235604364, long: 17.03405548428964},
    {name: "Salon Recman", lat: 51.10064273228717, long: 16.988597768946306},
    {name: "Lancerto", lat: 51.11298301254003, long: 17.05912259963299},
    {name: "PAWIS - Polskie Garnitury", lat: 51.12697140064642, long: 16.976530554712735},
    {name: "Salon Mody Męskiej KONIECZNY", lat: 52.42546427037203, long: 16.78577053696983},
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