import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import {
  MdDescription,
  MdInsertDriveFile,
  MdPictureAsPdf,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import { CustomerAuthenticated } from '../../components/Auth/Authenticated';
import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import { useCustomerRequest } from '../../hooks/customerRequest/useCustomerRequest';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import FileArrayToFileList from '../../utils/FileArrayToFileList';
import HandleTextFieldChangeOrBlur from '../../utils/HandleTextFieldChangeOrBlur';
import IsRetailCat from '../../utils/IsRetailCat';
import IsRole from '../../utils/IsRole';

const AddCustomerRequest = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    (RetailItemType | Role)[]
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<File[]>([]);

  const handleCategoryClick = (categoryId: RetailItemType | Role) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== categoryId),
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (event) => {
    const files = event.target.files;
    if (files !== null) {
      const filesArray = Array.from(files);
      const imagesArray = filesArray.filter((file) =>
        file.type.includes('image'),
      );
      const documentsArray = filesArray.filter(
        (file) => !file.type.includes('image'),
      );

      setUploadedImages((prevImages) => [...prevImages, ...imagesArray]);
      setUploadedDocuments((prevDocuments) => [
        ...prevDocuments,
        ...documentsArray,
      ]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleRemoveDocument = (index: number) => {
    setUploadedDocuments((prevDocuments) =>
      prevDocuments.filter((_, i) => i !== index),
    );
  };

  const currentUser = useCurrentUser();

  const [description, setDescription] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [minPrice, setMinPrice] = useState(0.01);
  const [maxPrice, setMaxPrice] = useState(0.01);

  const navigate = useNavigate();

  const { addCustomerRequest } = useCustomerRequest();

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const customerId = currentUser?.id;
    if (!customerId) {
      navigate('/SignIn?from=/custom-requests/add');
    } else {
      const data: CustomerRequestAddOrUpdateRequest = {
        customerId,
        description,
        documents: FileArrayToFileList(uploadedDocuments),
        images: FileArrayToFileList(uploadedImages),
        maxPrice,
        minPrice,
        shortDesc,
        targetCategories: selectedCategories.filter(IsRole) as Role[],
        targetRetailCategories: selectedCategories.filter(
          IsRetailCat,
        ) as RetailItemType[],
      };
      const result = await addCustomerRequest(data);
      console.log(result);
      if (result.success) {
        navigate(`/custom-requests/req/${result.item?.id}`);
      }
    }
  };

  const isCategorySelected = (categoryId: RetailItemType | Role) =>
    selectedCategories.includes(categoryId);

  const categoryList: { id: Role; imageSrc: string; text: string }[] = [
    {
      id: 'ARCHITECT',
      imageSrc:
        'https://designeverest.com/wp-content/uploads/2023/01/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg',
      text: 'Architects',
    },
    {
      id: 'CONSTRUCTIONCOMPANY',
      imageSrc:
        'https://www.crystalconstruction.lk/wp-content/uploads/2023/05/The-Benefits-of-Hiring-a-Professional-Construction-Company-in-Sri-Lanka.png',
      text: 'Construction Companies',
    },
    {
      id: 'INTERIORDESIGNER',
      imageSrc:
        'https://www.myperfectresume.com/wp-content/uploads/2020/09/how-to-become-an-interior-designer.jpg',
      text: 'Interior Designers',
    },
    {
      id: 'LANDSCAPEARCHITECT',
      imageSrc:
        'https://design.asu.edu/sites/default/files/2022-07/landscape-drawing-pencil.jpg',
      text: 'Landscape Architects',
    },
    {
      id: 'MASONWORKER',
      imageSrc:
        'https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png',
      text: 'Home Builders',
    },
    {
      id: 'CARPENTER',
      imageSrc:
        'https://generisonline.com/wp-content/uploads/2022/05/The-difference-between-a-joiner-and-a-carpenter-1.jpg',
      text: 'Carpenters',
    },
    {
      id: 'PAINTER',
      imageSrc:
        'https://blog.renovationfind.com/wp-content/uploads/2019/01/Painter-in-Edmonton.jpg',
      text: 'Painters',
    },
  ];

  const retailItemList: {
    id: RetailItemType;
    imageSrc: string;
    text: string;
  }[] = [
    {
      id: 'FURNITURE',
      imageSrc:
        'https://cdn-eu.dynamicyield.com/api/9877108/images/24d111bf06dd1__furniture.jpg',
      text: 'Furniture',
    },
    {
      id: 'HARDWARE',
      imageSrc:
        'https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Hardware',
    },
    {
      id: 'BATHWARE',
      imageSrc:
        'https://images.pexels.com/photos/11125357/pexels-photo-11125357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Bathware',
    },
    {
      id: 'GARDENWARE',
      imageSrc:
        'https://peakproducts-canada.s3.ca-central-1.amazonaws.com/gardenware-banner-img-2.jpeg',
      text: 'Gardenware',
    },
    {
      id: 'LIGHTING',
      imageSrc:
        'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Lighting',
    },
  ];

  return (
    <CustomerAuthenticated>
      <TopAppBar />
      <Container
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          sx={{ marginTop: 10, textAlign: 'left' }}
          variant="h4"
        >
          Transform Your Vision into a Reality.
          <br />
          Discover Your Perfect Match.
        </Typography>

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ marginTop: 8, textAlign: 'left' }}
        >
          Request Title
        </Typography>
        <TextField
          fullWidth
          label="Your request in one sentence"
          margin="normal"
          onBlur={HandleTextFieldChangeOrBlur(setShortDesc)}
          onChange={HandleTextFieldChangeOrBlur(setShortDesc)}
          value={shortDesc}
          variant="outlined"
        />

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ TextAlign: 'left', marginBottom: 3, marginTop: 5 }}
        >
          What category/s of professional/s are you looking for?
        </Typography>

        <Grid container spacing={9}>
          {categoryList.map((categoryItem) => (
            <Grid item key={categoryItem.id}>
              <ButtonBase
                style={{
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  border: isCategorySelected(categoryItem.id)
                    ? '2px solid green'
                    : 'none',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '160px',
                  padding: '4px',
                  width: '100px',
                }}
                onClick={() => handleCategoryClick(categoryItem.id)}
              >
                <Avatar
                  alt={categoryItem.text}
                  src={categoryItem.imageSrc}
                  sx={{ height: 90, width: 90 }}
                />
                <Typography
                  align="center"
                  sx={{ marginTop: 2 }}
                  variant="body2"
                >
                  {categoryItem.text}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ TextAlign: 'left', marginBottom: 3, marginTop: 5 }}
        >
          What type/s of retail item/s are you looking for?
        </Typography>

        <Grid container spacing={10}>
          {retailItemList.map((item) => (
            <Grid item key={item.id}>
              <ButtonBase
                style={{
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  border: isCategorySelected(item.id)
                    ? '2px solid green'
                    : 'none',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '160px',
                  padding: '4px',
                  width: '100px',
                }}
                onClick={() => handleCategoryClick(item.id)}
              >
                <Avatar
                  alt={item.text}
                  src={item.imageSrc}
                  sx={{ height: 90, width: 90 }}
                />
                <Typography
                  align="center"
                  sx={{ marginTop: 2 }}
                  variant="body2"
                >
                  {item.text}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ TextAlign: 'left', marginBottom: 1, marginTop: 5 }}
        >
          Describe what you have in mind
        </Typography>

        <TextField
          fullWidth
          label="Your description"
          margin="normal"
          multiline
          onBlur={HandleTextFieldChangeOrBlur(setDescription)}
          onChange={HandleTextFieldChangeOrBlur(setDescription)}
          rows={6}
          sx={{ width: '50%' }}
          value={description}
          variant="outlined"
        />

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ marginBottom: 1, marginTop: 4 }}
        >
          Not sure how to express the idea in your head? Visualize it into an
          image.
        </Typography>
        <Button
          onClick={() => {
            alert('Not yet implemented');
          }}
          color="primary"
          sx={{ height: '40px', ml: 30, mt: 2, width: '180px' }}
          variant="contained"
        >
          Generate AI Image
        </Button>

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ marginBottom: 3, marginTop: 6 }}
        >
          Enter a price range that you are comfortable with
        </Typography>
        <Grid alignItems="center" container spacing={10}>
          <Grid item>
            <Typography variant="body2">Min</Typography>
            <TextField
              inputProps={{ step: 0.01 }}
              margin="normal"
              onBlur={HandleTextFieldChangeOrBlur<number>(setMinPrice)}
              onChange={HandleTextFieldChangeOrBlur<number>(setMinPrice)}
              sx={{ width: '150px' }}
              type="number"
              value={minPrice}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Typography variant="body2">Max</Typography>
            <TextField
              inputProps={{ step: 0.01 }}
              margin="normal"
              onBlur={HandleTextFieldChangeOrBlur<number>(setMaxPrice)}
              onChange={HandleTextFieldChangeOrBlur<number>(setMaxPrice)}
              sx={{ width: '150px' }}
              type="number"
              value={maxPrice}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography
          fontFamily="Poppins"
          fontSize="1.2rem"
          sx={{ marginBottom: 3, marginTop: 6 }}
        >
          Do you have any sketches that you want to share with us?
        </Typography>
        <Box
          sx={{
            border: '2px dashed #bdbdbd',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
            padding: '20px',
          }}
          onClick={handleUploadClick}
        >
          <Typography
            color="textSecondary"
            fontFamily="Poppins"
            variant="body1"
          >
            Click here to upload images
          </Typography>
          <input
            accept="image/*"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type="file"
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {uploadedImages.map((image, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <img
                  style={{
                    borderRadius: '8px',
                    height: '60px',
                    margin: '5px',
                    objectFit: 'cover',
                    width: '60px',
                  }}
                  alt={`Uploaded ${index}`}
                  src={URL.createObjectURL(image)}
                />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(index);
                  }}
                  style={{
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    display: 'flex',
                    height: '20px',
                    justifyContent: 'center',
                    padding: 0,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '20px',
                  }}
                >
                  <CloseIcon fontSize="small" style={{ color: 'red' }} />
                </div>
              </div>
            ))}
          </div>
        </Box>

        <Box
          sx={{
            border: '2px dashed #bdbdbd',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
            padding: '20px',
          }}
          onClick={handleUploadClick}
        >
          <Typography
            color="textSecondary"
            fontFamily="Poppins"
            variant="body1"
          >
            Click here to upload documents
          </Typography>
          <input
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type="file"
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {uploadedDocuments.map((document, index) => (
              <div key={index} style={{ position: 'relative' }}>
                {document.type.includes('pdf') ? (
                  <MdPictureAsPdf size={40} />
                ) : document.type.includes('word') ||
                  document.type.includes('document') ? (
                  <MdDescription size={40} />
                ) : (
                  <MdInsertDriveFile size={40} />
                )}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveDocument(index);
                  }}
                  style={{
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    display: 'flex',
                    height: '20px',
                    justifyContent: 'center',
                    padding: 0,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '20px',
                  }}
                >
                  <CloseIcon fontSize="small" style={{ color: 'red' }} />
                </div>
              </div>
            ))}
          </div>
        </Box>

        <Button
          color="primary"
          onClick={handleSubmit}
          sx={{ marginBottom: '30px', marginTop: '30px', ml: 60 }}
          variant="contained"
        >
          Send Request
        </Button>
      </Container>
      <Footer />
    </CustomerAuthenticated>
  );
};

export default AddCustomerRequest;
