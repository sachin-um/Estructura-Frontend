import TopAppBar from '../../components/TopAppBar';
import { useState } from 'react';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import TrafficIcon from '@mui/icons-material/Traffic';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import '../../assets/admindb.css';
import { AdminAuthenticated } from '../../components/Auth/Authenticated';
import BarChart from '../../components/adminDashboard/BarChart';
import GeographyChart from '../../components/adminDashboard/GeographyChart';
import Header from '../../components/adminDashboard/Header';
import LineChart from '../../components/adminDashboard/LineChart';
import ProgressCircle from '../../components/adminDashboard/ProgressCircle';
import StatBox from '../../components/adminDashboard/StatBox';
import { mockTransactions } from '../../data/mockData';
import { tokens } from '../../theme';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens;
  const [res, setRes] = useState(null);

  return (
    // <AdminAuthenticated>
    <div>
      <TopAppBar setRes={setRes} />
      <Box m="20px">
        {/* HEADER */}
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Header subtitle="Welcome to your dashboard" title="DASHBOARD" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.brownAccent[400],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: '10px' }} />
              Download Reports
            </Button>
          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gap="20px"
          gridAutoRows="140px"
          gridTemplateColumns="repeat(12, 1fr)"
        >
          {/* ROW 1 */}
          <Box
            alignItems="center"
            backgroundColor={colors.primary[400]}
            display="flex"
            gridColumn="span 3"
            justifyContent="center"
          >
            <StatBox
              icon={
                <AttachMoneyOutlinedIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase=""
              progress="0.75"
              subtitle="Income"
              title="12,361"
            />
          </Box>
          <Box
            alignItems="center"
            backgroundColor={colors.primary[400]}
            display="flex"
            gridColumn="span 3"
            justifyContent="center"
          >
            <StatBox
              icon={
                <HandymanOutlinedIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase=""
              progress="0.50"
              subtitle="Retail Items Available"
              title="25"
            />
          </Box>
          <Box
            alignItems="center"
            backgroundColor={colors.primary[400]}
            display="flex"
            gridColumn="span 3"
            justifyContent="center"
          >
            <StatBox
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase=""
              progress="0.30"
              subtitle="Customers"
              title="2"
            />
          </Box>
          <Box
            alignItems="center"
            backgroundColor={colors.primary[400]}
            display="flex"
            gridColumn="span 3"
            justifyContent="center"
          >
            <StatBox
              icon={
                <EngineeringSharpIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase=""
              progress="0.80"
              subtitle="Service Providers"
              title="7"
            />
          </Box>

          {/* ROW 2 */}
          <Box
            backgroundColor={colors.primary[400]}
            gridColumn="span 12"
            gridRow="span 3"
          >
            <Box
              alignItems="center"
              display="flex "
              justifyContent="space-between"
              mt="25px"
              p="0 30px"
            >
              <Box>
                <Typography
                  color={colors.grey[100]}
                  fontWeight="600"
                  variant="h5"
                >
                  Revenue Generated
                </Typography>
                <Typography
                  color={colors.greenAccent[300]}
                  fontWeight="bold"
                  variant="h3"
                >
                  LKR 9,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="320px" m="-10px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          {/* ROW 3 */}
          <Box
            backgroundColor={colors.primary[400]}
            gridColumn="span 4"
            gridRow="span 2"
            p="30px"
          >
            <Typography fontWeight="600" variant="h5">
              Campaign
            </Typography>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                color={colors.greenAccent[300]}
                sx={{ mt: '15px' }}
                variant="h5"
              >
                LKR9,342.32 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            gridColumn="span 4"
            gridRow="span 2"
          >
            <Typography
              fontWeight="600"
              sx={{ padding: '30px 30px 0 30px' }}
              variant="h5"
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            gridColumn="span 4"
            gridRow="span 2"
            padding="30px"
          >
            <Typography
              fontWeight="600"
              sx={{ marginBottom: '15px' }}
              variant="h5"
            >
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
    // </AdminAuthenticated>
  );
};

export default Dashboard;
