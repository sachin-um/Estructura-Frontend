import { useRef, useState } from "react";
import { Box, Typography, IconButton, Grid, Tooltip } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

const AddImages = ({ onFileSelect, selectedFiles, onRemoveImage }) => {
    const fileInputRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleFileSelect = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0){
            onFileSelect(files);
        }
    }

    return (
        <label>
            <Box
                sx={{
                    border: "2px dashed #ccc",
                    padding: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    width: "500px",
                }}
                onClick={handleFileSelect}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    onChange={handleFileChange}
                />
                <IconButton color="primary">
                    <CloudUploadIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Upload Images</Typography>
                
                <Grid container spacing={1} mt={2}>
                    {selectedFiles.map((file, index) => (
                        <Grid item key={index}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Image ${index}`}
                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                    onClick={() => setSelectedImageIndex(index)}
                                />
                                {selectedImageIndex === index && (
                                    <IconButton
                                        color="secondary"
                                        onClick={() => {
                                            setSelectedImageIndex(null);
                                            onRemoveImage(index);
                                        }}
                                    >
                                        <Tooltip title="Remove Image">
                                            <DeleteIcon fontSize="small" />
                                        </Tooltip>

                                    </IconButton>
                                )}
                                
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </label>
    )
}

export default AddImages;