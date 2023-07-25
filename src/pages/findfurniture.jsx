import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardContent, Typography, TextField, Button, Box, IconButton, Tooltip } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import TopBar from '../components/TopBar';
import "../assets/font.css"
import MultiActionAreaCard from '../components/e-com/furnitureCard';
import {retails} from "../data/retails";

const FindFurniture = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showMatches, setShowMatches] = useState(false);
  const [filteredFurniture, setFilteredFurniture] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0] || e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Send the file to the server
      const formData = new FormData();
      formData.append('image', file);

      axios
        .post('http://localhost:5000/api/upload', formData) // Replace with your backend URL
        .then((response) => {
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('image', file);
      axios
        .post('http://localhost:5000/api/upload', formData)
        .then((response) => {
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  const handleFindFurniture = () => {
      // After uploading, call the prediction API
      axios
        .get('http://localhost:5000/api/predict')
        .then((predictionResponse) => {
          console.log('Prediction Result:', predictionResponse.data);
          setPrediction(predictionResponse.data);
          setShowMatches(true);
          if (predictionResponse.data && predictionResponse.data.predicted_type) {
            // Filter the furniture based on the predicted type
            const filteredItems = retails.furniture.filter(
              (item) => item.interiorType.toLowerCase() === predictionResponse.data.predicted_type.toLowerCase()
            );
            setFilteredFurniture(filteredItems);
          }
        })
        .catch((error) => {
          console.error('Error predicting image:', error);
        });
  };

  return (
    <>
      <TopBar />
      <Box sx={{ position: 'absolute', top: '4rem', left: '0.5rem' }}>
        <IconButton component={Link} to="/" sx={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 1 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Card sx={{ backgroundColor: 'white', maxWidth: '75rem', margin: 'auto', borderRadius: 5, marginTop: 5, height: '30rem' }}>
        <Card
          sx={{
            backgroundColor: '#f0f0f0',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30rem'
          }}
          onDoubleClick={handleImageRemove}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImageDrop}
        >
          {imagePreview ? (
            <Box sx={{ position: 'relative', width: '72rem', height: '27rem', borderRadius: 5 }}>
              <img
                src={imagePreview}
                alt="Uploaded Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5 }}
              />
              <IconButton
                color="primary"
                size="small"
                onClick={handleImageRemove}
                sx={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'white' }}
              >
                <Tooltip title="Remove Image">
                  <DeleteIcon />
                </Tooltip>
              </IconButton>
            </Box>
          ) : (
            <label htmlFor="upload-image">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '72rem',
                  height: '27rem',
                  border: '2px dashed #ccc',
                  borderRadius: 2,
                  cursor: 'pointer',
                }}
              >
                <AddPhotoAlternateIcon />
                <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                  Add Image
                </Typography>
              </Box>
            </label>
          )}
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </Card>
      </Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleFindFurniture}>
            Find Furniture
          </Button>
        </Box>
      </CardContent>

      {showMatches && (
        <Box
          sx={{
            backgroundColor: '#AF7D51',
            padding: '10px',
            textAlign: 'center',
            marginTop: '10px',
            borderRadius: '2px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="subtitle1" color="white">
            Here are the perfect matches for your space!
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {prediction &&
          <Card sx={{ backgroundColor: '#FFFFF', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '100%' }}>
            <Typography variant="body2" color="black" fontFamily='Poppins'>
              Prediction Type by the trained ML Model
            </Typography>
            <Typography variant="h6" color="primary">
              {prediction && prediction.predicted_type}
            </Typography>
          </Card>
        }

        {prediction &&
          Object.entries(prediction.probabilities).map(([type, probability]) => (
            <Card key={type} sx={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
              <Typography variant="body2" color="secondary">
                {type}
              </Typography>
              <Typography variant="h6" color="primary">
                {(probability * 100).toFixed(2)}%
              </Typography>
            </Card>
          ))}
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '15px', margin:5 }}>
        {filteredFurniture.map((item, index) => (
          <Box key={item.id} sx={{ flex: '1 0 20%', minWidth: '20%', maxWidth: '25%' }}>
            <MultiActionAreaCard
              image={item.image}
              title={item.name}
              price={item.price}
              type ={item.interiorType}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FindFurniture;
