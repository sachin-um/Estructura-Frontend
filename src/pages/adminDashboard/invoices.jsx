import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';
import { mockDataInvoices } from '../../data/mockData';
import { tokens } from '../../theme';

const Invoices = () => {
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
      field: 'cost',
      flex: 1,
      headerName: 'Cost',
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: 'date',
      flex: 1,
      headerName: 'Date',
    },
  ];

  return (
    <Box m="20px">
      <Header subtitle="List of Invoice Balances" title="INVOICES" />
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
        <DataGrid checkboxSelection columns={columns} rows={mockDataInvoices} />
      </Box>
    </Box>
  );
};

export default Invoices;
