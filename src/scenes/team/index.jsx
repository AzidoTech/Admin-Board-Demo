import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import React, { useState } from "react";

import Header from "../../components/Header";

import ConfirmationDialog from "./ConfirmationDialog";

const Team = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "access", headerName: "Access Level", flex: 1 },
    {
      field: "deleteUser",
      headerName: "Delete User",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          // color="secondary"
          sx={{ color: "white", backgroundColor: "red" }}
          onClick={() => {
            setSelectedRow(params.row);
            setIsDialogOpen(true);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  const handleDeleteClick = (params) => {
    setSelectedRow(params.row);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Perform the deletion action here, e.g., remove the selected row from your data
    // and close the dialog
    // Update your data source or state here

    // After deleting, close the dialog

    setIsDialogOpen(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <Box m="60px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <DataGrid
        columns={columns}
        rows={mockDataTeam}
        pageSize={5}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        autoHeight
        // checkboxSelection
        disableColumnMenu
      />
      <ConfirmationDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default Team;
