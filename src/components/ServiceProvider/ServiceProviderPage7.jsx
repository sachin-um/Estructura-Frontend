import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
const validationSchema = yup.object({
  ProfileImage: yup
    .mixed()
    .required('Required')
    .test('only 1', 'More than 1', (value) => {
      const fileArr = value;
      if (fileArr.length > 1) {
        return false;
      }
      return true;
    })
    .test('fileSize', 'File too large', (value) => {
      const fileArr = value;
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
  updateFormData,
  previousPage,
  pageImage,
  handleSubmit,
}) {
  const [image, setProfileImage] = useState('/User/user.png');
  const [file, setFile] = useState(new DataTransfer().files);
  const formRef = useRef(null);
  const handleUpload = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };
  const initialValues = {
    ProfileImage: new DataTransfer().files,
  };

  return (
    <>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: '#f7f8f1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          style={{ minHeight: '80vh' }}
          justifyContent="center"
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={7}
            style={{
              paddingTop: '2rem',
              paddingBottom: '2rem',
              marginTop: '2rem',
            }}
          >
            <Grid
              container
              style={{
                backgroundImage: `url(${pageImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: '4rem',
                  paddingRight: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    lineHeight: '1',
                    paddingBottom: '1rem',
                    marginTop: 'auto',
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    lineHeight: '1',
                  }}
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid
              container
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '1rem 2rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
                minHeight: '85vh',
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src="/Logo.png" alt="Logo" style={{ width: '40%' }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: '1rem', width: '60%' }}>
                <Formik
                  innerRef={formRef}
                  onSubmit={(values) => {
                    // TODO: HANDLE PAGE CHANGE HERE!!!
                    updateFormData(values);
                    console.log('Hi');
                    console.log(values);
                    handleSubmit(formData, ...values);
                  }}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    setFieldValue,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => {
                    const spread = (field, helper = true) => {
                      return {
                        name: field,
                        onBlur: handleBlur,
                        error: touched[field] && !!errors[field],
                        disabled: isSubmitting,
                        ...(helper && {
                          helperText: touched[field] && errors[field],
                        }),
                      };
                    };
                    return (
                      <Form onSubmit={handleSubmit}>
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
                                textAlign="center"
                                marginBottom="5px"
                                fontSize="1.2rem"
                              >
                                Upload your profile picture
                              </Typography>
                              <Box
                                style={{ justifyContent: 'center' }}
                                sx={{
                                  width: '250px',
                                  height: '250px',
                                  margin: 'auto',
                                  border: 1,
                                  borderWidth: '3px',
                                  borderRadius: '50%',
                                  overflow: 'hidden',
                                }}
                              >
                                <img
                                  src={image}
                                  alt="user"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                  }}
                                />
                              </Box>
                              <Grid
                                style={{
                                  justifyContent: 'center',
                                  marginTop: '10px',
                                }}
                                sx={{ width: 1, margin: 1 }}
                              >
                                <Button
                                  sx={{ width: 1 }}
                                  variant="contained"
                                  color="secondary"
                                  component="label"
                                >
                                  Upload Photo
                                  <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    {...spread('ProfileImage', false)}
                                    onChange={(event) => {
                                      if (event.target.files !== null) {
                                        handleUpload(event);
                                        setFieldValue(
                                          'ProfileImage',
                                          event.target.files,
                                          false,
                                        );
                                      } else {
                                        setFieldValue(
                                          'ProfileImage',
                                          new DataTransfer().files,
                                          false,
                                        );
                                      }
                                    }}
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
                              Estructura's{' '}
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
                              sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                              type="button"
                              color="primary"
                              variant="contained"
                              size="large"
                              onClick={previousPage}
                            >
                              Previous
                            </Button>
                            <Button
                              sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                              type="submit"
                              color="primary"
                              variant="contained"
                              size="large"
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
