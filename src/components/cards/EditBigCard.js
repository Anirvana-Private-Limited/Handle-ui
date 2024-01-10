import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { rgba } from "polished";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  CardActions,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";

const Typography = styled(MuiTypography)(spacing);

const illustrationCardStyle = (props) => css`
  ${props.illustration &&
  props.theme.palette.mode !== "dark" &&
  `
    background: ${rgba(props.theme.palette.primary.main, 0.125)};
    color: ${props.theme.palette.primary.main};
  `}
`;

const Card = styled(MuiCard)`
  position: relative;
  ${illustrationCardStyle}
`;

const CardContent = styled(MuiCardContent)`
  position: relative;
  padding-left: ${(props) => props.theme.spacing(2)};
  padding-right: ${(props) => props.theme.spacing(5)};
  padding-top: ${(props) => props.theme.spacing(5)};

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(5)};
  }
`;

const illustrationPercentageStyle = (props) => css`
  ${props.illustration &&
  props.theme.palette.mode !== "dark" &&
  `
    color: ${rgba(props.theme.palette.primary.main, 0.85)};
  `}
`;

const Percentage = styled(MuiTypography)`
  span {
    color: ${(props) => props.percentagecolor};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    background: ${(props) => rgba(props.percentagecolor, 0.1)};
    padding: 2px;
    border-radius: 3px;
  }

  ${illustrationPercentageStyle}
`;

const EditBigCard = ({
  percentagecolor,
  illustration,
  data,
  addTypeButton,
  handleCardAction,
}) => {
  // const classes = useStyles();
  const { title, amount, percentagetext } = data;

  return (
    <Card
      illustration={illustration}
      variant="outlined"
      // className={classes.customCard}
    >
      <CardActions
        disableSpacing
        sx={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "absolute",
          // 👇 Edit padding to further adjust position
          p: 0,
          zIndex: 100,
          right: 0,
        }}
      >
        <IconButton onClick={() => handleCardAction({ ...data })}>
          {addTypeButton ? (
            <AddCircleOutlineIcon color="primary" />
          ) : (
            <RemoveCircleOutlineIcon color="primary" />
          )}
        </IconButton>
        {/* <Checkbox size="small" color="primary"></Checkbox> */}
      </CardActions>
      <CardContent>
        <Percentage
          variant="subtitle2"
          color="textSecondary"
          percentagecolor={percentagecolor}
          illustration={illustration}
          mb={4}
        >
          <span>{percentagetext}%</span>
        </Percentage>
        <Typography variant="h3" mb={1}>
          <Box fontWeight="fontWeightRegular">{amount}</Box>
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default EditBigCard;
