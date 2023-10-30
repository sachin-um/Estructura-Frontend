import { Button, Container, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import CusBar from '../../components/CusTopBar';

function AddAdmin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [assignedArea, setassignedArea] = useState('');
  const [adminList, setAdminList] = useState<
    (Partial<User> & { password: string })[]
  >([]);
  const [adminStatusList, setAdminStatusList] = useState<boolean[]>([]);

  const handleAddAdmin = () => {
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      assignedArea.trim() !== ''
    ) {
      const newAdmin: Partial<User> & { password: string } = {
        assignedArea,
        email,
        firstName,
        lastName,
        password,
      };
      setAdminList([...adminList, newAdmin]);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setassignedArea('');
    }

    // Initialize status for each admin as "enabled"

    // Toggle the enable/disable status of an admin
    const handleToggleAdminStatus = (index: number) => {
      const updatedStatusList = [...adminStatusList];
      updatedStatusList[index] = !updatedStatusList[index];
      setAdminStatusList(updatedStatusList);
    };
  };

  useEffect(() => {
    setAdminStatusList(adminList.map(() => true));
  }, [adminList]);

  const handleRemoveAdmin = (index: number) => {
    const updatedAdminList = adminList.filter((_, i) => i !== index);
    setAdminList(updatedAdminList);
  };

  function handleToggleAdminStatus(index: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <CusBar />
      <div
        style={{
          alignItems: 'center',
          backgroundImage:
            'url("https://www.decoraid.com/wp-content/uploads/2021/04/mint-green-living-room-scaled-958x575.jpeg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingTop: '2rem',
        }}
      >
        <Container
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding a semi-transparent white background
            borderRadius: '10px', // Adding rounded corners
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
            padding: '2rem',
          }}
          maxWidth="sm"
        >
          <Typography
            align="center"
            component="h1"
            sx={{ marginTop: '1rem' }}
            variant="h4"
          >
            Admin
          </Typography>
          <TextField
            fullWidth
            label="First Name"
            margin="normal"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextField
            fullWidth
            label="Last Name"
            margin="normal"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
          <TextField
            fullWidth
            label="Assigned Area"
            margin="normal"
            onChange={(e) => setassignedArea(e.target.value)}
            value={assignedArea}
          />
          <Button color="primary" onClick={handleAddAdmin} variant="contained">
            Add Admin
          </Button>
        </Container>

        <Container style={{ marginTop: '2rem', width: '100%' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
            }}
          >
            <Typography gutterBottom variant="h6">
              Admin List
            </Typography>
            <div style={{ overflowX: 'auto' }}>
              {adminList.length === 0 ? (
                <Typography>No admin users added yet.</Typography>
              ) : (
                <table
                  style={{
                    border: '1px solid #ddd',
                    borderCollapse: 'collapse',
                    width: '100%',
                  }}
                  // maxWidth="md"
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          backgroundColor: '#f2f2f2',
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
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
                        Assigned Area
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
                          }}
                        >
                          {admin.assignedArea}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            display: 'flex',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          <Button
                            color="secondary"
                            onClick={() => handleRemoveAdmin(index)}
                            variant="outlined"
                          >
                            Remove
                          </Button>
                          <Button
                            color={
                              adminStatusList[index] ? 'secondary' : 'primary'
                            }
                            onClick={() => handleToggleAdminStatus(index)}
                            style={{ marginLeft: '0.5rem' }}
                            variant="outlined"
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
