import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useRef } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  nic: yup.string().required("NIC is required"),
  sLIARegNumber: yup.string().required("SLIA Membership number is required"),
});

function ArchitectPage1({
  formData,
  updateFormData,
  nextPage,
  previousPage,
  updateFormData,
}) {
  const formRef=useRef(null);
  const initialValues = {
    nic: formData.nic ?? "",
    sLIARegNumber: formData.sLIARegNumber ?? "",
    website: formData.website ?? "",
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
                backgroundImage: 'url("/signup/archi.jpg")',
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
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
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
                    return(
                      <Form onSubmit={handleSubmit}>
                        <Box
                          sx={{
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                            {
                              <Grid style={{ justifyContent: "center" }}>
                                <TextField
                                  InputProps={{ sx: { borderRadius: 2 } }}
                                  sx={{ width: 1, margin: 1 }}
                                  type="nic"
                                  name="nic"
                                  label="NIC"
                                  variant="filled"
                                  size="small"
                                  {...spread("nic")}
                                />
                                <TextField
                                  InputProps={{ sx: { borderRadius: 2 } }}
                                  sx={{ width: 1, margin: 1 }}
                                  type="SLIARegNumber"
                                  name="sLIARegNumber"
                                  label="SLIA Membership Number"
                                  variant="filled"
                                  size="small"
                                  {...spread("sLIARegNumber")}
                                />
                                <TextField
                                  InputProps={{ sx: { borderRadius: 2 } }}
                                  sx={{ width: 1, margin: 1 }}
                                  type="website"
                                  name="website"
                                  label="Website"
                                  variant="filled"
                                  size="small"
                                  {...spread("website")}
                                />
                                
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
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                  }}
                                >
                                  <Button
                                    sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                                    type='button'
                                    color='primary'
                                    variant='contained'
                                    size='large'
                                    onClick={previousPage}
                                  >
                                    Previous
                                  </Button>
                                  <Button
                                    sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                                    type='submit'
                                    color='primary'
                                    variant='contained'
                                    size='large'
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
