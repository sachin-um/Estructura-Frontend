import { useRef } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";

const AddDocuments = ({ onDocumentSelect, selectedDocuments }) => {
    const fileInputRef = useRef(null);

    const handleDocumentSelect = () => {
        fileInputRef.current.click();
    }

    const handleDocumentChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0){
            onDocumentSelect(files);
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
                    marginTop: 2,
                    width: "500px",
                    marginBottom: "50px",
                }}

                onClick={handleDocumentSelect}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    onChange={handleDocumentChange}
                />
                <IconButton color="primary">
                    <AttachFileIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Upload documents</Typography>

                <Grid container spacing={1} mt={2}>
                    {selectedDocuments.map((document, index) => (
                        <Grid item key={index}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <AttachFileIcon fontSize="large" />
                                <Typography variant="body2">{document.name}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                
            </Box>
        </label>
    )
}

export default AddDocuments;