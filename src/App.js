import React from 'react';
import JumboTron from './components/JumboTron';
import Cards from './components/Cards';
import API from "./utils/API"

// function App() {
//   return [<JumboTron />, <Cards />];
// }

// export default App;

// import React from "react";
// import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
    console.log(this.state);
    return (<> <JumboTron />
      {this.state.employees.length > 0 && 
      this.state.employees.map((employees) => (<Cards image={employees.picture.thumbnail} name={employees.name} phone={employees.cell} email={employees.email} dob={employees.dob.date.slice(0,10)}/>))};

    </>
    )
  
    }
  }
  export default App;