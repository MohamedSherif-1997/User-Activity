import React from "react";
import PropTypes from "prop-types";

import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  modal: {
    width: 500,
    height: 400,
    backgroundColor: "whitesmoke",
    zIndex: 1300,
    display: "flex",
    flexDirection: "column",
    flexWrap: "column-wrap",
    border: "4px solid black",
    overFlow: "auto",
  },
  title: {
    display: "flex",
    height: 40,
    backgroundColor: "yellow",
    fontSize: "20px",
    fontFamily: '"Times New Roman", Times, serif',
    padding: "10px 0 0 10px",
    justifyContent: "flex-start",
  },
  table: {
    overFlow: "auto",
    padding: "6px",
  },
};

function UserModal(props) {
  const { open, handleClose, classes, user } = props;

  const diff_minutes = (dt1, dt2) => {
    let date1 = new Date(
      dt1.substr(0, dt1.length - 2) + " " + dt1.substr(dt1.length - 2)
    );
    let date2 = new Date(
      dt2.substr(0, dt2.length - 2) + " " + dt2.substr(dt2.length - 2)
    );
    let diff = (date2.getTime() - date1.getTime()) / 1000;
    diff /= 60;
    let minutes = Math.abs(Math.round(diff));

    return minutes >= 60
      ? Math.round(minutes / 60) +
          "hours : " +
          Math.round(minutes % 60) +
          "minutes"
      : minutes + "minutes";
  };

  const body = (
    <div className={classes.modal}>
      <div className={classes.title}>Activites of:{user.real_name}</div>
      <div className={classes.table}>
        <TableContainer component={Paper}>
          <Table style={{ border: "4px solid pink" }}>
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: "hotpink",
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                <TableCell>Staring Date</TableCell>
                <TableCell>Ending Date</TableCell>
                <TableCell>Active Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.activity_periods.map((user, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {user.start_time}
                  </TableCell>
                  <TableCell>{user.end_time}</TableCell>
                  <TableCell>
                    {diff_minutes(user.start_time, user.end_time)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {body}
    </Modal>
  );
}

UserModal.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserModal);
