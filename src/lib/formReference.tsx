/* REFERENCE: */
import { TextField } from '@mui/material';
import { Form, Formik, type FormikProps } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

import API from './API'; // TODO: fix import
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
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => {
        const spread = (
          field: string,
          helper = true,
        ): Record<string, unknown> => {
          const key = field as keyof FormValues;
          return {
            disabled: isSubmitting,
            error: touched[key] && !!errors[key],
            name: field,
            onBlur: handleBlur,
            onChange: handleChange,
            value: values[key],
            ...(helper && {
              helperText: touched[key] && errors[key],
            }),
          };
        };

        return (
          <Form onSubmit={handleSubmit}>
            <TextField type="text" {...spread('name')} />
          </Form>
        );
      }}
    </Formik>
  );
}
