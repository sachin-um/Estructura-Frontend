import type { GridValueGetterParams } from '@mui/x-data-grid';

const columnDefs = [
  { field: 'id', flex: 0.5, headerName: 'ID' },
  {
    cellClassName: 'name-column-cell',
    field: 'name',
    flex: 1,
    headerName: 'Name',
    valueGetter: (params: GridValueGetterParams<User>) =>
      `${params.row.firstName} ${params.row.lastName}`,
  },
  { field: 'businessContactNo', flex: 1, headerName: 'Phone Number' },
  { field: 'email', flex: 1, headerName: 'Email' },
];

export default columnDefs;
