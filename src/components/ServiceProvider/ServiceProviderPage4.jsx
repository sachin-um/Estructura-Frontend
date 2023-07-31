import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useRef } from "react";
import * as yup from "yup";
import { Checkbox } from "@mui/material";
// import { Link } from "react-router-dom" ;

const options = [
  { label: "Ampara", value: "ampara" },
  { label: "Anuradhapura", value: "anuradhapura" },
  { label: "Badulla", value: "badulla" },
  { label: "Batticaloa", value: "batticaloa" },
  { label: "Colombo", value: "colombo" },
  { label: "Galle", value: "galle" },
  { label: "Gampaha", value: "gampaha" },
  { label: "Hambantota", value: "hambantota" },
  { label: "Jaffna", value: "jaffna" },
  { label: "Kalutara", value: "kalutara" },
  { label: "Kandy", value: "kandy" },
  { label: "Kegalle", value: "kegalle" },
  { label: "Kilinochchi", value: "kilinochchi" },
  { label: "Kurunegala", value: "kurunegala" },
  { label: "Mannar", value: "mannar" },
  { label: "Matale", value: "matale" },
  { label: "Matara", value: "matara" },
  { label: "Monaragala", value: "monaragala" },
  { label: "Mullaitivu", value: "mullaitivu" },
  { label: "Nuwara Eliya", value: "nuwaraeliya" },
  { label: "Polonnaruwa", value: "polonnaruwa" },
  { label: "Puttalam", value: "puttalam" },
  { label: "Ratnapura", value: "ratnapura" },
  { label: "Trincomalee", value: "trincomalee" },
  { label: "Vavuniya", value: "vavuniya" },
];
const validationSchema = yup.object({
  serviceAreas:yup
  .string()
  .oneOf(options.map((area)=>area[0]))
  .required("Select a One or More Service Areas")
});
function ServiceProviderPage4({
  formData,
  updateFormData,
  nextPage,
  previousPage,
  pageImage,
}) {
  const [selected, setSelected] = useState([]);
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
        <Grid style={{minHeight:'80vh'}}container justifyContent="center" spacing={4}> 
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
                minHeight:'80vh'
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
                    // handleDropdownChange(values.role);
                    // nextPage();
                    console.log(values);
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
                          margin: "10px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                        }}
                      >
                          {
                            <Grid style={{ justifyContent: "center" }}>
                              <Typography textAlign="center">
                                Where are you based?
                              </Typography>
                                <FormControl fullWidth variant='filled'>
                                <MultiSelect 
                                  displayEmpty={true} {...spread("serviceAreas", false)}
                                  options={options}
                                  value={selected}
                                  onChange={setSelected}
                                  labelledBy={"Select"}
                                  isCreatable={false}
                                  overrideStrings={{selectAll:"Islandwide",search:"Search districts..",selectSomeItems:"Select Districts"}}
                                />
                                </FormControl>
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

export default ServiceProviderPage4;
