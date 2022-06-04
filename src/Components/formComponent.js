import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TableComponent from './tableComponent';

let activityList = defaultActivities();

function defaultActivities() {
    return [
        {
            city: 'Ponca',
            activity: 'Our favorite thing to do in Ponca is enjoying the beautiful hikes and kayaking the buffalo river.'
        },
        {
            city: 'Bentonville',
            activity: 'Crystal bridges is a beautiful museum with awesome art and cool walking trails!'
        }
    ]
}

export default function FormComponent() {
    const [city, setCity] = useState('');
    const [activity, setActivity] = useState('');
    const [value, setValue] = useState(0); // integer state
    const saveData = () => {
        activityList.push({city: city, activity: activity})
        setValue(value => value + 1); // update the state to force render
    }

    function deleteActivity(activityId) {
        activityList.splice(activityId['id'], 1)
        setValue(value => value + 1); // update the state to force render
    }

    return (
        <div>
        <TableComponent data = {activityList} onDelete={deleteActivity}/>
        <Form id ='formStyle'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id ='formLabelText'>Give us your activity idea!</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Idea" onChange={(e) => setActivity(e.target.value)}/>
          <Form.Select onChange={(e) => setCity(e.target.value)} >
            <option>Select an Option</option>
            <option>Bentonville</option>
            <option>Ponca</option>
            <option>Fayetteville</option>
         </Form.Select>
        </Form.Group>
        <Button variant="primary" type="button" onClick={saveData}>
          Submit
        </Button>
      </Form>
      </div>
    )
}


