import React, { useState } from "react";
import { Box, Typography, Popover, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/adminDashboard/Header";
import PropTypes from "prop-types";
import RequestView from "./RequestView"; // Import the content for the popover

const RequestTable = ({ data, columns, tabTitle }) => {
  const colors = tokens;
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleViewClick = (row) => (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setPopoverAnchorEl(null);
    setIsPopoverOpen(false);
  };


  return (
    <Box>
      <Header subtitle={`${tabTitle}`} />

      <Box
        boxShadow={3}
        m="20px 0 0 0"
        height="75vh"
        sx={{
          backgroundColor: colors.darkGreen,
          borderRadius: 8,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[300],
            borderBottom: "none",

          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[300],

          },
          "& .MuiButton-root": {
            margin: "0 5px", // Adjust the margin as needed
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={(params) => {
            if (params.row) {
              handleViewClick(params.row)(params.event);
            }
          }}
        />
      </Box>

     {/* View Button */}
     {popoverAnchorEl && (
        <Popover
          open={isPopoverOpen}
          anchorEl={window}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          sx={{
            "& .MuiPopover-paper": {
              maxWidth: "80% !important", // Add !important
              maxHeight: "80vh !important", // Add !important
            },
          }}

        >
          {/* Render the content from RequestView.jsx */}
          <RequestView />
        </Popover>
      )}
    </Box>
  );
};

RequestTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  tabTitle: PropTypes.string.isRequired,
};

export default RequestTable;
