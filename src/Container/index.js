import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import UserActivitiesTable from "../Component/table";
import Header from "../Component/header";
import Footer from "../Component/footer";
import { RESPONSE } from "../Constants/response";

const style = {
  mainPage: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "whitesmoke",
    justifyContent: "space-evenly",
  },
};

class UserActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    Promise.resolve(RESPONSE).then((response) =>
      this.setState({ users: response.members })
    );
  }

  render() {
    const { classes } = this.props;
    const users = this.state.users;
    return (
      <div className={classes.mainPage}>
        <Header />
        <UserActivitiesTable users={users} />
        <Footer />
      </div>
    );
  }
}

UserActivity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(UserActivity);
