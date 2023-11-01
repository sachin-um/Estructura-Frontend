import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({ open, title, content, onClose }) {
  return (
    <Dialog
      sx={{ width: '500px', minWidth: '100%' }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle
        sx={{
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        sx={{ padding: '20px', textAlign: 'center', fontWeight: 'bold' }}
      >
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: 'center',
          borderTop: '1px solid #ccc',
          padding: '10px',
        }}
      >
        <Button onClick={onClose} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
