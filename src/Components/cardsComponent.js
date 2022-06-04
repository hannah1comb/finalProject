import React from "react";
import Card from 'react-bootstrap/Card'
export default class CardsComponent extends React.Component {
  render() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {<Card.Img variant="top" src="lostvalley.jpg" />}
                <Card.Body>
                    <Card.Title>Lost Valley</Card.Title>
                    <Card.Text>
                    Lost Valley Trail is located near the Boxley Valley Historic District on Hwy. 43 and is the most popular hike at Buffalo National River.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}}>
                {<Card.Img variant="top" src="indianrockhouse.jpg" />}
                <Card.Body>
                    <Card.Title>Indian Rock House</Card.Title>
                    <Card.Text>
                    The Indian Rock House loop trail winds across hillsides and along a beautiful stream to the spectacular Indian Rockhouse Cave.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}}>
                {<Card.Img variant="top" src="hawks.jpg" /> }
                <Card.Body>
                    <Card.Title>Hawksbill Craig</Card.Title>
                    <Card.Text>
                    Situated deep into the Ozark National Forest, the Hawksbill Crag is an Arkansas treasure and is definitely worth a trip.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}



