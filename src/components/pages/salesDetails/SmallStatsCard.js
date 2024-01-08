import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { rgba } from "polished";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
  Grid,
} from "@mui/material";
import { spacing } from "@mui/system";

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
  //   margin-bottom: ${(props) => props.theme.spacing(6)};

  ${illustrationCardStyle}
`;

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    // padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

// const Chip = styled(MuiChip)`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   height: 20px;
//   //   padding: 4px 0;
//   font-size: 85%;
//   background-color: ${(props) => props.theme.palette.secondary.main};
//   color: ${(props) => props.theme.palette.common.white};
//   margin-bottom: ${(props) => props.theme.spacing(4)};

//   span {
//     padding-left: ${(props) => props.theme.spacing(2)};
//     padding-right: ${(props) => props.theme.spacing(2)};
//   }
// `;

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
    // padding: 2px;
    border-radius: 3px;
    // margin-right: ${(props) => props.theme.spacing(2)};
  }

  ${illustrationPercentageStyle}
`;

const SmallStatsCard = ({
  title,
  amount,
  chip,
  percentagetext,
  percentagecolor,
  illustration,
}) => {
  return (
    <Card style={{ border: "1px solid", padding: 0 }}>
      <CardContent style={{ padding: 10 }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h4" mb={1}>
              <Box fontWeight="fontWeightRegular">{amount}</Box>
            </Typography>
          </Grid>
          <Grid item>
            <Percentage
              variant="body2"
              color="textSecondary"
              percentagecolor={percentagecolor}
              illustration={illustration}
              //   mb={4}
            >
              <span>{percentagetext}</span>
            </Percentage>
          </Grid>
        </Grid>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default SmallStatsCard;
