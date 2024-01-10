import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const SaveSearchDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SaveSearchDialog = ({
  handleSaveSearchDialogClose,
  handleShareSearchDialogOpen,
  saveSearchDialog,
}) => {
  return (
    <SaveSearchDialogContainer
      // onClose={handleSaveSearchDialogClose}
      aria-labelledby="customized-dialog-title"
      open={saveSearchDialog}
      maxWidth="sm"
      fullWidth
    >
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            SAVE THIS SEARCH
          </DialogTitle>
        </Grid>
        <Grid item>
          <IconButton onClick={handleShareSearchDialogOpen}>
            <RedoOutlinedIcon color="primary" />
          </IconButton>

          <IconButton
            aria-label="close"
            onClick={handleSaveSearchDialogClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <DialogContent dividers>
        <Grid p={4}>
          <TextField fullWidth size="small" placeholder="Title" />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSaveSearchDialogClose}>
          Cancel
        </Button>
        <Button
          autoFocus
          onClick={handleSaveSearchDialogClose}
          variant="outlined"
        >
          Save
        </Button>
      </DialogActions>
    </SaveSearchDialogContainer>
  );
};

export default SaveSearchDialog;
