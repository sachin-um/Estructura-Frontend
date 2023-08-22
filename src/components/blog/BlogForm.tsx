import type { FormikProps } from 'formik';
import type { FunctionComponent } from 'react';

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
import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useBlogs } from '../../redux/Blogs/useBlogs';
import GetFormikProps from '../../utils/GetFormikProps';

interface BlogFormProps {
  OriginalBlog?: Blog;
  userId: number;
}

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Required'),
  // one Image less than 5MB in size
  mainImage: Yup.mixed()
    .required('Required')
    .test('only 1', 'More than 1', (value) => {
      const fileArr = value as FileList;
      if (fileArr.length > 1) {
        return false;
      }
      return true;
    })
    .test('fileSize', 'File too large', (value) => {
      const fileArr = value as FileList;
      if (fileArr.length === 1) {
        const img = fileArr[0];
        if (img.size >= 5000000) {
          console.log('BIG');
          return false;
        }
      }
      return true;
    }),
  title: Yup.string().required('Required'),
  userId: Yup.number().required('Required'),
});

// Call with a Blog to edit, or without to create a new Blog
const BlogForm: FunctionComponent<BlogFormProps> = ({
  OriginalBlog,
  userId,
}) => {
  const FormRef = useRef<FormikProps<BlogAddOrUpdateRequest>>(null);
  const FileUploadRef = useRef<HTMLInputElement>(null);

  const { addBlog, editBlogById } = useBlogs();

  const navigate = useNavigate();

  const HandleSubmit = (values: BlogAddOrUpdateRequest) => {
    if (FormRef.current) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      console.log(values);
      if (OriginalBlog) {
        // Edit Blog
        editBlogById(OriginalBlog.id, values).then((edited) => {
          if (edited.success) {
            // Alert the user?
          } else if (edited.errors) {
            setErrors(edited.errors);
          }
        });
      } else {
        addBlog(values).then((added) => {
          if (added.id !== -1) {
            navigate(`/blogs/${added.id}`, { replace: true });
          } else if (added.errors) {
            setErrors(added.errors);
          }
        });
      }
      setSubmitting(false);
    }
  };

  const initialValues = OriginalBlog
    ? {
        content: OriginalBlog.content,
        mainImage: new DataTransfer().files,
        title: OriginalBlog.title,
        userId: userId,
      }
    : {
        content: '',
        mainImage: new DataTransfer().files,
        title: '',
        userId: userId,
      };

  console.log(initialValues);

  const [mainImageSrc, setMainImageSrc] = useState<string>('');
  const [imageReset, setImageReset] = useState<boolean>(false);

  useEffect(() => {
    // Set Image if Editing
    if (OriginalBlog && !imageReset) {
      setMainImageSrc(
        `http://localhost:8080/files/blog-files/${OriginalBlog.createdBy}/${OriginalBlog.id}/${OriginalBlog.mainImageName}`,
      );
      setImageReset(true);
    }
  }, [OriginalBlog, imageReset, mainImageSrc]);

  const handleImageRemove = () => {
    if (FormRef.current) {
      const { setFieldValue } = FormRef.current;
      setFieldValue('mainImage', new DataTransfer().files);
      setMainImageSrc('');
    }
  };

  const handleImageDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (FormRef.current) {
        const { setFieldValue } = FormRef.current;
        setFieldValue('mainImage', droppedFile);
        setMainImageSrc(URL.createObjectURL(droppedFile));
      }
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      innerRef={FormRef}
      onSubmit={HandleSubmit}
      validationSchema={validationSchema}
    >
      {(FormikProps: FormikProps<BlogAddOrUpdateRequest>) => {
        const spread = GetFormikProps(FormikProps);
        return (
          <Form>
            {FormikProps.errors.mainImage?.toString()}
            <Card
              sx={{
                backgroundColor: '#f0f0f0',
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                margin: 'auto',
                marginTop: 5,
                maxWidth: '85rem',
                padding: 1.5,
              }}
              onDoubleClick={handleImageRemove}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleImageDrop}
            >
              {mainImageSrc !== '' ? (
                <Box
                  sx={{
                    borderRadius: 5,
                    height: 225,
                    position: 'relative',
                    width: '84rem',
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
                    src={mainImageSrc}
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
                    onClick={() => {
                      if (FileUploadRef.current) {
                        FileUploadRef.current.click();
                      }
                    }}
                    sx={{
                      alignItems: 'center',
                      border: '2px dashed #ccc',
                      borderRadius: 2,
                      cursor: 'pointer',
                      display: 'flex',
                      height: 225,
                      justifyContent: 'center',
                      width: '84rem',
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
                hidden
                ref={FileUploadRef}
                {...spread('mainImage', false, false, false, false)}
                onChange={(event) => {
                  if (event.target.files !== null) {
                    FormikProps.setFieldValue(
                      'mainImage',
                      event.target.files,
                      true,
                    );
                    if (event.target.files[0]) {
                      setMainImageSrc(
                        URL.createObjectURL(event.target.files[0]),
                      );
                    } else {
                      setMainImageSrc('');
                    }
                  } else {
                    FormikProps.setFieldValue(
                      'mainImage',
                      new DataTransfer().files,
                      true,
                    );
                    setMainImageSrc('');
                  }
                }}
                accept="image/*"
                id="mainImage"
                type="file"
              />
            </Card>
            <CardContent
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
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

              <TextField {...spread('title')} fullWidth />
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  fontFamily: 'Poppins',
                  marginLeft: '10px',
                  marginTop: '50px',
                }}
                color="secondary"
                variant="body2"
              >
                Blog Content
              </Typography>
              <TextField {...spread('content')} fullWidth multiline rows={10} />
              <TextField
                hidden
                sx={{ display: 'none' }}
                {...spread('userId')}
                fullWidth
                label="User Id"
                type="number"
              />
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="primary" type="submit" variant="contained">
                Publish Now
              </Button>
            </CardContent>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BlogForm;
