import type { FormikProps } from 'formik';

import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

import type { SignUpPageProps } from '../../../pages/ServiceProviderSignUp';

import GetFormikProps from '../../../utils/GetFormikProps';
const validationSchema = yup.object({
  maxRate: yup.number().required('provide a value here').min(0),
  minRate: yup.number().required('provide a value here').min(0),
});

function ServiceProviderPage6({
  formData,
  nextPage,
  pageImage,
  previousPage,
  updateFormData,
}: SignUpPageProps) {
  const formRef = useRef(null);
  const initialValues = {
    maxRate: formData.maxRate ?? 100000,
    minRate: formData.minRate ?? 10000,
  };
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
              <Grid item style={{ marginTop: '1rem' }} xs={12}>
                <Formik
                  onSubmit={(values) => {
                    //: HANDLE PAGE CHANGE HERE!!!
                    updateFormData(values);
                    nextPage();
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
                            gap: '20px',
                            margin: '10px',
                          }}
                        >
                          {
                            <Grid style={{ justifyContent: 'center' }}>
                              <Typography textAlign="center">
                                What is the estimated service charge for a
                                project?
                              </Typography>
                              <Box sx={{ display: 'flex', gap: '10px' }}>
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
                                  label="From"
                                  name="From"
                                  size="small"
                                  sx={{ flex: '1', margin: 2 }}
                                  type="From"
                                  variant="filled"
                                  {...spread('minRate')}
                                />
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
                                  label="To"
                                  name="To"
                                  size="small"
                                  sx={{ flex: '1', margin: 2 }}
                                  type="To"
                                  variant="filled"
                                  {...spread('maxRate')}
                                />
                              </Box>
                            </Grid>
                          }
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
                              Next
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

export default ServiceProviderPage6;
