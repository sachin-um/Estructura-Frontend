import type { FormikProps } from 'formik';

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

import type { SignUpPageProps } from '../../../pages/ServiceProviderSignUp';

import GetFormikProps from '../../../utils/GetFormikProps';

const options = [
  { label: 'Ampara', value: 'ampara' },
  { label: 'Anuradhapura', value: 'anuradhapura' },
  { label: 'Badulla', value: 'badulla' },
  { label: 'Batticaloa', value: 'batticaloa' },
  { label: 'Colombo', value: 'colombo' },
  { label: 'Galle', value: 'galle' },
  { label: 'Gampaha', value: 'gampaha' },
  { label: 'Hambantota', value: 'hambantota' },
  { label: 'Jaffna', value: 'jaffna' },
  { label: 'Kalutara', value: 'kalutara' },
  { label: 'Kandy', value: 'kandy' },
  { label: 'Kegalle', value: 'kegalle' },
  { label: 'Kilinochchi', value: 'kilinochchi' },
  { label: 'Kurunegala', value: 'kurunegala' },
  { label: 'Mannar', value: 'mannar' },
  { label: 'Matale', value: 'matale' },
  { label: 'Matara', value: 'matara' },
  { label: 'Monaragala', value: 'monaragala' },
  { label: 'Mullaitivu', value: 'mullaitivu' },
  { label: 'Nuwara Eliya', value: 'nuwaraeliya' },
  { label: 'Polonnaruwa', value: 'polonnaruwa' },
  { label: 'Puttalam', value: 'puttalam' },
  { label: 'Ratnapura', value: 'ratnapura' },
  { label: 'Trincomalee', value: 'trincomalee' },
  { label: 'Vavuniya', value: 'vavuniya' },
];

function ServiceProviderPage4({
  formData,
  nextPage,
  pageImage,
  previousPage,
  updateFormData,
}: SignUpPageProps) {
  const [selected, setSelected] = useState<typeof options>([]);
  const formRef = useRef(null);
  const initialValues = {
    serviceAreas: formData.serviceAreas ?? ['Islandwide'],
  };
  return (
    <>
      <Container
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
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
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2rem',
                minHeight: '85vh',
                padding: '1rem 2rem 3rem',
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
              <Grid item style={{ marginTop: '1rem', width: '80%' }} xs={12}>
                <Formik
                  onSubmit={(values) => {
                    //: HANDLE PAGE CHANGE HERE!!!
                    updateFormData(values);
                    nextPage();
                  }}
                  initialValues={initialValues}
                  innerRef={formRef}
                  // validationSchema={validationSchema}
                >
                  {(FormikProps: FormikProps<Partial<RegisterRequest>>) => {
                    const spread = GetFormikProps(FormikProps);
                    return (
                      <Form onSubmit={FormikProps.handleSubmit}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            margin: '10px',
                          }}
                        >
                          {
                            <Grid style={{ justifyContent: 'center' }}>
                              <Typography
                                marginBottom={'20px'}
                                textAlign="center"
                              >
                                Where do you offer your services?
                              </Typography>
                              <FormControl
                                fullWidth
                                sx={{ m: 1 }}
                                variant="filled"
                              >
                                <MultiSelect
                                  {...spread('serviceAreas', false)}
                                  onChange={(value: typeof options) => {
                                    setSelected(value);
                                    let valueArray = [];
                                    if (value.length === 25) {
                                      valueArray = ['Islandwide'];
                                    } else {
                                      valueArray = value.map(
                                        (option) => option.value,
                                      );
                                    }
                                    FormikProps.setFieldValue(
                                      'serviceAreas',
                                      valueArray,
                                      false,
                                    );
                                  }}
                                  overrideStrings={{
                                    search: 'Search districts..',
                                    selectAll: 'Islandwide',
                                    selectSomeItems: 'Select Area',
                                  }}
                                  isCreatable={false}
                                  labelledBy={'Select'}
                                  options={options}
                                  value={selected}
                                />
                              </FormControl>
                              <Grid
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '20px',
                                  width: '100%',
                                }}
                              >
                                <Button
                                  sx={{
                                    borderRadius: 2,
                                    margin: 1,
                                    width: 1 / 2,
                                  }}
                                  color="primary"
                                  onClick={previousPage}
                                  size="large"
                                  type="button"
                                  variant="contained"
                                >
                                  Previous
                                </Button>
                                <Button
                                  sx={{
                                    borderRadius: 2,
                                    margin: 1,
                                    width: 1 / 2,
                                  }}
                                  color="primary"
                                  size="large"
                                  type="submit"
                                  variant="contained"
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
