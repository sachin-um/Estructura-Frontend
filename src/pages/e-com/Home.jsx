import React from "react";
import Categories from "../../components/e-com/Categories";
import Newsletter from "../../components/e-com/Blog";
import Slider from "../../components/e-com/Slider";
import TopBar from "../../components/CusTopBar";
import Footer from "../../components/Footer";
import { Typography, Button, Box } from "@mui/material";
import "../../assets/font.css";

import { Furniture } from "../../data/ProductscardData";
import { Hardware } from "../../data/ProductscardData";
import { Bathware } from "../../data/ProductscardData";
import { Gardenware } from "../../data/ProductscardData";
import { Lighting } from "../../data/ProductscardData";


const Home = () => {
  const firstFourFurniture = Furniture.slice(0,4);
  const firstFourHardware = Hardware.slice(0,4);
  const firstFourBathware = Bathware.slice(0,4);
  const firstFourGardenware = Gardenware.slice(0,4);
  const firstFourLighting = Lighting.slice(0,4);
  return (
    <div>
      <TopBar title="Products" />
      <Slider />

      {/* Furniture */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px', marginTop: '50px' }}>
        <Typography variant='h4' fontSize='30px' fontFamily='Poppins' color='#435834'>
          Furniture
        </Typography>
        <Button variant="contained" color="primary">See More Furniture</Button>
      </Box>
      <Categories data={firstFourFurniture}/>

      {/* Hardware */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px', marginTop: '50px' }}>
        <Typography variant='h4' fontSize='30px' fontFamily='Poppins' color='#435834'>
          Hardware
        </Typography>
        <Button variant="contained" color="primary">See More Hardware</Button>
      </Box>
      <Categories data={firstFourHardware}/>

      {/* Bathware */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px', marginTop: '50px' }}>
        <Typography variant='h4' fontSize='30px' fontFamily='Poppins' color='#435834'>
          Bathware
        </Typography>
        <Button variant="contained" color="primary">See More Bathware</Button>
      </Box>
      <Categories data={firstFourBathware}/>

      {/* Gardenware */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px', marginTop: '50px' }}>
        <Typography variant='h4' fontSize='30px' fontFamily='Poppins' color='#435834'>
          Gardenware
        </Typography>
        <Button variant="contained" color="primary">See More Gardenware</Button>
      </Box>
      <Categories data={firstFourGardenware}/>

      {/* Lighting */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px', marginTop: '50px' }}>
        <Typography variant='h4' fontSize='30px' fontFamily='Poppins' color='#435834'>
          Lighting
        </Typography>
        <Button variant="contained" color="primary">See More Lighting</Button>
      </Box>
      <Categories data={firstFourLighting}/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;