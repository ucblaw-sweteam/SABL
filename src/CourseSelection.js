import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AllCourses from "./AllCourses";
import TopFive from "./TopFive";
import Favourite from "./Favourite";
import { Button } from "@material-ui/core";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textBox: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CourseSelection({ user, setView }) {
  const classes = useStyles();

  React.useEffect(async () => {
    const result = await axios.get(
      "https://61a33d66d5e8330017291f47.mockapi.io/Courses"
    );
    const userData = await axios.get(
      "https://61a33d66d5e8330017291f47.mockapi.io/users/" + user
    );
    setCourses(result?.data[0].names);
    setSelected(userData?.data.selected);
    setFavourite(userData?.data.favorite);
    userData?.data.answers.length >= 1 && setQone(userData?.data.answers[0]);
    userData?.data.answers.length >= 2 && setQtwo(userData?.data.answers[1]);
    userData?.data.answers.length == 3 && setQthree(userData?.data.answers[2]);
  }, [user]);

  const [courses, setCourses] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [favourite, setFavourite] = React.useState([]);
  const [qOne, setQone] = React.useState("");
  const [qTwo, setQtwo] = React.useState("");
  const [qThree, setQthree] = React.useState("");

  const handleSubmit = () => {
    const data = {
      favorite: favourite,
      selected: selected,
      answers: [qOne, qTwo, qThree],
    };
    axios
      .put("https://61a33d66d5e8330017291f47.mockapi.io/users/" + user, data)
      .then((response) => {
        console.log(response);
        setView("Thanks");
      });
  };

  const handleSelect = (y, spot, e) => {
    let temp = [...selected];
    if (!e.target.checked) {
      temp[spot] = null;
    } else {
      if (selected.includes(y)) {
        temp[selected.indexOf(y)] = null;
        temp[spot] = y;
      } else {
        temp[spot] = y;
      }
    }

    setSelected(temp);
  };

  const handleFavourite = (x, event) => {
    let temp = [...favourite];
    if (event.target.checked) {
      temp.push(x);
    } else {
      temp.splice(temp.indexOf(x), 1);
    }
    setFavourite(temp);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>SABL Survey</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Favourite favourite={favourite} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <AllCourses
              favourite={favourite}
              courses={courses}
              handleSelect={handleSelect}
              handleFavourite={handleFavourite}
              selected={selected}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <TopFive selected={selected} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.textBox}>
            <p>
              If you were registered in a class that was cancelled, was it easy
              to find an alternative course to register for?
            </p>
            <TextField
              id="filled-textarea-one"
              value={qOne}
              label="Answer"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              onChange={(e) => setQone(e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.textBox}>
            <p>
              Are there any courses that you wish to take that are not being
              offered this semester or next semester?
            </p>
            <TextField
              id="filled-textarea-two"
              value={qTwo}
              label="Answer"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              onChange={(e) => setQtwo(e.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.textBox}>
            <p>
              Please share any other comments you may have about class
              scheduling with us.
            </p>
            <TextField
              id="filled-textarea-three"
              value={qThree}
              label="Answer"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              onChange={(e) => setQthree(e.target.value)}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button onClick={() => handleSubmit()}>Submit</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CourseSelection;
