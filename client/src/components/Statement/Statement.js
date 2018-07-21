import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';
import addStatements from '../../utils/API';

class Statement extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'select' ? target.selected : target.value;
        const name = target.name;
        console.log(target);

        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        addStatements();
        }
    render() {
        return (
            <div>
            <div>
                <CustomSelect
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                />
                <label>Description of Expense</label>
                <input
                    className="form-control"
                    name="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Bills included..."
                />
                <label>Money Source</label>
                <input
                    className="form-control"
                    name="description"
                    type="text"
                    value={this.state.moneySource}
                    onChange={this.handleChange}
                />
                <label>Auto Pay</label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="autoPay"
                    value={this.state.autoPay}
                    onChange={this.handleChange}
                    />
                <label>Photo (optional)</label>
                <input id="statementUpload" 
                    type="file" 
                    accept="image/*;capture=camera"
                    value={this.state.photo}
                    onChange={this.handleChange}    
                />
                <br />
                <button type="button" className="btn btn-primary" id="statementSelect" onClick={this.handleSubmit}>Select</button>
            </div>
        </div>
        )
    }
}

export default Statement;