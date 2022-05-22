import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import ShopMap from "./components/ShopMap";
import ShopList from "./components/ShopsList";

const BrideShops = () => {
    const [value, setValue] = useState('one');
    const [tabContent, setContent] = useState(<ShopList/>);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(()=>{
        if (value === 'one'){
            setContent(<ShopList/>);
        } else if (value === 'two'){
            setContent(<ShopMap/>)
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

export default BrideShops;