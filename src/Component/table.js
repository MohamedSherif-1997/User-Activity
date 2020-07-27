import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import UserModal from "../Ui/modal";

const tableStyle = {
  tableContainer: {
    display: "flex",
    height: "80vh",
    padding: "20px",
  },
  table: {
    minWidth: 650,
    fontFamily: '"Times New Roman", Times, serif',
  },
};

function UserActivitiesTable(props) {
  const [open, setOpen] = React.useState(false);
  const { classes, users } = props;
  const [user, setUser] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const rowSelect = (e, user) => {
    setUser(user);
    setOpen(true);
  };

  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>REGION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={(e) => rowSelect(e, user)}
                >
                  {user.id}
                </TableCell>
                <TableCell>{user.real_name}</TableCell>
                <TableCell>{user.tz}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open ? (
        <UserModal open={open} handleClose={handleClose} user={user} />
      ) : null}
    </div>
  );
}

UserActivitiesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

export default withStyles(tableStyle)(UserActivitiesTable);
