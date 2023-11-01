import { CloudUpload, Delete } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';

import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';

function CreatePlan() {
  const [selectedImage, setSelectedImage] = useState('');
  const [uploadedImages, setUploadedImages] = useState(
    new DataTransfer().files,
  );
  const [uploadedDocuments, setUploadedDocuments] = useState(
    new DataTransfer().files,
  );

  const cardContent = [
    {
      smallCards: [
        {
          contactNo: '+94 773742634',
          price: 'LKR 200 000 - LKR 400,000',
          profession: 'Architect',
          profileName: 'John Doe',
        },
      ],
      title: 'Professionals',
    },
    {
      smallCards: [
        {
          contactNo: '+94 776543210',
          price: 'LKR 50 000',
          profession: 'Furniture',
          profileName: 'Jane Smith',
        },
      ],
      title: 'Retail Items',
    },
    {
      smallCards: [
        {
          contactNo: '+94 783829234',
          price: 'LKR 10 000 per hour',
          profession: 'Heavy Machinery',
          profileName: 'John Smith',
        },
      ],
      title: 'Rental Items',
    },
  ];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedImage(selectedValue);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSmallCardStatus(event.target.value);
  };

  const imagesRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? new DataTransfer().files;
    setUploadedImages(files);
  };

  const handleRemoveImage = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const files = imagesRef.current?.files ?? new DataTransfer().files;
    const remainingImages = new DataTransfer();
    for (let i = 0; i < files.length; ++i) {
      if (i !== index) {
        remainingImages.items.add(files[i]);
      }
    }
    setUploadedImages(remainingImages.files);
  };

  const documentsRef = useRef<HTMLInputElement>(null);

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? new DataTransfer().files;
    setUploadedDocuments(files);
  };

  const handleRemoveDocument = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const files = documentsRef.current?.files ?? new DataTransfer().files;
    const remainingDocuments = new DataTransfer();
    for (let i = 0; i < files.length; ++i) {
      if (i !== index) {
        remainingDocuments.items.add(files[i]);
      }
    }
    setUploadedDocuments(remainingDocuments.files);
  };

  return (
    <>
      <TopAppBar />

      <Paper
        sx={{
          alignItems: 'center',
          backgroundColor: selectedImage ? 'transparent' : '#F3F3F3',
          backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
        elevation={3}
      >
        <Typography
          color={selectedImage ? 'white' : '#435834'}
          fontFamily="Poppins"
          variant="h4"
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
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Title of your plan:
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontSize="16px"
          marginLeft="20px"
          variant="body2"
        >
          A contemporary residence woven into nature
        </Typography>

        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="20px"
          variant="body1"
        >
          Select cover image
        </Typography>
        <FormControl component="fieldset" fullWidth margin="normal">
          <RadioGroup
            aria-label="cover-image"
            name="cover-image"
            onChange={handleImageChange}
            row
            value={selectedImage}
          >
            <FormControlLabel
              label={
                <img
                  alt="cover1"
                  src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '100px', width: '150px' }}
                />
              }
              control={<Radio />}
              value="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FormControlLabel
              label={
                <img
                  alt="cover2"
                  src="https://images.pexels.com/photos/7587820/pexels-photo-7587820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '100px', width: '150px' }}
                />
              }
              control={<Radio />}
              value="https://images.pexels.com/photos/7587820/pexels-photo-7587820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FormControlLabel
              label={
                <img
                  alt="cover3"
                  src="https://images.pexels.com/photos/7851906/pexels-photo-7851906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '100px', width: '150px' }}
                />
              }
              control={<Radio />}
              value="https://images.pexels.com/photos/7851906/pexels-photo-7851906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FormControlLabel
              label={
                <img
                  alt="cover4"
                  src="https://images.pexels.com/photos/8583809/pexels-photo-8583809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '100px', width: '150px' }}
                />
              }
              control={<Radio />}
              value="https://images.pexels.com/photos/8583809/pexels-photo-8583809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FormControlLabel
              label={
                <img
                  alt="cover5"
                  src="https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ height: '100px', width: '150px' }}
                />
              }
              control={<Radio />}
              value="https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          <Grid item key={index} marginTop="30px" md={4} sm={6} xs={12}>
            <Paper
              sx={{
                alignItems: 'flex-start',
                backgroundColor: '#F3F3F3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '0px 10px 30px 40px',
                marginRight: '5px',
                minHeight: '200px',
                padding: '1rem',
                width: '350px',
              }}
            >
              <Box textAlign="center">
                <Typography fontFamily="Poppins" mb={2} variant="h5">
                  {item.title}
                </Typography>
                <Box marginBottom={3}>
                  {item.title === 'Professionals' ? (
                    <Button color="primary" variant="contained">
                      Add Professionals
                    </Button>
                  ) : item.title === 'Retail Items' ? (
                    <Button color="primary" variant="contained">
                      Add Retail Items
                    </Button>
                  ) : (
                    <Button color="primary" variant="contained">
                      Add Rental Items
                    </Button>
                  )}
                </Box>
              </Box>
              {item.smallCards.map((smallCard, smallCardIndex) => (
                <Card
                  key={smallCardIndex}
                  sx={{ marginBottom: '10px', width: 350 }}
                >
                  <CardContent>
                    <Box alignItems="center" display="flex" marginBottom="8px">
                      <Avatar
                        alt={smallCard.profileName}
                        sx={{ height: 32, marginRight: '8px', width: 32 }}
                      >
                        {smallCard.profileName.charAt(0)}
                      </Avatar>

                      <Typography variant="body2">
                        {smallCard.profileName}
                      </Typography>
                      <Box
                        alignItems="center"
                        display="flex"
                        flexGrow={1}
                        justifyContent="flex-end"
                      >
                        <span
                          style={{
                            backgroundColor: '#E7C4A0',
                            borderRadius: '4px',
                            color: '#9D6432',
                            padding: '4px 8px',
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
                          style={{ marginBottom: '10px', marginTop: '20px' }}
                          variant="body2"
                        >
                          <strong>Contact No:</strong> {smallCard.contactNo}
                        </Typography>
                        <Typography
                          style={{ marginBottom: '10px' }}
                          variant="body2"
                        >
                          <strong>Price:</strong> {smallCard.price}
                        </Typography>
                        <Typography
                          style={{ marginRight: '10px' }}
                          variant="body2"
                        >
                          <strong>Status</strong>
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="status"
                            name="status"
                            onChange={handleStatusChange}
                          >
                            <FormControlLabel
                              label={
                                <Typography variant="body2">Bought</Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Bought"
                            />
                            <FormControlLabel
                              label={
                                <Typography variant="body2">
                                  Not bought
                                </Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Not bought"
                            />
                          </RadioGroup>
                        </FormControl>
                      </>
                    ) : item.title === 'Professionals' ? (
                      <>
                        <Typography
                          style={{ marginBottom: '10px', marginTop: '20px' }}
                          variant="body2"
                        >
                          <strong>Contact No:</strong> {smallCard.contactNo}
                        </Typography>
                        <Typography
                          style={{ marginBottom: '10px' }}
                          variant="body2"
                        >
                          <strong>Price Range:</strong> {smallCard.price}
                        </Typography>
                        <Typography
                          style={{ marginRight: '10px' }}
                          variant="body2"
                        >
                          <strong>Status</strong>
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="status"
                            name="status"
                            onChange={handleStatusChange}
                          >
                            <FormControlLabel
                              label={
                                <Typography variant="body2">
                                  Yet to Confirm
                                </Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Yet to Confirm"
                            />
                            <FormControlLabel
                              label={
                                <Typography variant="body2">
                                  Waiting for a Response
                                </Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Waiting for a response"
                            />
                            <FormControlLabel
                              label={
                                <Typography variant="body2">
                                  Confirmed
                                </Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Confirmed"
                            />
                          </RadioGroup>
                        </FormControl>
                      </>
                    ) : (
                      <>
                        <Typography
                          style={{ marginBottom: '10px', marginTop: '20px' }}
                          variant="body2"
                        >
                          <strong>Contact No:</strong> {smallCard.contactNo}
                        </Typography>
                        <Typography
                          style={{ marginBottom: '10px' }}
                          variant="body2"
                        >
                          <strong>Price:</strong> {smallCard.price}
                        </Typography>
                        <Typography
                          style={{ marginRight: '10px' }}
                          variant="body2"
                        >
                          <strong>Status</strong>
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="status"
                            name="status"
                            onChange={handleStatusChange}
                          >
                            <FormControlLabel
                              label={
                                <Typography variant="body2">Rented</Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Rented"
                            />
                            <FormControlLabel
                              label={
                                <Typography variant="body2">
                                  Not Rented
                                </Typography>
                              }
                              control={<Radio sx={{ marginLeft: '10px' }} />}
                              value="Not Rented"
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
                        onClick={() => {
                          // handleRemoveSmallCard(cardIndex, smallCardIndex)
                        }}
                        color="secondary"
                        sx={{ color: 'white' }}
                        variant="contained"
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
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Special Notes:
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontSize="16px"
          marginLeft="20px"
          variant="body1"
        >
          I envision a home that not only provides comfort and functionality for
          my family but also harmonizes with the environment and promotes
          well-being through biophilic design principles.
        </Typography>
      </Container>

      <Container>
        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Upload Images
        </Typography>
        <input
          accept="image/*"
          id="image-upload"
          multiple
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          type="file"
        />
        <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
          <Box
            sx={{
              alignItems: 'center',
              border: '2px dashed #ccc',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              minHeight: '150px',
              overflowX: 'auto',
              position: 'relative',
              width: '100%',
            }}
          >
            {Array.from(uploadedImages).map((image, index) => (
              <Box key={index} marginRight="10px" position="relative">
                <img
                  alt={`Uploaded ${index + 1}`}
                  src={URL.createObjectURL(image)}
                  style={{ height: '150px', width: '150px' }}
                />
                <IconButton
                  style={{
                    background: 'white',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                  }}
                  onClick={(event) => handleRemoveImage(index, event)}
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
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Upload Documents
        </Typography>
        <input
          accept="application/pdf,.doc,.docx"
          id="document-upload"
          multiple
          onChange={handleDocumentUpload}
          style={{ display: 'none' }}
          type="file"
        />
        <label htmlFor="document-upload" style={{ cursor: 'pointer' }}>
          <Box
            sx={{
              alignItems: 'center',
              border: '2px dashed #ccc',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              minHeight: '150px',
              overflowX: 'auto',
              position: 'relative',
              width: '100%',
            }}
          >
            {Array.from(uploadedDocuments).map((document, index) => (
              <Box key={index} marginRight="10px" position="relative">
                <Typography style={{ margin: '10px' }} variant="body1">
                  {document.name}
                </Typography>
                <IconButton
                  style={{
                    background: 'white',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                  }}
                  onClick={(event) => handleRemoveDocument(index, event)}
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
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Estimated Budget
        </Typography>
        <Typography fontSize="20px" marginLeft="50px" variant="h6">
          <strong>LKR 800 000</strong>
        </Typography>
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        marginBottom="50px"
        marginTop="30px"
      >
        <Button color="primary" size="large" variant="contained">
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
