import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useRef } from "react";

// import { Link } from "react-router-dom" ;

const options = [
  { label: "Ampara", value: "ampara" },
  { label: "Anuradhapura", value: "anuradhapura" },
  { label: "Badulla", value: "badulla" },
  { label: "Batticaloa", value: "batticaloa" },
  { label: "Colombo", value: "colombo" },
  { label: "Galle", value: "galle" },
  { label: "Gampaha", value: "gampaha" },
  { label: "Hambantota", value: "hambantota" },
  { label: "Jaffna", value: "jaffna" },
  { label: "Kalutara", value: "kalutara" },
  { label: "Kandy", value: "kandy" },
  { label: "Kegalle", value: "kegalle" },
  { label: "Kilinochchi", value: "kilinochchi" },
  { label: "Kurunegala", value: "kurunegala" },
  { label: "Mannar", value: "mannar" },
  { label: "Matale", value: "matale" },
  { label: "Matara", value: "matara" },
  { label: "Monaragala", value: "monaragala" },
  { label: "Mullaitivu", value: "mullaitivu" },
  { label: "Nuwara Eliya", value: "nuwaraeliya" },
  { label: "Polonnaruwa", value: "polonnaruwa" },
  { label: "Puttalam", value: "puttalam" },
  { label: "Ratnapura", value: "ratnapura" },
  { label: "Trincomalee", value: "trincomalee" },
  { label: "Vavuniya", value: "vavuniya" },
];

function ServiceProviderPage4({
  formData,
  updateFormData,
  nextPage,
  pageImage,
  previousPage,
}) {
  const [selected, setSelected] = useState([]);
  const formRef=useRef(null);
  const initialValues={
      serviceAreas:formData.serviceAreas ?? ["Islandwide"]
  }
  return (
    <>
      <Container
        style={{
          backgroundColor: "#f7f8f1",
          display: "flex",
          alignItems: "center"

        }}
        maxWidth={false}
      >
        <Grid container justifyContent="center" spacing={4}> 
          <Grid
            style={{
              marginTop: '2rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={7}
            xs={12}
          >
            <Grid
              style={{
                alignItems: 'flex-end',
                backgroundImage: `url(${pageImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '20px',
                display: 'flex',
                height: '100%',
              }}
              container
            >
              <Grid
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '4rem',
                  paddingRight: '1rem',
                }}
                item
                xs={12}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    marginTop: 'auto',
                    paddingBottom: '1rem',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    textAlign: 'left',
                  }}
                  variant="h4"
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "1rem 2rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                minHeight:"85vh"
              }}
              container
            >
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
                item
                xs={12}
              >
                <img alt="Logo" src="/Logo.png" style={{ width: '40%' }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem",width:"80%" }}>
              <Formik
                  innerRef={formRef}
                  onSubmit={(values) => {
                    //: HANDLE PAGE CHANGE HERE!!!
                    updateFormData(values);
                    nextPage();
                  }}
                  initialValues={initialValues}
                  // validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    setFieldValue,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => {
                    const spread = (field, helper = true) => {
                      return {
                        name: field,
                        onBlur: handleBlur,
                        value: values[field],
                        error: touched[field] && !!errors[field],
                        disabled: isSubmitting,
                        ...(helper && {
                          helperText: touched[field] && errors[field],
                        }),
                      };
                    };
                    return (
                      <Form onSubmit={handleSubmit}>
                      <Box
                        sx={{
                          margin: "10px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                       
                        }}
                      >
                          {
                            <Grid style={{ justifyContent: "center" }}>
                              <Typography textAlign="center" marginBottom={"20px"}>
                                Where do you offer your services?
                              </Typography>
                                <FormControl fullWidth variant='filled'  sx={{ m: 1}}>
                                <MultiSelect {...spread("serviceAreas", false)}
                                  displayEmpty={true}
                                  options={options}
                                  value={selected}
                                  onChange={(value)=>{
                                    setSelected(value);
                                    let valueArray=[];
                                    if (value.length===25) {
                                      valueArray=["Islandwide"]
                                    }
                                    else{
                                      valueArray=value.map((option)=>option.value);
                                    }
                                    setFieldValue("serviceAreas",valueArray,false)
                                    }}
                                  labelledBy={"Select"}
                                  isCreatable={false}
                                  overrideStrings={{selectAll:"Islandwide",search:"Search districts..",selectSomeItems:"Select Area"}}
                                />
                                </FormControl>
                                <Grid
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop:"20px"
                                  }}
                                >
                                  <Button
                                    sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                                    type='button'
                                    color='primary'
                                    variant='contained'
                                    size='large'
                                    onClick={previousPage}
                                  >
                                    Previous
                                  </Button>
                                  <Button
                                    sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                                    type='submit'
                                    color='primary'
                                    variant='contained'
                                    size='large'
                                  >
                                    Next
                                  </Button>
                                </Grid>
                            </Grid>
                          }
                      </Box>
                      </Form>
                    );
                  }}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ServiceProviderPage4;
