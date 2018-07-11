import React from 'react';
import { Component } from 'react';

class StatementInfo extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h4>Bill Name: </h4>
                    <h4>Category: </h4>
                    <h4>Due Date: </h4>
                </div>
            </div>
        )
    }
}

export default StatementInfo;
