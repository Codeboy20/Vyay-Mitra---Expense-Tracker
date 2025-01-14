import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from "../InfoCard";
import { red } from "@material-ui/core/colors";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      {/* <CardHeader align="center" style={{ color: 'Green' , fontWeight: 'bold'  }} title="Vyay Mitra" subheader="Now Manage your expense at ease" /> */}

      <CardHeader
        align="center"
        title={
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "Green" }}
          >
            Vyay Mitra
          </Typography>
        }
        subheader="Now Manage your expense at ease"
      />

      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance : ₹{balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
