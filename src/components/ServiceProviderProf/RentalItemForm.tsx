import type { FormikProps } from 'formik';
import type { FunctionComponent } from 'react';

import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { ErrorMessage, Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import UnauthorizedAccess from '../../pages/unauthorized_access';
import { useRentingItems } from '../../redux/Renting/useRentingItems';
import { useUsers } from '../../redux/UserInfo/useUsers';
import GetFormikProps from '../../utils/GetFormikProps';
import Footer from '../Footer';

interface RentingItemFormProps {
  OriginalRentingItem?: RentingItem;
  userId: number;
}
const categories: RentingCategory[] = [
  'HEAVY_MACHINERY',
  'PORTABLE_MACHINES',
  'TOOLS_AND_EQUIPMENT',
];
const validationSchema = Yup.object().shape({
  category: Yup.string()
    .oneOf(categories, 'Category has to be valid')
    .required('Category is required'),
  description: Yup.string().required('You need to provide a Description'),
  extraImages: Yup.mixed()
    .required('Required')
    .test('only 3', 'More than 3', (value) => {
      const fileArr = value as FileList;
      if (fileArr.length > 3) {
        return false;
      }
      return true;
    })
    .test('fileSize', 'Each File size should be less than 5MB', (value) => {
      const fileArr = value as FileList;
      let totalSize = 0;
      for (let index = 0; index < fileArr.length; index++) {
        const element = fileArr[index];
        if (element.size > 5000000) {
          console.log('too large');
          return false;
        }
        totalSize += element.size;
      }
      if (totalSize > 20000000) {
        console.log('too large');
        return false;
      }
      return true;
    }),
  // one Image less than 5MB in size
  mainImage: Yup.mixed()
    .required('Required')
    .test('only 1', 'More than 1', (value) => {
      const fileArr = value as FileList;
      if (fileArr.length > 1) {
        return false;
      }
      return true;
    })
    .test('fileSize', 'File too large', (value) => {
      const fileArr = value as FileList;
      if (fileArr.length === 1) {
        const img = fileArr[0];
        if (img.size >= 5000000) {
          console.log('BIG');
          return false;
        }
      }
      return true;
    }),
  name: Yup.string().required('Name is Required'),
  price: Yup.string().required('Price is Required'),
  scale: Yup.string().required('You need to provide a renting '),
});

const RentalItemForm: FunctionComponent<RentingItemFormProps> = ({
  OriginalRentingItem,
  userId,
}) => {
  console.log(OriginalRentingItem);
  const FormRef = useRef<FormikProps<RentingItemAddOrUpdateRequest>>(null);
  const MainImageUploadRef = useRef<HTMLInputElement>(null);
  const ExtraImageUploadRef = useRef<HTMLInputElement>(null);

  const { currentUser } = useUsers();

  const { addRentingItem, editRentingItemById } = useRentingItems();

  const navigate = useNavigate();
  const HandleSubmit = (values: RentingItemAddOrUpdateRequest) => {
    console.log(values);
    if (FormRef.current) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      if (OriginalRentingItem) {
        // Edit Renting Item
        editRentingItemById(OriginalRentingItem.id, values).then((edited) => {
          if (edited.success) {
            alert('Item Updated Successfully');
          } else if (edited.errors) {
            setErrors(edited.errors);
          }
        });
      } else {
        // Create Renting Item
        addRentingItem(values).then((added) => {
          if (added.id !== -1) {
            navigate(`/rentingItems/${added.id}`, {
              replace: true,
            });
          } else if (added.errors) {
            setErrors(added.errors);
          }
        });
      }
      setSubmitting(false);
    }
  };

  const initialValues = OriginalRentingItem
    ? {
        category: OriginalRentingItem.category,
        description: OriginalRentingItem.description,
        extraImages: new DataTransfer().files,
        mainImage: new DataTransfer().files,
        name: OriginalRentingItem.name,
        price: OriginalRentingItem.price,
        renterId: userId,
        scale: OriginalRentingItem.scale,
      }
    : {
        category: 'HEAVY_MACHINERY' as RentingCategory,
        description: '',
        extraImages: new DataTransfer().files,
        mainImage: new DataTransfer().files,
        name: '',
        price: 0.0,
        renterId: userId,
        scale: 'Per Hour',
      };
  console.log(initialValues);
  const [mainImage, setMainImage] = useState<string>('');
  const [mainImageReset, setMainImageReset] = useState<boolean>(false);
  const [mainImageName, setMainImageName] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [imagesReset, setImagesReset] = useState<boolean>(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const placeholdersCount =
    images.length === 0 ? 3 : images.length >= 3 ? 0 : 3 - images.length;
  const placeholders = Array.from(
    { length: placeholdersCount },
    (_, index) => index + 1,
  );

  const removeMainImage = () => {
    setMainImage('');
    setMainImageName('');
  };
  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedFileNames = [...fileNames];
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);
  };
  useEffect(() => {
    // Set Image if Editing
    if (OriginalRentingItem && !mainImageReset) {
      setMainImage(
        `http://localhost:8080/files/project-files/${OriginalRentingItem.createdBy}/${OriginalRentingItem.id}/${OriginalRentingItem.mainImageName}`,
      );
      setMainImageReset(true);
    }
    if (OriginalRentingItem && !imagesReset) {
      const extraImages = [
        `http://localhost:8080/files/project-files/${OriginalRentingItem.createdBy}/${OriginalRentingItem.id}/${OriginalRentingItem.extraImage1Name}`,
        `http://localhost:8080/files/project-files/${OriginalRentingItem.createdBy}/${OriginalRentingItem.id}/${OriginalRentingItem.extraImage2Name}`,
        `http://localhost:8080/files/project-files/${OriginalRentingItem.createdBy}/${OriginalRentingItem.id}/${OriginalRentingItem.extraImage3Name}`,
      ];
      setImages(extraImages);
      setImagesReset(true);
    }
  }, [OriginalRentingItem, mainImageReset, mainImage, imagesReset]);

  return (
    <>
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType ===
        ('RENTINGCOMPANY' as ServiceProviders) ? (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          innerRef={FormRef}
          onSubmit={HandleSubmit}
          validationSchema={validationSchema}
        >
          {(FormikProps: FormikProps<RentingItemAddOrUpdateRequest>) => {
            const spread = GetFormikProps(FormikProps);
            return (
              <Form>
                <Container
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#f7f8f1',
                    display: 'flex',
                    margin: '2',
                    minHeight: '100vh',
                  }}
                  maxWidth={false}
                >
                  <Grid container justifyContent="center" spacing={4}>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem',
                        paddingBottom: '1rem',
                        paddingTop: '1rem',
                      }}
                      item
                      md={6}
                      xs={12}
                    >
                      <Box
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.5rem',
                          marginTop: '30px',
                          maxWidth: '800px',
                          width: '80%',
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            lineHeight: '1',

                            textAlign: 'left',
                          }}
                          variant="h4"
                        >
                          {OriginalRentingItem ? 'Edit' : 'Add'} Rental Item
                        </Typography>
                        <Divider />

                        <TextField
                          color="secondary"
                          fullWidth
                          label="Item Name"
                          sx={{ borderRadius: 2, margin: 1, width: '1' }}
                          type="name"
                          variant="filled"
                          {...spread('name')}
                        />
                        <Grid style={{ justifyContent: 'center' }}>
                          <TextField
                            id="filled-multiline-static"
                            label="Item Description"
                            multiline
                            rows={10}
                            sx={{ borderRadius: 2, margin: 1, width: '1' }}
                            variant="filled"
                            {...spread('description')}
                          />
                        </Grid>
                        <TextField
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                LKR
                              </InputAdornment>
                            ),
                            sx: { borderRadius: 2 },
                          }}
                          color="secondary"
                          fullWidth
                          label="Rental Price"
                          sx={{ margin: 1, width: '1' }}
                          type="price"
                          variant="filled"
                          {...spread('price')}
                        />
                        <FormControl fullWidth variant="filled">
                          <InputLabel id="demo-simple-select-label">
                            Rental Duration
                          </InputLabel>
                          <Select
                            sx={{
                              justifyContent: 'center',
                              margin: 1,
                              width: '1',
                            }}
                            color="secondary"
                            fullWidth
                            id="demo-simple-select"
                            label="Rental Duration"
                            labelId="demo-simple-select-label"
                            {...spread('scale', false)}
                          >
                            <MenuItem key={'Per Hour'} value={'Per Hour'}>
                              Per Hour
                            </MenuItem>
                            <MenuItem key={'Per Day'} value={'Per Day'}>
                              Per Day
                            </MenuItem>
                            <MenuItem key={'Per Month'} value={'Per Month'}>
                              Per Month
                            </MenuItem>
                            <MenuItem
                              key={'Per Kilometer'}
                              value={'Per Kilometer'}
                            >
                              Per Kilometer
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <ErrorMessage name="scale">
                          {(msg) => (
                            <span
                              style={{
                                color: '#d32f2f',
                                fontSize: '0.75rem',
                                marginLeft: '14px',
                                marginTop: '-25px',
                              }}
                            >
                              {msg}
                            </span>
                          )}
                        </ErrorMessage>
                        <FormControl fullWidth variant="filled">
                          <InputLabel id="demo-simple-select-label">
                            Item Category
                          </InputLabel>
                          <Select
                            sx={{
                              justifyContent: 'center',
                              margin: 1,
                              width: '1',
                            }}
                            color="secondary"
                            fullWidth
                            id="demo-simple-select"
                            label="Rental Duration"
                            labelId="demo-simple-select-label"
                            {...spread('category')}
                          >
                            {categories.map((category) => (
                              <MenuItem key={category} value={category}>
                                {category}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <ErrorMessage name="category">
                          {(msg) => (
                            <span
                              style={{
                                color: '#d32f2f',
                                fontSize: '0.75rem',
                                marginLeft: '14px',
                                marginTop: '-25px',
                              }}
                            >
                              {msg}
                            </span>
                          )}
                        </ErrorMessage>
                        <Divider />
                      </Box>
                    </Grid>
                    <Grid
                      style={{
                        justifyContent: 'center',
                        marginTop: '5rem',
                      }}
                      item
                      md={6}
                      xs={12}
                    >
                      <Divider />
                      <Typography
                        style={{
                          marginBottom: '2px',
                          marginTop: '5px',
                          textAlign: 'left',
                        }}
                      >
                        Add images of the item
                      </Typography>
                      {mainImage ? (
                        <Box
                          style={{
                            backgroundColor: '#F9F6EE',
                            borderRadius: '5px',
                          }}
                          height="300px"
                          marginBottom="50px"
                          marginTop="30px"
                          position="relative"
                          sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
                          width="100%"
                        >
                          <img
                            alt={mainImageName}
                            src={mainImage}
                            style={{ height: '300px', width: '100%' }}
                          />
                          <IconButton
                            style={{
                              backgroundColor: 'white',
                              color: 'red',
                              position: 'absolute',
                              right: 5,
                              top: 5,
                            }}
                            onClick={() => removeMainImage()}
                            size="small"
                          >
                            <Tooltip title="Remove Image">
                              <DeleteIcon />
                            </Tooltip>
                          </IconButton>
                        </Box>
                      ) : (
                        <Box
                          onClick={() => {
                            if (MainImageUploadRef.current) {
                              MainImageUploadRef.current.click();
                            }
                          }}
                          style={{
                            backgroundColor: '#F9F6EE',
                            borderRadius: '5px',
                          }}
                          height="300px"
                          marginBottom="50px"
                          marginTop="30px"
                          position="relative"
                          sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
                          width="100%"
                        >
                          <Grid
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '100px',
                            }}
                          >
                            <AddPhotoAlternateIcon />
                            <input
                              hidden
                              ref={MainImageUploadRef}
                              {...spread(
                                'mainImage',
                                false,
                                false,
                                false,
                                false,
                              )}
                              onChange={(event) => {
                                if (event.target.files !== null) {
                                  FormikProps.setFieldValue(
                                    'mainImage',
                                    event.target.files,
                                    true,
                                  );
                                  if (event.target.files[0]) {
                                    setMainImage(
                                      URL.createObjectURL(
                                        event.target.files[0],
                                      ),
                                    );
                                  } else {
                                    setMainImage('');
                                  }
                                } else {
                                  FormikProps.setFieldValue(
                                    'mainImage',
                                    new DataTransfer().files,
                                    true,
                                  );
                                  setMainImage('');
                                }
                              }}
                              accept="image/*"
                              className="input-main-img"
                              type="file"
                            />
                          </Grid>
                          <Typography
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '10px',
                            }}
                          >
                            Main Image
                          </Typography>
                        </Box>
                      )}
                      {FormikProps.errors.mainImage?.toString()}
                      <Divider sx={{ marginTop: '10px' }} />
                      <Grid
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                          width: '100%',
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: '2px',
                            marginTop: '10px',
                            textAlign: 'left',
                          }}
                        >
                          Add more images
                        </Typography>
                        <Grid>
                          <Button
                            onClick={() => {
                              if (ExtraImageUploadRef.current) {
                                ExtraImageUploadRef.current.click();
                              }
                            }}
                            style={{
                              backgroundColor: 'transparent',
                              border: '2px solid #435834',
                              color: '#435834',
                            }}
                            fullWidth
                            variant="contained"
                          >
                            <input
                              hidden
                              ref={ExtraImageUploadRef}
                              {...spread(
                                'extraImages',
                                false,
                                false,
                                false,
                                false,
                              )}
                              onChange={(event) => {
                                if (event.target.files !== null) {
                                  FormikProps.setFieldValue(
                                    'extraImages',
                                    event.target.files,
                                    true,
                                  );
                                  if (event.target.files.length > 0) {
                                    const fileArray = Array.from(
                                      event.target.files,
                                    ).slice(0, 3);
                                    const fileNames = fileArray.map(
                                      (file) => file.name,
                                    );
                                    setFileNames(fileNames);
                                    const imageUrls = fileArray.map((file) =>
                                      URL.createObjectURL(file),
                                    );
                                    setImages(imageUrls);
                                  } else {
                                    setImages([]);
                                  }
                                } else {
                                  FormikProps.setFieldValue(
                                    'extraImages',
                                    new DataTransfer().files,
                                    true,
                                  );
                                  setImages([]);
                                }
                              }}
                              accept="image/*"
                              className="input-field"
                              multiple
                              type="file"
                            />
                            <AddIcon />
                            <Typography
                              style={{
                                textAlign: 'left',
                              }}
                            >
                              Select
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        spacing={1}
                        style={{ marginBottom: '60px' }}
                      >
                        {images.length > 0 &&
                          images.map((imageUrl, index) => (
                            <Grid item key={index} xs={4}>
                              <Box
                                sx={{
                                  borderColor: 'grey',
                                  borderStyle: 'dashed',
                                }}
                                height="150px"
                                marginTop="30px"
                                position="relative"
                                width="100%"
                              >
                                <img
                                  alt={fileNames[index]}
                                  src={imageUrl}
                                  style={{ height: '150px', width: '100%' }}
                                />
                                <IconButton
                                  style={{
                                    backgroundColor: 'white',
                                    color: 'red',
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                  }}
                                  onClick={() => removeImage(index)}
                                  size="small"
                                >
                                  <Tooltip title="Remove Image">
                                    <DeleteIcon />
                                  </Tooltip>
                                </IconButton>
                              </Box>
                            </Grid>
                          ))}
                        {placeholders.map((index) => (
                          <Grid item key={index} xs={4}>
                            <Box
                              sx={{
                                backgroundColor: '#F9F6EE',
                                borderStyle: 'dashed',
                              }}
                              height="150px"
                              marginTop="30px"
                              position="relative"
                              width="100%"
                            >
                              <Grid
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '50px',
                                }}
                              >
                                <ImageIcon />
                              </Grid>
                              <Grid
                                style={{
                                  backgroundColor: '#F9F6EE',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '10px',
                                }}
                              >
                                <p>Optional Images</p>
                              </Grid>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                      {FormikProps.errors.extraImages?.toString()}
                      <Divider sx={{ marginTop: '20px' }} />
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: 1,
                      }}
                    >
                      <Button
                        sx={{
                          borderRadius: 2,
                          height: '45px',
                          margin: 1,
                          width: '200px',
                        }}
                        color="primary"
                        fullWidth
                        type="submit"
                        variant="contained"
                      >
                        {OriginalRentingItem ? 'Update' : 'Add'} Item
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <UnauthorizedAccess />
      )}
      <Footer />
    </>
  );
};

export default RentalItemForm;
