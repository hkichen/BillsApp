import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';
import Checkbox from '../CheckBox';
import axios from 'axios';
import statementData from '../../utils/API';

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
        axios.post("api/statements", (statementData)
            .then(res => {
                return res;
            }));
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
                />
                <label>Auto Pay</label>
                <Checkbox />
                <label>Photo (optional)</label>
                <input id="statementUpload" 
                    type="file" 
                    accept="image/*;capture=camera"    
                />
                <br />
                <button type="button" className="btn btn-primary" id="statementSelect">Select</button>
            </div>
        </div>
        )
    }
}

export default Statement;