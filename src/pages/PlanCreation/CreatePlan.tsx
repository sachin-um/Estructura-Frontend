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
  TextField,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';

import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import API from '../../lib/API';
import HandleTextFieldChangeOrBlur from '../../utils/HandleTextFieldChangeOrBlur';
import SelectProfessionals from './selectProfessionals';
import SelectRentingItems from './selectRentalItems';
import SelectRetailItems from './selectRetailItems';

function CreatePlan() {
  const [selectedImage, setSelectedImage] = useState('');
  const [uploadedImages, setUploadedImages] = useState(
    new DataTransfer().files,
  );
  const [uploadedDocuments, setUploadedDocuments] = useState(
    new DataTransfer().files,
  );

  const [selectedProfessionals, setSelectedProfessionals] = useState<
    Partial<User & Professional>[]
  >([]);
  const [selectedRetailItems, setSelectedRetailItems] = useState<RetailItem[]>(
    [],
  );
  const [selectedRentalItems, setSelectedRentalItems] = useState<RentingItem[]>(
    [],
  );

  const cardContent = [
    {
      title: 'Professionals',
    },
    {
      title: 'Retail Items',
    },
    {
      title: 'Rental Items',
    },
  ];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedImage(selectedValue);
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

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [budget, setBudget] = useState(10000);

  const currentUser = useCurrentUser();

  const HandleSubmit = () => {
    if (currentUser) {
      const data = {
        budgets: budget,
        coverImageId: 1,
        documents: uploadedDocuments,
        images: uploadedImages,
        name: title,
        note,
        professionals:
          selectedProfessionals.map<number>((p) => p.id ?? 0) ?? [],
        rentingItems: selectedRentalItems.map<number>((r) => r.id) ?? [],
        retailItems: selectedRetailItems.map<number>((r) => r.id) ?? [],
        userID: currentUser?.id,
      };
      console.log(data);
      API.post<{ errormessage: string; success: boolean }>(
        '/customer-plan/create',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      ).then((response) => {
        if (response.data.success === true) {
          alert('Plan Saved');
        }
      });
    }
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
        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Title of your plan:
        </Typography>
        <TextField
          fullWidth
          label="Your plan in one sentence"
          margin="normal"
          onBlur={HandleTextFieldChangeOrBlur(setTitle)}
          onChange={HandleTextFieldChangeOrBlur(setTitle)}
          value={title}
          variant="outlined"
        />
        {/* <Typography
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
        </Typography> */}

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
                    <SelectProfessionals
                      selected={selectedProfessionals}
                      setter={setSelectedProfessionals}
                    />
                  ) : item.title === 'Retail Items' ? (
                    <SelectRetailItems
                      selected={selectedRetailItems}
                      setter={setSelectedRetailItems}
                    />
                  ) : (
                    <SelectRentingItems
                      selected={selectedRentalItems}
                      setter={setSelectedRentalItems}
                    />
                  )}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Box>

      <Container>
        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Special Notes
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          multiline
          onBlur={HandleTextFieldChangeOrBlur(setNote)}
          onChange={HandleTextFieldChangeOrBlur(setNote)}
          rows={4}
          value={note}
          variant="outlined"
        />
        {/* <Typography
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
        </Typography> */}
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
        {/* <Typography fontSize="20px" marginLeft="50px" variant="h6">
          <strong>LKR 800 000</strong>
        </Typography> */}
        <TextField
          onBlur={HandleTextFieldChangeOrBlur(setBudget)}
          onChange={HandleTextFieldChangeOrBlur(setBudget)}
          placeholder="Enter your budget"
          type="number"
          value={budget}
        />
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        marginBottom="50px"
        marginTop="30px"
      >
        <Button
          color="primary"
          onClick={HandleSubmit}
          size="large"
          variant="contained"
        >
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
