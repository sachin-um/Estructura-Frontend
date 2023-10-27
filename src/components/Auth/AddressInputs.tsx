import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { ErrorMessage } from 'formik';
import * as yup from 'yup';

const districts = [
  'Ampara',
  'Anuradhapura',
  'Badulla',
  'Batticaloa',
  'Colombo',
  'Galle',
  'Gampaha',
  'Hambantota',
  'Jaffna',
  'Kalutara',
  'Kandy',
  'Kegalle',
  'Kilinochchi',
  'Kurunegala',
  'Mannar',
  'Matale',
  'Matara',
  'Monaragala',
  'Mullaitivu',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Puttalam',
  'Ratnapura',
  'Trincomalee',
  'Vavuniya',
];

function AddressInputs(props: {
  homeowner: boolean;
  spread: (
    field: string,
    helper?: boolean,
    onChange?: boolean,
    value?: boolean,
    error?: boolean,
    setDisabledToIsSubmitting?: boolean,
  ) => Record<string, unknown>;
}) {
  const { homeowner, spread } = props;
  return (
    <>
      <Typography
        fontSize={'0.9rem'}
        sx={{ color: '#435834', textAlign: 'left' }}
      >
        {homeowner ? 'Your' : 'Business'} Address
      </Typography>
      <TextField
        color="secondary"
        fullWidth
        label="Address Line 1"
        type="text"
        variant="filled"
        {...spread('addressLine1')}
      />
      <TextField
        color="secondary"
        fullWidth
        label="Address Line 2"
        type="text"
        variant="filled"
        {...spread('addressLine2')}
      />
      <TextField
        color="secondary"
        fullWidth
        label="City"
        type="city"
        variant="filled"
        {...spread('city')}
      />
      <FormControl
        sx={{
          m: 1,
          marginLeft: 'auto',
          minWidth: 120,
          width: '100%',
        }}
        variant="filled"
      >
        <InputLabel color="secondary" id="selectDistrict">
          Select District
        </InputLabel>
        <Select
          displayEmpty
          labelId="selectDistrict-label"
          {...spread('district', false)}
        >
          {districts.map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
        <ErrorMessage name="district">
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
      </FormControl>
    </>
  );
}

const addressValidators = {
  addressLine1: yup.string().required('Address Line 1 is required'),
  addressLine2: yup.string().required('Address Line 2 is required'),
  city: yup.string().required('City is required'),
  district: yup
    .string()
    .oneOf(districts, 'District has to be valid')
    .required('District is required'),
};

const addressInitialValues = (formData: {
  addressLine1: string;
  addressLine2: string;
  city: string;
  district: string;
}) => {
  return {
    addressLine1: formData.addressLine1 ?? '',
    addressLine2: formData.addressLine2 ?? '',
    city: formData.city ?? '',
    district: formData.district ?? '',
  };
};

export { addressInitialValues, addressValidators, districts };

export default AddressInputs;
