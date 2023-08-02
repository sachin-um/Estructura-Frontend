import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import '../../assets/font.css';
import API from '../../lib/API';
const User_ID = 3;

const CreateBlogCard = () => {
  const [formData, setFormData] = useState({
    content: '',
    coverImage: null,
    title: '',
  });

  const fileRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, coverImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setFormData({ ...formData, coverImage: null });
  };

  useEffect(() => {
    API.get('/admin')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(formData);
  }, [formData]);

  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, coverImage: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const req = new FormData();
    req.append('title', formData.title);
    req.append('content', formData.content);
    req.append('userId', User_ID);
    req.append('tags', []);
    if (fileRef.current.files[0] !== undefined) {
      req.append('mainImage', fileRef.current.files[0]);
    } else {
      req.append('mainImage', null);
    }
    // fetch("http://localhost:8080/api/v1/blogs/add",
    // {
    //   method: "POST",
    //   body: req,
    // }).then((res) => console.log(res)).catch((err) => console.log(err));
    API.post('/blogs/add', req, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Card
      sx={{
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 'auto',
        maxWidth: '35rem',
      }}
      component="form"
    >
      <Card
        sx={{
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          padding: 1.5,
        }}
        onDoubleClick={() => setFormData({ ...formData, coverImage: null })}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleImageDrop}
      >
        {formData.coverImage ? (
          <Box
            sx={{
              borderRadius: 5,
              height: 225,
              position: 'relative',
              width: '33rem',
            }}
          >
            <img
              style={{
                borderRadius: 5,
                height: '100%',
                objectFit: 'cover',
                width: '100%',
              }}
              alt="Cover"
              src={formData.coverImage}
            />
            <IconButton
              sx={{
                backgroundColor: 'white',
                position: 'absolute',
                right: 5,
                top: 5,
              }}
              color="primary"
              onClick={handleImageRemove}
              size="small"
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
                alignItems: 'center',
                border: '2px dashed #ccc',
                borderRadius: 2,
                cursor: 'pointer',
                display: 'flex',
                height: 225,
                justifyContent: 'center',
                width: '33rem',
              }}
            >
              <AddPhotoAlternateIcon />
              <Typography
                color="textSecondary"
                sx={{ marginLeft: 1 }}
                variant="body2"
              >
                Add Cover Image
              </Typography>
            </Box>
          </label>
        )}
        <input
          accept="image/*"
          id="upload-image"
          onChange={handleImageUpload}
          ref={fileRef}
          style={{ display: 'none' }}
          type="file"
        />
      </Card>

      <CardContent
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography
          sx={{
            alignSelf: 'flex-start',
            fontFamily: 'Poppins',
            marginLeft: '10px',
          }}
          color="secondary"
          variant="body2"
        >
          Title
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          sx={{ marginBottom: 2, width: '100%' }}
          value={formData.title}
          variant="outlined"
        />

        <Typography
          sx={{
            alignSelf: 'flex-start',
            fontFamily: 'Poppins',
            marginLeft: '10px',
          }}
          color="secondary"
          variant="body2"
        >
          Blog Content
        </Typography>
        <TextField
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          sx={{
            marginBottom: 2,
            marginTop: 1,
            maxHeight: 300,
            overflowY: 'auto',
            width: '100%',
          }}
          fullWidth
          multiline
          rows={10}
          value={formData.content}
          variant="outlined"
        />
      </CardContent>

      <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="primary" onClick={handleSubmit} variant="contained">
          Publish Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateBlogCard;
