import { type FormikProps } from 'formik';

/**
 * Call to get a function that gives props for an input field
 * @param props FormikProps<ReqInterface> from Formik
 * @returns a function that takes a field name and a helper text flag
 *          (Helper text isn't available in some input fields like Select)
 *          and returns the props for an input field.
 */
function GetFormikProps<ReqInterface>(props: FormikProps<ReqInterface>) {
  return (
    field: string,
    helper = true,
    onChange = true,
    value = true,
    error = true,
  ): Record<string, unknown> => {
    const { errors, handleBlur, handleChange, isSubmitting, touched, values } =
      props;
    const key = field as keyof ReqInterface;
    return {
      disabled: isSubmitting,
      name: field,
      onBlur: handleBlur,
      ...(error && { error: touched[key] && !!errors[key] }),
      ...(value && { value: values[key] }),
      ...(onChange && { onChange: handleChange }),
      ...(helper && {
        helperText: touched[key] && errors[key],
      }),
    };
  };
}

export default GetFormikProps;
