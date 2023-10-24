import { useState } from 'react';
import TopAppBar from '../../components/CusTopBar';
import Footer from '../../components/Footer';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  IconButton,
} from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';

function CreatePlan() {
  const [selectedImage, setSelectedImage] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const cardContent = [
    {
      title: 'Professionals',
      smallCards: [
        {
          profileName: 'John Doe',
          profession: 'Architect',
          contactNo: '+94 773742634',
          priceRange: 'LKR 200 000 - LKR 400,000',
        },
      ],
    },
    {
      title: 'Retail Items',
      smallCards: [
        {
          profileName: 'Jane Smith',
          profession: 'Furniture',
          contactNo: '+94 776543210',
          price: 'LKR 50 000',
        },
      ],
    },
    {
      title: 'Rental Items',
      smallCards: [
        {
          profileName: 'John Smith',
          profession: 'Heavy Machinery',
          contactNo: '+94 783829234',
          price: 'LKR 10 000 per hour',
        },
      ],
    },
  ];

  const handleImageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedImage(selectedValue);
  };

  const handleStatusChange = (event) => {
    setSmallCardStatus(event.target.value);
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
    }
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const handleRemoveImage = (index, event) => {
    event.preventDefault();
    const remainingImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(remainingImages);
  };

  const handleDocumentUpload = (event) => {
    const files = event.target.files;
    const newDocuments = [];
    for (let i = 0; i < files.length; i++) {
      newDocuments.push(files[i].name);
    }
    setUploadedDocuments([...uploadedDocuments, ...newDocuments]);
  };

  const handleRemoveDocument = (index, event) => {
    event.preventDefault();
    const remainingDocuments = uploadedDocuments.filter((_, i) => i !== index);
    setUploadedDocuments(remainingDocuments);
  };

  return (
    <>
      <TopBar title="Create a plan" />

      <Paper
        elevation={3}
        sx={{
          backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: selectedImage ? 'transparent' : '#F3F3F3',
        }}
      >
        <Typography
          variant="h4"
          fontFamily="Poppins"
          color={selectedImage ? 'white' : '#435834'}
        >
          Plan Your Dream Project
        </Typography>
      </Paper>

      <Container>
        {/* <Typography variant="body1" fontSize="20px" fontFamily="Poppins" marginTop="30px">
          Title of your plan:
        </Typography> */}
        {/* <TextField
          variant="outlined"
          label="Your plan in one sentence"
          fullWidth
          margin="normal"
        /> */}
        <Typography
          variant="body1"
          fontSize="20px"
          fontFamily="Poppins"
          marginTop="30px"
        >
          Title of your plan:
        </Typography>
        <Typography
          variant="body2"
          fontSize="16px"
          fontFamily="Poppins"
          marginLeft="20px"
        >
          A contemporary residence woven into nature
        </Typography>

        <Typography
          variant="body1"
          fontSize="20px"
          fontFamily="Poppins"
          marginTop="20px"
        >
          Select cover image
        </Typography>
        <FormControl component="fieldset" fullWidth margin="normal">
          <RadioGroup
            row
            aria-label="cover-image"
            name="cover-image"
            value={selectedImage}
            onChange={handleImageChange}
          >
            <FormControlLabel
              value="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              control={<Radio />}
              label={
                <img
                  src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cover1"
                  style={{ width: '150px', height: '100px' }}
                />
              }
            />
            <FormControlLabel
              value="https://images.pexels.com/photos/7587820/pexels-photo-7587820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              control={<Radio />}
              label={
                <img
                  src="https://images.pexels.com/photos/7587820/pexels-photo-7587820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cover2"
                  style={{ width: '150px', height: '100px' }}
                />
              }
            />
            <FormControlLabel
              value="https://images.pexels.com/photos/7851906/pexels-photo-7851906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              control={<Radio />}
              label={
                <img
                  src="https://images.pexels.com/photos/7851906/pexels-photo-7851906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cover3"
                  style={{ width: '150px', height: '100px' }}
                />
              }
            />
            <FormControlLabel
              value="https://images.pexels.com/photos/8583809/pexels-photo-8583809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              control={<Radio />}
              label={
                <img
                  src="https://images.pexels.com/photos/8583809/pexels-photo-8583809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cover4"
                  style={{ width: '150px', height: '100px' }}
                />
              }
            />
            <FormControlLabel
              value="https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              control={<Radio />}
              label={
                <img
                  src="https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cover5"
                  style={{ width: '150px', height: '100px' }}
                />
              }
            />
          </RadioGroup>
        </FormControl>
      </Container>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {cardContent.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} marginTop="30px">
            <Paper
              sx={{
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '350px',
                margin: '0px 10px 30px 40px',
                marginRight: '5px',
                backgroundColor: '#F3F3F3',
                minHeight: '200px',
              }}
            >
              <Box textAlign="center">
                <Typography variant="h5" fontFamily="Poppins" mb={2}>
                  {item.title}
                </Typography>
                <Box marginBottom={3}>
                  {item.title === 'Professionals' ? (
                    <Button variant="contained" color="primary">
                      Add Professionals
                    </Button>
                  ) : item.title === 'Retail Items' ? (
                    <Button variant="contained" color="primary">
                      Add Retail Items
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary">
                      Add Rental Items
                    </Button>
                  )}
                </Box>
              </Box>
              {item.smallCards.map((smallCard, smallCardIndex) => (
                <Card
                  key={smallCardIndex}
                  sx={{ width: 350, marginBottom: '10px' }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" marginBottom="8px">
                      <Avatar
                        alt={smallCard.profileName}
                        sx={{ width: 32, height: 32, marginRight: '8px' }}
                      >
                        {smallCard.profileName.charAt(0)}
                      </Avatar>

                      <Typography variant="body2">
                        {smallCard.profileName}
                      </Typography>
                      <Box
                        flexGrow={1}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                      >
                        <span
                          style={{
                            backgroundColor: '#E7C4A0',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            color: '#9D6432',
                          }}
                        >
                          <Typography variant="body2">
                            {smallCard.profession}
                          </Typography>
                        </span>
                      </Box>
                    </Box>

                    {item.title === 'Retail Items' ? (
                      <>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px', marginTop: '20px' }}
                        >
                          <strong>Contact No:</strong> {smallCard.contactNo}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px' }}
                        >
                          <strong>Price:</strong> {smallCard.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginRight: '10px' }}
                        >
                          <strong>Status</strong>
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            column
                            aria-label="status"
                            name="status"
                            onChange={handleStatusChange}
                          >
                            <FormControlLabel
                              value="Bought"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">Bought</Typography>
                              }
                            />
                            <FormControlLabel
                              value="Not bought"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">
                                  Not bought
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </>
                    ) : item.title === 'Professionals' ? (
                      <>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px', marginTop: '20px' }}
                        >
                          <strong>Contact No:</strong> {smallCard.contactNo}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px' }}
                        >
                          <strong>Price Range:</strong> {smallCard.priceRange}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginRight: '10px' }}
                        >
                          <strong>Status</strong>
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            column
                            aria-label="status"
                            name="status"
                            onChange={handleStatusChange}
                          >
                            <FormControlLabel
                              value="Yet to Confirm"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">
                                  Yet to Confirm
                                </Typography>
                              }
                            />
                            <FormControlLabel
                              value="Waiting for a response"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">
                                  Waiting for a Response
                                </Typography>
                              }
                            />
                            <FormControlLabel
                              value="Confirmed"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">
                                  Confirmed
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px', marginTop: '20px' }}
                        >
                          <strong>Contact No:</strong> {smallCard.contactNo}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px' }}
                        >
                          <strong>Price:</strong> {smallCard.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginRight: '10px' }}
                        >
                          <strong>Status</strong>
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            column
                            aria-label="status"
                            name="status"
                            onChange={handleStatusChange}
                          >
                            <FormControlLabel
                              value="Rented"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">Rented</Typography>
                              }
                            />
                            <FormControlLabel
                              value="Not Rented"
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              label={
                                <Typography variant="body2">
                                  Not Rented
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </>
                    )}
                    <Box
                      display="flex"
                      justifyContent="center"
                      marginTop="auto"
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ color: 'white' }}
                        onClick={() =>
                          handleRemoveSmallCard(cardIndex, smallCardIndex)
                        }
                      >
                        Remove
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Paper>
          </Grid>
        ))}
      </Box>

      <Container>
        {/* <Typography variant="body1" fontSize="20px" fontFamily='Poppins' marginTop='30px'>
            Special Notes
          </Typography>
          <TextField
            multiline
            rows={4}
            variant='outlined'
            fullWidth
            margin='normal'
          /> */}
        <Typography
          variant="body1"
          fontSize="20px"
          fontFamily="Poppins"
          marginTop="30px"
        >
          Special Notes:
        </Typography>
        <Typography
          variant="body1"
          fontSize="16px"
          fontFamily="Poppins"
          marginLeft="20px"
        >
          I envision a home that not only provides comfort and functionality for
          my family but also harmonizes with the environment and promotes
          well-being through biophilic design principles.
        </Typography>
      </Container>

      <Container>
        <Typography
          variant="body1"
          fontSize="20px"
          fontFamily="Poppins"
          marginTop="30px"
        >
          Upload Images
        </Typography>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="image-upload"
          multiple
          onChange={handleImageUpload}
        />
        <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
          <Box
            border="2px dashed #ccc"
            borderRadius="4px"
            width="100%"
            minHeight="150px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            overflowX="auto"
            position="relative"
          >
            {uploadedImages.map((image, index) => (
              <Box key={index} position="relative" marginRight="10px">
                <img
                  src={image}
                  alt={'Uploaded Image ${index + 1}'}
                  style={{ width: '150px', height: '150px' }}
                />
                <IconButton
                  onClick={(event) => handleRemoveImage(index, event)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'white',
                  }}
                >
                  <Delete />
                </IconButton>
              </Box>
            ))}

            <CloudUpload fontSize="large" />
            <Typography variant="body1">Click to upload</Typography>
          </Box>
        </label>
      </Container>

      <Container>
        <Typography
          variant="body1"
          fontSize="20px"
          fontFamily="Poppins"
          marginTop="30px"
        >
          Upload Documents
        </Typography>
        <input
          type="file"
          accept="application/pdf,.doc,.docx"
          style={{ display: 'none' }}
          id="document-upload"
          multiple
          onChange={handleDocumentUpload}
        />
        <label htmlFor="document-upload" style={{ cursor: 'pointer' }}>
          <Box
            border="2px dashed #ccc"
            borderRadius="4px"
            width="100%"
            minHeight="150px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            overflowX="auto"
            position="relative"
          >
            {uploadedDocuments.map((document, index) => (
              <Box key={index} position="relative" marginRight="10px">
                <Typography variant="body1" style={{ margin: '10px' }}>
                  {document}
                </Typography>
                <IconButton
                  onClick={(event) => handleRemoveDocument(index, event)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'white',
                  }}
                >
                  <Delete />
                </IconButton>
              </Box>
            ))}
            <CloudUpload fontSize="large" />
            <Typography variant="body1"> Click to Upload </Typography>
          </Box>
        </label>
      </Container>

      <Container>
        <Typography
          variant="body1"
          fontSize="20px"
          fontFamily="Poppins"
          marginTop="30px"
        >
          Estimated Budget
        </Typography>
        <Typography variant="h6" fontSize="20px" marginLeft="50px">
          <strong>LKR 800 000</strong>
        </Typography>
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        marginTop="30px"
        marginBottom="50px"
      >
        <Button variant="contained" color="primary" size="large">
          Create Plan
        </Button>
      </Box>
      {/* <Box display='flex' justifyContent='center' marginTop='30px' marginBottom='50px'>
          <Button variant='contained' color='primary' size='large'>
            Edit Plan
          </Button>
        </Box> */}

      <Footer />
    </>
  );
}

export default CreatePlan;
