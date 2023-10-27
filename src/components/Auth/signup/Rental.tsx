import type { FormikProps } from 'formik';

import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

import type { SignUpPageProps } from '../../../pages/ServiceProviderSignUp';

import { phone } from '../../../lib/commonValidators';
import GetFormikProps from '../../../utils/GetFormikProps';
import AddressInputs, {
  addressInitialValues,
  addressValidators,
} from '../AddressInputs';
// import { Link } from "react-router-dom" ;

const validationSchema = yup.object({
  businessContactNo: yup
    .string()
    .required('Contact Number is required')
    .matches(phone, 'Invalid number'),
  businessName: yup.string().required('Business Name is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  registrationNo: yup
    .string()
    .required('Business Registration number is required'),
  ...addressValidators,
});

function RentalStore({
  formData,
  nextPage,
  previousPage,
  updateFormData,
}: SignUpPageProps) {
  const formRef = useRef(null);
  const initialValues = {
    businessContactNo: formData.contactNo ?? '',
    businessName: formData.businessName ?? '',
    firstName: formData.firstName ?? '',
    lastName: formData.lastName ?? '',
    registrationNo: formData.registrationNo ?? '',
    role: formData.role ?? 'RENTER',
    ...addressInitialValues(formData),
  };
  return (
    <>
      {/* Rental Store SignUp*/}
      <Formik
        onSubmit={(values) => {
          updateFormData(values);
          nextPage();
        }}
        initialValues={initialValues}
        innerRef={formRef}
        validationSchema={validationSchema}
      >
        {(FormikProps: FormikProps<Partial<RegisterRequest>>) => {
          const spread = GetFormikProps(FormikProps);
          return (
            <Form onSubmit={FormikProps.handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  margin: '10px',
                  maxHeight: '350px',
                  overflowY: 'auto',
                  padding: '20px',
                }}
              >
                <Stack gap={2} style={{ justifyContent: 'center' }}>
                  <Typography
                    sx={{ color: '#435834', textAlign: 'left' }}
                    variant="h6"
                  >
                    Owner Details
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      color="secondary"
                      label="Your First Name"
                      size="small"
                      variant="filled"
                      {...spread('firstName')}
                    />
                    <TextField
                      color="secondary"
                      label="Your Last Name"
                      size="small"
                      variant="filled"
                      {...spread('lastName')}
                    />
                  </Box>
                  <Typography
                    sx={{ color: '#435834', textAlign: 'left' }}
                    variant="h6"
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
                    {...spread('businessContactNo')}
                  />
                  <TextField
                    color="secondary"
                    fullWidth
                    label="Business Registration Number"
                    name="registrationNo"
                    size="small"
                    variant="filled"
                    {...spread('registrationNo')}
                  />
                  <AddressInputs homeowner={false} spread={spread} />
                </Stack>
              </Box>
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
                  sx={{ borderRadius: 2, margin: 3, width: 1 / 2 }}
                  type="button"
                  variant="contained"
                >
                  Previous
                </Button>
                <Button
                  color="primary"
                  size="large"
                  sx={{ borderRadius: 2, margin: 3, width: 1 / 2 }}
                  type="submit"
                  variant="contained"
                >
                  Next
                </Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default RentalStore;
