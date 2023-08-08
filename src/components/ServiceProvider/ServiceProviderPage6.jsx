import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useRef } from "react";

function ServiceProviderPage6({
  formData,
  updateFormData,
  nextPage,
  previousPage,
  pageImage,
}) {
  const formRef=useRef(null);
  const initialValues={
    minRate:formData.minRate ?? "",
    maxRate:formData.maxRate ?? ""
  }
  return (
    <>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Grid
              container
              style={{
                backgroundImage: `url(${pageImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "4rem",
                  paddingRight: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
                    paddingBottom: "1rem",
                    marginTop: "auto",
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
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
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "1rem 2rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                minHeight:"85vh"
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src="/Logo.png" alt="Logo" style={{ width: "40%" }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Formik
                    innerRef={formRef}
                    onSubmit={(values) => {
                      //: HANDLE PAGE CHANGE HERE!!!
                      updateFormData(values);
                      nextPage();
                    }}
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
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
                                  <Typography textAlign="center">
                                    What is the estimated service charge for a project?
                                  </Typography>
                                  <Box sx={{ display: "flex", gap: "10px" }}>
                                    <TextField
                                      
                                      sx={{ flex: "1", margin: 2 }}
                                      InputProps={{
                                        sx: { borderRadius: 2 },
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            LKR
                                          </InputAdornment>
                                        ),
                                      }}
                                      type="From"
                                      name="From"
                                      label="From"
                                      variant="filled"
                                      size="small"
                                      color="secondary"
                                      {...spread("minRate")}
                                    />
                                    <TextField
                                      
                                      InputProps={{
                                        sx: { borderRadius: 2 },
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            LKR
                                          </InputAdornment>
                                        ),
                                      }}
                                      sx={{ flex: "1", margin: 2 }}
                                      type="To"
                                      name="To"
                                      label="To"
                                      variant="filled"
                                      size="small"
                                      color="secondary"
                                      {...spread("maxRate")}
                                    />
                                  </Box>
                                </Grid>
                              }
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