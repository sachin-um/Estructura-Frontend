import TopBar from "../components/TopBar";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Tabs,
  Tab,
  ListItemIcon,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import PreviousProjects from "../components/ServiceProviderProf/PreviousProjects";
import Responses from "../components/ServiceProviderProf/Responses";
import Messages from "../components/ServiceProviderProf/Messages";
import Reviews from "../components/ServiceProviderProf/Reviews";

function ServiceProviderProfile({ updateFormData, nextPage, previousPage }) {
  const [value, setValue] = useState("one");
  const [activeTab, setActiveTab] = useState("one");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleTabChange = (event, tab) => {
    setValue(tab);
    setActiveTab(tab);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <>
      <TopBar title="Service Provider Profile" />

      <Box position="relative" height="200px" width="100%">
        <img
          src="cover.jpg"
          alt="cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          position="absolute"
          top="50%"
          left="7%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          p={4}
          maxWidth="200px"
        >
          <Box position="relative" display="flex" flexDirection="column" alignItems="center">
            <img
              src={profilePicture || "account-avatar-person-profile-user-svgrepo-com.svg"}
              alt="user"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <Box
              position="absolute"
              bottom="-20px"
              left="70%"
              transform="translateX(-50%)"
              display="flex"
              alignItems="center"
              zIndex="1"
              p={1}
              cursor="pointer"
              color="primary.main"
              borderRadius="50%"
              sx={{
                "&:hover": {
                  color: "primary.dark",
                },
              }}
              onClick={() => {
                document.getElementById("profilePictureInput").click();
              }}
            >
              <label htmlFor="profilePictureInput" style={{ cursor: "pointer" }}>
                <CameraAltIcon />
              </label>
              <input
                id="profilePictureInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleProfilePictureChange}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card sx={{ width: "300px", height: "280px", marginTop: "3rem", marginLeft: "2rem" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                John Doe
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Architect
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Based in Colombo
              </Typography>
              <Box mt={6}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    +94 713729173
                  </Typography>
                </Stack>
              </Box>
              <Box mt={4}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    john.doe@example.com
                  </Typography>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={9} xs={12}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Profile Details" sx={{ marginRight: "4rem" }} />
            <Tab value="two" label="Previous Projects" sx={{ marginRight: "4rem" }} />
            <Tab value="three" label="Responses" sx={{ marginRight: "4rem" }} />
            <Tab value="four" label="Messages" sx={{ marginRight: "4rem" }} />
            <Tab value="five" label="Reviews" />
          </Tabs>

          {activeTab === "one" && (
            <Card sx={{ marginTop: "3rem" }}>
              <CardContent>
                {/* Profile Details Content */}
              </CardContent>
            </Card>
          )}
          {activeTab === "two" && <PreviousProjects />}
          {activeTab === "three" && <Responses />}
          {activeTab === "four" && <Messages />}
          {activeTab === "five" && <Reviews />}
        </Grid>
      </Grid>
    </>
  );
}

export default ServiceProviderProfile;




