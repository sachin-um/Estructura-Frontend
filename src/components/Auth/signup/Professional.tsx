import type { FormikProps } from 'formik';

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
} from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

import type { SignUpPageProps } from '../../../pages/ServiceProviderSignUp';

import { NIC, phone } from '../../../lib/commonValidators';
import GetFormikProps from '../../../utils/GetFormikProps';
import AddressInputs, {
  addressInitialValues,
  addressValidators,
} from '../AddressInputs';

const professionalCategories: [Role, string][] = [
  ['ARCHITECT', 'Architect'],
  ['INTERIORDESIGNER', 'Interior Designer'],
  ['CONSTRUCTIONCOMPANY', 'Construction Company'],
  ['MASONWORKER', 'Home Builder'],
  ['LANDSCAPEARCHITECT', 'Landscape Architect'],
  ['PAINTER', 'Painter'],
  ['CARPENTER', 'Carpenter '],
];

const validationSchema = yup.object({
  businessContactNo: yup
    .string()
    .required('Contact Number is required')
    .matches(phone, 'Invalid number'),
  businessName: yup.string().required('Business Name is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  nic: yup
    .string()
    .required('NIC is required')
    .matches(NIC, 'NIC Format Invalid'),
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
}: SignUpPageProps) {
  const formRef = useRef(null);
  const initialValues: Partial<RegisterRequest> = {
    businessName: formData.businessName ?? '',
    contactNo: formData.contactNo ?? '',
    firstName: formData.firstName ?? '',
    lastName: formData.lastName ?? '',
    // if possible, set from formData
    nic: formData.nic ?? '',
    role: formData.role ?? 'ARCHITECT',
    website: formData.website ?? '',
    ...addressInitialValues(formData),
  };

  return (
    <>
      <Formik
        onSubmit={(values) => {
          // TODO: HANDLE PAGE CHANGE HERE!!!
          updateFormData(values);
          if (handleDropdownChange) handleDropdownChange(values.role);
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
                    {' '}
                    Personal Details{' '}
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
                  <TextField
                    label="NIC"
                    name="nic"
                    size="small"
                    type="nic"
                    variant="filled"
                    {...spread('nic')}
                  />
                  <Typography
                    sx={{ color: '#435834', textAlign: 'left' }}
                    variant="h6"
                  >
                    {' '}
                    Business Details{' '}
                  </Typography>
                  <TextField
                    fullWidth
                    label="Business Name"
                    size="small"
                    variant="filled"
                    {...spread('businessName')}
                  />
                  <TextField // IDK why this was here
                    color="secondary"
                    label="Business Contact Number"
                    size="small"
                    type="tel"
                    variant="filled"
                    {...spread('businessContactNo')}
                    fullWidth
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
                  <ErrorMessage name="role">
                    {(msg) => (
                      <span
                        style={{
                          color: '#d32f2f',
                          fontSize: '0.75rem',
                          marginLeft: '14px',
                        }}
                      >
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>

                  <AddressInputs homeowner={false} spread={spread} />
                  <TextField
                    label="Website"
                    name="website"
                    size="small"
                    type="website"
                    variant="filled"
                    {...spread('website')}
                  />
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

export default Professional;
