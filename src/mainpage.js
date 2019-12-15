import React from "react";

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

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  componentDidUpdate(prevProps, prevState) {}

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
    console.table(formInputs);
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
        <option
          value={city.id}
          selected={this.state.formContent.city === city.id ? "selected" : ""}
        >
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
                >
                  <option
                    value={0}
                    selected={
                      this.state.formContent.city === 0 ? "selected" : ""
                    }
                  >
                    ---Select---
                  </option>
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
          </table>
        </form>
      </div>
    );
  }
}

export default MainPage;
