import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FormikProps } from 'formik';
import type { FunctionComponent } from 'react';

import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { setProjectsMutated } from '../../redux/Projects/ProjectsReducer';
import {
  addProject,
  editProject,
} from '../../redux/Projects/SingleProjectReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';
import GetFormikProps from '../../utils/GetFormikProps';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';
import Footer from '../Footer';
import TopBar from '../TopBar';

interface ProjectFormProps {
  OriginalProject?: Project;
  userId: number;
}

const validationSchema = Yup.object().shape({
  cost: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  // }),
  documents: Yup.mixed()
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
  name: Yup.string().required('Required'),
  professionalId: Yup.number().required('Required'),
});

const ProjectForm: FunctionComponent<ProjectFormProps> = ({
  OriginalProject,
  userId,
}) => {
  const FormRef = useRef<FormikProps<ProjectAddOrUpdateRequest>>(null);
  const MainImageUploadRef = useRef<HTMLInputElement>(null);
  const ExtraImageUploadRef = useRef<HTMLInputElement>(null);
  const DocumentUploadRef = useRef<HTMLInputElement>(null);
  const dispatch: ThunkDispatch<Project, void, AnyAction> = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(selectUser);
  const HandleSubmit = (values: ProjectAddOrUpdateRequest) => {
    console.log(values);
    if (FormRef.current) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      console.log(values);
      if (OriginalProject) {
        // Edit Project
        dispatch(
          editProject({
            project: OriginalProject,
            updatedProject: values,
          }),
        ).then((resultAction) => {
          if (editProject.fulfilled.match(resultAction)) {
            // ! Handle Edit Success Here
            console.log('Project Edited');
            alert('Project Edited');
          } else if (editProject.rejected.match(resultAction)) {
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
        // Create Project
        dispatch(addProject(values)).then((resultAction) => {
          if (addProject.fulfilled.match(resultAction)) {
            navigate(`/projects/${resultAction.payload.id}`, { replace: true });
          } else if (addProject.rejected.match(resultAction)) {
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
      dispatch(setProjectsMutated(true));
    }
  };
  const initialValues = OriginalProject
    ? {
        cost: OriginalProject.cost,
        description: OriginalProject.description,
        documents: new DataTransfer().files,
        extraImages: new DataTransfer().files,
        location: OriginalProject.location,
        mainImage: new DataTransfer().files,
        name: OriginalProject.name,
        professionalId: userId,
        projectFromEstructura: OriginalProject.projectFromEstructura,
      }
    : {
        cost: 0.01,
        description: '',
        documents: new DataTransfer().files,
        extraImages: new DataTransfer().files,
        location: '',
        mainImage: new DataTransfer().files,
        name: '',
        professionalId: userId,
        projectFromEstructura: false,
      };
  console.log(initialValues);

  const [mainImage, setMainImage] = useState<string>('');
  const [mainImageReset, setMainImageReset] = useState<boolean>(false);
  const [mainImageName, setMainImageName] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [imagesReset, setImagesReset] = useState<boolean>(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [doc, setDoc] = useState<string[]>([]);
  const [docReset, setDocReset] = useState<boolean>(false);
  const [docNames, setDocNames] = useState<string[]>([]);
  const docPlaceHoldersCount =
    doc.length === 0 ? 3 : doc.length >= 3 ? 0 : 3 - doc.length;
  const docPlaceholders = Array.from(
    { length: docPlaceHoldersCount },
    (_, index) => index + 1,
  );

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
  const removeDoc = (index: number) => {
    const updatedDocs = [...doc];
    updatedDocs.splice(index, 1);
    setDoc(updatedDocs);

    const updatedFileNames = [...docNames];
    updatedFileNames.splice(index, 1);
    setDocNames(updatedFileNames);
  };

  useEffect(() => {
    // Set Image if Editing
    if (OriginalProject && !mainImageReset) {
      setMainImage(
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.mainImageName}`,
      );
      setMainImageReset(true);
    }
    if (OriginalProject && !imagesReset) {
      const extraImages = [
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.extraImage1Name}`,
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.extraImage2Name}`,
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.extraImage3Name}`,
      ];
      setImages(extraImages);
      setImagesReset(true);
    }
    if (OriginalProject && !docReset) {
      const documents = [
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.document1Name}`,
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.document2Name}`,
        `http://localhost:8080/files/project-files/${OriginalProject.createdBy}/${OriginalProject.id}/${OriginalProject.document3Name}`,
      ];
      setDoc(documents);
      setDocReset(true);
    }
  }, [OriginalProject, mainImageReset, mainImage, imagesReset, docReset]);
  return (
    <>
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === ('PROFESSIONAL' as ServiceProviders) ? (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          innerRef={FormRef}
          onSubmit={HandleSubmit}
          validationSchema={validationSchema}
        >
          {(FormikProps: FormikProps<ProjectAddOrUpdateRequest>) => {
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
                        marginTop: '2rem',
                        paddingBottom: '2rem',
                        paddingTop: '2rem',
                      }}
                      item
                      md={6}
                      xs={12}
                    >
                      <Typography
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          lineHeight: '1',
                          marginBottom: '5px',
                          textAlign: 'left',
                        }}
                        variant="h4"
                      >
                        Add Project
                      </Typography>
                      <Divider />
                      <Typography
                        style={{
                          marginBottom: '2px',
                          marginTop: '5px',
                          textAlign: 'left',
                        }}
                      >
                        Add images related to your project
                      </Typography>
                      {FormikProps.errors.mainImage?.toString()}
                      {mainImage !== '' ? (
                        <Box
                          style={{
                            backgroundColor: '#F9F6EE',
                            borderRadius: '5px',
                          }}
                          height="300px"
                          marginTop="20px"
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
                          marginTop="20px"
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
                      <Divider sx={{ marginTop: '10px' }} />
                      <Grid
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: '2px',
                            marginTop: '10px',
                            textAlign: 'left',
                          }}
                        >
                          Add Extra Images related to your project
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
                      <Grid container spacing={2}>
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
                      <Divider sx={{ marginTop: '10px' }} />
                      <Grid
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: '2px',
                            marginTop: '10px',
                            textAlign: 'left',
                          }}
                        >
                          Add documents related to your project
                        </Typography>
                        <Grid>
                          <Button
                            onClick={() => {
                              if (DocumentUploadRef.current) {
                                DocumentUploadRef.current.click();
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
                              ref={DocumentUploadRef}
                              {...spread(
                                'documents',
                                false,
                                false,
                                false,
                                false,
                              )}
                              onChange={(event) => {
                                if (event.target.files !== null) {
                                  FormikProps.setFieldValue(
                                    'documents',
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
                                    setDocNames(fileNames);
                                    const imageUrls = fileArray.map((file) =>
                                      URL.createObjectURL(file),
                                    );
                                    setDoc(imageUrls);
                                  } else {
                                    setDoc([]);
                                  }
                                } else {
                                  FormikProps.setFieldValue(
                                    'documents',
                                    new DataTransfer().files,
                                    true,
                                  );
                                  setDoc([]);
                                }
                              }}
                              accept=".pdf,.doc,.docx,.pptx,.xls,.xlsx"
                              className="input-field-doc"
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
                      <Grid container spacing={2}>
                        {docNames.length > 0 &&
                          docNames.map((fileName, index) => (
                            <Grid item key={index} xs={4}>
                              <Box
                                sx={{
                                  borderColor: 'grey',
                                  borderStyle: 'dashed',
                                }}
                                display={'flex'}
                                height="50px"
                                marginTop="30px"
                                position="relative"
                                width="100%"
                              >
                                <InsertDriveFileIcon
                                  style={{
                                    marginLeft: '10px',
                                    marginTop: '10px',
                                  }}
                                />

                                <Typography
                                  style={{
                                    backgroundColor: '#F9F6EE',
                                    justifyContent: 'center',
                                    marginLeft: '20px',
                                    marginTop: '10px',
                                  }}
                                >
                                  {fileName}
                                </Typography>
                                <IconButton
                                  style={{
                                    backgroundColor: 'white',
                                    color: 'red',
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                  }}
                                  onClick={() => removeDoc(index)}
                                  size="small"
                                >
                                  <Tooltip title="Remove File">
                                    <DeleteIcon />
                                  </Tooltip>
                                </IconButton>
                              </Box>
                            </Grid>
                          ))}
                        {docPlaceholders.map((index) => (
                          <Grid item key={index} xs={4}>
                            <Box
                              style={{
                                backgroundColor: '#F9F6EE',
                                display: 'flex',
                              }}
                              sx={{
                                borderColor: 'grey',
                                borderStyle: 'dashed',
                              }}
                              height="50px"
                              marginTop="30px"
                              position="relative"
                              width="100%"
                            >
                              <AttachFileIcon
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginLeft: '10px',
                                  marginTop: '10px',
                                }}
                              />

                              <Typography
                                style={{
                                  backgroundColor: '#F9F6EE',
                                  justifyContent: 'center',
                                  marginLeft: '20px',
                                  marginTop: '10px',
                                }}
                              >
                                Documents
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                      {FormikProps.errors.documents?.toString()}
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                        paddingBottom: '2rem',
                        paddingTop: '2rem',
                      }}
                      item
                      md={6}
                      xs={12}
                    >
                      <Grid
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.5rem',
                          marginTop: '30px',
                          maxWidth: '800px',
                          width: '80%',
                        }}
                      >
                        <Divider />
                        <TextField
                          {...spread('name')}
                          color="secondary"
                          fullWidth
                          label="Project Title"
                          sx={{ borderRadius: 2, margin: 1, width: '1' }}
                          type="title"
                          variant="filled"
                        />
                        <Grid style={{ justifyContent: 'center' }}>
                          <TextField
                            {...spread('description')}
                            id="filled-multiline-static"
                            label="Project Description"
                            multiline
                            rows={14}
                            sx={{ borderRadius: 2, margin: 1, width: '1' }}
                            variant="filled"
                          />
                        </Grid>
                        <TextField
                          {...spread('cost')}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                LKR
                              </InputAdornment>
                            ),
                          }}
                          color="secondary"
                          fullWidth
                          inputProps={{ step: '0.01' }}
                          label="Project Budget"
                          sx={{ borderRadius: 2, margin: 1, width: '1' }}
                          type="number"
                          variant="filled"
                        />
                        <TextField
                          {...spread('location')}
                          color="secondary"
                          fullWidth
                          label="Location"
                          sx={{ borderRadius: 2, margin: 1, width: '1' }}
                          type="Location"
                          variant="filled"
                        />
                        <Grid sx={{ borderRadius: 2, margin: 1, width: '1' }}>
                          <Typography textAlign="center">
                            Did you connect with this client through our
                            platform Estructura?
                          </Typography>

                          <RadioGroup
                            row
                            sx={{ justifyContent: 'center' }}
                            {...spread('projectFromEstructura')}
                          >
                            <FormControlLabel
                              control={<Radio />}
                              label="Yes"
                              value={true}
                            />
                            <FormControlLabel
                              control={<Radio />}
                              label="No"
                              value={false}
                            />
                          </RadioGroup>
                          <TextField
                            hidden
                            sx={{ display: 'none' }}
                            {...spread('professionalId')}
                            fullWidth
                            label="User Id"
                            type="number"
                          />
                        </Grid>

                        <Divider />
                        <Grid
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 1,
                          }}
                        >
                          <Button
                            color="primary"
                            fullWidth
                            sx={{ borderRadius: 2, width: 1 / 3 }}
                            type="submit"
                            variant="contained"
                          >
                            {OriginalProject ? 'Edit Project' : 'Add Project'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <h1>Please Login to Add a Project</h1>
      )}

      <Footer />
    </>
  );
};

export default ProjectForm;
