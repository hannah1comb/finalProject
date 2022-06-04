import React from "react";
import CarouselComponent from "./carousel";

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1 id='hometext'>Welcome to the Natural State</h1>
            <h3 id='hometextTwo'>Your adventure begins here!</h3>
            <CarouselComponent />

            <div id = 'home-text'>
            Arkansas is a landlocked state in the South Central United States. It's name is from the Osage language, a Dhegiha Siouan language, and referred to their relatives, the Quapaw people. The state's diverse geography ranges from the mountainous regions of the Ozark and Ouachita Mountains, which make up the U.S. Interior Highlands, to the densely forested land in the south known as the Arkansas Timberlands, to the eastern lowlands along the Mississippi River and the Arkansas Delta.
            (https://en.wikipedia.org/wiki/Arkansas)
            </div>
        </div>
    )
  }
}