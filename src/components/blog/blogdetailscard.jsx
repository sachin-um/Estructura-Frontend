import React from 'react';
import { Card, CardContent, CardActions, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import coverImage from "/blog/1.jpg";

const BlogCard = () => {
  const blogContent = `Are you looking to add a touch of elegance and functionality to your living spaces? 
  Look no further than Estructura Furnitures, where we offer an exquisite range of furniture designs to 
  suit every taste and style. Our collection includes modern sofas, dining sets, and storage solutions, 
  all crafted with precision and a keen eye for aesthetics.

  At Estructura Furnitures, we understand that a sofa is not just a piece of furniture; it's a place of 
  relaxation and bonding. Our modern sofa designs combine comfort with contemporary aesthetics, providing 
  the perfect spot for unwinding after a long day. Whether you prefer sleek, minimalist designs or plush, 
  cozy options, our selection caters to diverse preferences. Each sofa is meticulously crafted with premium 
  materials, ensuring both durability and a stunning visual appeal.
  
  A dining area should be more than just a place to enjoy meals; it should be an extension of your personal 
  style and taste. Our dining sets are thoughtfully curated to enhance your dining experience and elevate the 
  ambiance of your home. From chic and compact tables for cozy gatherings to grand, elegant sets for formal 
  occasions, we have the perfect match for your dining room. Each piece is designed to harmonize with various 
  interior themes, allowing you to create a seamless, cohesive look.

  Efficient storage solutions are essential for maintaining a clutter-free and organized living space. At Estructura 
  Furnitures, we offer a range of storage options that not only help keep your belongings in order but also add a 
  touch of sophistication to your home. From sleek, wall-mounted shelves to versatile cabinets and sideboards, 
  our storage designs blend functionality with style seamlessly. Whether you need to store books, showcase decor 
  items, or keep your essentials tucked away, our collection has something for everyone.

  What sets Estructura Furnitures apart is our unwavering commitment to craftsmanship and attention to detail. 
  Each piece of furniture is meticulously handcrafted by skilled artisans who take pride in their work. Our commitment 
  to using high-quality materials ensures that our furniture stands the test of time, becoming a cherished part of your 
  home for years to come.

  We understand that every home is unique, and your furniture should reflect your individuality. That's why we offer 
  customization options to tailor our designs to your specific needs. From selecting the perfect upholstery to choosing 
  the right finish, we work closely with you to bring your vision to life.

  If you're ready to transform your living spaces with elegant and functional furniture, we invite you to explore our exquisite 
  collection at Estructura Furnitures. Immerse yourself in the world of contemporary design and find the perfect pieces to enhance your home. 
  Our dedicated team is here to assist you in creating a space that truly reflects your style and personality. 
  Visit our showroom or browse our website to discover the finest in furniture craftsmanship.

  Experience the art of living with Estructura Furnitures. Your home, reimagined.

  `;

  const paragraphs = blogContent.split('. ').reduce((acc, sentence) => {
    if (!acc.length || acc[acc.length - 1].split('. ').length >= 5) {
      acc.push(sentence);
    } else {
      acc[acc.length - 1] += sentence + '. ';
    }
    return acc;
  }, []);
  

  return (
    // <Card sx={{ backgroundColor: 'white', padding: 2, maxWidth: 950, marginBottom: 2, borderRadius: 5 }}>
    //     <div style={{ width: '100%', height: '20rem', marginBottom: '10px' }}>
    //         <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
    //     </div>
    //     <CardActions sx={{ justifyContent: 'flex-end' }}>
    //       <Tooltip title="Go Back">
    //         <IconButton color="primary" size="small">
    //           <ArrowBackIcon />
    //         </IconButton>
    //       </Tooltip>
    //       <Tooltip title="Edit">
    //         <IconButton color="primary" size="small">
    //           <EditIcon />
    //         </IconButton>
    //       </Tooltip>
    //       <Tooltip title="Delete">
    //         <IconButton color="secondary" size="small">
    //           <DeleteIcon />
    //         </IconButton>
    //       </Tooltip>
    //     </CardActions>
    //     <CardContent>
    //         <Typography variant="h4" marginBottom={1}>Estructura Furniture</Typography>
    //         <Stack direction="row" alignItems="center" spacing={1}>
    //         <Typography variant="body2" color="textSecondary">
    //             Saneru Akarawita
    //         </Typography>
    //         </Stack>
    //         <Typography variant="body2" color="textSecondary">
    //         Date: July 20, 2023
    //         </Typography>
    //     </CardContent>
    //     <Card sx={{ borderColor: 'green', borderWidth: 2, borderStyle: 'solid', marginTop: 2, borderRadius: 3 }}>
    //         <CardContent>
    //         {paragraphs.map((paragraph, index) => (
    //             <Typography key={index} variant="body1" align="justify" gutterBottom sx={{ marginBottom: 2 }}>
    //             {paragraph}
    //             </Typography>
    //         ))}
    //         </CardContent>
    //     </Card>
    // </Card>
    <Card sx={{ backgroundColor: 'white', padding: 2, maxWidth: 950, marginBottom: 2, borderRadius: 5 }}>
      <CardContent>
        <Typography variant="h4" textAlign="center" marginTop={2} marginBottom={1}>
          Estructura Furniture
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <Typography variant="body2" color="textSecondary">
            Saneru Akarawita
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {' | '}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date: July 20, 2023
          </Typography>
        </Stack>
      </CardContent>
      <div style={{ width: '100%', height: '25rem', marginBottom: '10px' }}>
        <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
      </div>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Tooltip title="Go Back">
          <IconButton color="primary" size="small">
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton color="primary" size="small">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="secondary" size="small">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      {/* <Card sx={{ borderColor: 'green', borderWidth: 2, boxShadow: 'none', borderStyle: 'solid', marginTop: 2, borderRadius: 3 }}> */}
      <Card sx={{ border: 'none', boxShadow: 'none', marginTop: 2, borderRadius: 3 }}>
        <CardContent>
          {paragraphs.map((paragraph, index) => (
            <Typography key={index} variant="body1" align="justify" gutterBottom sx={{ marginBottom: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Card>
  );
};

export default BlogCard;
