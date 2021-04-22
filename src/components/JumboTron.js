import React from 'react';
const styles = {
  display:"flex",
  background:"gray",
  textAlign:"center"
}

// HandleSearch = event =>{ 
// event.preventDefault();
// //this.state.searchText caontains seaach criteria
// //use filter() this.stateempoyees array
// //set state to new filtererd data
// //console.log(this.state)
// }

handleSearch = e => {
  const search = e.target.value.toLowerCase();
  const { everyone } = this.state;
  const newArr = everyone.filter(
    ({ name }) =>
      name.last.toLowerCase().startsWith(search) ||
      name.first.toLowerCase().startsWith(search)
  );
  this.setState({ employees: newArr });
};

// handleSearch = () => {
//   const { employees, sorted } = this.state;
//   let newArr;
//   if (!sorted)
//     newArr = employees.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
//   else newArr = employees.reverse();
//   this.setState({ employees: newArr, sorted: !sorted });
// };

InputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]:value
  });
};

function JumboTron() {

  // HandleSearch = event =>{ 
  //   event.preventDefault();
  //   //this.state.searchText caontains seaach criteria
  //   //use filter() this.stateempoyees array
  //   //set state to new filtererd data
  //   //console.log(this.state)
  //   }
    
  //   InputChange = event => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     this.setState({
  //       [name]:value
  //     });
  //   };

  return <>
    <div style={styles} className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">A directory for employers to view all their employees and info!</p>
      </div>
    </div>
    <div className="input-group mb-3 container" style={{width:"22rem"}}>
  <input type="text" className="form-control" placeholder="Search for an employee name" aria-label="Employee Search" aria-describedby="basic-addon2"onChange={this.InputChange}/>
  <div className="input-group-append">
    <button className="input-group-text" style={{background:"lightblue"}} id="basic-addon2"onClick={this.HandleSearch}>Search</button>
  </div>
</div>
  </>
}

export default JumboTron;