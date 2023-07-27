import React, { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import DeleteIcon from '@mui/icons-material/Delete'
import '../../assets/font.css'
import API from '../../lib/API'
import axios from 'axios'

const User_ID = 3

const CreateBlogCard = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    coverImage: null,
  })

  const fileRef = useRef(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, coverImage: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageRemove = () => {
    setFormData({ ...formData, coverImage: null })
  }

  useEffect(() => {
    API.get('/admin')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    console.log(formData)
  }, [formData])

  const handleImageDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, coverImage: file })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    const req = new FormData()
    req.append('title', formData.title)
    req.append('content', formData.content)
    req.append('userId', User_ID)
    req.append('tags', [])
    if (fileRef.current.files[0] !== undefined) {
      req.append('mainImage', fileRef.current.files[0])
    } else {
      req.append('mainImage', null)
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
      .catch((err) => console.log(err))
  }

  return (
    <Card
      component="form"
      sx={{
        backgroundColor: 'white',
        maxWidth: '35rem',
        margin: 'auto',
        borderRadius: 5,
      }}
    >
      <Card
        sx={{
          backgroundColor: '#f0f0f0',
          padding: 1.5,
          display: 'flex',
          justifyContent: 'center',
        }}
        onDoubleClick={() => setFormData({ ...formData, coverImage: null })}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleImageDrop}
      >
        {formData.coverImage ? (
          <Box
            sx={{
              position: 'relative',
              width: '33rem',
              height: 225,
              borderRadius: 5,
            }}
          >
            <img
              src={formData.coverImage}
              alt="Cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 5,
              }}
            />
            <IconButton
              color="primary"
              size="small"
              onClick={handleImageRemove}
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                backgroundColor: 'white',
              }}
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
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginLeft: 1 }}
              >
                Add Cover Image
              </Typography>
            </Box>
          </label>
        )}
        <input
          ref={fileRef}
          type="file"
          id="upload-image"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </Card>

      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant="body2"
          color="secondary"
          sx={{
            alignSelf: 'flex-start',
            marginLeft: '10px',
            fontFamily: 'Poppins',
          }}
        >
          Title
        </Typography>
        <TextField
          fullWidth
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          variant="outlined"
          sx={{ width: '100%', marginBottom: 2 }}
        />

        <Typography
          variant="body2"
          color="secondary"
          sx={{
            alignSelf: 'flex-start',
            marginLeft: '10px',
            fontFamily: 'Poppins',
          }}
        >
          Blog Content
        </Typography>
        <TextField
          fullWidth
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          multiline
          rows={10}
          variant="outlined"
          sx={{
            width: '100%',
            marginBottom: 2,
            marginTop: 1,
            maxHeight: 300,
            overflowY: 'auto',
          }}
        />
      </CardContent>

      <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Publish Now
        </Button>
      </CardContent>
    </Card>
  )
}

export default CreateBlogCard
