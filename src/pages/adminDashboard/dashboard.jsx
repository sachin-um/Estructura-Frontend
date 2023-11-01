import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import "../../assets/admindb.css";
import BarChart from "../../components/adminDashboard/BarChart";
import Header from "../../components/adminDashboard/Header";
import LineChart from "../../components/adminDashboard/LineChart";
import ProgressCircle from "../../components/adminDashboard/ProgressCircle";
import StatBox from "../../components/adminDashboard/StatBox";

import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens;

  const dashboardStyle = {
    backgroundColor: '#f2f0f0', // Change this to your desired shade of purple


  };
  return (
    <Box m="200px" sx={dashboardStyle}>
        {/* HEADER */}
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />

          <Box >
            <Button
              sx={{
                backgroundColor: colors.greenAccent[600],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display='grid'
          gridTemplateColumns='repeat(12, 1fr)'
          gridAutoRows='140px'
          gap='50px 20px'

        >
          {/* ROW 1 */}
          <Box
            gridColumn='span 3'
            backgroundColor="white"
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <StatBox
              title='12,361'
              subtitle='Income'
              progress='0.75'
              increase='+14%'
              icon={
                < AttachMoneyOutlinedIcon
                  sx={{ color: colors.redAccent[800], fontSize: "26px" }}
                />
              }

            />
          </Box>
          <Box
            gridColumn='span 3'
            backgroundColor="white"
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <StatBox
              title='431,225'
              subtitle='Retail Items Available'
              progress='0.50'
              increase='+21%'
              icon={
                <PriceChangeOutlinedIcon
                  sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn='span 3'
            backgroundColor="white"
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <StatBox
              title='32,441'
              subtitle='Customers'
              progress='0.30'
              increase='+5%'
              icon={
                <PersonAddIcon
                  sx={{ color: colors.redAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn='span 3'
            backgroundColor="white"
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <StatBox
              title='1,325,134'
              subtitle='Service Providers'
              progress='0.80'
              increase='+43%'
              icon={
                < EngineeringSharpIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}
          <Box
            gridColumn='span 13'
            gridRow='span 3'
            backgroundColor="white"
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <Box
              mt='12px'
              p='0 30px'
              display='flex '
              justifyContent='space-between'
              alignItems='center'
            >
              <Box>
                <Typography
                  variant='h5'
                  fontWeight='600'
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant='h3'
                  fontWeight='bold'
                  color={colors.greenAccent[300]}
                >
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[300] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height='400px' m='-20px 0 0 0'>
              <LineChart isDashboard={true} />
            </Box>
          </Box>


          {/* ROW 3 */}
          <Box
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor="white"
            p='30px'
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <Typography variant='h5' fontWeight='600'>
              Campaign
            </Typography>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              mt='25px'
            >
              <ProgressCircle size='125' />
              <Typography
                variant='h5'
                color={colors.greenAccent[300]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor="white"
            sx={{ border: '0.50px #E0E2E7 solid',borderRadius: 4, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",}}
          >
            <Typography
              variant='h5'
              fontWeight='600'
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height='250px' mt='-20px'>
              <BarChart isDashboard={true} />
            </Box>
          </Box>

        </Box>
      </Box>
  );
};

export default Dashboard;
