import React, { useState } from 'react';
import { Box, Tab, Tabs, Button, Popover, Typography } from '@mui/material';
import RequestTable from './RequestTable';
import Member from './Member'; // Make sure to use the correct import filename with an uppercase 'M'
import RequestView from './RequestView';

const Request = () => {
  const [currentTab, setCurrentTab] = useState('Request');
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const tableTitles = [
    'Architects',
    'Interior Designers',
    'Home Builders',
    'Landscape Architects',
    'Painters',
    'Carpenters',
    'Construction Companies',
    'Renters',
    'Retail Stores',
  ];

  const generateColumns = (headerName) => [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'serviceId', headerName: 'Service ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleOpenPopover}
          >
            View
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={() => handleEnable(params.row)}
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleRemove(params.row)}
          >
            Decline
          </Button>
        </Box>
      ),
    },
  ];

  const generateData = (title) => {
    // Example data for "Architects" table
    if (title === 'Architects') {
      return [
        {
          id: 1,
          registrarId: 101,
          name: 'John Doe',
          age: 30,
          phone: '123-456-7890',
          email: 'john@example.com',
        },
        {
          id: 2,
          registrarId: 102,
          name: 'Jane Smith',
          age: 25,
          phone: '987-654-3210',
          email: 'jane@example.com',
        },
        // Add more data as needed for "Architects" table
      ];
    }

    // Example data for "Interior Designers" table
    if (title === 'Interior Designers') {
      return [
        {
          id: 3,
          serviceId: 103,
          name: 'Alice Johnson',
          age: 28,
          phone: '111-222-3333',
          email: 'alice@example.com',
        },
        {
          id: 4,
          serviceId: 104,
          name: 'Bob Wilson',
          age: 32,
          phone: '444-555-6666',
          email: 'bob@example.com',
        },
        // Add more data as needed for "Interior Designers" table
      ];
    }

    return []; // Return an empty array if the title doesn't match any table
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  const handleView = (data) => (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setPopoverAnchorEl(null);
    setIsPopoverOpen(false);
  };
  const handleOpenPopover = (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  return (
    <Box m="20px">
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        <Tab label="Members" value="Members" />
        <Tab label="Request" value="Request" />
      </Tabs>

      {currentTab === 'Members' && <Member />}

      {currentTab === 'Request' && (
        <div>
          {tableTitles.map((title, i) => (
            <div key={i}>
              <Box mb={i === 0 ? 10 : 20}>
                <RequestTable
                  data={generateData(title)}
                  columns={generateColumns(title)}
                  tabTitle={title}
                  onViewClick={handleView} // Pass the click handler to the RequestTable component
                />
              </Box>
            </div>
          ))}
        </div>
      )}

      {/* Popover */}
      <Popover
        open={isPopoverOpen}
        anchorEl={window}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            maxWidth: '80% !important', // Add !important
            maxHeight: '80vh !important', // Add !important
          },
        }}
      >
        {/* Render the RequestView component as popover content */}
        <RequestView />
      </Popover>
    </Box>
  );
};

export default Request;
