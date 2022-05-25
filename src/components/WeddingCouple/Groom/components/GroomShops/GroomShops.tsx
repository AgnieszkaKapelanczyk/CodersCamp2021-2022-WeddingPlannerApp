import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import ShopsList from "./components/ShopsList";
import ShopsMap from "./components/ShopsMap";

const GroomShops = () => {
    const [value, setValue] = useState('one');
    const [tabContent, setContent] = useState(<ShopsList/>);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(()=>{
        if (value === 'one'){
            setContent(<ShopsList/>);
        } else if (value === 'two'){
            setContent(<ShopsMap/>)
        };
    },[value]);

  return (
      <Box display={'flex'} flexDirection={'column'}>
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="shops tabs"
            >
                <Tab value="one" label="Lista" />
                <Tab value="two" label="Zobacz na mapie" />
            </Tabs>
        </Box>
        {tabContent ? tabContent : null}
      </Box>
    )
};

export default GroomShops;