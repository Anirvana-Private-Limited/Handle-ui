import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import { Typography, Tooltip } from "@mui/material";

function arraysHaveSameElements(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((value) => array2.includes(value))
  );
}

const rowItems = [
  {
    sno: 1,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 2,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 3,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 4,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 5,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 6,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 7,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 8,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 9,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
  {
    sno: 10,
    date: "12/12/2020",
    id: "Cell",
    name: "Sikha",
    phone: "91 98706 XXXXX",
    course: "NEED",
    area: "Madhapur",
    platform: "instagram",
    callbackDate: "22/12/2023",
  },
];

const CustomTable = () => {
  const theme = useTheme();

  // Use theme colors
  const secondaryColor = theme.palette.secondary.light;
  const primaryColor = theme.palette.primary.main;

  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelection = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const handleAllRowSelection = () => {
    const newSelected = rowItems.map((item) => item.sno);

    if (!arraysHaveSameElements(newSelected, selectedRows))
      setSelectedRows(newSelected);
    else setSelectedRows([]);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  return (
    <Table>
      <TableHead style={{ background: secondaryColor }}>
        <TableRow>
          <TableCell>
            <Typography variant="h5">
              <Checkbox onChange={handleAllRowSelection} />
              S.No.
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Date</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Id</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Name</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Phone</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Course</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Area</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Platform</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Call Back Date</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Actions</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowItems.map((row, index) => (
          <TableRow key={row.sno} selected={isSelected(row.sno)}>
            <TableCell>
              <Checkbox
                checked={isSelected(row.sno)}
                onClick={() => handleRowSelection(row.sno)}
              />{" "}
              {row.sno}
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.course}</TableCell>
            <TableCell>{row.area}</TableCell>
            <TableCell>{row.platform}</TableCell>
            <TableCell>{row.callbackDate}</TableCell>
            <TableCell>
              <Tooltip title="Edit">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View">
                <IconButton color="primary">
                  <RemoveRedEyeOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Appointment">
                <IconButton color="primary">
                  <PortraitIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
