import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useRef } from "react";
import * as yup from "yup";
// import { Link } from "react-router-dom" ;
const validationSchema = yup.object({
  nic: yup.string().required("NIC is required"),
  qualification: yup.string().required("Any Qualification required"),
});
function CarpenterPage({
  formData,
  updateFormData,
  nextPage,
  previousPage,
}) {
  const formRef=useRef(null);
  const initialValues = {
    nic: formData.nic ?? "",
    qualification: formData.qualification ?? "",
    website: formData.website ?? "",
    
  };
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
                backgroundImage: 'url("/signup/carpenter.jpg")',
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
                minHeight: "80vh",
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
                                    type="SpecialQualification"
                                    name="SpecialQualification"
                                    label="Mention of any Special Qualification"
                                    variant="filled"
                                    size="small"
                                    {...spread("qualification")}
                                  />
                                  <Grid
                                    style={{ justifyContent: "center" }}
                                    sx={{ width: 1, margin: 1 }}
                                  >
                                    <Typography sx={{ margin: 1 }}>
                                    Proof of Qualification
                                    </Typography>
                                    <Button
                                      sx={{ width: 1 }}
                                      variant="contained"
                                      color="secondary"
                                      component="label"
                                    >
                                      Upload Documents
                                      <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        {...spread('qualificationDocument',false)}
                                          onChange={(event)=>{
                                            if (event.target.files!==null) {
                                              // handleUpload(event);
                                              setFieldValue("qualification",event.target.files,false)
                                            }
                                            else{
                                              setFieldValue("qualificationDocument",new DataTransfer().files,false)
                                            }
                                        }}
                                      />
                                    </Button>
                                  </Grid>
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

export default CarpenterPage;
