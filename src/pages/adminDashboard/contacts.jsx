import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';
import { mockDataContacts } from '../../data/mockData';
import { tokens } from '../../theme';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens;

  const columns = [
    { field: 'id', flex: 0.5, headerName: 'ID' },
    { field: 'registrarId', headerName: 'Registrar ID' },
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
      field: 'address',
      flex: 1,
      headerName: 'Address',
    },
    {
      field: 'city',
      flex: 1,
      headerName: 'City',
    },
    {
      field: 'zipCode',
      flex: 1,
      headerName: 'Zip Code',
    },
  ];

  return (
    <Box m="20px">
      <Header
        subtitle="List of Contacts for Future Reference"
        title="CONTACTS"
      />
      <Box
        sx={{
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.blueAccent[700],
            borderTop: 'none',
          },
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
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
        <DataGrid
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rows={mockDataContacts}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
