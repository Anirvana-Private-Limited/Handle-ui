import React, { PureComponent } from "react";
import Card from "@mui/material/Card";
import MaterialTable from "material-table";
import tableIcons from "./tablesIcons";

class Table extends PureComponent {
  state = {
    selectedRow: null,
  };
  render() {
    const { columns, tableDataItems, header } = this.props;
    const data = tableDataItems ? tableDataItems.map((o) => ({ ...o })) : [];

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

    return (
      <React.Fragment>
        <Card style={{ width: "100%" }}>
          <MaterialTable
            icons={tableIcons}
            title={header}
            columns={columns}
            data={data}
            actions={[
              {
                icon: tableIcons.Delete,
                tooltip: "Delete User",
                onClick: (event, rowData) => console.log(rowData),
              },
            ]}
            onRowClick={(evt, selectedRow) =>
              this.setState({ selectedRow: selectedRow.tableData.id })
            }
            options={{
              actionsColumnIndex: -1,
              //filtering: true,
              exportButton: true,
              exportAllData: true,
              selection: true,
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
                padding: "14px",
              },
              cellStyle: {
                padding: "8px",
              },
              rowStyle: (rowData) => ({
                backgroundColor:
                  this.state.selectedRow === rowData.tableData.id
                    ? "#EEE"
                    : "#FFF",
                padding: "8px",
              }),
            }}
          />
        </Card>
      </React.Fragment>
    );
  }
}

export default Table;
