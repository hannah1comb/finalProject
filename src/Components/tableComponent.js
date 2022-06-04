import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default class TableComponent extends React.Component {
    render() {
    return (
        <div>
           <Table striped bordered hover id='tableStyle'>
            <thead>
                <tr>
                <th>City</th>
                <th>Favorite Activity</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.data.map((element, id) => {
                        return (
                            <tr key={id}>
                                <td>{element.city}</td>
                                <td>{element.activity}</td>
                                <td>
                                    <Button variant='outline-danger' onClick={() => this.props.onDelete({id})}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        </div>
    )
  }
}




