// import DeleteIcon from '@mui/icons-material/Delete';
// import { Button, TextField } from '@mui/material';
// import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
// import { Formik, type FormikProps } from 'formik';
// import { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as Yup from 'yup';

// import {
//   Blog,
//   BlogAddOrUpdateRequest,
//   addBlog,
//   deleteBlog,
//   editBlog,
//   fetchBlogs,
//   getBlogsError,
//   getBlogsStatus,
//   selectAllBlogs,
// } from './redux/BlogsReducer';
// import GetFormikProps from './utils/GetFormikProps';
// import { violationsToErrorsTS } from './utils/ViolationsTS';

// const validationSchema = Yup.object().shape({
//   content: Yup.string().required('Required'),
//   // one Image less than 5MB in size
//   mainImage: Yup.mixed()
//     .required('Required')
//     .test(
//       'fileSize',
//       'File too large',
//       (value) => {
//         console.log(value);
//         return true;
//       },
//       // (value) => value && value.size <= 5000000,
//     ),
//   title: Yup.string().required('Required'),
//   userId: Yup.number().required('Required'),
// });

// const initialValues: BlogAddOrUpdateRequest = {
//   content: '',
//   mainImage: new DataTransfer().files,
//   title: '',
//   userId: 0,
// };

// export default function Play() {
//   const FormRef = useRef<FormikProps<BlogAddOrUpdateRequest>>(null);
//   const dispatch: ThunkDispatch<Blog[], void, AnyAction> = useDispatch();

//   const Blogs = useSelector(selectAllBlogs);
//   const BlogsStatus = useSelector(getBlogsStatus);
//   const BlogsError = useSelector(getBlogsError);

//   useEffect(() => {
//     if (BlogsStatus === 'idle') {
//       dispatch(fetchBlogs());
//     }
//   }, [BlogsStatus, dispatch]);

//   useEffect(() => {
//     if (BlogsError !== null && BlogsError) {
//       console.log('Blog fetching error!');
//     }
//   }, [BlogsError]);

//   const HandleSubmit = (values: BlogAddOrUpdateRequest) => {
//     if (FormRef.current !== null) {
//       const { setErrors, setSubmitting } = FormRef.current;
//       setSubmitting(true);
//       console.log(values);
//       dispatch(addBlog(values))
//         .then((res) => {
//           console.log(res);
//           if (res.payload !== undefined) {
//             const response = res.payload as GenericAddOrUpdateResponse;
//             if (response.success === false) {
//               setErrors(violationsToErrorsTS(response.validation_violations));
//             } else {
//               FormRef.current?.resetForm();
//             }
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Play</h1>
//       <Formik
//         initialValues={initialValues}
//         innerRef={FormRef}
//         onSubmit={HandleSubmit}
//         validationSchema={validationSchema}
//       >
//         {(FormikProps: FormikProps<BlogAddOrUpdateRequest>) => {
//           const spread = GetFormikProps(FormikProps);
//           return (
//             <form
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '1rem',
//                 maxWidth: '20rem',
//               }}
//               onSubmit={FormikProps.handleSubmit}
//             >
//               <TextField id="title" {...spread('title')} />
//               <TextField {...spread('content', false)} />
//               <TextField id="userId" {...spread('userId')} type="number" />
//               <label htmlFor="mainImage">Main Image</label>
//               <input
//                 {...spread('mainImage', false, false, false, false)}
//                 onChange={(event) => {
//                   if (event.target.files !== null) {
//                     FormikProps.setFieldValue(
//                       'mainImage',
//                       event.target.files,
//                       false,
//                     );
//                   } else {
//                     FormikProps.setFieldValue(
//                       'mainImage',
//                       new DataTransfer().files,
//                       false,
//                     );
//                   }
//                 }}
//                 accept="image/*"
//                 id="mainImage"
//                 type="file"
//               />
//               <input type="submit" value="Submit" />
//             </form>
//           );
//         }}
//       </Formik>
//       {/* <pre>{JSON.stringify(Blogs, null, '  ')}</pre> */}
//       {Blogs.map((blog) => {
//         const initialValues: BlogAddOrUpdateRequest = {
//           content: blog.content,
//           mainImage: new DataTransfer().files,
//           title: blog.title,
//           userId: blog.createdBy,
//         };
//         return (
//           <Formik
//             onSubmit={(values, { setErrors, setSubmitting }) => {
//               console.log(values);
//               setSubmitting(true);
//               dispatch(
//                 editBlog({
//                   blog: blog,
//                   updatedBlog: values,
//                 }),
//               )
//                 .then((res) => {
//                   console.log(res);
//                   if (res.payload !== undefined) {
//                     const response = res.payload as GenericAddOrUpdateResponse;
//                     if (response.success === false) {
//                       setErrors(
//                         violationsToErrorsTS(response.validation_violations),
//                       );
//                     } else {
//                       FormRef.current?.resetForm();
//                     }
//                   }
//                 })
//                 .catch((err) => {
//                   console.log(err);
//                 });
//               setSubmitting(false);
//             }}
//             initialValues={initialValues}
//             key={blog.id}
//             validationSchema={validationSchema}
//           >
//             {(FormikProps: FormikProps<BlogAddOrUpdateRequest>) => {
//               const spread = GetFormikProps(FormikProps);
//               return (
//                 <form
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '1rem',
//                     maxWidth: '20rem',
//                   }}
//                   onSubmit={FormikProps.handleSubmit}
//                 >
//                   <pre>
//                     {JSON.stringify(
//                       { Blog: blog, currentFormValues: FormikProps.values },
//                       null,
//                       '  ',
//                     )}
//                   </pre>
//                   {blog.mainImageName !== null && (
//                     <img
//                       alt={blog.mainImage}
//                       // Ugly links are ugly
//                       src={`http://localhost:8080/files/blog-files/${blog.createdBy}/${blog.id}/${blog.mainImageName}`}
//                       width={100}
//                     />
//                   )}
//                   <TextField id="title" {...spread('title')} />
//                   <TextField {...spread('content', false)} />
//                   <TextField
//                     id="userId"
//                     {...spread('userId', true, true, true, true, false)}
//                     disabled={true}
//                     type="number"
//                   />
//                   <label htmlFor="mainImage">Main Image</label>
//                   <input
//                     {...spread('mainImage', false, false, false, false)}
//                     onChange={(event) => {
//                       if (event.target.files !== null) {
//                         FormikProps.setFieldValue(
//                           'mainImage',
//                           event.target.files,
//                           false,
//                         );
//                       } else {
//                         FormikProps.setFieldValue(
//                           'mainImage',
//                           new DataTransfer().files,
//                           false,
//                         );
//                       }
//                     }}
//                     accept="image/*"
//                     id="mainImage"
//                     type="file"
//                   />
//                   <input type="submit" value="Submit" />
//                   <Button
//                     onClick={() => {
//                       dispatch(deleteBlog(blog.id));
//                     }}
//                     startIcon={<DeleteIcon />}
//                     type="button"
//                     variant="outlined"
//                   >
//                     Delete
//                   </Button>
//                 </form>
//               );
//             }}
//           </Formik>
//         );
//       })}
//     </div>
//   );
// }
