import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

import AddressInputs, {
  addressInitialValues,
  addressValidators,
} from '../Auth/AddressInputs';
// import { Link } from "react-router-dom" ;

const validationSchema = yup.object({
  businessContactNo: yup.string().required('Contact Number is required'),
  businessName: yup.string().required('Business Name is required'),
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  registrationNo: yup
    .string()
    .required('Business Registration number is required'),
  ...addressValidators,
});

function RentalStore({ formData, nextPage, previousPage, updateFormData }) {
  const formRef = useRef(null);
  const initialValues = {
    businessName: formData.businessName ?? '',
    contactNo: formData.contactNo ?? '',
    firstname: formData.firstname ?? '',
    lastname: formData.lastname ?? '',
    registrationNo: formData.registrationNo ?? '',
    role: formData.role ?? 'RENTER',
    ...addressInitialValues,
  };
  // TODO: Change Layout
  return (
    <>
      {/* Rental Store Signup*/}
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
            updateFormData(values);
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
                  <Typography
                    sx={{ color: '#435834', textAlign: 'left' }}
                    variant="h8"
                  >
                    {' '}
                    Owner Details{' '}
                  </Typography>
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
                  <Typography
                    sx={{ color: '#435834', textAlign: 'left' }}
                    variant="h8"
                  >
                    {' '}
                    Business Details{' '}
                  </Typography>
                  <TextField
                    fullWidth
                    label="Rental Company Name"
                    size="small"
                    variant="filled"
                    {...spread('businessName')}
                  />
                  <TextField
                    color="secondary"
                    label="role"
                    name="role"
                    size="small"
                    style={{ display: 'none' }}
                    type="hidden"
                    value={initialValues.role}
                    variant="filled"
                    {...spread('role')}
                  />
                  <TextField
                    color="secondary"
                    fullWidth
                    label="Business Contact Number"
                    name="businessContactNo"
                    size="small"
                    variant="filled"
                  />
                  <TextField
                    color="secondary"
                    fullWidth
                    label="Business Registration Number"
                    name="registrationNo"
                    size="small"
                    variant="filled"
                  />
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

export default RentalStore;
