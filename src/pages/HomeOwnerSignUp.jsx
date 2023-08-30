import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useRef, useState } from 'react';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import AddressInputs, {
  addressValidators,
  districts,
} from '../components/Auth/AddressInputs';
import TopBar from '../components/TopAppBar';
import API, { clearTokens } from '../lib/API';
import { violationsToErrors } from '../utils/Violations';
import TopAppBar from '../components/TopAppBar';

const ValidationSchema = yup.object().shape({
  confirmPassword: yup.string().required('Confirm Password is required'),
  contactNo: yup
    .string()
    .matches(/^(\+94)|(0)[0-9]{9}$/, 'Invalid Contact Number')
    .required('Contact Number is required'),
  email: yup
    .string()
    .email('Email must be a well formed email address')
    .required('Email is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  password: yup.string().required('Password is required'),
  ...addressValidators,
});

const initialValues = {
  addressLine1: '',
  addressLine2: '',
  city: '',
  confirmPassword: '',
  contactNo: '',
  district: districts[0],
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  role: 'CUSTOMER',
};

function HomeOwnerSignUp() {
  const FormRef = useRef();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <TopAppBar />
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        autoHideDuration={6000}
        onClose={handleClose}
        open={open}
      >
        <Alert onClose={handleClose} severity="success">
          An Email has been sent to your email address. Please verify your email
          to complete the Sign up process.
        </Alert>
      </Snackbar>
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
                backgroundImage: 'url("/HomeOwnerBG.jpg")',
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
                <Formik
                  onSubmit={(values, { setErrors, setSubmitting }) => {
                    clearTokens();
                    setSubmitting(true);
                    if (values.password !== values.confirmPassword) {
                      setErrors({ confirmPassword: 'Passwords do not match' });
                    } else {
                      console.log(values);
                      API.post('/auth/register', values, {
                        headers: {
                          'Content-Type': 'multipart/form-data',
                        },
                      })
                        .then((res) => {
                          if (res.status === 200) {
                            if (res.data.success === true) {
                              navigate('/emailNotVerified');
                            } else {
                              setErrors(
                                violationsToErrors(
                                  res.data.validation_violations,
                                ),
                              );
                            }
                          }
                        })
                        .catch((err) => {
                          // BAD REQUEST
                          setErrors(
                            violationsToErrors(
                              err.response.data.validation_violations,
                            ),
                          );
                        });
                    }
                    setSubmitting(false);
                  }}
                  initialValues={initialValues}
                  innerRef={FormRef}
                  validationSchema={ValidationSchema}
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
                      <form
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.5rem',
                          margin: '0 auto',
                          maxWidth: '400px',
                          width: '100%',
                        }}
                        onSubmit={handleSubmit}
                      >
                        <Typography
                          sx={{ color: '#435834', textAlign: 'left' }}
                          variant="h8"
                        >
                          {' '}
                          Personal Details{' '}
                        </Typography>
                        <TextField
                          color="secondary"
                          fullWidth
                          label="Email"
                          type="email"
                          variant="filled"
                          {...spread('email')}
                        />
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            marginLeft: '2px',
                            marginRight: '2px',
                          }}
                        >
                          <TextField
                            color="secondary"
                            label="First Name"
                            size="small"
                            sx={{ flex: '1', margin: '1px 1px 1px 0' }}
                            type="firstName"
                            variant="filled"
                            {...spread('firstName')}
                          />
                          <TextField
                            color="secondary"
                            label="Last Name"
                            size="small"
                            sx={{ flex: '1', margin: '1px 0 1px 1px' }}
                            type="lastName"
                            variant="filled"
                            {...spread('lastName')}
                          />
                        </Box>
                        <TextField
                          color="secondary"
                          fullWidth
                          label="Contact Number"
                          type="contactNo"
                          variant="filled"
                          {...spread('contactNo')}
                        />

                        <AddressInputs spread={spread} />
                        <TextField
                          color="secondary"
                          fullWidth
                          label="Password"
                          type="password"
                          variant="filled"
                          {...spread('password')}
                        />
                        <TextField
                          color="secondary"
                          fullWidth
                          label="Confirm Password"
                          type="password"
                          variant="filled"
                          {...spread('confirmPassword')}
                        />

                        <Typography>
                          By clicking this button you agree to Estructura's{' '}
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

                        <Button
                          color="primary"
                          fullWidth
                          type="submit"
                          variant="contained"
                        >
                          Sign Up
                        </Button>
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
                      </form>
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

export default HomeOwnerSignUp;
