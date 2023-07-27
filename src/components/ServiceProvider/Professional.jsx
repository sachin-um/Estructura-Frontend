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
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

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
  contactNo: yup.string().required('Contact Number is required'),
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  role: yup
    .string()
    .oneOf(professionalCategories.map((category) => category[0]))
    .required('Professional Category is required'),
  ...addressValidators,
});

function Professional({
  formData,
  handleDropdownChange,
  nextPage,
  previousPage,
  updateFormData,
}) {
  const formRef = useRef(null);
  const initialValues = {
    // if possible, set from formData
    businessName: formData.businessName ?? '',
    contactNo: formData.contactNo ?? '',
    firstname: formData.firstname ?? '',
    lastname: formData.lastname ?? '',
    role: formData.professionalCategory ?? '',
    ...addressInitialValues,
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          margin: '10px',
          minHeight: '100vh',
        }}
      >
        <Formik
          onSubmit={(values) => {
            // TODO: HANDLE PAGE CHANGE HERE!!!
            updateFormData(values);
            handleDropdownChange(values.role);
            nextPage();
          }}
          initialValues={initialValues}
          innerRef={formRef}
          validationSchema={validationSchema}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => {
            const spread = (field, helper = true) => {
              return {
                disabled: isSubmitting,
                error: touched[field] && !!errors[field],
                name: field,
                onBlur: handleBlur,
                onChange: handleChange,
                value: values[field],
                ...(helper && {
                  helperText: touched[field] && errors[field],
                }),
              };
            };
            return (
              <Form onSubmit={handleSubmit}>
                <Stack gap={2} style={{ justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      color="secondary"
                      label="Your First Name"
                      size="small"
                      variant="filled"
                      {...spread('firstname')}
                    />
                    <TextField
                      color="secondary"
                      label="Your Last Name"
                      size="small"
                      variant="filled"
                      {...spread('lastname')}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Business Name"
                    size="small"
                    variant="filled"
                    {...spread('businessName')}
                  />
                  <FormControl fullWidth variant="filled">
                    <InputLabel id="SelectProfessionalCategory">
                      Professional Category
                    </InputLabel>
                    <Select displayEmpty={true} {...spread('role', false)}>
                      {professionalCategories.map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* <TextField // IDK why this was here
                    type='tel'
                    label='Business Contact Number'
                    variant='filled'
                    size='small'
                    color='secondary'
                    {...spread("businessContactNo")}
                    fullWidth
                /> */}
                  <AddressInputs spread={spread} />
                  <Grid
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Button
                      color="primary"
                      onClick={previousPage}
                      size="large"
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                      type="button"
                      variant="contained"
                    >
                      Previous
                    </Button>
                    <Button
                      color="primary"
                      size="large"
                      sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                      type="submit"
                      variant="contained"
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
