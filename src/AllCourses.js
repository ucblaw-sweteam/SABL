import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import LooksOneOutlinedIcon from "@material-ui/icons/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@material-ui/icons/LooksTwoOutlined";
import Looks3OutlinedIcon from "@material-ui/icons/Looks3Outlined";
import Looks4OutlinedIcon from "@material-ui/icons/Looks4Outlined";
import Looks5OutlinedIcon from "@material-ui/icons/Looks5Outlined";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import Looks3Icon from "@material-ui/icons/Looks3";
import Looks4Icon from "@material-ui/icons/Looks4";
import Looks5Icon from "@material-ui/icons/Looks5";
import SearchBar from "material-ui-search-bar";

const columns = [{ id: "course", label: "Course Name" }];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function AllCourses({
  courses,
  handleSelect,
  handleFavourite,
  selected,
  favourite,
}) {
  const classes = useStyles();
  const [searched, setSearched] = React.useState("");

  const cancelSearch = () => {
    setSearched("");
  };

  return (
    <Paper className={classes.root}>
      <SearchBar
        value={searched}
        onChange={(searchVal) => setSearched(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} colSpan={3}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .filter((row) => {
                return row.toLowerCase().includes(searched.toLowerCase());
              })
              .map((course, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell key={30}>{course}</TableCell>
                    <TableCell align={"left"}>
                      <Checkbox
                        color="primary"
                        icon={<LooksOneOutlinedIcon />}
                        checkedIcon={<LooksOneIcon />}
                        name="checkedH"
                        checked={
                          selected.includes(course) &&
                          selected.indexOf(course) === 0
                        }
                        onChange={(e) => handleSelect(course, 0, e)}
                      />
                      <Checkbox
                        color="primary"
                        icon={<LooksTwoOutlinedIcon />}
                        checkedIcon={<LooksTwoIcon />}
                        name="checkedH"
                        checked={
                          selected.includes(course) &&
                          selected.indexOf(course) === 1
                        }
                        onChange={(e) => handleSelect(course, 1, e)}
                      />
                      <Checkbox
                        color="primary"
                        icon={<Looks3OutlinedIcon />}
                        checkedIcon={<Looks3Icon />}
                        name="checkedH"
                        checked={
                          selected.includes(course) &&
                          selected.indexOf(course) === 2
                        }
                        onChange={(e) => handleSelect(course, 2, e)}
                      />
                      <Checkbox
                        color="primary"
                        icon={<Looks4OutlinedIcon />}
                        checkedIcon={<Looks4Icon />}
                        name="checkedH"
                        checked={
                          selected.includes(course) &&
                          selected.indexOf(course) === 3
                        }
                        onChange={(e) => handleSelect(course, 3, e)}
                      />
                      <Checkbox
                        color="primary"
                        icon={<Looks5OutlinedIcon />}
                        checkedIcon={<Looks5Icon />}
                        name="checkedH"
                        checked={
                          selected.includes(course) &&
                          selected.indexOf(course) === 4
                        }
                        onChange={(e) => handleSelect(course, 4, e)}
                      />

                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name="checkedH"
                        checked={favourite.includes(course)}
                        onChange={(e) => handleFavourite(course, e)}
                      />
                    </TableCell>

                    {/* {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })} */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
