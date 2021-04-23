import React from "react";

const styles = {
  background: "lightblue",
  border: "1px solid black",
};
function Table(props) {
  return (
    <table className="table" style={styles}>
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">E-Mail</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((data)=>{
          return(
        <tr key={data.id.value}>
          <td><img src={data.picture.thumbnail} alt=""/></td>
          <td>{data.name.first} {data.name.last}</td>
          <td>{data.phone}</td>
          <td>{data.email}</td>
          <td>{data.dob.date.slice(0,10)}</td>
        </tr>)})}
      </tbody>
    </table>
  );
}
export default Table;
