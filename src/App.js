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
      {employees.map((employees) => (<Cards image={employees.image} name={employees.name} phone={employees.phone} email={employees.email} />))};

    </>
    )
  
    }
  }
  export default App;