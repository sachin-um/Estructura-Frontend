import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from '../redux/UserAuthenticationReducer';
import '../assets/font.css';
import TopAppBar from '../components/TopAppBar';
import MultiActionAreaCard from '../components/e-com/furnitureCard';
import { retails } from '../data/retails';

const FindFurniture = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showMatches, setShowMatches] = useState(false);
  const [filteredFurniture, setFilteredFurniture] = useState([]);

  const userInfo = useSelector(selectUser);
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
            (item) =>
              item.interiorType.toLowerCase() ===
              predictionResponse.data.predicted_type.toLowerCase(),
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
      <TopAppBar />
      {userInfo && userInfo.id ? (
        <>
          <Box sx={{ left: '0.5rem', position: 'absolute', top: '4rem' }}>
            <IconButton
              component={Link}
              sx={{
                left: '1rem',
                position: 'absolute',
                top: '1rem',
                zIndex: 1,
              }}
              to="/"
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
          <Card
            sx={{
              backgroundColor: 'white',
              borderRadius: 5,
              height: '30rem',
              margin: 'auto',
              marginTop: 5,
              maxWidth: '75rem',
            }}
          >
            <Card
              sx={{
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                height: '30rem',
                justifyContent: 'center',
                padding: 0,
              }}
              onDoubleClick={handleImageRemove}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleImageDrop}
            >
              {imagePreview ? (
                <Box
                  sx={{
                    borderRadius: 5,
                    height: '27rem',
                    position: 'relative',
                    width: '72rem',
                  }}
                >
                  <img
                    style={{
                      borderRadius: 5,
                      height: '100%',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                    alt="Uploaded Preview"
                    src={imagePreview}
                  />
                  <IconButton
                    sx={{
                      backgroundColor: 'white',
                      position: 'absolute',
                      right: 5,
                      top: 5,
                    }}
                    color="primary"
                    onClick={handleImageRemove}
                    size="small"
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
                      alignItems: 'center',
                      border: '2px dashed #ccc',
                      borderRadius: 2,
                      cursor: 'pointer',
                      display: 'flex',
                      height: '27rem',
                      justifyContent: 'center',
                      width: '72rem',
                    }}
                  >
                    <AddPhotoAlternateIcon />
                    <Typography
                      color="textSecondary"
                      sx={{ marginLeft: 1 }}
                      variant="body2"
                    >
                      Add Image
                    </Typography>
                  </Box>
                </label>
              )}
              <input
                accept="image/*"
                id="upload-image"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                type="file"
              />
            </Card>
          </Card>
          <CardContent>
            <Box
              sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
            >
              <Button
                color="primary"
                onClick={handleFindFurniture}
                variant="contained"
              >
                Find Furniture
              </Button>
            </Box>
          </CardContent>

          {showMatches && (
            <Box
              sx={{
                backgroundColor: '#AF7D51',
                borderRadius: '2px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
                marginTop: '10px',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography color="white" variant="subtitle1">
                Here are the perfect matches for your space!
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            {prediction && (
              <Card
                sx={{
                  backgroundColor: '#FFFFF',
                  borderRadius: '5px',
                  padding: '10px',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <Typography color="black" fontFamily="Poppins" variant="body2">
                  Prediction Type by the trained ML Model
                </Typography>
                <Typography color="primary" variant="h6">
                  {prediction && prediction.predicted_type}
                </Typography>
              </Card>
            )}

            {prediction &&
              Object.entries(prediction.probabilities).map(
                ([type, probability]) => (
                  <Card
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '5px',
                      padding: '10px',
                      textAlign: 'center',
                    }}
                    key={type}
                  >
                    <Typography color="secondary" variant="body2">
                      {type}
                    </Typography>
                    <Typography color="primary" variant="h6">
                      {(probability * 100).toFixed(2)}%
                    </Typography>
                  </Card>
                ),
              )}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'flex-start',
              margin: 5,
            }}
          >
            {filteredFurniture.map((item, index) => (
              <Box
                key={item.id}
                sx={{ flex: '1 0 20%', maxWidth: '25%', minWidth: '20%' }}
              >
                <MultiActionAreaCard
                  image={item.image}
                  price={item.price}
                  title={item.name}
                  type={item.interiorType}
                />
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <h1>Please Login to access this feature</h1>
      )}
    </>
  );
};

export default FindFurniture;
