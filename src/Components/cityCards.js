import React from "react";
import Card from 'react-bootstrap/Card'
export default class CityCards extends React.Component {
  render() {
    return (
        <div className ='row' >
            <Card style={{ width: '20rem', height: ''}}>
                { <Card.Img variant="top" src="bentonville.jpg" /> }
                <Card.Body>
                    <Card.Title>Bentonville</Card.Title>
                    <Card.Text>
                    Bentonville is a city in Arkansas. It's known as the birthplace of the retailer Walmart. Downtown’s Walmart Museum includes founder Sam Walton’s original five-and-dime store. Crystal Bridges Museum of American Art displays work from the colonial era to the present. Its sprawling grounds include forest trails, sculpture gardens and waterside pavilions ― Google
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                { <Card.Img variant="top" src="ponca.jpg" /> }
                <Card.Body>
                    <Card.Title>Ponca</Card.Title>
                    <Card.Text>
                    If you’ve ever longed for an escape to the true beautiful middle of nowhere, Ponca is that place.  Tucked into the mountainous upper Buffalo National River wilderness, this tiny town is surrounded by some of the most grand hiking and floating scenery in mid-America. -https://www.arkansas.com/ponca
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                {<Card.Img variant="top" src="fayetteville.jpg" /> }
                <Card.Body>
                    <Card.Title>Fayetteville</Card.Title>
                    <Card.Text>
                    Fayetteville is the entertainment capital of Northwest Arkansas, as well as the perfect destination to experience all the region has to offer. Vintage and modern airplanes are on display in a hangar at the Arkansas Air and Military Museum. To the west, Prairie Grove Battlefield State Park was the site of a Civil War battle. Mount Sequoyah Woods Trail runs through a thick forest. ― Google
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}