import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
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

  return (
    <AdminAuthenticated>
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
                <EmailIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase="+14%"
              progress="0.75"
              subtitle="Emails Sent"
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
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase="+21%"
              progress="0.50"
              subtitle="Sales Obtained"
              title="431,225"
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
              increase="+5%"
              progress="0.30"
              subtitle="New Clients"
              title="32,441"
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
                <TrafficIcon
                  sx={{ color: colors.greenAccent[300], fontSize: '26px' }}
                />
              }
              increase="+43%"
              progress="0.80"
              subtitle="Traffic Received"
              title="1,325,134"
            />
          </Box>

          {/* ROW 2 */}
          <Box
            backgroundColor={colors.primary[400]}
            gridColumn="span 8"
            gridRow="span 2"
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
                  $59,342.32
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
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            gridColumn="span 4"
            gridRow="span 2"
            overflow="auto"
          >
            <Box
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              display="flex"
              justifyContent="space-between"
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                fontWeight="600"
                variant="h5"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                display="flex"
                justifyContent="space-between"
                key={`${transaction.txId}-${i}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[300]}
                    fontWeight="600"
                    variant="h5"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[300]}
                  borderRadius="4px"
                  p="5px 10px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
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
                $48,352 revenue generated
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
    </AdminAuthenticated>
  );
};

export default Dashboard;
