import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { rgba } from "polished";

import {
  Box,
  Grid,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  CardActions,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";

const Typography = styled(MuiTypography)(spacing);
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// const useStyles = makeStyles((theme) => ({
//   customCard: {
//     [theme.breakpoints.up("xs")]: {
//       width: "100%", // Full width on extra-small screens and larger
//     },
//     [theme.breakpoints.up("sm")]: {
//       width: "80%", // 80% width on small screens and larger
//     },
//     [theme.breakpoints.up("md")]: {
//       width: "60%", // 60% width on medium screens and larger
//     },
//     [theme.breakpoints.up("lg")]: {
//       width: "200px", // 50% width on large screens and larger
//     },
//     // Add more breakpoints and styles as needed
//   },
// }));

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
  padding: ${(props) => props.theme.spacing(2)};

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(2)};
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

const EditSmallCard = ({
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
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h4" mb={1}>
              <Box fontWeight="fontWeightRegular">{amount}</Box>
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <Typography variant="body2">
          {title}
          <Percentage
            variant="span"
            color="textSecondary"
            percentagecolor={percentagecolor}
            illustration={illustration}
            ml={4}
          >
            <span>{percentagetext}%</span>
          </Percentage>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EditSmallCard;
