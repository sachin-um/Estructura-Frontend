// import VerifiedUsers from './VerifiedUsers'; // Make sure to use the correct import filename with an uppercase 'M'
import type { GridColDef } from '@mui/x-data-grid';

import { Box, Button, Tab, Tabs, Typography, capitalize } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

import { useAdmin } from '../../hooks/admin/useAdmin';
import useFetchAllUsers from '../../hooks/users/useFetchAllUsers';
import { capitalizeOnlyFirstLetter } from '../../utils/Capitalize';
import columnDefs from './columns';
import useUserViewPopOver from './popOver';

const UserRequests = () => {
  const tableTitles: Role[] = [
    'ARCHITECT',
    'INTERIORDESIGNER',
    'MASONWORKER',
    'LANDSCAPEARCHITECT',
    'PAINTER',
    'CARPENTER',
    'CONSTRUCTIONCOMPANY',
    'RENTER',
    'RETAILSTORE',
  ];

  const { Popover, handleOpenPopover } = useUserViewPopOver();

  const { verifyUser } = useAdmin();

  const Columns: GridColDef<User>[] = [
    ...columnDefs,
    {
      field: 'actions',
      flex: 1,
      headerName: 'Actions',
      renderCell: (params) => (
        <Box>
          <Button
            color="primary"
            onClick={handleOpenPopover(params.row)}
            variant="outlined"
          >
            View
          </Button>
          <Button
            onClick={() => {
              verifyUser(params.row.id).then((result) => {
                if (result.success === true) {
                  alert(
                    `User: ${params.row.firstName} ${params.row.lastName} has been verified`,
                  );
                  fetchAllUsers();
                } else {
                  alert('Something went wrong');
                }
              });
            }}
            color="success"
            variant="outlined"
          >
            Accept
          </Button>
        </Box>
      ),
    },
  ];

  const { fetchAllUsers, users } = useFetchAllUsers();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  console.log(users);

  return (
    <>
      <div>
        {tableTitles.map((title, i) => (
          <div key={i}>
            <h3 style={{ marginTop: 40 }}>{title}</h3>
            <Box>
              <DataGrid
                rows={users.filter(
                  (p) => p.role === title && p.adminApproved === false,

                )}
                columns={Columns}
              />
            </Box>
          </div>
        ))}
      </div>
      <Popover />
    </>
  );
};

export default UserRequests;
