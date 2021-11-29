import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
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

  const [value, setValue] = React.useState("");

  const handleLogin = () => {
    value === "siddhant.sharma" ? setUser(1) : setUser(2);
  };

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
            <TextField
              id="standard-multiline-flexible"
              label="User"
              multiline
              maxRows={4}
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
