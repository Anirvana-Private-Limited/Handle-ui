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
  Select,
  MenuItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const ShareSearchDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ShareSearchDialog = ({
  handleShareSearchDialogClose,
  shareSearchDialog,
}) => {
  return (
    <ShareSearchDialogContainer
      // onClose={handleShareSearchDialogClose}
      aria-labelledby="customized-dialog-title"
      open={shareSearchDialog}
      maxWidth="sm"
      fullWidth
    >
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            SHARE SEARCH
          </DialogTitle>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="close"
            onClick={handleShareSearchDialogClose}
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
          <Select displayEmpty fullWidth size="small">
            <MenuItem value={""}>Current Search</MenuItem>
            <MenuItem>Current Search 1</MenuItem>
          </Select>
        </Grid>
        <Grid p={4}>
          <TextField fullWidth size="small" placeholder="Title" />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleShareSearchDialogClose}>
          Cancel
        </Button>
        <Button
          autoFocus
          onClick={handleShareSearchDialogClose}
          variant="outlined"
        >
          Share
        </Button>
      </DialogActions>
    </ShareSearchDialogContainer>
  );
};

export default ShareSearchDialog;
