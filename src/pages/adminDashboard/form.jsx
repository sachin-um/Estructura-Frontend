import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Formik } from 'formik';
import * as yup from 'yup';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header subtitle="Create a New User Profile" title="CREATE USER" />

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={checkoutSchema}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                error={!!touched.firstName && !!errors.firstName}
                fullWidth
                helperText={touched.firstName && errors.firstName}
                label="First Name"
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 2' }}
                type="text"
                value={values.firstName}
                variant="filled"
              />
              <TextField
                error={!!touched.lastName && !!errors.lastName}
                fullWidth
                helperText={touched.lastName && errors.lastName}
                label="Last Name"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 2' }}
                type="text"
                value={values.lastName}
                variant="filled"
              />
              <TextField
                error={!!touched.email && !!errors.email}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 4' }}
                type="text"
                value={values.email}
                variant="filled"
              />
              <TextField
                error={!!touched.contact && !!errors.contact}
                fullWidth
                helperText={touched.contact && errors.contact}
                label="Contact Number"
                name="contact"
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 4' }}
                type="text"
                value={values.contact}
                variant="filled"
              />
              <TextField
                error={!!touched.address1 && !!errors.address1}
                fullWidth
                helperText={touched.address1 && errors.address1}
                label="Address 1"
                name="address1"
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 4' }}
                type="text"
                value={values.address1}
                variant="filled"
              />
              <TextField
                error={!!touched.address2 && !!errors.address2}
                fullWidth
                helperText={touched.address2 && errors.address2}
                label="Address 2"
                name="address2"
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 4' }}
                type="text"
                value={values.address2}
                variant="filled"
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button color="secondary" type="submit" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  email: yup.string().email('invalid email').required('required'),
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
});
const initialValues = {
  address1: '',
  address2: '',
  contact: '',
  email: '',
  firstName: '',
  lastName: '',
};

export default Form;
