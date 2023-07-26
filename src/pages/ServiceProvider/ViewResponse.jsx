import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import TopBar from "../../components/CusTopBar";

function ViewResponse() {
    return (
        <>
            <TopBar />
                <Box
                    sx={{
                        height: '100vh', // Set height to 100% of the viewport
                        backgroundImage: 'url("HomeOwnerBG.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Card style={{ width: '90%', height: '90vh', backgroundColor: '#F3F3F3', padding: '1rem' }}>
                        <CardContent>
                            <Typography variant="h6">Request ID: 2101</Typography>
                            <Box sx={{ marginTop: '1rem' }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="body1">
                                            I am interested in creating a contemporary, sustainable, and innovative residence
                                            that complements the natural beauty of its surroundings. I envision a home that not
                                            only provides comfort and functionality for my family but also harmonizes with the
                                            environment and promotes well-being through biophilic design principles.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box sx={{ marginTop: '2rem' }}>
                                <Grid container spacing={6}>
                                    <Grid item xs={6}>
                                        <Typography variant="h6">Response</Typography>
                                        <Card style={{ height: '14rem' }}>
                                            <CardContent>
                                                <Typography variant="body1">
                                                    Thank you for your interest in our services. We are excited to work on your project
                                                    and create a contemporary, sustainable, and innovative residence that complements
                                                    the natural beauty of its surroundings. Our team of experts will ensure that your
                                                    vision is brought to life with the highest level of quality and craftsmanship.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h6">Cost Estimation</Typography>
                                        <Card style={{ height: '4rem' }}>
                                            <CardContent>
                                                <Typography variant="body1">
                                                    Rs. 100,000.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Box sx={{ marginTop: '2rem' }}>
                                            <Typography variant="h6">Documents</Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                                <img src="ForgotPasswordBG.jpg" alt="Document 1" style={{ width: '40%', height: '100px', marginRight: '20px' }} />
                                                <img src="BannerImage.jpg" alt="Document 2" style={{ width: '40%', height: '100px', marginRight: '20px' }} />
                                                <img src="formBg.jpg" alt="Document 3" style={{ width: '40%', height: '100px' }} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '2rem' }}>
                                            <Typography variant="h6">Images</Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                                <img src="formBg.jpg" alt="Image 1" style={{ width: '40%', height: '100px', marginRight: '20px' }} />
                                                <img src="formBg.jpg" alt="Image 2" style={{ width: '40%', height: '100px', marginRight: '20px' }} />
                                                <img src="formBg.jpg" alt="Image 3" style={{ width: '40%', height: '100px' }} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </>
        );
    }

export default ViewResponse;



