import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';
import { mockDataTeam } from '../../data/mockData';
import { tokens } from '../../theme';

const Team = () => {
  const theme = useTheme();
  const colors = tokens;
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      cellClassName: 'name-column--cell',
      field: 'name',
      flex: 1,
      headerName: 'Name',
    },
    {
      align: 'left',
      field: 'age',
      headerAlign: 'left',
      headerName: 'Age',
      type: 'number',
    },
    {
      field: 'phone',
      flex: 1,
      headerName: 'Phone Number',
    },
    {
      field: 'email',
      flex: 1,
      headerName: 'Email',
    },
    {
      field: 'accessLevel',
      flex: 1,
      headerName: 'Access Level',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : access === 'manager'
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
            display="flex"
            justifyContent="center"
            m="0 auto"
            p="5px"
            width="60%"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header subtitle="Managing the Team Members" title="TEAM" />
      <Box
        sx={{
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.brownAccent[400],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.brownAccent[400],
            borderTop: 'none',
          },
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
        }}
        height="75vh"
        m="40px 0 0 0"
      >
        <DataGrid checkboxSelection columns={columns} rows={mockDataTeam} />
      </Box>
    </Box>
  );
};

export default Team;
