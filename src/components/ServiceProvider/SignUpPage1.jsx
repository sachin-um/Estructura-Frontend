// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
});

function SignUpPage1({ formData, nextPage, updateFormData }) {
  const formRef = useRef(null);
  // TODO: Change Layout
  return (
    <>
      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
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
            md={7}
            xs={12}
          >
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: 'url("/serviceprovider.jpeg")',
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
              <Grid item style={{ marginTop: '1rem' }} xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    margin: '10px',
                  }}
                >
                  {
                    <Grid style={{ justifyContent: 'center' }}>
                      <Formik
                        initialValues={{
                          confirmPassword: formData.confirmPassword ?? '',
                          email: formData.email ?? '',
                          password: formData.password ?? '',
                        }}
                        onSubmit={(values) => {
                          updateFormData(values);
                          nextPage();
                        }}
                        innerRef={formRef}
                        validationSchema={validationSchema}
                      >
                        {({
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          touched,
                          values,
                        }) => {
                          const spread = (field, helper = true) => {
                            return {
                              disabled: isSubmitting,
                              error: touched[field] && !!errors[field],
                              name: field,
                              onBlur: handleBlur,
                              onChange: handleChange,
                              value: values[field],
                              ...(helper && {
                                helperText: touched[field] && errors[field],
                              }),
                            };
                          };
                          return (
                            <Form onSubmit={handleSubmit}>
                              <TextField
                                InputProps={{ sx: { borderRadius: 2 } }}
                                label="Email"
                                size="small"
                                sx={{ margin: 2, width: 1 }}
                                type="email"
                                variant="filled"
                                {...spread('email')}
                              />
                              <TextField
                                InputProps={{ sx: { borderRadius: 2 } }}
                                label="Password"
                                size="small"
                                sx={{ margin: 2, width: 1 }}
                                type="password"
                                variant="filled"
                                {...spread('password')}
                              />
                              <TextField
                                InputProps={{ sx: { borderRadius: 2 } }}
                                label="Confirm Password"
                                size="small"
                                sx={{ margin: 2, width: 1 }}
                                type="password"
                                variant="filled"
                                {...spread('confirmPassword')}
                              />
                              <Grid
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  margin: 10,
                                }}
                              >
                                <Button
                                  color="primary"
                                  size="large"
                                  sx={{ borderRadius: 2, width: 1 / 3 }}
                                  type="submit"
                                  variant="contained"
                                >
                                  Next
                                </Button>
                              </Grid>
                              <Box
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  margin: 2,
                                }}
                              >
                                <Typography>
                                  Already have an account?{' '}
                                  <Link
                                    style={{
                                      color: '#9D6432',
                                      fontFamily:
                                        '"Roboto","Helvetica","Arial",sans-serif',
                                    }}
                                    to="/SignIn"
                                  >
                                    Signin
                                  </Link>
                                </Typography>
                              </Box>
                            </Form>
                          );
                        }}
                      </Formik>
                    </Grid>
                  }
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignUpPage1;
