import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function Login({ setUser }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p>Thank you!</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
