import React, { Component } from 'react';
import { Button, Table as TableRS } from 'reactstrap';
import { Media } from 'reactstrap';

import { users } from '../../utils/mock-data';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users,  
        };
    }
    
    render() {
        return (
            <TableRS hover striped  bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(elm => (
                        <tr key={elm.id}>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td> 
                                                              
                                <Media object data-img src={elm.pic}/>
                             
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableRS>
        );
    }
}

export default Card;