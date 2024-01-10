import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  createMRTColumnHelper,
} from "material-react-table";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { jsPDF } from "jspdf"; //or use your library of choice here
import autoTable from "jspdf-autotable";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { data1 } from "./makeData";

const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor("sno", {
    header: "S.No.",
  }),
  columnHelper.accessor("date", {
    header: "Date",
  }),
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
  }),
  columnHelper.accessor("course", {
    header: "Course",
  }),
  columnHelper.accessor("area", {
    header: "Area",
  }),
  columnHelper.accessor("platform", {
    header: "Platform",
  }),
  columnHelper.accessor("callbackdate", {
    header: "Call Back Date",
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const LeadsTable = () => {
  const columns1 = useMemo(
    () => [
      {
        accessorKey: "sno",
        header: "S.No.",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "phone",
        header: "Phone",
      },
      {
        accessorKey: "course",
        header: "Course",
      },
      {
        accessorKey: "area",
        header: "Area",
      },
      {
        accessorKey: "platform",
        header: "Platform",
      },
      {
        accessorKey: "callbackdate",
        header: "Call Back Date",
      },
    ],
    []
    //end
  );

  const handleExportCSVRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportCSVData = () => {
    const csv = generateCsv(csvConfig)(data1);
    download(csvConfig)(csv);
  };

  const handleExportPDFRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns1.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("leads-details.pdf");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDownloadDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const table = useMaterialReactTable({
    columns: columns1,
    data: data1,
    // enableRowSelection: true,
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableRowNumbers: false,
    defaultDisplayColumn: {
      enableResizing: true, //turn on some features that are usually off for all display columns
    },
    displayColumnDefOptions: {
      "mrt-row-actions": {
        size: 210, //set custom width
        muiTableHeadCellProps: {
          align: "center", //change head cell props
        },
      },
      "mrt-row-numbers": {
        enableColumnDragging: true,
        enableColumnOrdering: true, //turn on some features that are usually off
        enableResizing: true,
        muiTableHeadCellProps: {
          sx: {
            fontSize: "1.2rem",
          },
        },
      },
      "mrt-row-select": {
        enableColumnActions: true,
        enableHiding: true,
        size: 100,
      },
    },
    enableColumnResizing: true,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enableRowActions: true,
    positionActionsColumn: "last",
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="View">
          <IconButton>
            <VisibilityIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Appointment">
          <IconButton>
            <AccountBoxIcon color="primary" />
          </IconButton>
        </Tooltip>
      </Box>
    ),

    renderTopToolbarCustomActions: ({ table }) => (
      <Box>
        <IconButton
          id="download-options-button"
          aria-controls={openDownloadDropdown ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openDownloadDropdown ? "true" : undefined}
          onClick={handleClick}
        >
          <FileDownloadIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openDownloadDropdown}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "download-options-button",
          }}
        >
          <MenuItem onClick={handleExportCSVData}>Export All Data CSV</MenuItem>
          <MenuItem
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            onClick={() =>
              handleExportCSVRows(table.getPrePaginationRowModel().rows)
            }
          >
            Export All Rows CSV
          </MenuItem>
          <MenuItem
            disabled={table.getRowModel().rows.length === 0}
            onClick={() => handleExportCSVRows(table.getRowModel().rows)}
          >
            Export Page Rows CSV
          </MenuItem>

          <MenuItem
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            onClick={() =>
              handleExportCSVRows(table.getSelectedRowModel().rows)
            }
          >
            Export Selected Rows CSV
          </MenuItem>

          <MenuItem
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            onClick={() =>
              handleExportPDFRows(table.getPrePaginationRowModel().rows)
            }
          >
            Export All Rows PDF
          </MenuItem>

          <MenuItem
            disabled={table.getRowModel().rows.length === 0}
            onClick={() => handleExportPDFRows(table.getRowModel().rows)}
          >
            Export Page Rows PDF
          </MenuItem>

          <MenuItem
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            onClick={() =>
              handleExportPDFRows(table.getSelectedRowModel().rows)
            }
          >
            Export Selected Rows PDF
          </MenuItem>
        </Menu>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default LeadsTable;
