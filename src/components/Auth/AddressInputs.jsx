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
        <Select labelId='selectDistrict-label' {...spread("district", false)}>
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

export { districts };

export default AddressInputs;
