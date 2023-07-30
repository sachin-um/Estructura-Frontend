import { TextField } from '@mui/material';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { Formik, type FormikProps } from 'formik';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import API from './lib/API';
import {
  Blog,
  fetchBlogs,
  getBlogsError,
  getBlogsStatus,
  selectAllBlogs,
} from './redux/BlogsReducer';
import GetFormikProps from './utils/GetFormikProps';
import { violationsToErrorsTS } from './utils/ViolationsTS';

interface AddBlog {
  content: string;
  mainImage: FileList;
  title: string;
  userId: number;
}

interface BlogAddResponse extends ValidatedResponse {
  id: number;
  message: null | string;
  success: boolean;
}

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Required'),
  // one Image less than 5MB in size
  mainImage: Yup.mixed()
    .required('Required')
    .test(
      'fileSize',
      'File too large',
      (value) => {
        console.log(value);
        return true;
      },
      // (value) => value && value.size <= 5000000,
    ),
  title: Yup.string().required('Required'),
  userId: Yup.number().required('Required'),
});

const initialValues: AddBlog = {
  content: '',
  mainImage: new DataTransfer().files,
  title: '',
  userId: 0,
};

export default function Play() {
  const FormRef = useRef<FormikProps<AddBlog>>(null);
  const dispatch: ThunkDispatch<Blog[], void, AnyAction> = useDispatch();

  const Blogs = useSelector(selectAllBlogs);
  const BlogsStatus = useSelector(getBlogsStatus);
  const BlogsError = useSelector(getBlogsError);

  useEffect(() => {
    if (BlogsStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [BlogsStatus, dispatch]);

  useEffect(() => {
    if (BlogsError !== null && BlogsError) {
      console.log('Blog fetching error!');
    }
  }, [BlogsError]);

  const HandleSubmit = (values: AddBlog) => {
    if (FormRef.current !== null) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      console.log(values);

      API.post<BlogAddResponse>('/blogs/add', values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log('Blog added successfully!');
        } else {
          console.log('Blog adding error!');
          console.log(res);
        }
      });
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Play</h1>
      <Formik
        initialValues={initialValues}
        innerRef={FormRef}
        onSubmit={HandleSubmit}
        validationSchema={validationSchema}
      >
        {(FormikProps: FormikProps<AddBlog>) => {
          const spread = GetFormikProps(FormikProps);
          return (
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '20rem',
              }}
              onSubmit={FormikProps.handleSubmit}
            >
              <TextField id="title" {...spread('title')} />
              <TextField {...spread('content', false)} />
              <TextField id="userId" {...spread('userId')} type="number" />
              <label htmlFor="mainImage">Main Image</label>
              <input
                {...spread('mainImage', false, false, false, false)}
                onChange={(event) => {
                  if (event.target.files !== null) {
                    FormikProps.setFieldValue(
                      'mainImage',
                      event.target.files,
                      false,
                    );
                  } else {
                    FormikProps.setFieldValue(
                      'mainImage',
                      new DataTransfer().files,
                      false,
                    );
                  }
                }}
                accept="image/*"
                id="mainImage"
                type="file"
              />
              <input type="submit" value="Submit" />
            </form>
          );
        }}
      </Formik>
      <pre>{JSON.stringify(Blogs, null, '  ')}</pre>
    </div>
  );
}
