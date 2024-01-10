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
import { DatePicker } from "@mui/x-date-pickers";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const AddNewLeadDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddNewLeadDialog = ({
  addNewLeadDialog,
  handleAddNewLeadDialogClose,
}) => {
  const theme = useTheme();

  const placeholderColor = theme.palette.text.secondary;

  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  return (
    <AddNewLeadDialogContainer
      // onClose={handleAddNewLeadDialogClose}
      aria-labelledby="customized-dialog-title"
      open={addNewLeadDialog}
      maxWidth="md"
      fullWidth
    >
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            ADD NEW LEAD
          </DialogTitle>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="close"
            onClick={handleAddNewLeadDialogClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <DialogContent dividers>
        <Grid p={4} container spacing={4} mb={4}>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Name of the Student"
            />
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              label="Date of Birth"
              slotProps={{
                textField: {
                  size: "small",
                  format: "dd/MM/yyyy",
                  fullWidth: true,
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Contact"
              name="contact"
              type="tel"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Email"
              name="email"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Address Line 1"
              name="address"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Address Line 2"
              name="address"
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              displayEmpty
              fullWidth
              style={{
                color: city === "" && placeholderColor,
              }}
              size="small"
            >
              <MenuItem value={""} disabled>
                City
              </MenuItem>
              <MenuItem>City 1</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Pincode"
              name="pincode"
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              displayEmpty
              fullWidth
              style={{
                color: gender === "" && placeholderColor,
              }}
              size="small"
            >
              <MenuItem value={""} disabled>
                Gender
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid p={4} container spacing={4} mb={4}>
          <Grid item xs={4}>
            <DatePicker
              label="Lead Generation Date"
              slotProps={{
                textField: {
                  size: "small",
                  format: "dd/MM/yyyy",
                  fullWidth: true,
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              displayEmpty
              fullWidth
              style={{
                color: gender === "" && placeholderColor,
              }}
              size="small"
            >
              <MenuItem value={""} disabled>
                Course
              </MenuItem>
              {/* <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem> */}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              displayEmpty
              fullWidth
              style={{
                color: gender === "" && placeholderColor,
              }}
              size="small"
            >
              <MenuItem value={""} disabled>
                Platform
              </MenuItem>
              {/* <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem> */}
            </Select>
          </Grid>
        </Grid>

        <Grid p={4} container spacing={4} mb={4}>
          <Grid item xs={4}>
            <DatePicker
              label="Call Back Date"
              slotProps={{
                textField: {
                  size: "small",
                  format: "dd/MM/yyyy",
                  fullWidth: true,
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              label="Appointment Date"
              slotProps={{
                textField: {
                  size: "small",
                  format: "dd/MM/yyyy",
                  fullWidth: true,
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField size="small" fullWidth placeholder="Visitor Name" />
          </Grid>
          <Grid item xs={8}>
            <TextField size="small" fullWidth placeholder="Notes" />
          </Grid>
          <Grid item xs={4}>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              displayEmpty
              fullWidth
              style={{
                color: gender === "" && placeholderColor,
              }}
              size="small"
            >
              <MenuItem value={""} disabled>
                Status
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleAddNewLeadDialogClose}>
          Cancel
        </Button>
        <Button
          autoFocus
          onClick={handleAddNewLeadDialogClose}
          variant="outlined"
        >
          Save
        </Button>
      </DialogActions>
    </AddNewLeadDialogContainer>
  );
};

export default AddNewLeadDialog;
