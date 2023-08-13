import TopBar from "../components/CusTopBar";
import Footer from "../components/Footer";
import { Typography, SvgIcon, Box, Card, CardContent, Grid, Divider } from "@mui/material";
import "../assets/font.css";
import RequestIcon from "@mui/icons-material/ContactSupport";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";

const ViewCustomerRequest = () => {
    return(
        <>
        <TopBar />
        
        <Box sx={{ backgroundColor: "#F3F3F3", padding: 4 }}>
            <Typography variant="h4" fontFamily="Poppins" color="primary" sx={{ marginTop: 5, textAlign: "center" }}>
            <SvgIcon component={RequestIcon} sx={{ fontSize: 36, color: "primary", marginRight: 1 }} />
                Your Expertise, Their Needs
            </Typography>
        </Box>

        <Grid container spacing={2} marginTop="50px">
                <Box sx={{ padding: 4, marginLeft: "20px", cursor: "pointer" }}>
                    <Card sx={{ width: "400px", backgroundColor: "#F3F3F3"}}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="#435834" fontWeight="bold">
                                Request Title
                            </Typography>
                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                            <Typography variant="body1"  sx={{ marginTop:2 }}>
                                Min: LKR. 40,000 - Max: LKR. 80,000
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                                <AccountCircleIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body2" sx={{ marginRight: 15 }}>Username</Typography>
                                <PhoneIcon />
                                <Typography variant="body2">+94 77 3829472</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ padding: 4, marginLeft: "20px", cursor: "pointer" }}>
                    <Card sx={{ width: "400px", backgroundColor: "#F3F3F3"}}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="#435834" fontWeight="bold">
                                Request Title
                            </Typography>
                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                            <Typography variant="body1"  sx={{ marginTop:2 }}>
                                Min: LKR. 40,000 - Max: LKR. 80,000
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                                <AccountCircleIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body2" sx={{ marginRight: 15 }}>Username</Typography>
                                <PhoneIcon />
                                <Typography variant="body2">+94 77 3829472</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ padding: 4, marginLeft: "20px", cursor: "pointer" }}>
                    <Card sx={{ width: "400px", backgroundColor: "#F3F3F3"}}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="#435834" fontWeight="bold">
                                Request Title
                            </Typography>
                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                            <Typography variant="body1"  sx={{ marginTop:2 }}>
                                Min: LKR. 40,000 - Max: LKR. 80,000
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                                <AccountCircleIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body2" sx={{ marginRight: 15 }}>Username</Typography>
                                <PhoneIcon />
                                <Typography variant="body2">+94 77 3829472</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
        </Grid>

        <Grid container spacing={2}>
                <Box sx={{ padding: 4, marginLeft: "20px", cursor: "pointer" }}>
                    <Card sx={{ width: "400px", backgroundColor: "#F3F3F3"}}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="#435834" fontWeight="bold">
                                Request Title
                            </Typography>
                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                            <Typography variant="body1"  sx={{ marginTop:2 }}>
                                Min: LKR. 40,000 - Max: LKR. 80,000
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                                <AccountCircleIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body2" sx={{ marginRight: 15 }}>Username</Typography>
                                <PhoneIcon />
                                <Typography variant="body2">+94 77 3829472</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ padding: 4, marginLeft: "20px", cursor: "pointer" }}>
                    <Card sx={{ width: "400px", backgroundColor: "#F3F3F3"}}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="#435834" fontWeight="bold">
                                Request Title
                            </Typography>
                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                            <Typography variant="body1"  sx={{ marginTop:2 }}>
                                Min: LKR. 40,000 - Max: LKR. 80,000
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                                <AccountCircleIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body2" sx={{ marginRight: 15 }}>Username</Typography>
                                <PhoneIcon />
                                <Typography variant="body2">+94 77 3829472</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ padding: 4, marginLeft: "20px", cursor: "pointer" }}>
                    <Card sx={{ width: "400px", backgroundColor: "#F3F3F3"}}>
                        <CardContent>
                            <Typography variant="h6" align="center" color="#435834" fontWeight="bold">
                                Request Title
                            </Typography>
                            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                            <Typography variant="body1"  sx={{ marginTop:2 }}>
                                Min: LKR. 40,000 - Max: LKR. 80,000
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                                <AccountCircleIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body2" sx={{ marginRight: 15 }}>Username</Typography>
                                <PhoneIcon />
                                <Typography variant="body2">+94 77 3829472</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
        </Grid>
    
    <Footer />
    </>
    )
    
}

export default ViewCustomerRequest;