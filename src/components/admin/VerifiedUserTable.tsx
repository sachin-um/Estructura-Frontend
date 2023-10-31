import type { GridColDef } from '@mui/x-data-grid';

import { Box, Button, Popover, Tab, Tabs, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

import { useAdmin } from '../../hooks/admin/useAdmin';
import useFetchAllUsers from '../../hooks/users/useFetchAllUsers';
import columnDefs from './columns';
import useUserViewPopOver from './popOver';

const VerifiedUsers = () => {
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

  const { activateOrSuspendAccount } = useAdmin();

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
              activateOrSuspendAccount(
                params.row.id,
                params.row.status === 'ACTIVE' ? 'SUSPEND' : 'ACTIVE',
              ).then((result) => {
                if (result.success === true) console.log('Toggled');
                alert(
                  `User: ${params.row.firstName} ${params.row.lastName} is ${
                    params.row.status === 'ACTIVE' ? 'Suspend' : 'Activate'
                  }d`,
                );
                fetchAllUsers();
              });
            }}
            color="success"
            variant="outlined"
          >
            {params.row.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
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
            <Box mb={i === 0 ? 10 : 20}>
              <DataGrid
                rows={users.filter(
                  (p) => p.role === title && p.verified === true,
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

export default VerifiedUsers;
