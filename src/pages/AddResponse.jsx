import { useRef, useState } from "react";
import TopBar from "../components/TopAppBar";
import Footer from "../components/Footer";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";
import { MdDescription, MdPictureAsPdf, MdInsertDriveFile } from "react-icons/md";
import "../assets/font.css"
import CloseIcon from "@mui/icons-material/Close";

const AddResponse = () => {
    const fileInputRef = useRef(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploadedDocuments, setUploadedDocuments] = useState([]);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        const filesArray = Array.from(files);
        const imagesArray = filesArray.filter(file => file.type.includes("image"));
        const documentsArray = filesArray.filter(file => !file.type.includes("image"));

        setUploadedImages((prevImages) => [...prevImages, ...imagesArray]);
        setUploadedDocuments((prevDocuments) => [...prevDocuments, ...documentsArray]);
    }

    const handleRemoveImage = (index) => {
        setUploadedImages ((prevImages) => prevImages.filter((_, i) => i !== index));
    }

    const handleRemoveDocument = (index) => {
        setUploadedDocuments((prevDocuments) => prevDocuments.filter((_, i) => i !== index));
    }

  return (
    <>
      <TopBar />
      <Grid container>

        <Grid item xs={12} md={6} style={{
          backgroundImage: "url('https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "115vh",
        }}>
        </Grid>

        <Grid item xs={12} md={6} style={{
          backgroundColor: "#f5f5f5",
          height: "115vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}>
          <Typography variant="h4" fontFamily="Poppins" color="primary" gutterBottom>
            From Vision to Creation
          </Typography>
          <Typography variant="subtitle1" fontFamily="Poppins" marginTop="20px" gutterBottom>
            Response Title: Your response in one sentence
          </Typography>
          <TextField
            id="response-title"
            label="Response Title"
            variant="outlined"
            fullWidth
          />

          <Typography variant="subtitle1" fontFamily="Poppins" marginTop="20px" gutterBottom>
            Your Response
          </Typography>
          <TextField
            id="your-response"
            label="Describe your response"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />

        <Typography variant="subtitle1" fontFamily="Poppins" marginTop="20px" gutterBottom>
            Enter your estimated budget range
        </Typography>
        <Grid container spacing={10} alignItems="center">
            <Grid item>
                <Typography variant="subtitle2">
                    Min
                </Typography>
                <TextField
                    id="min-price"
                    label="Min Price"
                    variant="outlined"
                    sx={{ width: "150px" }}
                />
            </Grid>
            <Grid item>
                <Typography variant="subtitle2">
                    Max
                </Typography>
                <TextField
                    id="max-price"
                    label="Max Price"
                    variant="outlined"
                    sx={{ width: "150px" }}
                />
            </Grid>
        </Grid>

        <Typography variant="subtitle1" fontFamily="Poppins" marginTop="20px" gutterBottom>
            Do you have any images/documents that you want to share with us?
        </Typography>
        <Box
            onClick={handleUploadClick}
            sx={{
                border: "2px dashed #bdbdbd",
                borderRadius: "8px",
                padding: "20px",
                cursor: "pointer",
                marginTop: "20px"
            }}
        >
            <Typography variant="body1" fontFamily="Poppins" color="textSecondary">
                Click here to upload images
            </Typography>
            <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {uploadedImages.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                    <img
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded ${index}`}
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px", margin: "5px" }}
                    />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        padding: 0,
                        background: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(index);
                    }}
                >
                    <CloseIcon fontSize="small" style={{ color: "red"}} />
                </div>
            </div>
            ))}
            </div>
        </Box>

        <Box
            onClick={handleUploadClick}
            sx={{
                border: "2px dashed #bdbdbd",
                borderRadius: "8px",
                padding: "20px",
                cursor: "pointer",
                marginTop: "20px"
            }}
        >
            <Typography variant="body1" fontFamily="Poppins" color="textSecondary">
                Click here to upload documents
            </Typography>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                multiple
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {uploadedDocuments.map((document, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        {document.type.includes("pdf") ? (
                            <MdPictureAsPdf size={40} />
                        ) : document.type.includes("word") || document.type.includes("document") ? (
                            <MdDescription size={40} />
                        ) : (
                            <MdInsertDriveFile size ={40} />
                        )}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                padding: 0,
                                background: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'center',
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                background: "rgba(0, 0, 0, 0.5)",
                            }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveDocument(index);
                    }}
                >
                    <CloseIcon fontSize="small" style={{ color: "red"}} />
                </div>
            </div>
            ))}
        </div>
        </Box>

        <Button
            variant="contained"
            color="primary"
            sx={{ ml: 60, marginBottom: "30px", marginTop: "30px" }}
        >
            Send Response
        </Button>

        </Grid>
      </Grid>
    <Footer />
    </>
  );
};

export default AddResponse;