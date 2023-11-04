// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import { Container, Grid, Typography, Button, TextField } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { Form, Formik } from 'formik';
import TopBar from '../components/TopBar';
import { useParams } from 'react-router';
import API from '../lib/API';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
const validationSchema = yup.object({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  password: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
});
function ResetPassword() {
  const token = useParams().token ?? '';
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ email: '' });

  // TODO: Change Layout
  return (
    <>
      <TopBar title="Sign In to Estructura" />

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
                backgroundImage: 'url("/forgotpassword.jpg")',
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
                    color: '#000000',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    marginTop: 'auto',
                    paddingBottom: '1rem',
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}
                  variant="h4"
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  style={{
                    color: '#000000',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    textAlign: 'left',
                    fontWeight: 'bold',
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
              <Grid item style={{ marginTop: '1rem' }} xs={12}></Grid>

              <Grid>
                {
                  <Grid style={{ justifyContent: 'center', minHeight: '30vh' }}>
                    <Typography
                      gutterBottom
                      style={{ color: '#435834', textAlign: 'center' }}
                      variant="h5"
                    >
                      Enter New Password
                    </Typography>
                    <Formik
                      initialValues={{
                        confirmPassword: formData.confirmPassword ?? '',
                        password: formData.password ?? '',
                      }}
                      onSubmit={(values) => {
                        API.post(
                          `/auth/reset-password-process?token=${token}`,
                          values,
                        )
                          .then((res) => {
                            if (res.status === 200) {
                              if (res.data.success === true) {
                                navigate('/ResetPasswordSuccessful', {
                                  replace: true,
                                });
                              } else {
                                alert(res.data.message);
                              }
                            } else {
                              alert('Invalid Credentials');
                            }
                          })
                          .catch((err) => console.log(JSON.stringify(err)));
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
                              label="Password"
                              name="password"
                              size="small"
                              sx={{ margin: 2, width: 1 }}
                              type="password"
                              variant="filled"
                              {...spread('password')}
                            />
                            <TextField
                              InputProps={{ sx: { borderRadius: 2 } }}
                              label="Confirm Password"
                              name="ConfirmPassword"
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
                                margin: 1,
                              }}
                            >
                              <Button
                                color="primary"
                                size="large"
                                sx={{ borderRadius: 2, width: 1 / 2 }}
                                type="submit"
                                variant="contained"
                              >
                                Change Password
                              </Button>
                            </Grid>
                          </Form>
                        );
                      }}
                    </Formik>
                  </Grid>
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ResetPassword;
