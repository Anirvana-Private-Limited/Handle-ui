import React, { useState } from "react";
import DashboardLayout from "../../layouts/Dashboard";
import {
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Box,
  Menu,
  Divider,
  Tooltip,
  Snackbar,
  Collapse,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import RestoreIcon from "@mui/icons-material/Restore";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { PushPin } from "@mui/icons-material";
import MuiAlert from "@mui/material/Alert";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import AuthGuard from "../../components/guards/AuthGuard";
import Table from "../../components/tables/MaterialTable";
import { BigCard, SmallCard } from "../../components/cards";
import EditCardsDialog from "../../components/Dialogs/EditCardsDialog";

const SaveSearchDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ShareSearchDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddNewLeadDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SalesDetails = () => {
  const theme = useTheme();

  // Use theme colors
  const primaryColor = theme.palette.primary.main;
  const placeholderColor = theme.palette.text.secondary;
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [platform, setPlatform] = useState("");
  const [advanceFilter, setAdvanceFilter] = useState(false);
  const [saveSearchDialog, setSaveSearchDialog] = useState(false);
  const [shareSearchDialog, setShareSearchDialog] = useState(false);
  const [addNewLeadDialog, setAddNewLeadDialog] = useState(false);
  const [editCardsDialog, setEditCardsDialog] = useState(false);
  const [cardsItemArray, setCardsItemArray] = useState([
    { id: 1, title: "TOTAL NO OF LEADS", amount: 4, percentagetext: "+7" },
    { id: 2, title: "TOTAL NO OF LEADS", amount: 3, percentagetext: "+7" },
    { id: 3, title: "TOTAL NO OF LEADS", amount: 2, percentagetext: "+7" },
    { id: 4, title: "TOTAL NO OF LEADS", amount: 8, percentagetext: "+7" },
    { id: 5, title: "TOTAL NO OF LEADS", amount: 93, percentagetext: "+7" },
    { id: 6, title: "TOTAL NO OF LEADS", amount: 11, percentagetext: "+7" },
    { id: 7, title: "TOTAL NO OF LEADS", amount: 87, percentagetext: "+7" },
    { id: 8, title: "TOTAL NO OF LEADS", amount: 34, percentagetext: "+7" },
    { id: 9, title: "TOTAL NO OF LEADS", amount: 65, percentagetext: "+7" },
    { id: 10, title: "TOTAL NO OF LEADS", amount: 7, percentagetext: "+7" },
    { id: 11, title: "TOTAL NO OF LEADS", amount: 37, percentagetext: "+7" },
    { id: 12, title: "TOTAL NO OF LEADS", amount: 77, percentagetext: "+7" },
    { id: 13, title: "TOTAL NO OF LEADS", amount: 67, percentagetext: "+7" },
    { id: 14, title: "TOTAL NO OF LEADS", amount: 57, percentagetext: "+7" },
    { id: 15, title: "TOTAL NO OF LEADS", amount: 47, percentagetext: "+7" },
    { id: 16, title: "TOTAL NO OF LEADS", amount: 0, percentagetext: "+7" },
    { id: 17, title: "TOTAL NO OF LEADS", amount: 21, percentagetext: "+7" },
    { id: 18, title: "TOTAL NO OF LEADS", amount: 98, percentagetext: "+7" },
    { id: 19, title: "TOTAL NO OF LEADS", amount: 76, percentagetext: "+7" },
    { id: 20, title: "TOTAL NO OF LEADS", amount: 33, percentagetext: "+7" },
    { id: 21, title: "TOTAL NO OF LEADS", amount: 45, percentagetext: "+7" },
  ]);

  const [viewCardsItemArray, setViewCardsItemArray] = useState([
    { id: 1, title: "TOTAL NO OF LEADS", amount: 4, percentagetext: "+7" },
    { id: 2, title: "TOTAL NO OF LEADS", amount: 3, percentagetext: "+7" },
    { id: 3, title: "TOTAL NO OF LEADS", amount: 2, percentagetext: "+7" },
    { id: 4, title: "TOTAL NO OF LEADS", amount: 8, percentagetext: "+7" },
    { id: 5, title: "TOTAL NO OF LEADS", amount: 93, percentagetext: "+7" },
    { id: 6, title: "TOTAL NO OF LEADS", amount: 11, percentagetext: "+7" },
    { id: 7, title: "TOTAL NO OF LEADS", amount: 87, percentagetext: "+7" },
    { id: 8, title: "TOTAL NO OF LEADS", amount: 34, percentagetext: "+7" },
    { id: 9, title: "TOTAL NO OF LEADS", amount: 65, percentagetext: "+7" },
  ]);

  const [pinOpen, setPinOpen] = React.useState(false);

  const handlePinOpen = () => {
    setPinOpen(true);
  };

  const handlePinClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setPinOpen(false);
  };

  const handleSaveSearchDialogOpen = () => {
    setSaveSearchDialog(true);
  };
  const handleSaveSearchDialogClose = () => {
    setSaveSearchDialog(false);
  };

  const handleShareSearchDialogOpen = () => {
    setShareSearchDialog(true);
  };
  const handleShareSearchDialogClose = () => {
    setShareSearchDialog(false);
  };

  const handleAddNewLeadDialogOpen = () => {
    setAddNewLeadDialog(true);
  };

  const handleAddNewLeadDialogClose = () => {
    setAddNewLeadDialog(false);
  };

  const handleEditCardsDialogOpen = () => {
    setEditCardsDialog(true);
  };

  const handleEditCardsDialogClose = () => {
    setEditCardsDialog(false);
  };

  return (
    <AuthGuard>
      <Container>
        {/* This is for Pinning Search */}
        <Snackbar
          open={pinOpen}
          autoHideDuration={6000}
          onClose={handlePinClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handlePinClose}
            severity="info"
            sx={{ width: "100%" }}
          >
            Current Search is pinned as default search
          </Alert>
        </Snackbar>

        {/* This is for Edit Cards Dialog */}
        <EditCardsDialog
          editCardsDialog={editCardsDialog}
          handleEditCardsDialogClose={handleEditCardsDialogClose}
          handleEditCardsDialogOpen={handleEditCardsDialogOpen}
          setViewCardsItemArray={setViewCardsItemArray}
          cardsItemArray={cardsItemArray}
        />

        {/* This dialog box is for saving the search */}
        <SaveSearchDialogContainer
          // onClose={handleSaveSearchDialogClose}
          aria-labelledby="customized-dialog-title"
          open={saveSearchDialog}
          maxWidth="sm"
          fullWidth
        >
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
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

        {/* This dialog box is for share search */}
        <ShareSearchDialogContainer
          // onClose={handleShareSearchDialogClose}
          aria-labelledby="customized-dialog-title"
          open={shareSearchDialog}
          maxWidth="sm"
          fullWidth
        >
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
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
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                displayEmpty
                fullWidth
                size="small"
              >
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
              Save
            </Button>
          </DialogActions>
        </ShareSearchDialogContainer>

        {/* This dialog box is for add new lead form */}
        <AddNewLeadDialogContainer
          // onClose={handleAddNewLeadDialogClose}
          aria-labelledby="customized-dialog-title"
          open={addNewLeadDialog}
          maxWidth="md"
          fullWidth
        >
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
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

        {/* First Row */}
        <Grid container justifyContent={"space-between"} mb={6}>
          <Grid item>
            <Typography variant="h2" color={primaryColor}>
              Sales Details
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" style={{ marginRight: 10 }}>
              DASHBOARD
            </Button>
            <Button variant="contained" onClick={handleAddNewLeadDialogOpen}>
              ADD LEAD
            </Button>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid style={{ backgroundColor: "#fff" }} p={3} borderRadius={2} mb={6}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item container alignItems={"center"} xs={10}>
              <Typography>DEFAULT SEARCH</Typography>
              <Tooltip title="Recents">
                <IconButton color="primary" aria-label="Reset search">
                  <RestoreIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Save">
                <IconButton
                  color="primary"
                  aria-label="Bookmark"
                  onClick={handleSaveSearchDialogOpen}
                >
                  <BookmarkBorderIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Share Search"
                onClick={handleShareSearchDialogOpen}
              >
                <IconButton color="primary" aria-label="Forward">
                  <RedoOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Set as default search">
                <IconButton
                  color="primary"
                  aria-label="Pin"
                  onClick={handlePinOpen}
                  // onClick={() => console.log("hello")}
                >
                  <PushPin />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                style={{
                  textDecoration: "underline",
                  textAlign: "right",
                  cursor: "pointer",
                }}
                onClick={() => setAdvanceFilter(!advanceFilter)}
              >
                {advanceFilter ? "-LESS FILTERS" : "+ADVANCED FILTERS"}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={4} mb={2}>
            <Grid container item xs={4.5} spacing={2}>
              <Grid item xs={2.8}>
                <Button variant="outlined" size="medium" fullWidth>
                  PENDING
                </Button>
              </Grid>
              <Grid item xs={2.8}>
                <Button variant="outlined" size="medium" fullWidth>
                  TODAY
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="outlined" size="medium" fullWidth>
                  LAST WEEK
                </Button>
              </Grid>
              <Grid item xs={3.4}>
                <Button variant="outlined" size="medium" fullWidth>
                  THIS MONTH
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={1.8}>
              <DatePicker
                label={"Year/ Month"}
                views={["month", "year"]}
                slotProps={{ textField: { size: "small" } }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3.2} container spacing={4}>
              <Grid item xs={6}>
                <DatePicker
                  label="Start Date"
                  slotProps={{
                    textField: { size: "small", format: "dd/MM/yyyy" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  label="End Date"
                  slotProps={{
                    textField: { size: "small", format: "dd/MM/yyyy" },
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={2.5} justifyContent={"space-between"}>
              <Grid item>
                <IconButton aria-label="Forward">
                  <FormatListNumberedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Forward">
                  <BarChartOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Forward">
                  <ImageOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Button variant="outlined">FILTER DATA</Button>
              </Grid>
            </Grid>
          </Grid>

          <Collapse in={advanceFilter} timeout="auto" unmountOnExit>
            <Grid>
              <Divider />

              <Grid container spacing={4} mt={2}>
                <Grid item xs={4.5} container spacing={4}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Type and Search"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid container item xs={12} spacing={4}>
                    <Grid item xs={6}>
                      <DatePicker
                        label="Appointment Date"
                        slotProps={{
                          textField: { size: "small", format: "dd/MM/yyyy" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <DatePicker
                        label="Call Back Date"
                        slotProps={{
                          textField: { size: "small", format: "dd/MM/yyyy" },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1.8} container spacing={4}>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                <Grid item xs={3.2} container spacing={4}>
                  <Grid item xs={6}>
                    <Select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      displayEmpty
                      fullWidth
                      style={{
                        color: course === "" && placeholderColor,
                      }}
                      size="small"
                    >
                      <MenuItem value={""} disabled>
                        Course
                      </MenuItem>
                      <MenuItem>Course 1</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      displayEmpty
                      fullWidth
                      style={{
                        color: status === "" && placeholderColor,
                      }}
                      size="small"
                    >
                      <MenuItem value={""} disabled>
                        Status
                      </MenuItem>
                      <MenuItem>Status 1</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      placeholder="Pincode"
                      name="pincode"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid item xs={2.5}>
                  <Select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    displayEmpty
                    fullWidth
                    style={{
                      color: platform === "" && placeholderColor,
                    }}
                    size="small"
                  >
                    <MenuItem value={""} disabled>
                      Platform
                    </MenuItem>
                    <MenuItem>Platform 1</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>

        {/* Third Row */}
        <Grid mb={6}>
          <Typography variant="h5" color={primaryColor} mb={4}>
            20TH JAN 2020 - 30TH DEC 2021
          </Typography>

          <Grid
            container
            style={{ backgroundColor: "#fff", position: "relative" }}
            p={4}
            borderRadius={2}
            spacing={1}
          >
            <IconButton
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 100,
                border: "1px solid",
                borderRadius: "4px",
                padding: 0,
                borderColor: primaryColor,
              }}
              onClick={handleEditCardsDialogOpen}
            >
              <EditIcon color="primary" />
            </IconButton>
            <Grid container item xs={6} spacing={1}>
              {viewCardsItemArray.slice(0, 3).map((item, index) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl key={index}>
                  <BigCard
                    title={item.title}
                    amount={item.amount}
                    percentagetext={item.percentagetext}
                    percentagecolor={red[500]}
                  />
                </Grid>
              ))}
            </Grid>

            <Grid container item xs={6} spacing={1}>
              {viewCardsItemArray.slice(3, 9).map((item, index) => (
                <Grid item xs={4} key={index}>
                  <SmallCard
                    title={item.title}
                    amount={item.amount}
                    percentagetext={item.percentagetext}
                    percentagecolor={green[500]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Fourth Row Table */}
        <Grid style={{ backgroundColor: "#fff" }} borderRadius={2} mb={6}>
          <Grid>
            <Table />
          </Grid>
        </Grid>
      </Container>
    </AuthGuard>
  );
};

SalesDetails.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default SalesDetails;
