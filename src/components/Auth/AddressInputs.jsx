import * as yup from "yup";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const districts = [
  "Ampara",
  "Anuradhapur",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

function AddressInputs(props) {
  const { spread } = props;
  return (
    <>
      <Typography variant='h8' sx={{ textAlign: "left", color: "#435834" }}>
        {" "}
        Address{" "}
      </Typography>
      <TextField
        label='Address Line 1'
        type='text'
        fullWidth
        variant='filled'
        color='secondary'
        {...spread("addressLine1")}
      />
      <TextField
        label='Address Line 2'
        type='text'
        fullWidth
        variant='filled'
        color='secondary'
        {...spread("addressLine2")}
      />
      <TextField
        label='City'
        type='city'
        fullWidth
        variant='filled'
        color='secondary'
        {...spread("city")}
      />
      <FormControl
        variant='filled'
        sx={{
          m: 1,
          minWidth: 120,
          width: "100%",
          marginLeft: "auto",
        }}
      >
        <InputLabel id='selectDistrict' color='secondary'>
          Select District
        </InputLabel>
        <Select displayEmpty labelId='selectDistrict-label' {...spread("district", false)}>
          {districts.map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

const addressValidators = {
  addressLine1: yup.string().required("Address Line 1 is required"),
  addressLine2: yup.string().required("Address Line 2 is required"),
  city: yup.string().required("City is required"),
  district: yup
    .string()
    .oneOf(districts, "District has to be valid")
    .required("District is required"),
}

const addressInitialValues = {
  addressline1: "",
  addressline2: "",
  city: "",
  district: "",
}

export { districts, addressValidators, addressInitialValues };

export default AddressInputs;
