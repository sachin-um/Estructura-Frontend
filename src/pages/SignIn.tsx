import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik, type FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import TopBar from '../components/TopBar';
import API, { clearTokens } from '../lib/API';
import { violationsToErrorsTS } from '../utils/ViolationsTS';

interface SignInRequest {
  email: string;
  password: string;
}

interface AuthenticationResponse extends ValidatedResponse {
  access_token: null | string;
  refresh_token: null | string;
  role: Role | null;
  success: boolean;
}

const InitialValues: SignInRequest = {
  email: '',
  password: '',
};

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a well formed email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

function SignIn() {
  const FormRef = useRef<FormikProps<SignInRequest>>(null);
  const Navigate = useNavigate();

  const Params = new URLSearchParams(window.location.search);
  const from = Params.get('from');
  const tokenExpired = Params.get('tokenExpired');

  const [open, setOpen] = useState(false);

  const handleClose = (
    _event: Event | React.SyntheticEvent<Element, Event>,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (tokenExpired === 'true' && open === false) {
      setOpen(true);
    }
  }, [open, tokenExpired]);

  const HandleSubmit = (values: SignInRequest) => {
    if (FormRef.current !== null) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      clearTokens();
      const email = values.email;
      const password = values.password;
      API.post<AuthenticationResponse>('/auth/authenticate', {
        email,
        password,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            if (res.data.success === true) {
              localStorage.setItem('role', res.data.role as string);
              localStorage.setItem(
                'accessToken',
                res.data.access_token as string,
              );
              localStorage.setItem(
                'refreshToken',
                res.data.refresh_token as string,
              );
              if (from) {
                Navigate(from, { replace: true });
              } else {
                Navigate(`/${res.data.role?.toLowerCase()}/dashboard`, {
                  replace: true,
                });
              }
            } else {
              setErrors(violationsToErrorsTS(res.data.validation_violations));
            }
          } else {
            alert('Invalid Credentials');
          }
        })
        .catch((err) => console.log(JSON.stringify(err)));
      setSubmitting(false);
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        autoHideDuration={6000}
        onClose={handleClose}
        open={open}
      >
        <Alert onClose={handleClose} severity="warning">
          Your session has expired. Please sign in again.
        </Alert>
      </Snackbar>
      <TopBar />
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
          <Grid item lg={7} md={7} xs={12}>
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: 'url("/formBg.jpg")',
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
          <Grid item lg={5} md={5} xs={12}>
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
              <Grid item style={{ marginBottom: '1rem' }} xs={12}>
                <Typography
                  gutterBottom
                  style={{ color: '#435834', textAlign: 'center' }}
                  variant="h5"
                >
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1rem' }} xs={12}>
                <Formik
                  initialValues={InitialValues}
                  innerRef={FormRef}
                  onSubmit={HandleSubmit}
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
                  }: FormikProps<SignInRequest>) => {
                    const spread = (
                      field: string,
                      helper = true,
                    ): Record<string, unknown> => {
                      const key = field as keyof SignInRequest;
                      return {
                        disabled: isSubmitting,
                        error: touched[key] && !!errors[key],
                        name: field,
                        onBlur: handleBlur,
                        onChange: handleChange,
                        value: values[key],
                        ...(helper && {
                          helperText: touched[key] && errors[key],
                        }),
                      };
                    };

                    return (
                      <Form
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
                        <TextField
                          color="secondary"
                          fullWidth
                          label="User Name or Email"
                          type="email"
                          variant="filled"
                          {...spread('email')}
                        />
                        <TextField
                          color="secondary"
                          fullWidth
                          label="Password"
                          type="password"
                          variant="filled"
                          {...spread('password')}
                        />
                        <Grid container justifyContent="space-between">
                          <Grid item style={{ marginRight: '3rem' }}>
                            <Link
                              style={{
                                color: '#9D6432',
                                textDecoration: 'none',
                              }}
                              to="/SignUp"
                            >
                              Don&apos;t have an account? Register
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              style={{
                                color: '#9D6432',
                                textDecoration: 'none',
                              }}
                              to="/ForgotPassword"
                            >
                              Forgot Password?
                            </Link>
                          </Grid>
                        </Grid>
                        <Button
                          color="primary"
                          fullWidth
                          style={{ marginTop: '1.5rem' }}
                          type="submit"
                          variant="contained"
                        >
                          Sign In
                        </Button>
                        {/* <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '0.5rem', color: '#000000', borderColor: '#304422' }} startIcon={<img src="/google.png" alt="Google Logo" style={{ height: '1.5rem', marginRight: '0.5rem' }} />}>
                    Sign in with Google
                  </Button> */}
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

export default SignIn;
