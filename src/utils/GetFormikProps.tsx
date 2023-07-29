import { type FormikProps } from 'formik';

/**
 * This function returns a function that takes a field name and returns
 * the props for an input field. This is useful for reducing boilerplate
 * @param props FormikProps<ReqInterface> from Formik
 */
function GetFormikProps<ReqInterface>(props: FormikProps<ReqInterface>) {
  return (field: string, helper = true): Record<string, unknown> => {
    const { errors, handleBlur, handleChange, isSubmitting, touched, values } =
      props;
    const key = field as keyof ReqInterface;
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
}

export default GetFormikProps;
