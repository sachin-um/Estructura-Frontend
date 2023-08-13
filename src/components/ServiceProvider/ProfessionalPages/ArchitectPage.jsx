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

const validationSchema = yup.object({
  sLIARegNumber: yup.string().required('SLIA Membership number is required'),
});

function ArchitectPage1({
  formData,
  updateFormData,
  nextPage,
  previousPage,
  pageImage,
}) {
  const formRef = useRef(null);
  const initialValues = {
    sLIARegNumber: formData.sLIARegNumber ?? '',
    qualification: formData.qualification ?? '',
  };
  // TODO: Change Layout
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
              paddingTop: '2rem',
              paddingBottom: '2rem',
              marginTop: '2rem',
            }}
            item
            md={7}
            xs={12}
          >
            <Grid
              style={{
                backgroundImage: `url(${pageImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
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
              <Grid item xs={12} style={{ marginTop: '1rem' }}>
                <Formik
                  innerRef={formRef}
                  onSubmit={(values) => {
                    // TODO: HANDLE PAGE CHANGE HERE!!!
                    updateFormData(values);
                    nextPage();
                  }}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => {
                    const spread = (field, helper = true) => {
                      return {
                        name: field,
                        onBlur: handleBlur,
                        onChange: handleChange,
                        value: values[field],
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
                            margin: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                          }}
                        >
                          {
                            <Grid style={{ width: '96%' }}>
                              <Typography textAlign="left" width={1} margin={1}>
                                SLIA Membership Number
                              </Typography>
                              <TextField
                                InputProps={{ sx: { borderRadius: 2 } }}
                                sx={{ width: 1, margin: 1 }}
                                type="SLIARegNumber"
                                name="sLIARegNumber"
                                label="Ex:A1399"
                                variant="filled"
                                size="small"
                                {...spread('sLIARegNumber')}
                              />
                              <Grid style={{ justifyContent: 'center' }}>
                                <Typography
                                  textAlign="left"
                                  width={1}
                                  margin={1}
                                >
                                  What are your qualifications?
                                </Typography>
                                <Grid style={{ justifyContent: 'center' }}>
                                  <TextField
                                    sx={{ m: 1, minWidth: 400, maxWidth: 500 }}
                                    label="Please separate each one with commas."
                                    id="filled-multiline-static"
                                    multiline
                                    rows={5}
                                    variant="filled"
                                    {...spread('qualification')}
                                  />
                                </Grid>
                              </Grid>

                              {/* <Grid
                                  style={{ justifyContent: "center" }}
                                  sx={{ width: 1, margin: 1 }}
                                >
                                  <Typography sx={{ margin: 1 }}>
                                    SLIA Certificate
                                  </Typography>
                                  <Button
                                    sx={{ width: 1 }}
                                    variant="contained"
                                    color="secondary"
                                    component="label"
                                  >
                                    Upload Certificate
                                    <input
                                      hidden
                                      accept="image/*"
                                      multiple
                                      type="file"
                                    />
                                  </Button>
                                </Grid> */}
                              <Grid
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  width: '100%',
                                }}
                              >
                                <Button
                                  sx={{
                                    width: 1 / 2,
                                    borderRadius: 2,
                                    margin: 2,
                                  }}
                                  type="button"
                                  color="primary"
                                  variant="contained"
                                  size="large"
                                  onClick={previousPage}
                                >
                                  Previous
                                </Button>
                                <Button
                                  sx={{
                                    width: 1 / 2,
                                    borderRadius: 2,
                                    margin: 2,
                                  }}
                                  type="submit"
                                  color="primary"
                                  variant="contained"
                                  size="large"
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

export default ArchitectPage1;
