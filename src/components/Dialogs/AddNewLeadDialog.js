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
import {
  fetchCityList,
  fetchCourseList,
  fetchPlatformList,
  getUserData,
  formateDate,
} from "../../service/services";

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
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [genderList, setGenderList] = useState([]);
  const [gender, setGender] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = useState("");
  const [platformList, setPlatformList] = useState([]);
  const [platform, setPlatform] = useState("");
  const [statusList, setStatusList] = useState([]);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    branch: "1",
    date: "2010-12-12",
    phone_1: "8787878798",
    address_1: "panjagutta Hydrabad",
    pin_code: "500036",
    city: "Hydrabad",
    name: "Adit Atreya",
    gender: "",
    notes: "test",
    call_back: "2010-11-12",
    dob: "",
    address: {
      address_line_1: "road number 36",
      address_line_2: "Hyd",
      city: 1,
      pincode: 500036,
    },
    course: 1,
    platform: 1,
    email: "aditatreya@gmail.com",
  });

  useEffect(() => {
    const getData = async () => {
      const cities = await fetchCityList();
      setCityList(cities);
      const courses = await fetchCourseList();
      setCourseList(courses);
      const platforms = await fetchPlatformList();
      setPlatformList(platforms);
    };

    getData();
  }, []);

  const handleAddLead = async () => {};

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
        <Grid p={4} container spacing={4} mb={4} mt={2}>
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
              onChange={(date) => console.log(date.toLocaleDateString("en-GB"))}
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
              {cityList.map((city) => (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              ))}
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
              {genderList.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
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
              {courseList.map((course) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
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
              {platformList.map((platform) => (
                <MenuItem key={platform.id} value={platform.name}>
                  {platform.name}
                </MenuItem>
              ))}
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
              {statusList.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
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
