/* REFERENCE: */
import type { FormikProps } from 'formik';

import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

import API from './API'; // ! TODO: fix imports
import GetFormikProps from '../utils/GetFormikProps';
import { violationsToErrorsTS } from '../utils/ViolationsTS';

interface FormValues {
  x: string;
}

interface ReturnedResponse extends ValidatedResponse {
  xr: string;
}

const validationSchema = Yup.object().shape({
  // TODO: add validation here
  x: Yup.string().required('Required'),
});

const initialValues: FormValues = {
  x: '',
  // TODO: add initial values here
};

function Component() {
  const FormRef = useRef<FormikProps<FormValues>>(null);

  const HandleSubmit = (values: FormValues) => {
    if (FormRef.current !== null) {
      const { setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      API.post<ReturnedResponse>('/api/endpoint', values)
        .then((res) => {
          if (res.status === 200) {
            // TODO: handle success/violations
            console.log(res.data.validation_violations);
            console.log(res.data.xr);
            setErrors(violationsToErrorsTS(res.data.validation_violations));
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      innerRef={FormRef}
      onSubmit={HandleSubmit}
      validationSchema={validationSchema}
    >
      {(FormikProps: FormikProps<FormValues>) => {
        const spread = GetFormikProps(FormikProps);
        return (
          <Form onSubmit={FormikProps.handleSubmit}>
            <TextField type="text" {...spread('name')} />
          </Form>
        );
      }}
    </Formik>
  );
}
