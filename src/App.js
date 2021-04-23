import React from "react";
import JumboTron from "./components/JumboTron";
import Table from "./components/Table";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    searched: []
  };

   async componentDidMount() {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results, searched: data.results });
  }

  handleSort = () =>{
    const sortedEmp = this.state.searched.sort((a,b) => a.name.first > b.name.first ? 1: -1)
    this.setState({searched:sortedEmp})
  }

  InputChange = (event) => {
    const value = event.target.value.toLowerCase();
    const searchedArr = this.state.employees.filter(emp =>emp.name.first.toLowerCase().startsWith(value))
    this.setState({
      searched: searchedArr,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        {" "}
        <JumboTron />
        <input
          type="search"
          className="form-control"
          placeholder="Search for an employee name"
          onChange={this.InputChange}
        />
        <button onClick={this.handleSort}>Sort A-Z!!! </button>
        {/* {this.state.searched.length > 0 &&
          this.state.searched.map((employees) => (
            <Table
            key = {employees.id.value}
              image={employees.picture.thumbnail}
              name={employees.name}
              phone={employees.cell}
              email={employees.email}
              dob={employees.dob.date.slice(0, 10)}
            />
          ))} */}
          <Table users = {this.state.searched} />
      </>
    );
  }
}
export default App;
