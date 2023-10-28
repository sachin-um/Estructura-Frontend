/**
 * @param fileArr an array of File type elements
 * @returns FileList
 */
const FileArrayToFileList = (fileArr: File[]): FileList => {
  const dataTransfer = new DataTransfer();
  fileArr.forEach((file) => {
    dataTransfer.items.add(file);
  });
  return dataTransfer.files;
};

export default FileArrayToFileList;
