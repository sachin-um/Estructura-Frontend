import { AttachFile, InsertDriveFile, MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useGridNativeEventListener } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(0);

  const userList = [
    {
      avatar: 'JD',
      id: 1,
      name: 'John Doe',
    },
  ];

  const [activeUser, setActiveUser] = useState(userList[0]);

  const formatDate = (date) => {
    const today = new Date();
    const messageDate = new Date(date);

    if (
      today.getFullYear() === messageDate.getFullYear() &&
      today.getMonth() === messageDate.getMonth() &&
      today.getDate() === messageDate.getDate()
    ) {
      return 'Today';
    }

    today.setDate(today.getDate() - 1);
    if (
      today.getFullYear() === messageDate.getFullYear() &&
      today.getMonth() === messageDate.getMonth() &&
      today.getDate() === messageDate.getDate()
    ) {
      return 'Yesterday';
    }

    return messageDate.toDateString();
  };

  const isImage = (file) => {
    return (
      file &&
      typeof file === 'object' &&
      file.type &&
      file.type.startsWith('image/')
    );
  };

  const handleSendMessage = () => {
    if (message.trim() === '' && files.length === 0) return;

    const updatedMessages = [...messages];

    // Create separate messages for each selected file
    files.forEach((file) => {
      const fileMessage = {
        file: file,
        sender: 'You',
        timestamp: new Date().toISOString(),
      };
      updatedMessages.push(fileMessage);
    });

    if (message.trim() !== '') {
      const textMessage = {
        content: message,
        sender: 'You',
        timestamp: new Date().toISOString(),
      };
      updatedMessages.push(textMessage);
    }

    setMessages(updatedMessages);

    setMessage('');
    setFiles([]);
    setFileInputKey(fileInputKey + 1);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleOptionsClick = (event, message) => {
    setAnchorEl(event.currentTarget);
    setSelectedMessage(message);
  };

  const handleOptionsClose = () => {
    setAnchorEl(null);
    setSelectedMessage(null);
  };

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleDeleteMessage = () => {
    if (selectedMessage) {
      setDeleteConfirmationOpen(true);
    }
  };

  const handleConfirmDeleteMessage = () => {
    if (selectedMessage) {
      const updatedMessages = messages.filter(
        (msg) => msg.timestamp !== selectedMessage.timestamp,
      );

      setMessages(updatedMessages);
      handleOptionsClose();
      setDeleteConfirmationOpen(false);
    }
  };

  const handleCancelDeleteMessage = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleUserClick = (user) => {
    setActiveUser(user);
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');

    if (chatContainer) {
      chatContainer.addEventListener('drop', handleFileDrop);
      chatContainer.addEventListener('dragover', handleDragOver);

      return () => {
        chatContainer.removeEventListener('drop', handleFileDrop);
        chatContainer.removeEventListener('dragover', handleDragOver);
      };
    }
  }, [files]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#F3F3F3',
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            borderBottom: '1px solid lightgray',
            display: 'flex',
            padding: '10px',
          }}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            label="Search"
            variant="outlined"
          />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: 'scroll',
          }}
        >
          {userList.map((user) => (
            <div
              style={{
                alignItems: 'center',
                borderBottom: '1px solid lightgray',
                cursor: 'pointer',
                display: 'flex',
                padding: '10px',
              }}
              key={user.id}
              onClick={() => handleUserClick(user)}
            >
              <Avatar sx={{ marginRight: '10px' }}>{user.avatar}</Avatar>
              <Typography fontFamily="Poppins" fontSize="15px">
                {user.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      {/* Profile pictures and names */}
      <div
        id="chat-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
        }}
      >
        {activeUser && (
          <Box
            sx={{
              alignItems: 'center',
              borderBottom: '1px solid lightgray',
              display: 'flex',
              padding: '10px',
            }}
          >
            <Avatar sx={{ marginRight: '10px' }}>{activeUser.avatar}</Avatar>
            <Typography fontFamily="Poppins" fontSize="18px" variant="h6">
              {activeUser.name}
            </Typography>
          </Box>
        )}
        <Divider />
        <Box sx={{ flex: 1, overflowY: 'scroll' }}>
          <List>
            {activeUser &&
              messages
                .filter(
                  (msg) =>
                    msg.sender === 'You' || msg.sender === activeUser.name,
                )
                .map((msg, index) => (
                  <div key={index}>
                    {index === 0 ||
                    formatDate(msg.timestamp) !==
                      formatDate(
                        messages[messages.findIndex((m) => m === msg) - 1]
                          .timestamp,
                      ) ? (
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Typography
                          style={{
                            backgroundColor: 'lightgray',
                            borderRadius: '4px',
                            fontSize: '16px',
                            padding: '4px',
                          }}
                          align="center"
                          variant="caption"
                        >
                          {formatDate(msg.timestamp)}
                        </Typography>
                      </div>
                    ) : null}
                    <ListItem
                      alignItems="flex-start"
                      onContextMenu={(e) => handleOptionsClick(e, msg)}
                    >
                      {msg.sender !== 'You' && (
                        <ListItemAvatar>
                          <Avatar sx={{ height: 40, width: 40 }}>
                            {msg.sender[0]}
                          </Avatar>
                        </ListItemAvatar>
                      )}
                      <Paper
                        style={{
                          backgroundColor:
                            msg.sender === 'You' ? '#E7C4A0' : '#9D6432',
                          borderRadius: '10px',
                          marginLeft: msg.sender === 'You' ? 'auto' : 'inherit',
                          marginRight:
                            msg.sender !== 'You' ? 'auto' : 'inherit',
                          maxWidth: '70%',
                          padding: '10px',
                          position: 'relative',
                        }}
                        elevation={3}
                      >
                        <div
                          style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            right: '10px',
                            top: '10px',
                          }}
                        >
                          <MoreVert
                            fontSize="small"
                            onClick={(e) => handleOptionsClick(e, msg)}
                          />
                          <Menu
                            anchorEl={anchorEl}
                            onClose={handleOptionsClose}
                            open={Boolean(anchorEl)}
                          >
                            <MenuItem onClick={handleDeleteMessage}>
                              Delete
                            </MenuItem>
                          </Menu>
                        </div>

                        <div>
                          <ListItemText
                            primary={msg.sender}
                            secondary={msg.content}
                          />
                          {msg.file && isImage(msg.file) ? (
                            <div style={{ width: '150px' }}>
                              <img
                                style={{
                                  borderRadius: '10px',
                                  height: 'auto',
                                  width: '100%',
                                }}
                                alt="Sent Image"
                                src={URL.createObjectURL(msg.file)}
                              />
                            </div>
                          ) : msg.file ? (
                            <a
                              href={URL.createObjectURL(msg.file)}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <Typography
                                style={{
                                  alignItems: 'center',
                                  display: 'flex',
                                }}
                                variant="body2"
                              >
                                <InsertDriveFile
                                  style={{
                                    color: 'darkgreen',
                                    marginRight: '4px',
                                  }}
                                />
                                {msg.file.name}
                              </Typography>
                            </a>
                          ) : null}

                          <Typography
                            style={{
                              color: 'gray',
                              fontSize: '12px',
                              textAlign: 'right',
                            }}
                            variant="body2"
                          >
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </Typography>
                        </div>
                      </Paper>
                    </ListItem>
                  </div>
                ))}
          </List>
        </Box>
        {activeUser && (
          <Box
            alignItems="center"
            borderTop="1px solid lightgray"
            display="flex"
            p={1}
          >
            <TextField
              fullWidth
              label="Type a message"
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              value={message}
              variant="outlined"
            />
            <input
              accept="image/*, .pdf, .doc, .docx"
              id="fileInput"
              key={fileInputKey}
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
              type="file"
            />
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
              <AttachFile fontSize="large" />
            </label>
            {files.length > 0 && (
              <Typography variant="body2">
                Selected Files: {files.map((file) => file.name).join(', ')}
              </Typography>
            )}
            <Button
              color="primary"
              onClick={handleSendMessage}
              style={{ marginLeft: '10px' }}
              variant="contained"
            >
              Send
            </Button>
          </Box>
        )}
        <Dialog
          aria-describedby="alert-dialog-description"
          aria-labelledby="alert-dialog-title"
          onClose={handleCancelDeleteMessage}
          open={deleteConfirmationOpen}
        >
          <DialogTitle id="alert-dialog-title">{'Delete Message'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to delete this message?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleCancelDeleteMessage}>
              No
            </Button>
            <Button
              autoFocus
              color="primary"
              onClick={handleConfirmDeleteMessage}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Chat;
