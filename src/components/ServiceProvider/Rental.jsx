
import {
    Box,
    Button,
    Container,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Link,
    TextField,
    Typography,
  } from "@mui/material";
import {Form,Formik} from "formik";
import { useRef } from "react";
import * as yup from "yup";
import AddressInputs,{addressInitialValues,addressValidators} from "../Auth/AddressInputs";
  // import { Link } from "react-router-dom" ;
  
  const validationSchema=yup.object({
    businessName: yup.string().required("Business Name is required"),
    businessContactNo: yup.string().required("Contact Number is required"),
    registrationNo:yup.string().required("Business Registration number is required"),
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    ...addressValidators,
  })

  function RentalStore({
    nextPage,
    previousPage,
    updateFormData,
    formData,
  }) {
    const formRef=useRef(null);
    const initialValues={
      role:formData.role ?? "RENTER",
      businessName: formData.businessName ?? "",
      registrationNo:formData.registrationNo ?? "",
      businessContactNo: formData.contactNo ?? "",
      firstname: formData.firstname?? "",
      lastname:  formData.lastname ?? "",
      ...addressInitialValues(formData),
    }  ;  
    // TODO: Change Layout
    return (
      <>
  {/* Rental Store Signup*/}
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      minHeight:'100vh'
                    }}
                  >
                    <Formik
                      innerRef={formRef}
                      onSubmit={(values)=>{
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
                      }) =>{
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
                              <Stack style={{justifyContent:"center"}} gap={2}>
                                  <Typography variant='h8' sx={{ textAlign: "left", color: "#435834" }}>
                                    {" "}
                                    Owner Details{" "}
                                  </Typography>
                                  <Box sx={{ display: 'flex', gap: 1 }}>
                                      <TextField
                                          label='Your First Name'
                                          variant='filled'
                                          size='small'
                                          color='secondary'
                                          {...spread("firstname")}
                                      />
                                      <TextField
                                          variant='filled'
                                          size='small'
                                          color='secondary'
                                          label='Your Last Name'
                                          {...spread("lastname")}
                                      />
                                  </Box>
                                  <Typography variant='h8' sx={{ textAlign: "left", color: "#435834" }}>
                                    {" "}
                                    Business Details{" "}
                                  </Typography>
                                  <TextField 
                                    fullWidth
                                    label='Rental Company Name' 
                                    variant="filled" 
                                    size="small"
                                    {...spread("businessName")}
                                  />
                                  <TextField 
                                  style={{display:"none"}}
                                    type="hidden"
                                    name='role' 
                                    label='role' 
                                    variant="filled" 
                                    size="small"
                                    value={initialValues.role}
                                    color="secondary"  
                                    {...spread("role")}
                                  />
                                  <TextField  
                                    fullWidth
                                    name='businessContactNo' 
                                    label='Business Contact Number' 
                                    variant="filled" 
                                    size="small" 
                                    color='secondary'
                                    {...spread("businessContactNo")}
                                  />
                                  <TextField  
                                    fullWidth
                                    name='registrationNo' 
                                    label='Business Registration Number' 
                                    variant="filled" 
                                    size="small" 
                                    color='secondary'
                                    {...spread("registrationNo")}
                                  />
                                  <AddressInputs spread={spread} errors={errors}/>
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
                              </Stack>
                          </Form>
                        );
                      }}
                    </Formik>   
                </Box>  
      </>
    );
  }
  
  export default RentalStore;