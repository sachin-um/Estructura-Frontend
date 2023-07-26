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
  
  contactNo: yup.string().required("Contact Number is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  ...addressValidators,
});

function RetailStore({ nextPage, previousPage, updateFormData, formData }) {
  const formRef = useRef(null);
  const initialValues = {
    // if possible, set from formData
    businessName: formData.businessName ?? "",
   
    contactNo: formData.contactNo ?? "",
    firstname: formData.firstname ?? "",
    lastname: formData.lastname ?? "",
    ...addressInitialValues,
  };

  // TODO: Change Layout
  return (
    <>
      {/* Retail Store Signup*/}
      <Box
        component="form"
        sx={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          minHeight: "80vh",
        }}
        // onSubmit={HandleSubmit}
      >
        {/* <Formik
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
                </Stack>
                                 

              </Form>
            );
          }}
          </Formik> */}
        
        {
          <Grid style={{ justifyContent: "center" }}>
            <TextField
              InputProps={{ sx: { borderRadius: 2 } }}
              sx={{ width: 1, margin: 1 }}
              type="RetailStoreName"
              name="businessName"
              label="Retail Store Name"
              variant="filled"
              size="small"
            />

            <FormControl
              fullWidth
              variant="filled"
              InputProps={{ sx: { borderRadius: 2 } }}
              sx={{ width: 1, margin: 1 }}
            >
              <InputLabel id="SelectRetailCategory">Retail Category</InputLabel>
              <Select labelId="demo-simple-select-label">
                <MenuItem value={1}>Indoor Furniture</MenuItem>
                <MenuItem value={1}>Outdoor Furniture</MenuItem>
                <MenuItem value={2}>Hardware</MenuItem>
                <MenuItem value={3}>Bathware</MenuItem>
                <MenuItem value={4}>Lighting</MenuItem>
              </Select>
            </FormControl>
            <TextField
              InputProps={{ sx: { borderRadius: 2 } }}
              sx={{ width: 1, margin: 1 }}
              type="contactNo"
              name="contactNo"
              label="Business Contact Number"
              variant="filled"
              size="small"
              color="secondary"
            />
            <TextField
              InputProps={{ sx: { borderRadius: 2 } }}
              sx={{ width: 1, margin: 1 }}
              type="contactNo"
              name="contactNo"
              label="Business Registration Number"
              variant="filled"
              size="small"
              color="secondary"
            />
            <Typography
              variant="h8"
              sx={{
                textAlign: "left",
                color: "#435834",
                marginTop: "-8px",
                marginLeft: "10px",
              }}
            >
              {" "}
              Address{" "}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <TextField
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ flex: "1", margin: 1 }}
                type="houseNo"
                name="houseNo"
                label="House No"
                variant="filled"
                size="small"
                color="secondary"
              />
              <TextField
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ flex: "1", margin: 1 }}
                type="lane"
                name="lane"
                label="Lane"
                variant="filled"
                size="small"
                color="secondary"
              />
            </Box>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="selectDistrict" color="secondary">
                District
              </InputLabel>
              <Select labelId="selectDistrict-label">
                <MenuItem value={1}>Ampara</MenuItem>
                <MenuItem value={2}>Anuradhapura</MenuItem>
                <MenuItem value={3}>Badulla</MenuItem>
                <MenuItem value={4}>Batticaloa</MenuItem>
                <MenuItem value={5}>Colombo</MenuItem>
                <MenuItem value={6}>Galle</MenuItem>
                <MenuItem value={7}>Gampaha</MenuItem>
                <MenuItem value={8}>Hambantota</MenuItem>
                <MenuItem value={9}>Jaffna</MenuItem>
                <MenuItem value={10}>Kalutara</MenuItem>
                <MenuItem value={11}>Kandy</MenuItem>
                <MenuItem value={12}>Kegalle</MenuItem>
                <MenuItem value={13}>Kilinochchi</MenuItem>
                <MenuItem value={14}>Kurunegala</MenuItem>
                <MenuItem value={15}>Mannar</MenuItem>
                <MenuItem value={16}>Matale</MenuItem>
                <MenuItem value={17}>Matara</MenuItem>
                <MenuItem value={18}>Monaragala</MenuItem>
                <MenuItem value={19}>Mullaitivu</MenuItem>
                <MenuItem value={20}>Nuwara Eliya</MenuItem>
                <MenuItem value={21}>Polonnaruwa</MenuItem>
                <MenuItem value={22}>Puttalam</MenuItem>
                <MenuItem value={23}>Ratnapura</MenuItem>
                <MenuItem value={24}>Trincomalee</MenuItem>
                <MenuItem value={25}>Vavuniya</MenuItem>
              </Select>
            </FormControl>
            <TextField
              InputProps={{ sx: { borderRadius: 2 } }}
              sx={{ width: 1, margin: 1 }}
              type="city"
              name="city"
              label="City"
              variant="filled"
              size="small"
              color="secondary"
            />
            <Box sx={{ display: "flex", gap: "10" }}>
              <TextField
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ flex: "1", margin: 1 }}
                type="firstName"
                name="firstName"
                label="First Name"
                variant="filled"
                size="small"
                color="secondary"
              />
              <TextField
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ flex: "1", margin: 1 }}
                type="lastName"
                name="lastName"
                label="Last Name"
                variant="filled"
                size="small"
                color="secondary"
              />
            </Box>
          </Grid>
        }

        {/* { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'  href=''>Next</Button>
                </Grid> } */}
      </Box>
    </>
  );
}

export default RetailStore;
