import { Box } from '@mui/material';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { Form, Formik, type FormikProps } from 'formik';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

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
    })
    .test('fileSize', 'File too large', (value) => {
      const fileArr = value as FileList;
      console.table({
        x: 'one',
        xx: value,
      });
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
});

// Call with a Blog to edit, or without to create a new Blog
const BlogForm: FunctionComponent<BlogFormProps> = ({
  OriginalBlog,
  userId,
}) => {
  const FormRef = useRef<FormikProps<BlogAddOrUpdateRequest>>(null);

  const dispatch: ThunkDispatch<Blog, void, AnyAction> = useDispatch();

  const HandleSubmit = (values: BlogAddOrUpdateRequest) => {
    if (FormRef.current) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      if (OriginalBlog) {
        // Edit Blog
      } else {
        // Create Blog
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

  const [mainImageSrc, setMainImageSrc] = useState<string>('');

  useEffect(() => {
    if (OriginalBlog && mainImageSrc === '') {
      setMainImageSrc(OriginalBlog.mainImage);
    }
  }, [OriginalBlog, mainImageSrc]);

  return (
    <Formik
      initialValues={initialValues}
      innerRef={FormRef}
      onSubmit={HandleSubmit}
      validationSchema={validationSchema}
    >
      {(FormikProps: FormikProps<BlogAddOrUpdateRequest>) => {
        const spread = GetFormikProps(FormikProps);
        return (
          <Form>
            <img alt="main" src={mainImageSrc} />
            <label htmlFor="mainImage">Main Image</label>
            <input
              {...spread('mainImage', false, false, false, false)}
              onChange={(event) => {
                if (event.target.files !== null) {
                  FormikProps.setFieldValue(
                    'mainImage',
                    event.target.files,
                    true,
                  );
                  if (event.target.files[0]) {
                    setMainImageSrc(URL.createObjectURL(event.target.files[0]));
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default BlogForm;
