import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { AttachFile, InsertDriveFile } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(0);

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
    return file.type.startsWith('image/');
  };

  const handleSendMessage = () => {
    if (message.trim() === '' && files.length === 0) return;

    // Create separate messages for each selected file
    files.forEach((file) => {
      const fileMessage = {
        file: file,
        sender: 'You',
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, fileMessage]);
    });

    if (message.trim() !== '') {
      const textMessage = {
        content: message,
        sender: 'You',
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, textMessage]);
    }

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

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    });

    return () => {
      document.removeEventListener('keydown', handleSendMessage);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#F3F3F3',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'scroll' }}>
        <List>
          {messages.map((msg, index) => (
            <div key={index}>
              {index === 0 ||
              formatDate(msg.timestamp) !==
                formatDate(messages[index - 1].timestamp) ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
              <ListItem alignItems="flex-start">
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
                    marginRight: msg.sender !== 'You' ? 'auto' : 'inherit',
                    maxWidth: '70%',
                    padding: '10px',
                    position: 'relative',
                  }}
                  elevation={3}
                >
                  <div>
                    <ListItemText
                      primary={msg.sender}
                      secondary={msg.content}
                    />
                    {msg.file ? (
                      <div>
                        {isImage(msg.file) ? (
                          <div style={{ width: '150px' }}>
                            <img
                              src={URL.createObjectURL(msg.file)}
                              alt="Sent Image"
                              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                            />
                          </div>
                        ) : (
                          <a
                            href={URL.createObjectURL(msg.file)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
                              <InsertDriveFile style={{ marginRight: '4px', color: 'darkgreen' }} />
                              {msg.file.name}
                            </Typography>
                          </a>
                        )}
                      </div>
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
          type='file'
          accept='image/*, .pdf, .doc, .docx'
          style={{ display: 'none' }}
          onChange={handleFileChange}
          id='fileInput'
          key={fileInputKey}
          multiple
        />
        <label htmlFor='fileInput' style={{ cursor: 'pointer' }}>
          <AttachFile fontSize='large' />
        </label>
        {files.length > 0 && (
          <Typography variant="body2">
            Selected Files: {files.map(file => file.name).join(', ')}
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
    </div>
  );
};

export default Chat;