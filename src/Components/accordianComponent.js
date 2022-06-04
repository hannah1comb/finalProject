import React from "react";
import Accordion from 'react-bootstrap/Accordion'
export default class AccordionComponent extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>TIP #1</Accordion.Header>
          <Accordion.Body>
          Only take what's necessary for a safe, enjoyable hike to avoid carrying too much weight.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>TIP #2</Accordion.Header>
          <Accordion.Body>
          Always bring enough water.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>TIP #3</Accordion.Header>
          <Accordion.Body>
          Choose a trail you can handle and give yourself time to build up to more difficult levels.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>TIP #4</Accordion.Header>
          <Accordion.Body>
          Hike with a companion.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
  



