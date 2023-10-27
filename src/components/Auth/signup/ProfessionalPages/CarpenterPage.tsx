import type { FormikProps } from 'formik';

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

import type { SignUpPageProps } from '../../../../pages/ServiceProviderSignUp';

import GetFormikProps from '../../../../utils/GetFormikProps';
const validationSchema = yup.object({
  qualification: yup.string().required('Any Qualification required'),
});

function CarpenterPage({
  formData,
  nextPage,
  previousPage,
  updateFormData,
}: SignUpPageProps) {
  const formRef = useRef(null);
  const initialValues = {
    qualification: formData.qualification ?? '',
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
                backgroundImage: 'url("/signup/carpenter.jpg")',
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
                minHeight: '80vh',
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
                    // TODO: HANDLE PAGE CHANGE HERE!!!
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
                              <Typography margin={1} textAlign="left" width={1}>
                                What are your qualifications?
                              </Typography>
                              <Grid style={{ justifyContent: 'center' }}>
                                <TextField
                                  id="filled-multiline-static"
                                  label="Please separate each one with commas."
                                  multiline
                                  rows={5}
                                  sx={{ m: 1, maxWidth: 500, minWidth: 400 }}
                                  variant="filled"
                                  {...spread('qualification')}
                                />
                              </Grid>

                              <Grid
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  width: '100%',
                                }}
                              >
                                <Button
                                  sx={{
                                    borderRadius: 2,
                                    margin: 1,
                                    width: 1 / 2,
                                  }}
                                  color="primary"
                                  onClick={previousPage}
                                  size="large"
                                  type="button"
                                  variant="contained"
                                >
                                  Previous
                                </Button>
                                <Button
                                  sx={{
                                    borderRadius: 2,
                                    margin: 1,
                                    width: 1 / 2,
                                  }}
                                  color="primary"
                                  size="large"
                                  type="submit"
                                  variant="contained"
                                >
                                  Next
                                </Button>
                              </Grid>
                            </Grid>
                          }
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

export default CarpenterPage;
