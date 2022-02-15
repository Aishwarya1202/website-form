import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Games" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Adventure Time" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography
                variant="h1"
                color="secondary"
                className={classes.text}
              >
                Whatever it takes
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="League Legends" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography
                variant="h1"
                color="secondary"
                className={classes.text}
              >
                Ascend through the portal
              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
