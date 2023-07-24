import { Box, Button, Container, Grid, Typography } from "@mui/material";
import TopBar from "../../components/TopBar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function ViewProject() {
    return (
    <>
    <TopBar title="" />
       <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          minHeight: "100vh",
       
      
          
        }}
      >
     <Grid  style={{
               
              
                padding: "1rem 3rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              
              
              }}>

     <Typography
              variant="h4"
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                lineHeight: "1",
              
               
              }}
            >
              Project Title
            </Typography>

            <Box 
          position="relative"
          height="350px"
          width="100%"
          marginTop="40px"
          
        >
          <img
            src="cover.jpg"
            alt="main image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          </Box>

          <Grid container spacing={1} > 
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="150px"
                  width="100%"
                  marginTop="30px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
           
              marginTop: "2rem",
            
            }}>
           
              <Card sx={{ minWidth: 200 ,minHeight:300}}>
      <CardContent>
        <Typography variant="h8" >
         Description
        </Typography>
     
      </CardContent>
     
      
    
    </Card>
            </Grid>

            <Grid
            item
            xs={12}
            md={6}
            style={{
             
              marginTop: "2rem",
             
            }}>
             
              <Card sx={{ minWidth: 200 ,minHeight:120,marginBottom:7,}}>
      <CardContent>
        <Typography variant="h8" >
         Budget
        </Typography>
     
      </CardContent>
     
      
    
    </Card>
    <Card sx={{ minWidth: 200 ,minHeight:120,}}>
      <CardContent>
        <Typography variant="h8" >
         Location
        </Typography>
     
      </CardContent>
     
      
    
    </Card>
            </Grid>
            </Grid>

 <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="300px"
                  width="60%"
                  marginTop="20px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="300px"
                  width="60%"
                  marginTop="20px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  position="relative"
                  height="300px"
                  width="60%"
                  marginTop="20px"
                >
                  <img
                    src="formBg.jpg"
                    alt="Banner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

     </Grid>
      </Container>
       
  
  </>
);
}

export default ViewProject;