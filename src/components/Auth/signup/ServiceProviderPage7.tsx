import type { FormikProps } from 'formik';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import type { SignUpPageProps } from '../../../pages/ServiceProviderSignUp';

import GetFormikProps from '../../../utils/GetFormikProps';
const validationSchema = yup.object({
  ProfileImage: yup
    .mixed()
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
});
function ServiceProviderPage7({
  formData,
  handleSubmit,
  pageImage,
  previousPage,
  updateFormData,
}: SignUpPageProps & {
  handleSubmit: (data: RegisterRequest) => void;
}) {
  const [image, setProfileImage] = useState('/User/user.png');
  const [file, setFile] = useState(new DataTransfer().files);
  const formRef = useRef(null);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files);
    }
  };
  const initialValues: Partial<RegisterRequest> = {
    profileImage: new DataTransfer().files,
  };

  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
        }}
        maxWidth={false}
      >
        <Grid
          container
          justifyContent="center"
          spacing={4}
          style={{ minHeight: '80vh' }}
        >
          <Grid
            style={{
              marginTop: '2rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={7}
            xs={12}
          >
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: `url(${pageImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '20px',
                display: 'flex',
                height: '100%',
              }}
              container
            >
              <Grid
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '4rem',
                  paddingRight: '1rem',
                }}
                item
                xs={12}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    marginTop: 'auto',
                    paddingBottom: '1rem',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid
              style={{
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2rem',
                minHeight: '85vh',
                padding: '1rem 2rem 3rem',
              }}
              container
            >
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
                item
                xs={12}
              >
                <img alt="Logo" src="/Logo.png" style={{ width: '40%' }} />
              </Grid>
              <Grid item style={{ marginTop: '1rem', width: '60%' }} xs={12}>
                <Formik
                  onSubmit={(values) => {
                    // TODO: HANDLE PAGE CHANGE HERE!!!
                    updateFormData(values);
                    const newData: Partial<RegisterRequest> = {
                      ...formData,
                      profileImage:
                        fileRef.current?.files ?? new DataTransfer().files,
                    };
                    console.log('new', newData);
                    handleSubmit(newData);
                  }}
                  initialValues={initialValues}
                  innerRef={formRef}
                  validationSchema={validationSchema}
                >
                  {(FormikProps: FormikProps<Partial<RegisterRequest>>) => {
                    const spread = GetFormikProps(FormikProps);
                    return (
                      <Form onSubmit={FormikProps.handleSubmit}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px',
                            justifyContent: 'center',
                          }}
                        >
                          {
                            <Grid style={{ justifyContent: 'center' }}>
                              <Typography
                                fontSize="1.2rem"
                                marginBottom="5px"
                                textAlign="center"
                              >
                                Upload your profile picture
                              </Typography>
                              <Box
                                sx={{
                                  border: 1,
                                  borderRadius: '50%',
                                  borderWidth: '3px',
                                  height: '250px',
                                  margin: 'auto',
                                  overflow: 'hidden',
                                  width: '250px',
                                }}
                                style={{ justifyContent: 'center' }}
                              >
                                <img
                                  style={{
                                    height: '100%',
                                    objectFit: 'cover',
                                    width: '100%',
                                  }}
                                  alt="user"
                                  src={image}
                                />
                              </Box>
                              <Grid
                                style={{
                                  justifyContent: 'center',
                                  marginTop: '10px',
                                }}
                                sx={{ margin: 1, width: 1 }}
                              >
                                <Button
                                  color="secondary"
                                  component="label"
                                  sx={{ width: 1 }}
                                  variant="contained"
                                >
                                  Upload Photo
                                  <input
                                    onChange={(event) => {
                                      if (event.target.files !== null) {
                                        handleUpload(event);
                                        FormikProps.setFieldValue(
                                          'ProfileImage',
                                          event.target.files,
                                          false,
                                        );
                                      } else {
                                        FormikProps.setFieldValue(
                                          'ProfileImage',
                                          new DataTransfer().files,
                                          false,
                                        );
                                      }
                                    }}
                                    accept="image/*"
                                    hidden
                                    ref={fileRef}
                                    type="file"
                                  />
                                </Button>
                              </Grid>
                            </Grid>
                          }
                          <Box
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              margin: 1,
                            }}
                          >
                            <Typography>
                              By clicking the signup button you agree to
                              Estructura&apos;s
                              <Link
                                style={{
                                  color: '#9D6432',
                                  fontFamily:
                                    '"Roboto","Helvetica","Arial",sans-serif',
                                }}
                                to="#"
                              >
                                Terms and Conditions
                              </Link>
                            </Typography>
                          </Box>
                          <Grid
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              width: '100%',
                            }}
                          >
                            <Button
                              color="primary"
                              onClick={previousPage}
                              size="large"
                              sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                              type="button"
                              variant="contained"
                            >
                              Previous
                            </Button>
                            <Button
                              color="primary"
                              size="large"
                              sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                              type="submit"
                              variant="contained"
                            >
                              Sign Up
                            </Button>
                          </Grid>
                        </Box>
                      </Form>
                    );
                  }}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ServiceProviderPage7;
