import React, { useState } from "react";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Divider,
} from "@mui/material";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { EditBigCard, EditSmallCard } from "../cards";
import { green, red } from "@mui/material/colors";

const SaveSearchDialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function EditCardsDialog({
  editCardsDialog,
  handleEditCardsDialogClose,
  handleEditCardsDialogOpen,
}) {
  const [array1, setArray1] = useState([
    { id: 1, title: "TOTAL NO OF LEADS", amount: 4, percentagetext: "+7" },
    { id: 2, title: "TOTAL NO OF LEADS", amount: 3, percentagetext: "+7" },
    { id: 3, title: "TOTAL NO OF LEADS", amount: 2, percentagetext: "+7" },
    { id: 4, title: "TOTAL NO OF LEADS", amount: 8, percentagetext: "+7" },
    { id: 5, title: "TOTAL NO OF LEADS", amount: 93, percentagetext: "+7" },
    { id: 6, title: "TOTAL NO OF LEADS", amount: 87, percentagetext: "+7" },
  ]);

  const [array2, setArray2] = useState([
    { id: 7, title: "TOTAL NO OF LEADS", amount: 87, percentagetext: "+7" },
    { id: 8, title: "TOTAL NO OF LEADS", amount: 98, percentagetext: "+7" },
    { id: 9, title: "TOTAL NO OF LEADS", amount: 34, percentagetext: "+7" },
    { id: 10, title: "TOTAL NO OF LEADS", amount: 88, percentagetext: "+7" },
    { id: 11, title: "TOTAL NO OF LEADS", amount: 9, percentagetext: "+7" },
    { id: 12, title: "TOTAL NO OF LEADS", amount: 44, percentagetext: "+7" },
  ]);

  const handleAddCard = (element) => {
    const indexInArray2 = array2.findIndex((item) => item.id === element.id);

    if (indexInArray2 !== -1) {
      // Remove from array2
      const newArray2 = [...array2];
      newArray2.splice(indexInArray2, 1);
      setArray2(newArray2);

      // Add to array1
      setArray1((prevArray1) => [...prevArray1, element]);
    }
  };

  const handleSubtractCard = (element) => {
    const indexInArray1 = array1.findIndex((item) => item.id === element.id);

    if (indexInArray1 !== -1) {
      // Remove from array1
      const newArray1 = [...array1];
      newArray1.splice(indexInArray1, 1);
      setArray1(newArray1);

      // Add to array2
      setArray2((prevArray2) => [...prevArray2, element]);
    }
  };

  return (
    <SaveSearchDialogContainer
      // onClose={handleSaveSearchDialogClose}
      aria-labelledby="customized-dialog-title"
      open={editCardsDialog}
      maxWidth="lg"
      fullWidth
    >
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            EDIT ANALYSIS OVERVIEW
          </DialogTitle>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="close"
            onClick={handleEditCardsDialogClose}
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
          {/* this is for substract */}
          <Grid container spacing={1}>
            {array1.map((data) => (
              <Grid item xs={2} key={data.id}>
                <EditBigCard
                  title="TOTAL NO OF LEADS"
                  amount="43"
                  percentagetext="-7%"
                  data={data}
                  percentagecolor={red[500]}
                  addTypeButton={false}
                  handleCardAction={handleSubtractCard}
                />
              </Grid>
            ))}
          </Grid>

          {/* This is for adding */}
          <Grid container spacing={1}>
            {array2.map((data) => (
              <Grid item xs={2} key={data.id}>
                <EditBigCard
                  title="TOTAL NO OF LEADS"
                  amount="43"
                  percentagetext="-7%"
                  data={data}
                  percentagecolor={red[500]}
                  addTypeButton={true}
                  handleCardAction={handleAddCard}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </SaveSearchDialogContainer>
  );
}

export default EditCardsDialog;
