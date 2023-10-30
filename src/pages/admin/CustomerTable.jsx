import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import RequestTable from "./RequestTable"; // Import the RequestTable component

const CustomerTable = () => {
  const tableTitles = ["Customers"];

  const [enabled, setEnabled] = useState(true); // State to track whether the item is enabled or disabled

  const toggleEnabled = () => {
    setEnabled(!enabled); // Toggle the enabled state
  };

  const generateColumns = (headerName) => [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "serviceId", headerName: "Service ID" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Button variant="outlined" color="primary" onClick={() => handleView(params.row)}>View</Button>
          <Button variant="outlined" color={enabled ? "success" : "error"} onClick={toggleEnabled}>
            {enabled ? "Enable" : "Disable"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => handleRemove(params.row)}>Remove</Button>
        </Box>
      ),
    },
  ];

  const generateData = (title) => [
    { id: 3, serviceId: 103, name: "Alice Johnson", age: 28, phone: "111-222-3333", email: "alice@example.com" },
    { id: 4, serviceId: 104, name: "Bob Wilson", age: 32, phone: "444-555-6666", email: "bob@example.com" },
  ];

  return (
    <Box m="20px">
      <div>
        {tableTitles.map((title, index) => (
          <div key={index}>
            <Box mb="100px">
              <RequestTable
                data={generateData(title)}
                columns={generateColumns(title)}
                tabTitle={title}
                marginTop={index === 0 ? "10px" : "20px"}
              />
            </Box>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CustomerTable;
