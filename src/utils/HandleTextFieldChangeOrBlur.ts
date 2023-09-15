/**
 * convenience function for text field values
 * @param setter A setState function that you get from useState
 * @returns a function that can be passed to onChange or onBlur of a MuiTextField
 */
const HandleTextFieldChangeOrBlur = <T = number | string>(
  setter: React.Dispatch<React.SetStateAction<T>>,
):
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> => {
  return (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setter(event.target.value as T);
  };
};

export default HandleTextFieldChangeOrBlur;
