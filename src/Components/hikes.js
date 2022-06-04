import React from "react";
import AccordionComponent from "./accordianComponent";
import CardsComponent from "./cardsComponent";
export default class Hikes extends React.Component {
  render() {
    return (
       <div id ='hikesStyle'>
           <h1 id = 'hikecolor'>Famous Hikes in Arkansas</h1>
           <CardsComponent />
           <h1 id ='hikesStyleTwo'>Here are a few hiking tips:</h1>
           <AccordionComponent />
       </div> 
    )
  }
}