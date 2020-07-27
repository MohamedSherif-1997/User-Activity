import React from "react";
import { withStyles } from "@material-ui/styles";

const hederStyle = {
  header: {
    height: "50px",
    backgroundColor: "hotpink",
  },
  text: {
    paddingLeft: "50px",
    fontFamily: '"Times New Roman", Times, serif',
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <p className={classes.text}>Users Activties</p>
    </div>
  );
}

export default withStyles(hederStyle)(Header);
