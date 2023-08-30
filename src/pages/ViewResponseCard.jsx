import TopBar from "../components/CusTopBar";
import Footer from "../components/Footer";
import "../assets/font.css"
import { Box, Grid, Typography, Divider, Button } from "@mui/material";

const ViewResponseCard = () => {
    const backgroundImageUrl =
        "https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <>
      <TopBar />
      <Box display="flex">
        <Grid
          item
          xs={12}
          md={6}
          style={{
            position: "relative",
            height: "110vh",
            borderBottomRightRadius: "50%",
            flex: "0 0 50%",
            padding: "20px",
            margin: "40px",
            overflow: "hidden",
          }}
        >
                <img
                src={backgroundImageUrl}
                alt="Background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            height="100vh"
            paddingTop="50px"
            paddingRight="20px"
            paddingBottom="50px"
            paddingLeft="20px"
          >
            <Typography variant="h6" fontFamily="Poppins" gutterBottom>
            Approach to Designing Your Vision of a Modern, Sustainable Dream Home
            </Typography>
            <Divider sx={{ marginBottom: "20px" }} />
            <Typography variant="subtitle1" fontFamily="Poppins" sx={{ marginTop: "20px" }}>
              Description of the idea:
            </Typography>
            <Box
                sx={{
                    border: "2px solid green",
                    padding: "10px",
                    marginTop: "10px",
                    textAlign: "justify",
                }}
            >
                <Typography variant="body2" fontFamily="Poppins" sx={{ textAlign: "justify" }}>
                To begin, I will thoroughly analyze your requirements, preferences, and the site's unique characteristics. I'll create a concept that captures the essence of your vision while taking into account factors such as natural light, views, and topography. This phase will involve brainstorming design ideas that encompass your desired aesthetic and sustainability goals. I'll develop a spatial layout that optimizes functionality and flow. Your emphasis on open spaces will guide the arrangement of rooms and common areas. To promote a sense of connection with the outdoors, I'll strategically position windows, glass doors, and skylights to invite natural light and scenic views into the interior spaces.
                </Typography>
            </Box>

            <Typography variant="subtitle1" fontFamily="Poppins" sx={{ marginTop: "20px" }}>
                Estimated Budget Range:
            </Typography>
            <Box
              sx={{
                display: "inline-block",
                border: "2px solid green",
                padding: "5px",
                marginTop: "10px",
                marginLeft: "40px",
              }}
            >
                <Typography variant="body2" fontFamily="Poppins" sx={{ textAlign: "justify", marginLeft: "5px" }}>
                    Min: LKR 150 000 - Max: LKR 250 000
                </Typography>
            </Box>
            <Typography variant="subtitle1" fontFamily="Poppins" sx={{ marginTop: "20px" }}>
                Images/Documents shared:
            </Typography>
            <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
            <img
                    src="https://img.freepik.com/premium-photo/modern-living-room-clean-lines-neutral-colors-natural-elements-design-concept_763042-1619.jpg"
                    alt="Generated AI"
                    style={{
                        width: "30vh",
                        height: "30vh",
                        marginRight: "10px",
                        border: "2px solid green",
                        padding: "5px",
                    }}
                />
            <img
                    src="https://images.squarespace-cdn.com/content/v1/542afd6de4b09148cad4044b/1627069189925-YK8168BE2DCWTIKOOGUT/Interior-Design-Drawing-and-Marker+Rendering-by+Susan-Knof.JPGg"
                    alt="Generated AI"
                    style={{
                        width: "30vh",
                        height: "30vh",
                        marginRight: "10px",
                        border: "2px solid green",
                        padding: "5px",
                    }}
                />
            </Box>
              <Button variant="contained" color="primary" style={{ width: "35%", margin: "50px 150px 0", display: "block" }}>
                Accept Request
              </Button>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ViewResponseCard;