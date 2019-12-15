import React from "react";
import { connect, dispatch } from "react-redux";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>In Hello.js</h1>
        <h2>Name: {this.props.userName}</h2>
        <h2>Address: {this.props.userAddress}</h2>
        <h2>City: {this.props.userCity}</h2>
      </div>
    );
  }
}

export default connect(
  store => {
    return {
      userName: store.user.name,
      userAddress: store.user.address,
      userCity: store.user.city
    };
  },
  dispatch => {
    return {};
  }
)(Hello);
