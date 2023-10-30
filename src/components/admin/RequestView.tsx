import { Avatar, Box, Card, CardContent, TextField } from '@mui/material';

const RequestView = ({ user }: { user: User }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ height: '600px', width: '500px' }}>
        <CardContent>
          <Box alignItems="center" display="flex" flexDirection="column">
            <Avatar
              alt={user.firstName}
              src={`http://localhost:8080/files/profile-images/${user.id}/${user.profileImageName}`}
              sx={{ height: 100, mb: 2, width: 100 }}
            />
            <TextField
              disabled
              fullWidth
              label="Name"
              name="name"
              sx={{ mb: 2 }}
              value={`${user.firstName} ${user.lastName}`}
              variant="outlined"
            />
            <TextField
              disabled
              fullWidth
              label="Email"
              name="email"
              sx={{ mb: 2 }}
              value={user.email}
              variant="outlined"
            />
            <TextField
              disabled
              fullWidth
              label="District"
              multiline
              name="district"
              sx={{ mb: 2 }}
              value={user.district}
              variant="outlined"
            />
            <TextField
              disabled
              fullWidth
              label="Services offerd"
              multiline
              name="services"
              sx={{ mb: 2 }}
              value={user.role}
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestView;
