import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import {
  addRetailItem,
  editRetailItem,
} from '../../redux/RetailItems/SingleRetailItemReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';
import GetFormikProps from '../../utils/GetFormikProps';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';
import Footer from '../Footer';
import TopAppBar from '../TopAppBar';

interface RetailItemFormProps {
  OriginalRetailItem?: RetailItem;
  userId: number;
}

const retailItemTypes: RetailItemType[] = [
  'BATHWARE',
  'FURNITURE',
  'GARDENWARE',
  'HARDWARE',
  'LIGHTING',
];

const validationSchema = Yup.object().shape({
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
  quantity: Yup.string().required('You need to provide the quantity '),
  retailItemType: Yup.string()
    .oneOf(retailItemTypes, 'RetailItemType has to be valid')
    .required('RetailItemType is required'),
});
const RetailItemForm: FunctionComponent<RetailItemFormProps> = ({
  OriginalRetailItem,
  userId,
}) => {
  const FormRef = useRef<FormikProps<RetailItemAddOrUpdateRequest>>(null);
  const MainImageUploadRef = useRef<HTMLInputElement>(null);
  const ExtraImageUploadRef = useRef<HTMLInputElement>(null);
  const userInfo = useSelector(selectUser);
  const dispatch: ThunkDispatch<RentingItem, void, AnyAction> = useDispatch();
  const navigate = useNavigate();
  const HandleSubmit = (values: RetailItemAddOrUpdateRequest) => {
    console.log(values);
    if (FormRef.current) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      console.log(values);
      if (OriginalRetailItem) {
        // Edit Renting Item
        dispatch(
          editRetailItem({
            retailItem: OriginalRetailItem,
            updatedRetailItem: values,
          }),
        ).then((resultAction) => {
          if (editRetailItem.fulfilled.match(resultAction)) {
            // ! Handle Edit Success Here
            console.log('Project Edited');
          } else if (editRetailItem.rejected.match(resultAction)) {
            try {
              const response =
                resultAction.payload as GenericAddOrUpdateResponse;
              if (response) {
                setErrors(violationsToErrorsTS(response.validation_violations));
              }
            } catch (error) {
              console.log(error);
            }
          }
        });
      } else {
        // Create Renting Item
        dispatch(addRetailItem(values)).then((resultAction) => {
          if (addRetailItem.fulfilled.match(resultAction)) {
            navigate(`/shop/item/${resultAction.payload.id}`, {
              replace: true,
            });
          } else if (addRetailItem.rejected.match(resultAction)) {
            try {
              const response =
                resultAction.payload as GenericAddOrUpdateResponse;
              if (response) {
                setErrors(violationsToErrorsTS(response.validation_violations));
              }
            } catch (error) {
              console.log(error);
            }
          }
        });
      }
      setSubmitting(false);
    }
  };
  const initialValues = OriginalRetailItem
    ? {
        description: OriginalRetailItem.description,
        extraImages: new DataTransfer().files,
        mainImage: new DataTransfer().files,
        name: OriginalRetailItem.name,
        price: OriginalRetailItem.price,
        quantity: OriginalRetailItem.quantity,
        retailItemType: OriginalRetailItem.retailItemType,
        retailStoreId: userId,
      }
    : {
        description: '',
        extraImages: new DataTransfer().files,
        mainImage: new DataTransfer().files,
        name: '',
        price: 0.0,
        quantity: 0,
        retailItemType: '' as RetailItemType,
        retailStoreId: userId,
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
    if (OriginalRetailItem && !mainImageReset) {
      setMainImage(
        `http://localhost:8080/files/retail-item-files/${OriginalRetailItem.createdBy}/${OriginalRetailItem.id}/${OriginalRetailItem.mainImageName}`,
      );
      setMainImageReset(true);
    }
    if (OriginalRetailItem && !imagesReset) {
      const extraImages = [
        `http://localhost:8080/files/retail-item-files/${OriginalRetailItem.createdBy}/${OriginalRetailItem.id}/${OriginalRetailItem.extraImage1Name}`,
        `http://localhost:8080/files/retail-item-files/${OriginalRetailItem.createdBy}/${OriginalRetailItem.id}/${OriginalRetailItem.extraImage2Name}`,
        `http://localhost:8080/files/retail-item-files/${OriginalRetailItem.createdBy}/${OriginalRetailItem.id}/${OriginalRetailItem.extraImage3Name}`,
      ];
      setImages(extraImages);
      setImagesReset(true);
    }
  }, [OriginalRetailItem, mainImageReset, mainImage, imagesReset]);
  return (
    <>
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === ('RETAILER' as ServiceProviders) ? (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          innerRef={FormRef}
          onSubmit={HandleSubmit}
          validationSchema={validationSchema}
        >
          {(FormikProps: FormikProps<RetailItemAddOrUpdateRequest>) => {
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
                          Add Retail Item
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
                          label="Retail Price"
                          sx={{ margin: 1, width: '1' }}
                          type="price"
                          variant="filled"
                          {...spread('price')}
                        />
                        <TextField
                          color="secondary"
                          fullWidth
                          label="Quantity"
                          sx={{ borderRadius: 2, margin: 1, width: '1' }}
                          type="number"
                          variant="filled"
                          {...spread('quantity')}
                        />
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
                            {...spread('retailItemType')}
                          >
                            {retailItemTypes.map((retailItemType) => (
                              <MenuItem
                                key={retailItemType}
                                value={retailItemType}
                              >
                                {retailItemType}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <ErrorMessage name="quantity">
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
                        ADD ITEM
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <h1>Please Login to Add an Item</h1>
      )}
      <Footer />
    </>
  );
};

export default RetailItemForm;
