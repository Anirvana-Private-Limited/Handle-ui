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

const SmallCard = ({
  title,
  amount,
  percentagetext,
  percentagecolor,
  illustration,
}) => {
  return (
    <Card illustration={illustration} variant="outlined">
      <CardContent>
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

export default SmallCard;
