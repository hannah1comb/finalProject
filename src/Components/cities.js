import React from "react";
import CityCards from "./cityCards";
import FormComponent from "./formComponent";
// import TableComponent from "./tableComponent";


export default class Cities extends React.Component {
  render() {
    return (
        <div id ='cityStyle'>
            <div id = 'Para'>     
                <h1>Here are some of the most visited cities in Arkansas:</h1>
            </div>
            <CityCards />
            {/* <TableComponent /> */}
            <FormComponent />
       </div>
    )
  }
}