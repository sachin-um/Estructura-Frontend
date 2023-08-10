import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { useRef } from "react";
import * as yup from "yup";
import AddressInputs, {
  addressInitialValues,
  addressValidators,
} from '../Auth/AddressInputs';

const professionalCategories = [
  ['architect', 'Architect'],
  ['interiordesigner', 'Interior Designer'],
  ['constructioncompany', 'Construction Company'],
  ['homebuilder', 'Home Builder'],
  ['landscapearchitect', 'Landscape Architect'],
  ['painter', 'Painter'],
  ['carpenter', 'Carpenter '],
];

const validationSchema = yup.object({
  businessName: yup.string().required('Business Name is required'),
  role: yup
    .string()
    .oneOf(professionalCategories.map((category) => category[0]))
    .required("Professional Category is required"),
  businessContactNo: yup.string().required("Contact Number is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  nic: yup.string().required("NIC is required"),
  ...addressValidators,
});

function Professional({
  handleDropdownChange,
  nextPage,
  previousPage,
  updateFormData,
  formData,
}) {
  const formRef = useRef(null);
  const initialValues = {
    // if possible, set from formData
    nic: formData.nic ?? "",
    website: formData.website ?? "",
    businessName: formData.businessName ?? "",
    role: formData.role ?? "",
    firstname: formData.firstname ?? "",
    lastname: formData.lastname ?? "",
    businessContactNo: formData.businessContactNo ??"",
    ...addressInitialValues(formData),

  };

  return (
    <>
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
            handleDropdownChange(values.role);
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
                error: touched[field]  && !!errors[field] ,
                disabled: isSubmitting,
                ...(helper && {
                  helperText: touched[field] && errors[field],
                }),
              };
            };
            return (
              <Form onSubmit={handleSubmit}>
                <Stack style={{ justifyContent: "center" }} gap={2}>
                  <Typography variant='h8' sx={{ textAlign: "left", color: "#435834" }}>
                                      {" "}
                                      Personal Details{" "}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <TextField
                      label="Your First Name"
                      variant="filled"
                      size="small"
                      color="secondary"
                      {...spread('firstname')}
                    />
                    <TextField
                      variant="filled"
                      size="small"
                      color="secondary"
                      label="Your Last Name"
                      {...spread('lastname')}
                    />
                  </Box>
                  <TextField
                      type="nic"
                      name="nic"
                      label="NIC"
                      variant="filled"
                      size="small"
                      {...spread("nic")}
                     />
                  <Typography variant='h8' sx={{ textAlign: "left", color: "#435834" }}>
                                    {" "}
                                    Business Details{" "}
                  </Typography>
                  <TextField
                    fullWidth
                    label="Business Name"
                    variant="filled"
                    size="small"
                    {...spread('businessName')}
                  />
                  <TextField // IDK why this was here
                    type="tel"
                    label="Business Contact Number"
                    variant="filled"
                    size="small"
                    color="secondary"
                    {...spread('businessContactNo')}
                    fullWidth
                  />
                  <FormControl fullWidth variant="filled">
                    <InputLabel id="SelectProfessionalCategory">
                      Professional Category
                    </InputLabel>
                    
                    <Select displayEmpty={true} {...spread("role", false)}>

                      {professionalCategories.map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <ErrorMessage 
                      name="role"
                  >
                    {msg => <span
                            style={{
                              color:"#d32f2f",
                              fontSize: "0.75rem",
                              marginLeft:"14px"
                            }}
                            >
                              {msg}
                            </span>}
                  </ErrorMessage>
                  
                  <AddressInputs spread={spread} errors={errors} />
                  <TextField
                    type="website"
                    name="website"
                    label="Website"
                    variant="filled"
                    size="small"
                    {...spread("website")}
                  />
                  <Grid
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Button
                      sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                      type="button"
                      color="primary"
                      variant="contained"
                      size="large"
                      onClick={previousPage}
                    >
                      Previous
                    </Button>
                    <Button
                      sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
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

export default Professional;
