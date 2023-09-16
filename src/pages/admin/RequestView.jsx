import React, { useState } from "react";
import { Avatar, Box, Card, CardContent, TextField, Typography } from "@mui/material";

const RequestView = () => {
  // Sample profile data (replace with your data)
  const initialProfile = {
    name: "John Doe",
    username: "johndoe123",
    email: "johndoe@example.com",
    bio: "Software Developer",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  const [profile, setProfile] = useState(initialProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    }}
  >
    <Card  sx={{ width: "500px", height: "600px" }}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar src={profile.avatarUrl} alt={profile.name} sx={{ width: 100, height: 100,mb: 2 }} />
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            value={profile.name}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            value={profile.username}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            value={profile.email}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            name="district"
            label="District"
            variant="outlined"
            multiline
            value={profile.bio}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
           <TextField
            name="services"
            label="Services offerd"
            variant="outlined"
            multiline
            value={profile.bio}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Box>
      </CardContent>
    </Card>
</div>
  );
};

export default RequestView;
