import React from "react";
import { withStyles } from "@material-ui/styles";

const footerStyle = {
  footer: {
    height: "30px",
    backgroundColor: "pink",
    textAlign: "center",
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: "12px",
    paddingTop: "5px",
  },
};

function Footer(props) {
  const { classes } = props;
  return <div className={classes.footer}>CopyRights @UsersActivites</div>;
}

export default withStyles(footerStyle)(Footer);
