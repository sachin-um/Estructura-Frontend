import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import CusBar from '../../components/CusTopBar';

function AddAdmin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminList, setAdminList] = useState([]);
  const [adminStatusList, setAdminStatusList] = useState([]);

  const handleAddAdmin = () => {
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== ''
    ) {
      const newAdmin = {
        firstName,
        lastName,
        email,
        password,
      };
      setAdminList([...adminList, newAdmin]);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }

    // Initialize status for each admin as "enabled"
    useEffect(() => {
      setAdminStatusList(adminList.map(() => true));
    }, [adminList]);

    // Toggle the enable/disable status of an admin
    const handleToggleAdminStatus = (index) => {
      const updatedStatusList = [...adminStatusList];
      updatedStatusList[index] = !updatedStatusList[index];
      setAdminStatusList(updatedStatusList);
    };
  };

  const handleRemoveAdmin = (index) => {
    const updatedAdminList = adminList.filter((_, i) => i !== index);
    setAdminList(updatedAdminList);
  };

  return (
    <>
      <CusBar />
      <div
        style={{
          backgroundImage:
            'url("https://www.decoraid.com/wp-content/uploads/2021/04/mint-green-living-room-scaled-958x575.jpeg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
        }}
      >
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding a semi-transparent white background
            borderRadius: '10px', // Adding rounded corners
            padding: '2rem',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{ marginTop: '1rem' }}
          >
            Admin
          </Typography>
          <TextField
            label="First Name"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          <Button variant="contained" color="primary" onClick={handleAddAdmin}>
            Add Admin
          </Button>
        </Container>

        <Container style={{ marginTop: '2rem', width: '100%' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Admin List
            </Typography>
            <div style={{ overflowX: 'auto' }}>
              {adminList.length === 0 ? (
                <Typography>No admin users added yet.</Typography>
              ) : (
                <table
                  maxWidth="md"
                  style={{
                    borderCollapse: 'collapse',
                    border: '1px solid #ddd',
                    width: '100%',
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                          backgroundColor: '#f2f2f2',
                        }}
                      >
                        First Name
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Last Name
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Password
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminList.map((admin, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.firstName}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.lastName}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.email}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.password}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                            display: 'flex',
                          }}
                        >
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleRemoveAdmin(index)}
                          >
                            Remove
                          </Button>
                          <Button
                            style={{ marginLeft: '0.5rem' }}
                            variant="outlined"
                            color={
                              adminStatusList[index] ? 'secondary' : 'primary'
                            }
                            onClick={() => handleToggleAdminStatus(index)}
                          >
                            {adminStatusList[index] ? 'Disable' : 'Enable'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AddAdmin;
