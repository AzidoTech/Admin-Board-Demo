import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

const ConfirmationDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>Are you sure you want to delete this user?</DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{ color: "white", backgroundColor: "green" }}
        >
          Cancel
        </Button>
        <Button
          sx={{ color: "white", backgroundColor: "red" }}
          onClick={onConfirm}
        >
          Confirm Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
