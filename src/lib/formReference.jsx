/* REFERENCE: */
import { Formik } from "formik";
import * as Yup from "yup";
import { violationsToErrors } from "utils/Violations"; // TODO: fix import

const validationSchema = Yup.object().shape({
  // TODO: add validation here
});

const initialValues = {
  // TODO: add initial values here
};

function Component() {
  const FormRef = useRef();

  return (
    <Formik
      innerRef={FormRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        setSubmitting(true);
        // TODO: do non-auto validation here
        API.post("/api/endpoint", values)
          .then((res) => {
            if (res.status === 200) {
              if (res.data.success === true) {
                // TODO: handle success
              } else {
                console.log(res.data.message);
                console.log(res.data.validation_violations);
                setErrors(violationsToErrors(res.data.validation_violations));
              }
            } else {
              console.log(res.data.message);
              console.log(res.data.validation_violations);
              setErrors(violationsToErrors(res.data.validation_violations));
            }
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.data.message);
            console.log(err.response.data.validation_violations);
            setErrors(
              violationsToErrors(err.response.data.validation_violations)
            );
          });
        setSubmitting(false);
      }}
    >
      {(
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      ) => {
        const spread = (field, helper = true) => {
          return {
                name: field,
                onBlur: handleBlur,
                onChange: handleChange,
                value: values[field],
                error: touched[field] && !!errors[field],
                disabled: isSubmitting,
                ...(helper && {
                  helperText: touched[field] && errors[field]})
              }
        };
        return (
          <form onSubmit={handleSubmit}>
            <input type='text' {...spread("name")} />
          </form>
        );
      }}
    </Formik>
  );
}
