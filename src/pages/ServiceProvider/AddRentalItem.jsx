import TopBar from "../../components/TopBar";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Divider from "@mui/material/Divider";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
  Tooltip,
  FormControl,
  FormControlLabel,
  InputAdornment,
  RadioGroup,
  Radio,
  Stack,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Snackbar,
  Alert,
} from "@mui/material";

function AddRentalItem() {
  const [mainImage, setMainImage] = useState(null);
  const [mainImageName, setMainImageName] = useState(null);
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [doc, setDoc] = useState([]);
  const [docNames, setDocNames] = useState([]);
  const docPlaceHoldersCount =
    doc.length === 0 ? 3 : doc.length >= 3 ? 0 : 3 - doc.length;
  const docPlaceholders = Array.from({ length: docPlaceHoldersCount }).fill(0);

  const placeholdersCount =
    images.length === 0 ? 3 : images.length >= 3 ? 0 : 3 - images.length;
  const placeholders = Array.from({ length: placeholdersCount }).fill(0);

  const removeMainImage = () => {
    setMainImage(null);
    setMainImageName(null);
  };
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedFileNames = [...fileNames];
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);
  };
  const removeDoc = (index) => {
    const updatedDocs = [...doc];
    updatedDocs.splice(index, 1);
    setDoc(updatedDocs);

    const updatedFileNames = [...docNames];
    updatedFileNames.splice(index, 1);
    setDocNames(updatedFileNames);
  };
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
        <Grid container justifyContent="center" spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              marginTop: "1rem",
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
                marginTop: "30px",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  fontSize: "1.5rem",
                  textAlign: "left",
                  lineHeight: "1",

                  fontWeight: "bold",
                }}
              >
                Add Rental Item
              </Typography>
              <Divider />

              <TextField
                sx={{ width: "1", borderRadius: 2, margin: 1 }}
                label="Item Name"
                type="name"
                fullWidth
                variant="filled"
                color="secondary"
              />
              <Grid style={{ justifyContent: "center" }}>
                <TextField
                  sx={{ width: "1", borderRadius: 2, margin: 1 }}
                  label="Item Description"
                  id="filled-multiline-static"
                  multiline
                  rows={10}
                  variant="filled"
                />
              </Grid>
              <TextField
                InputProps={{
                  sx: { borderRadius: 2 },
                  startAdornment: (
                    <InputAdornment position="start">LKR</InputAdornment>
                  ),
                }}
                sx={{ width: "1", margin: 1 }}
                label="Rental Price"
                type="price"
                fullWidth
                variant="filled"
                color="secondary"
              />
              <FormControl fullWidth variant="filled">
                <InputLabel id="demo-simple-select-label">
                  Rental Duration
                </InputLabel>
                <Select
                  sx={{ width: "1", margin: 1, justifyContent: "center" }}
                  fullWidth
                  color="secondary"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Rental Duration"
                >
                  <MenuItem value={1}>Per Hour</MenuItem>
                  <MenuItem value={2}>Per Month</MenuItem>
                  <MenuItem value={3}>Per Kilometer</MenuItem>
                </Select>
              </FormControl>

              <Divider />
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              paddingRight: "5rem",
              marginTop: "4.7rem",
              justifyContent: "center",
            }}
          >
            <Divider />
            <Typography
              style={{
                textAlign: "left",
                marginTop: "5px",
                marginBottom: "2px",
              }}
            >
              Add images of the item
            </Typography>
            {mainImage ? (
              <Box
                style={{ borderRadius: "5px", backgroundColor: "#F9F6EE" }}
                position="relative"
                height="300px"
                width="100%"
                marginTop="20px"
                sx={{ borderStyle: "dashed", borderColor: "grey" }}
              >
                <img
                  src={mainImage}
                  style={{ width: "100%", height: "300px" }}
                  alt={mainImageName}
                />
                <IconButton
                  size="small"
                  onClick={() => removeMainImage()}
                  style={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    backgroundColor: "white",
                    color: "red",
                  }}
                >
                  <Tooltip title="Remove Image">
                    <DeleteIcon />
                  </Tooltip>
                </IconButton>
              </Box>
            ) : (
              <Box
                style={{ borderRadius: "5px", backgroundColor: "#F9F6EE" }}
                position="relative"
                height="300px"
                width="100%"
                marginTop="20px"
                sx={{ borderStyle: "dashed", borderColor: "grey" }}
                onClick={() =>
                  document.querySelector(".input-main-img").click()
                }
              >
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "100px",
                  }}
                >
                  <AddPhotoAlternateIcon />
                  <input
                    type="file"
                    accept="image/*"
                    className="input-main-img"
                    hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setMainImageName(files[0].name);
                      if (files) {
                        setMainImage(URL.createObjectURL(files[0]));
                      }
                    }}
                  />
                </Grid>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  Main Image
                </Typography>
              </Box>
            )}
            <Divider sx={{ marginTop: "10px" }} />
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              <Typography
                style={{
                  textAlign: "left",
                  marginTop: "10px",
                  marginBottom: "2px",
                }}
              >
                Add more images
              </Typography>
              <Grid>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #435834",
                    color: "#435834",
                  }}
                  variant="contained"
                  fullWidth
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
                        const fileArray = Array.from(files).slice(0, 3);
                        const fileNames = fileArray.map((file) => file.name);
                        setFileNames(fileNames);
                        const imageUrls = fileArray.map((file) =>
                          URL.createObjectURL(file)
                        );
                        setImages(imageUrls);
                      }
                    }}
                  />
                  <AddIcon />
                  <Typography
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Select
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              {images.length > 0 &&
                images.map((imageUrl, index) => (
                  <Grid item xs={4} key={index}>
                    <Box
                      position="relative"
                      height="150px"
                      width="100%"
                      marginTop="30px"
                      sx={{ borderStyle: "dashed", borderColor: "grey" }}
                    >
                      <img
                        src={imageUrl}
                        style={{ width: "100%", height: "150px" }}
                        alt={fileNames[index]}
                      />
                      <IconButton
                        size="small"
                        onClick={() => removeImage(index)}
                        style={{
                          position: "absolute",
                          top: 5,
                          right: 5,
                          backgroundColor: "white",
                          color: "red",
                        }}
                      >
                        <Tooltip title="Remove Image">
                          <DeleteIcon />
                        </Tooltip>
                      </IconButton>
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
                    sx={{ borderStyle: "dashed", backgroundColor: "#F9F6EE" }}
                  >
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                      }}
                    >
                      <ImageIcon />
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                        backgroundColor: "#F9F6EE",
                      }}
                    >
                      <p>Optional Images</p>
                    </Grid>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ marginTop: "20px" }} />
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 1,
            }}
          >
            <Button
              sx={{ width: 1, borderRadius: 2, margin: 1 }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              ADD ITEM
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddRentalItem;
