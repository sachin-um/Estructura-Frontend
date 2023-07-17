import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import TopBar from "../components/TopBar";
import API, { clearTokens } from "../lib/API";

const InitialValues = {
  email: "",
  password: "",
};

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a well formed email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function SignIn() {
  const FormRef = useRef();
  const Navigate = useNavigate();

  const Params = new URLSearchParams(window.location.search);
  const from = Params.get("from");
  const tokenExpired = Params.get("tokenExpired");
  console.log(from);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (tokenExpired == "true" && open == false) {
      setOpen(true);
    }
  }, []);

  const HandleSubmit = (values) => {
    const { setErrors, setSubmitting } = FormRef.current;
    setSubmitting(true);
    clearTokens();
    const email = values.email;
    const password = values.password;
    API.post("/auth/authenticate", {
      email,
      password,
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.success === true) {
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("accessToken", res.data.access_token);
            localStorage.setItem("refreshToken", res.data.refresh_token);
            if (from) {
              Navigate(from, { replace: true });
            } else {
              Navigate(`/${res.data.role.toLowerCase()}/dashboard`, {
                replace: true,
              });
            }
            console.log(from);
          } else {
            const violationsToErrors = (violations) => {
              const result = {};
              violations.forEach((violation) => {
                result[violation.field] = violation.message;
              });
              return result;
            };
            setErrors(violationsToErrors(res.data.validation_violations));
          }
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => console.log(JSON.stringify(err)));
    setSubmitting(false);
  };

  return (
    <>
      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "middle" }}
      >
        <Alert onClose={handleClose} severity='warning'>
          Your session has expired. Please sign in again.
        </Alert>
      </Snackbar>
      <TopBar title='Sign In' />
      <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent='center' spacing={4}>
          <Grid item xs={12} md={7} lg={7}>
            <Grid
              container
              style={{
                backgroundImage: 'url("/formBg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "4rem",
                  paddingRight: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Typography
                  variant='h4'
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
                    paddingBottom: "1rem",
                    marginTop: "auto",
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant='h4'
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
                  }}
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Grid
              container
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
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src='/Logo.png' alt='Logo' style={{ width: "40%" }} />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: "1rem" }}>
                <Typography
                  variant='h5'
                  gutterBottom
                  style={{ textAlign: "center", color: "#435834" }}
                >
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Formik
                  innerRef={FormRef}
                  onSubmit={HandleSubmit}
                  initialValues={InitialValues}
                  validationSchema={ValidationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        width: "100%",
                        maxWidth: "400px",
                        margin: "0 auto",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <TextField
                        label='User Name or Email'
                        fullWidth
                        variant='filled'
                        color='secondary'
                        name='email'
                        type='email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        error={touched.email && errors?.email}
                        helperText={touched.email && errors?.email}
                        disabled={isSubmitting}
                      />
                      <TextField
                        label='Password'
                        fullWidth
                        variant='filled'
                        color='secondary'
                        name='password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={touched.password && errors?.password}
                        helperText={touched.password && errors?.password}
                        disabled={isSubmitting}
                      />
                      <Grid container justifyContent='space-between'>
                        <Grid item style={{ marginRight: "3rem" }}>
                          <Link
                            to='/SignUp'
                            style={{ color: "#9D6432", textDecoration: "none" }}
                          >
                            Don't have an account? Register
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link
                            to='/ForgotPassword'
                            style={{ color: "#9D6432", textDecoration: "none" }}
                          >
                            Forgot Password?
                          </Link>
                        </Grid>
                      </Grid>
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        fullWidth
                        style={{ marginTop: "1.5rem" }}
                      >
                        Sign In
                      </Button>
                      {/* <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '0.5rem', color: '#000000', borderColor: '#304422' }} startIcon={<img src="/google.png" alt="Google Logo" style={{ height: '1.5rem', marginRight: '0.5rem' }} />}>
                    Sign in with Google
                  </Button> */}
                    </form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignIn;

// const authenticate = (data) => {
// };
