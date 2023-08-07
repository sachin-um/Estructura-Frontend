import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, IconButton, Tooltip } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../assets/font.css';

const CreateBlogCard = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setCoverImage(null);
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card sx={{ backgroundColor: 'white', maxWidth:'35rem', margin: 'auto', borderRadius: 5}}>
      <Card
        sx={{ backgroundColor: '#f0f0f0', padding: 1.5, display: 'flex', justifyContent: 'center' }}
        onDoubleClick={() => setCoverImage(null)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleImageDrop}
      >
        {coverImage ? (
          <Box sx={{ position: 'relative', width: '33rem', height: 225, borderRadius: 5 }}>
            <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5 }} />
            <IconButton
              color="primary"
              size="small"
              onClick={handleImageRemove}
              sx={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'white' }}
            >
              <Tooltip title="Remove Image">
                <DeleteIcon />
              </Tooltip>
            </IconButton>
          </Box>
        ) : (
          <label htmlFor="upload-image">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '33rem',
                height: 225,
                border: '2px dashed #ccc',
                borderRadius: 2,
                cursor: 'pointer',
              }}
            >
              <AddPhotoAlternateIcon />
              <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                Add Cover Image
              </Typography>
            </Box>
          </label>
        )}
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </Card>

      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" color="secondary" sx={{ alignSelf: 'flex-start', marginLeft: '10px', fontFamily:"Poppins" }}>
          Title
        </Typography>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          sx={{ width: '100%', marginBottom: 2 }}
        />

        <Typography variant="body2" color="secondary" sx={{ alignSelf: 'flex-start', marginLeft: '10px', fontFamily:"Poppins" }}>
          Blog Content
        </Typography>
        <TextField
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={10}
          variant="outlined"
          sx={{ width: '100%', marginBottom: 2, marginTop: 1, maxHeight: 300, overflowY: 'auto' }}
        />
      </CardContent>

      <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary">
          Publish Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateBlogCard;
