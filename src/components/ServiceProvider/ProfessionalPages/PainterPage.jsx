import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom" ;

function PainterPage({
  formData,
  updateFormData,
  handleDropdownChange,
  nextPage,
  previousPage,
}) {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

  const handleNext = () => {
    nextPage();
  };
  const handlePrevious = () => {
    previousPage();
  };
  // TODO: Change Layout
  return (
    <>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Grid
              container
              style={{
                backgroundImage: 'url("/signup/painter.jpg")',
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
                  variant="h4"
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
                  variant="h4"
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
          <Grid item xs={12} md={5}>
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
                minHeight: "80vh",
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
                <img src="/Logo.png" alt="Logo" style={{ width: "40%" }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Box
                  component="form"
                  sx={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                  onSubmit={HandleSubmit}
                >
                  <Box
                    component="form"
                    sx={{
                      margin: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                    }}
                    onSubmit={HandleSubmit}
                  >
                    {
                      <Grid style={{ justifyContent: "center" }}>
                        <TextField
                          InputProps={{ sx: { borderRadius: 2 } }}
                          sx={{ width: 1, margin: 1 }}
                          type="nic"
                          name="nic"
                          label="NIC"
                          variant="filled"
                          size="small"
                        />
                        <TextField
                          InputProps={{ sx: { borderRadius: 2 } }}
                          sx={{ width: 1, margin: 1 }}
                          type="website"
                          name="website"
                          label="Website"
                          variant="filled"
                          size="small"
                        />
                        <TextField
                          InputProps={{ sx: { borderRadius: 2 } }}
                          sx={{ width: 1, margin: 1 }}
                          type="SpecialQualification"
                          name="SpecialQualification"
                          label="Mention of any Special Qualification"
                          variant="filled"
                          size="small"
                        />
                        <Grid
                          style={{ justifyContent: "center" }}
                          sx={{ width: 1, margin: 1 }}
                        >
                          <Typography sx={{ margin: 1 }}>
                          Proof of Qualification
                          </Typography>
                          <Button
                            sx={{ width: 1 }}
                            variant="contained"
                            color="secondary"
                            component="label"
                          >
                            Upload Documents
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                        </Grid>
                      </Grid>
                    }

                    {/* { <Grid style={{display:"flex",justifyContent:"center",margin:10}}>
                  <Button sx={{ width: 1/3,  borderRadius:2 }}type='submit' color="primary" variant="contained" size='large'  href=''>Next</Button>
                  </Grid> } */}
                  </Box>

                 
                </Box>
                {
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      <Button
                        sx={{ width: 1 / 3, borderRadius: 2, margin: 1 }}
                        type="submit"
                        color="primary"
                        variant="contained"
                        size="large"
                        onClick={handlePrevious}
                      >
                        Previous
                      </Button>
                      <Button
                        sx={{ width: 1 / 3, borderRadius: 2, margin: 1 }}
                        type="submit"
                        color="primary"
                        variant="contained"
                        size="large"
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    </Grid>
                  }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PainterPage;