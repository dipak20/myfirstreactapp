import React from "react";
import { push } from "react-router-redux";
import { connect, dispatch } from "react-redux";

class MainPage extends React.Component {
  state = {
    name: "None",
    id: 123,
    formContent: {
      name: "",
      address: "",
      city: 0
    }
  };

  componentDidMount() {
    console.log("this.props.userName: " + this.props.userName);
    console.log("this.props.userAddress: " + this.props.userAddress);
    console.log("this.props.userCity: " + this.props.userCity);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate this.props.userName: " + this.props.userName
    );
    console.log(
      "componentDidUpdate this.props.userAddress: " + this.props.userAddress
    );
    console.log(
      "componentDidUpdate this.props.userCity: " + this.props.userCity
    );
  }

  componentWillUnmount() {
    console.log("Component will be unmounted...");
  }

  changeName = () => {
    this.setState({
      name: "Dipak"
    });
  };

  changeId = () => {
    this.setState({
      id: 1111
    });
  };

  changeMyName = e => {
    this.setState({
      name: e.target.value
    });
    console.log("Name from form field: " + this.state.formContent.name);
  };

  changeInput = (e, fieldName) => {
    let obj = { ...this.state.formContent };
    obj[fieldName] = e.target.value;
    this.setState({
      formContent: obj
    });
  };

  submitMyForm = e => {
    e.preventDefault();
    let formInputs = { ...this.state.formContent };
    console.log(formInputs);
    const { name, address, city } = this.state.formContent;
    this.props.changeuserDetails(name, address, city);
    window.location = "/hello";
    //this.props.goToPage("/hello");
  };

  render() {
    let cities = [
      { id: 1, name: "Pune" },
      { id: 2, name: "Mumbai" },
      { id: 3, name: "Jalaon" }
    ];

    let cityOptions = [];
    for (let city of cities) {
      cityOptions.push(
        <option key={city.id} value={city.id}>
          {city.name}
        </option>
      );
    }

    return (
      <div>
        <h1>Welcome, {this.state.name}!</h1>
        <input type="text" onChange={e => this.changeMyName(e)}></input>
        <button type="button" onClick={this.changeName}>
          Click Me
        </button>
        <button type="button" onClick={this.changeId}>
          Change ID
        </button>
        <br />
        <a href="/hello">Click here to go to Hello</a>
        <br />

        <form onSubmit={e => this.submitMyForm(e)}>
          <table>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>
                  <input
                    type="text"
                    name="txtName"
                    id="name"
                    value={this.state.formContent.name}
                    onChange={e => this.changeInput(e, "name")}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>
                  <textarea
                    name="address"
                    id="address"
                    value={this.state.formContent.address}
                    onChange={e => this.changeInput(e, "address")}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>City: </td>
                <td>
                  <select
                    name="city"
                    id="city"
                    onChange={e => this.changeInput(e, "city")}
                    defaultValue={this.state.formContent.city}
                  >
                    <option value={0}>---Select---</option>
                    {cityOptions}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit" id="btnSubmit">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
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
    return {
      changeuserDetails: (name, address, city) => {
        dispatch({
          type: "CHANGE_USER_DETAILS",
          payload: { name, address, city }
        });
      },
      goToPage: path => {
        console.log("gotourl", path);
        dispatch(push("/hello"));
      }
    };
  }
)(MainPage);

/*
const fun1 = store => {
  return {
    userName: store.user.name,
    userAddress: store.user.address,
    userCity: store.user.city
  };
};

const fun2 = dispatch => {
  return {
    changeuserDetails: (name, address, city) => {
      dispatch({
        type: "CHANGE_USER_DETAILS",
        payload: { name, address, city }
      });
    },
    goToPage: path => {
      console.log("gotourl", path);
      dispatch(push("hello"));
    }
  };
};
const fun3 = connect(fun1, fun2);
export default fun3(MainPage);
*/
