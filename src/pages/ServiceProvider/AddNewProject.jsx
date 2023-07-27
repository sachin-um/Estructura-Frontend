import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';

import TopBar from '../../components/TopBar';

function AddNewProject() {
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [doc, setDoc] = useState([]);
  const [docNames, setDocNames] = useState([]);
  const docplaceholdersCount =
    doc.length === 0 ? 3 : doc.length >= 3 ? 0 : 3 - (doc.length - 1);
  const docplaceholders = Array.from({ length: docplaceholdersCount }).fill(0);

  const placeholdersCount =
    images.length === 0 ? 3 : images.length >= 4 ? 0 : 3 - (images.length - 1);
  const placeholders = Array.from({ length: placeholdersCount }).fill(0);

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
        style={{
          alignItems: 'center',
          backgroundColor: '#f7f8f1',
          display: 'flex',
          margin: '2',
          minHeight: '100vh',
        }}
        maxWidth={false}
      >
        <Grid style={{ justifyContent: 'center' }}></Grid>

        <Grid container justifyContent="center" spacing={4}>
          <Grid
            style={{
              marginTop: '2rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={6}
            xs={12}
          >
            <Typography
              style={{
                fontSize: '1.5rem',
                lineHeight: '1',
                textAlign: 'left',
              }}
              variant="h4"
            >
              Add Project
            </Typography>
            {/* <Typography
              variant="h6"
              style={{
                fontSize: "1rem",
                textAlign: "left",
                lineHeight: "1",
                marginTop: "30px",
              }}
            >
              Add images related to your project
            </Typography> */}
            {/* <Button
                  sx={{ width: 1 / 2, borderRadius: 2, margin: 1 }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Add
                </Button> */}
            <Grid style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                color="primary"
                fullWidth
                marginTop="20px"
                onClick={() => document.querySelector('.input-field').click()}
                sx={{ borderRadius: 2, margin: 1, padding: 0, width: 1 / 2 }}
                variant="contained"
                width="50%"
              >
                <input
                  onChange={({ target: { files } }) => {
                    if (files && files.length > 0) {
                      const fileArray = Array.from(files).slice(0, 4);
                      const fileNames = fileArray.map((file) => file.name);
                      setFileNames(fileNames);
                      const imageUrls = fileArray.map((file) =>
                        URL.createObjectURL(file),
                      );
                      setImages(imageUrls);
                    }
                  }}
                  accept="image/*"
                  className="input-field"
                  hidden
                  multiple
                  type="file"
                />
                <MdCloudUpload color="white" size={30} />
                <p>Browse Files to upload</p>
              </Button>
            </Grid>
            <Box
              height="300px"
              marginTop="20px"
              position="relative"
              style={{ backgroundColor: '#F9F6EE', borderRadius: '5px' }}
              sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
              width="100%"
            >
              {images[0] ? (
                <>
                  <img
                    alt={fileNames[0]}
                    src={images[0]}
                    style={{ height: '300px', width: '100%' }}
                  />
                  <span
                    style={{
                      backgroundColor: 'black',
                      color: 'red',
                      cursor: 'pointer',
                      padding: '5px',
                      position: 'absolute',
                      right: '10px',
                      top: '10px',
                    }}
                    onClick={() => removeImage(0)}
                  >
                    <DeleteIcon />
                  </span>
                </>
              ) : (
                <>
                  <Grid
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '100px',
                    }}
                  >
                    {/* <MdCloudUpload color="#1475cf" size={60} /> */}

                    <ImageIcon />
                  </Grid>

                  {/* <MdCloudUpload color="#1475cf" size={60} /> */}
                  <Typography
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '10px',
                    }}
                  >
                    Main Image
                  </Typography>
                </>
              )}
            </Box>

            {/* <Typography>Images</Typography> */}

            <Grid container spacing={2}>
              {images.length > 1 &&
                images.slice(1, 4).map((imageUrl, index) => (
                  <Grid item key={index} xs={4}>
                    <Box
                      height="150px"
                      marginTop="30px"
                      position="relative"
                      sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
                      width="100%"
                    >
                      <img
                        alt={fileNames[index + 1]}
                        src={imageUrl}
                        style={{ height: '150px', width: '100%' }}
                      />
                      <span
                        style={{
                          backgroundColor: 'black',
                          color: 'red',
                          cursor: 'pointer',
                          padding: '5px',
                          position: 'absolute',
                          right: '10px',
                          top: '10px',
                        }}
                        onClick={() => removeImage(index + 1)}
                      >
                        <DeleteIcon />
                      </span>
                    </Box>
                  </Grid>
                ))}
              {placeholders.map((index) => (
                <Grid item key={index} xs={4}>
                  <Box
                    height="150px"
                    marginTop="30px"
                    position="relative"
                    sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
                    width="100%"
                  >
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '50px',
                      }}
                    >
                      {/* <MdCloudUpload color="#1475cf" size={60} /> */}

                      <ImageIcon />
                    </Grid>
                    <Grid
                      style={{
                        backgroundColor: '#F9F6EE',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      {/* <MdCloudUpload color="#1475cf" size={60} /> */}
                      <p>Optional Images</p>
                    </Grid>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
              }}
            >
              <Button
                color="primary"
                fullWidth
                onClick={() => document.querySelector('.input-field').click()}
                sx={{ borderRadius: 2, margin: 1, padding: 0, width: 1 / 2 }}
                variant="contained"
                width="50%"
              >
                <input
                  onChange={({ target: { files } }) => {
                    if (files && files.length > 0) {
                      const fileArray = Array.from(files).slice(0, 4);
                      const fileNames = fileArray.map((file) => file.name);
                      setFileNames(fileNames);
                      const imageUrls = fileArray.map((file) =>
                        URL.createObjectURL(file),
                      );
                      setImages(imageUrls);
                    }
                  }}
                  accept=".pdf,.doc"
                  className="input-field"
                  hidden
                  multiple
                  type="file"
                />
                <MdCloudUpload color="white" size={30} />
                <p>Browse Documents to upload</p>
              </Button>
            </Grid>
            <Grid container spacing={2}>
              {docNames.length > 0 &&
                docNames.map((fileName, index) => (
                  <Grid item key={index} xs={4}>
                    <Box
                      height="150px"
                      marginTop="30px"
                      position="relative"
                      sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
                      width="100%"
                    >
                      <InsertDriveFileIcon
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          marginLeft: '10px',
                          marginTop: '10px',
                        }}
                      />

                      {/* <MdCloudUpload color="#1475cf" size={60} /> */}
                      <Typography
                        style={{
                          backgroundColor: '#F9F6EE',
                          justifyContent: 'center',
                          marginLeft: '20px',
                          marginTop: '10px',
                        }}
                      >
                        {fileName}
                      </Typography>
                      <span
                        style={{
                          // position: "absolute",
                          // top: "10px",
                          // right: "10px",
                          backgroundColor: 'black',
                          color: 'red',
                          cursor: 'pointer',
                          padding: '5px',
                        }}
                        onClick={() => removeImage(index + 1)}
                      >
                        <DeleteIcon />
                      </span>
                    </Box>
                  </Grid>
                ))}
              {placeholders.map((index) => (
                <Grid item key={index} xs={4}>
                  <Box
                    height="50px"
                    marginTop="50px"
                    position="relative"
                    style={{ display: 'flex' }}
                    sx={{ borderColor: 'grey', borderStyle: 'dashed' }}
                    width="100%"
                  >
                    {/* <MdCloudUpload color="#1475cf" size={60} /> */}

                    <AttachFileIcon
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginLeft: '10px',
                        marginTop: '10px',
                      }}
                    />

                    {/* <MdCloudUpload color="#1475cf" size={60} /> */}
                    <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      Documents
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* <Typography
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
            </Grid> */}
          </Grid>
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
              paddingBottom: '2rem',
              paddingTop: '2rem',
            }}
            item
            md={6}
            xs={12}
          >
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginTop: '75px',
                maxWidth: '800px',
                width: '80%',
              }}
            >
              <TextField
                color="secondary"
                fullWidth
                label="Project Title"
                sx={{ borderRadius: 2, margin: 1, width: '1' }}
                type="title"
                variant="filled"
              />
              <Grid style={{ justifyContent: 'center' }}>
                <TextField
                  id="filled-multiline-static"
                  label="Project Description"
                  multiline
                  rows={15}
                  sx={{ borderRadius: 2, margin: 1, width: '1' }}
                  variant="filled"
                />
              </Grid>
              <TextField
                color="secondary"
                fullWidth
                label="Project Budget"
                sx={{ borderRadius: 2, margin: 1, width: '1' }}
                type="Budget"
                variant="filled"
              />
              <TextField
                color="secondary"
                fullWidth
                label="Location"
                sx={{ borderRadius: 2, margin: 1, width: '1' }}
                type="Location"
                variant="filled"
              />
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 10,
                }}
              >
                <Button
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: 2, margin: 1, width: 1 / 2 }}
                  type="submit"
                  variant="contained"
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
