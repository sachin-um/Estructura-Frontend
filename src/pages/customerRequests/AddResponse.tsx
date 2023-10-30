import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import {
  MdDescription,
  MdInsertDriveFile,
  MdPictureAsPdf,
} from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopAppBar';
import { useCustomerRequest } from '../../hooks/customerRequest/useCustomerRequest';
import { useCustomerRequestResponse } from '../../hooks/customerRequest/useCustomerRequestResponse';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import FileArrayToFileList from '../../utils/FileArrayToFileList';
import HandleTextFieldChangeOrBlur from '../../utils/HandleTextFieldChangeOrBlur';
import Loading from '../loading';

const AddResponse = () => {
  const requestId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getCustomerRequest: { customerRequest, fetchCustomerRequest, isLoading },
  } = useCustomerRequest();

  useEffect(() => {
    fetchCustomerRequest(requestId);
  }, [fetchCustomerRequest, requestId]);

  console.log(customerRequest);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<File[]>([]);
  const [shortDesc, setShortDesc] = useState('');
  const [response, setResponse] = useState('');
  const [proposedBudget, setProposedBudget] = useState(0);

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);
      const imagesArray = filesArray.filter((file) =>
        file.type.includes('image'),
      );
      const documentsArray = filesArray.filter(
        (file) => !file.type.includes('image'),
      );

      if (documentsArray.length + imagesArray.length > 3) {
        alert('Only 3 image and doument files allowed');
      } else {
        setUploadedImages((prevImages) => [...prevImages, ...imagesArray]);
        setUploadedDocuments((prevDocuments) => [
          ...prevDocuments,
          ...documentsArray,
        ]);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleRemoveDocument = (index: number) => {
    setUploadedDocuments((prevDocuments) =>
      prevDocuments.filter((_, i) => i !== index),
    );
  };

  const { addCustomerRequestResponse } = useCustomerRequestResponse();
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  const handleSendResponse = () => {
    if (
      customerRequest &&
      currentUser &&
      currentUser.id !== customerRequest.createdBy &&
      currentUser.role !== 'CUSTOMER'
    ) {
      console.log({
        documents: FileArrayToFileList([
          ...uploadedDocuments,
          ...uploadedImages,
        ]),
        proposedBudget,
        requestId: customerRequest.id,
        response,
        serviceProviderId: currentUser.id,
        shortDesc,
      });
      addCustomerRequestResponse({
        documents: FileArrayToFileList([
          ...uploadedDocuments,
          ...uploadedImages,
        ]),
        proposedBudget,
        requestId: customerRequest.id,
        response,
        serviceProviderId: currentUser.id,
        shortDesc,
      }).then((added) => {
        if (added.success) {
          navigate(
            `/custom-requests/req/${added.item?.createBy}/responses/${added.item?.id}`,
          );
        }
      });
    } else {
      alert('ERRROR');
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TopBar />
      <Grid container>
        <Grid
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '115vh',
          }}
          item
          md={6}
          xs={12}
        ></Grid>

        <Grid
          style={{
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            height: '115vh',
            padding: '20px',
          }}
          item
          md={6}
          xs={12}
        >
          <Typography
            color="primary"
            fontFamily="Poppins"
            gutterBottom
            variant="h4"
          >
            From Vision to Creation
          </Typography>
          <Typography
            color="primary"
            fontFamily="Poppins"
            gutterBottom
            variant="h5"
          >
            Responding to request: {customerRequest?.shortDesc}
          </Typography>
          <Typography
            fontFamily="Poppins"
            gutterBottom
            marginTop="20px"
            variant="subtitle1"
          >
            Response Title: Your response in one sentence
          </Typography>
          <TextField
            fullWidth
            id="response-title"
            label="Response Title"
            onBlur={HandleTextFieldChangeOrBlur(setShortDesc)}
            onChange={HandleTextFieldChangeOrBlur(setShortDesc)}
            variant="outlined"
          />

          <Typography
            fontFamily="Poppins"
            gutterBottom
            marginTop="20px"
            variant="subtitle1"
          >
            Your Response
          </Typography>
          <TextField
            fullWidth
            id="your-response"
            label="Describe your response"
            multiline
            onBlur={HandleTextFieldChangeOrBlur(setResponse)}
            onChange={HandleTextFieldChangeOrBlur(setResponse)}
            rows={6}
            variant="outlined"
          />

          <Typography
            fontFamily="Poppins"
            gutterBottom
            marginTop="20px"
            variant="subtitle1"
          >
            Enter your estimated budget
          </Typography>
          <Grid alignItems="center" container spacing={10}>
            <Grid item>
              <TextField
                id="price"
                label="Budget"
                onBlur={HandleTextFieldChangeOrBlur(setProposedBudget)}
                onChange={HandleTextFieldChangeOrBlur(setProposedBudget)}
                sx={{ width: '150px' }}
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Typography
            fontFamily="Poppins"
            gutterBottom
            marginTop="20px"
            variant="subtitle1"
          >
            Do you have any images/documents that you want to share with us?
          </Typography>
          <Box
            sx={{
              border: '2px dashed #bdbdbd',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px',
              padding: '20px',
            }}
            onClick={handleUploadClick}
          >
            <Typography
              color="textSecondary"
              fontFamily="Poppins"
              variant="body1"
            >
              Click here to upload images
            </Typography>
            <input
              accept="image/*"
              multiple
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
              type="file"
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {uploadedImages.map((image, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <img
                    style={{
                      borderRadius: '8px',
                      height: '60px',
                      margin: '5px',
                      objectFit: 'cover',
                      width: '60px',
                    }}
                    alt={`Uploaded ${index}`}
                    src={URL.createObjectURL(image)}
                  />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(index);
                    }}
                    style={{
                      alignItems: 'center',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%',
                      display: 'flex',
                      height: '20px',
                      justifyContent: 'center',
                      padding: 0,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      width: '20px',
                    }}
                  >
                    <CloseIcon fontSize="small" style={{ color: 'red' }} />
                  </div>
                </div>
              ))}
            </div>
          </Box>

          <Box
            sx={{
              border: '2px dashed #bdbdbd',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px',
              padding: '20px',
            }}
            onClick={handleUploadClick}
          >
            <Typography
              color="textSecondary"
              fontFamily="Poppins"
              variant="body1"
            >
              Click here to upload documents
            </Typography>
            <input
              multiple
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
              type="file"
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {uploadedDocuments.map((document, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {document.type.includes('pdf') ? (
                    <MdPictureAsPdf size={40} />
                  ) : document.type.includes('word') ||
                    document.type.includes('document') ? (
                    <MdDescription size={40} />
                  ) : (
                    <MdInsertDriveFile size={40} />
                  )}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveDocument(index);
                    }}
                    style={{
                      alignItems: 'center',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%',
                      display: 'flex',
                      height: '20px',
                      justifyContent: 'center',
                      padding: 0,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      width: '20px',
                    }}
                  >
                    <CloseIcon fontSize="small" style={{ color: 'red' }} />
                  </div>
                </div>
              ))}
            </div>
          </Box>

          <Button
            color="primary"
            onClick={handleSendResponse}
            sx={{ marginBottom: '30px', marginTop: '30px', ml: 60 }}
            variant="contained"
          >
            Send Response
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default AddResponse;
