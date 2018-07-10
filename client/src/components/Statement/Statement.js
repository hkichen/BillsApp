import React from 'react';
import { Component } from 'react';

class Statement extends Component{
    render()    {
        return  (
            <div>
                <div className="card" id="expenseTypes">
                    <button type="button" class="btn btn-primary" id="rent">Rent/Mortgage</button>
                    <button type="button" class="btn btn-primary" id="util">Utilities</button>
                    <button type="button" class="btn btn-primary" id="car">Car/Transit</button>
                    <button type="button" class="btn btn-primary" id="food">Food/Dining</button>
                    <button type="button" class="btn btn-primary" id="credit">Credit Cards</button>
                    <button type="button" class="btn btn-primary" id="loans">Loans</button>
                    <button type="button" class="btn btn-primary" id="medical">Medical</button>
                    <button type="button" class="btn btn-primary" id="misc">Misc.</button>
                </div>
            </div>
        )
    }
}

export default Statement;