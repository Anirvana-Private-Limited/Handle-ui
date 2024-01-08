import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { rgba } from "polished";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Typography = styled(MuiTypography)(spacing);

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

const BigCard = ({
  title,
  amount,
  percentagetext,
  percentagecolor,
  illustration,
}) => {
  // const classes = useStyles();

  return (
    <Card
      illustration={illustration}
      variant="outlined"
      // className={classes.customCard}
      style={{ width: "100%" }}
    >
      <CardContent>
        <Percentage
          variant="subtitle2"
          color="textSecondary"
          percentagecolor={percentagecolor}
          illustration={illustration}
          mb={4}
        >
          <span>{percentagetext}</span>
        </Percentage>
        <Typography variant="h3" mb={1}>
          <Box fontWeight="fontWeightRegular">{amount}</Box>
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default BigCard;
