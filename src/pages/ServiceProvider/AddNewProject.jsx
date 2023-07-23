import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import TopBar from "../../components/TopBar";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Alert,
} from "@mui/material";

function AddNewProject() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <>
    <TopBar title="" />
      <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          margin: "2",
        }}
      >
        <Grid style={{ justifyContent: "center" }}></Grid>

        <Grid container justifyContent="center" spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontSize: "1.5rem",
                textAlign: "left",
                lineHeight: "1",
              }}
            >
              Add Project
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontSize: "1rem",
                textAlign: "left",
                lineHeight: "1",
                marginTop: "30px",
              }}
            >
              Add images related to your project
            </Typography>

            <Box
              style={{ borderRadius: "5px" }}
              position="relative"
              height="300px"
              width="100%"
              marginTop="20px"
              sx={{ borderStyle: "dashed", borderColor: "grey" }}
            >
              <form
                action=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => document.querySelector(".input-field").click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name);
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />

                {image ? (
                  <img
                    src={image}
                    style={{ width: "100%", height: "100%" }}
                    alt={fileName}
                  />
                ) : (
                  <>
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "100px",
                      }}
                    >
                      <MdCloudUpload color="#1475cf" size={60} />
                      <p>Browse Files to upload</p>
                    </Grid>
                  </>
                )}
              </form>
            </Box>

            {/* <Typography>Images</Typography> */}

            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              style={{
                fontSize: "1rem",
                textAlign: "left",
                lineHeight: "1",
                marginTop: "30px",
              }}
            >
              Add documents related to your project
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="200px"
                  width="70%"
                  marginTop="20px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="200px"
                  width="70%"
                  marginTop="20px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="200px"
                  width="70%"
                  marginTop="20px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "80%",
                maxWidth: "800px",
                marginTop: "75px",
              }}
            >
              <TextField
                sx={{ width: "1", borderRadius: 2, margin: 1 }}
                label="Project Title"
                type="title"
                fullWidth
                variant="filled"
                color="secondary"
              />
              <Grid style={{ justifyContent: "center" }}>
                <TextField
                  sx={{ width: "1", borderRadius: 2, margin: 1 }}
                  label="Project Description"
                  id="filled-multiline-static"
                  multiline
                  rows={15}
                  variant="filled"
                />
              </Grid>
              <TextField
                sx={{ width: "1", borderRadius: 2, margin: 1 }}
                label="Project Budget"
                type="Budget"
                fullWidth
                variant="filled"
                color="secondary"
              />
              <TextField
                sx={{ width: "1", borderRadius: 2, margin: 1 }}
                label="Location"
                type="Location"
                fullWidth
                variant="filled"
                color="secondary"
              />
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <Button
                  sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Add
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddNewProject;
