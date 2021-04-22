import React from 'react';


function JumboTron() {
  return <>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">A directory for employers to view all their employees and info!</p>
      </div>
    </div>
    <div className="input-group mb-3" style={{width:"20rem"}}>
  <input type="text" className="form-control" placeholder="Search for an employee name" aria-label="Employee Search" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className="input-group-text" id="basic-addon2">Search</button>
  </div>
</div>
  </>
}

export default JumboTron;