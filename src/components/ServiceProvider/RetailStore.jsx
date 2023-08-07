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
// import { Link } from "react-router-dom" ;
import { Form, Formik } from "formik";
import { useRef } from "react";
import * as yup from "yup";
import AddressInputs, {
  addressInitialValues,
  addressValidators,
} from "../Auth/AddressInputs";

const retailCategories = [
  ["indoorfurniture", "Indoor Furniture"],
  ["outdoorfurniture", "Outdoor Furniture"],
  ["hardware", "Hardware"],
  ["bathware", "Bathware"],
  ["lighting", "Lighting"],
];

const validationSchema = yup.object({
  businessName: yup.string().required("Business Name is required"),
  businessCategory:yup
    .string()
    .oneOf(retailCategories.map((category)=>category[0]))
    .required("Retail Category is required"),
  businessContactNo: yup.string().required("Contact Number is required"),
  registrationNo:yup.string().required("Business Registration number is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  ...addressValidators,
});

function RetailStore({ nextPage, previousPage, updateFormData, formData }) {
  const formRef = useRef(null);
  const initialValues = {
    // if possible, set from formData
    businessName: formData.businessName ?? "",
    businessCategory:formData.businessCategory ?? "",
    businessContactNo: formData.businessContactNo ?? "",
    registrationNo:formData.registrationNo ?? "",
    firstname: formData.firstname ?? "",
    lastname: formData.lastname ?? "",
    ...addressInitialValues(formData),
  };

  // TODO: Change Layout
  return (
    <>
      {/* Retail Store Signup*/}
      <Box
        sx={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding:"20px",
          maxHeight:'350px',
          overflowY: 'auto'
        }}
      >
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
                        <FormControl
                          fullWidth
                          variant="filled"
                        >
                          <InputLabel id="SelectRetailCategory">
                            Retail Category
                          </InputLabel>
                          <Select displayEmpty={true} {...spread("businessCategory", false)}>
                              {retailCategories.map(([value,label])=>(
                                <MenuItem key={value} value={value}>{label}</MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                        <TextField
                          type="contactNo"
                          name="contactNo"
                          label="Business Contact Number"
                          variant="filled"
                          size="small"
                          {...spread("businessContactNo")}
                        />
                        <TextField
                          name="contactNo"
                          label="Business Registration Number"
                          variant="filled"
                          size="small"
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

export default RetailStore;
