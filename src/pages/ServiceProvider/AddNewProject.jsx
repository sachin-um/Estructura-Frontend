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
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const placeholdersCount = images.length === 0 ? 3 :images.length >= 4 ? 0 : 3 - (images.length-1);
  const placeholders=Array.from({ length: placeholdersCount }).fill(0);
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedFileNames = [...fileNames];
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);
  };
  // const [image, setImage] = useState(null);
  // const [fileName, setFileName] = useState("No selected file");
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
              style={{ borderRadius: "5px" ,display: "flex",justifyContent: "center",}}
              position="relative"
              height="80px"
              width="100%"
              marginTop="20px"
              sx={{ borderStyle: "dashed", borderColor: "grey" }}
              onClick={() => document.querySelector(".input-field").click()}
            >
              <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  hidden
                  multiple
                  onChange={({ target: { files } }) => {
                    if (files && files.length > 0) {
                      const fileArray = Array.from(files).slice(0,4);
                      const fileNames = fileArray.map(file => file.name);
                      setFileNames(fileNames);
                      const imageUrls = fileArray.map(file => URL.createObjectURL(file));
                      setImages(imageUrls);
                    }
                  }}
                />
                <MdCloudUpload color="#1475cf" size={60} />
                      <p>Browse Files to upload</p>
            </Box>
            <Box
              style={{ borderRadius: "5px" }}
              position="relative"
              height="300px"
              width="100%"
              marginTop="20px"
              sx={{ borderStyle: "dashed", borderColor: "grey" }}
            >
                {images[0] ? (
                  <img
                    src={images[0]}
                    style={{ width: "100%", height: "300px" }}
                    alt={fileNames[0]}
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
            </Box>

            {/* <Typography>Images</Typography> */}

            <Grid container spacing={1}>
                {images.length > 1 && images.slice(1, 4).map((imageUrl, index) => (
                  <Grid item xs={4} key={index}>
                    <Box
                      position="relative"
                      height="150px"
                      width="100%"
                      marginTop="30px"
                    >
                      <img
                        src={imageUrl}
                        style={{ width: "100%", height: "150px" }}
                        alt={fileNames[index + 1]}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top:"10px",
                          right: "10px",
                          backgroundColor:"red",
                          color: "white",
                          padding: "5px",
                          cursor: "pointer"
                        }}
                        onClick={() => removeImage(index+1)}
                      >
                        Remove
                      </span>
                      </Box>
                      </Grid>
                    ))}
                {placeholders.map((index) => (
                  <Grid item xs={4} key={index}>
                      <Box
                        position="relative"
                        height="150px"
                        width="100%"
                        marginTop="30px"
                      >
                        
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
                      </Box>
                  </Grid>
                ))}
                
                {/* <div key={index} className="image-container">
                      <img
                        src={imageUrl}
                        style={{ width: "100%", height: "100%" }}
                        alt={fileNames[index + 1]} // We add 1 to the index to match the correct fileName in the fileNames array.
                      />
                      <span
                        className="remove-icon"
                        onClick={() => {
                          const updatedImages = [...images];
                          updatedImages.splice(index + 1, 1); // We add 1 to the index to match the correct image in the images array.
                          setImages(updatedImages);

                          const updatedFileNames = [...fileNames];
                          updatedFileNames.splice(index + 1, 1); // We add 1 to the index to match the correct fileName in the fileNames array.
                          setFileNames(updatedFileNames);
                        }}
                      >
                        Remove
                      </span>
                    </div>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  {images[1] ? (
                  <img
                    src={images[1]}
                    style={{ width: "100%", height: "300px" }}
                    alt={fileNames[1]}
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
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  {images[1] ? (
                  <img
                    src={images[1]}
                    style={{ width: "100%", height: "300px" }}
                    alt={fileNames[1]}
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
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  {images[1] ? (
                  <img
                    src={images[1]}
                    style={{ width: "100%", height: "300px" }}
                    alt={fileNames[1]}
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
                </Box>
              </Grid> */}
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
