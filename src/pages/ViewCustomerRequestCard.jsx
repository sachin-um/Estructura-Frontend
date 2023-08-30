import TopBar from "../components/CusTopBar";
import Footer from "../components/Footer";
import "../assets/font.css"
import { Box, Grid, Typography, Divider, Button } from "@mui/material";

const ViewCustomerRequestCard = () => {
    const backgroundImageUrl =
        "https://images.pexels.com/photos/6434620/pexels-photo-6434620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

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
            height: "170vh",
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
            Request for Designing a Modern, Sustainable Dream Home Integrating Nature and Innovation
            </Typography>
            <Divider sx={{ marginBottom: "20px" }} />
            <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1" fontFamily="Poppins" marginRight="10px">
                Category/s of Professional/s:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid green",
                  padding: "5px",
                  marginRight: "20px",
                }}
              >
                <img
                  src="https://designeverest.com/wp-content/uploads/2023/01/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg"
                  alt="Category Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                <Typography variant="body2" fontFamily="Poppins">
                  Architect
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1" fontFamily="Poppins" marginRight="10px">
                Type/s of retail item/s looking for:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid green",
                  padding: "5px",
                  marginRight: "20px",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL for "Lighting"
                  alt="Retail Item Icon"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                <Typography variant="body2" fontFamily="Poppins">
                  Lighting
                </Typography>
              </Box>
            </Box>
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
                    My vision for this project is a modern, sustainable, and functional home that seamlessly integrates with its natural surroundings. I am looking for a design that reflects my appreciation for clean lines, open spaces, and the innovative use of materials. The house should not only be aesthetically pleasing but also highly energy-efficient and environmentally conscious.
                </Typography>
            </Box>
            <Typography variant="subtitle1" fontFamily="Poppins" sx={{ marginTop: "20px" }}>
                AI Image:
            </Typography>
                <img
                    src="https://images.adsttc.com/media/images/633d/4c64/dd0b/8954/dd1d/630a/large_jpg/new-ai-image-generator-can-help-users-redesign-their-own-spaces_5.jpg?1664961650"
                    alt="Generated AI"
                    style={{
                        width: "50%",
                        height: "40%",
                        marginRight: "10px",
                        border: "2px solid green",
                        padding: "5px",
                    }}
                />

            <Typography variant="subtitle1" fontFamily="Poppins" sx={{ marginTop: "20px" }}>
                Price range comfortable with:
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
                Sketches Shared:
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
            <Box sx={{ justifyContent: "space-between", marginTop: "50px" }}>
              <Button variant="contained" color="primary" style={{ width: "35%", marginRight:"50px" }}>
                Accept Request
              </Button>
              <Button variant="outlined" color="primary" style={{ width: "35%" }}>
                View Responses
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ViewCustomerRequestCard;