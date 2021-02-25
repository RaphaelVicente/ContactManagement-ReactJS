import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Panel from "../components/panel";
import PlusButton from "../components/plusButton";
import { createCountry } from "../store/country/countryActions"

import "../assets/css/pages/countryStyle.css"

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = { hideForm: true };
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(country => (
            <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.countryCode}</td>
            </tr>
        ))
    }

    render() {
        const handleSubmit = event => {
            event.preventDefault();

            const values = {};
            values[event.target[0].name] = event.target[0].value;
            values[event.target[1].name] = Number.parseInt(event.target[1].value);
            
            this.props.createCountry(values);
            cancel();
        };

        const newCountry = () => {
            this.setState({ hideForm: false });
        }

        const cancel = () => {
            this.setState({ hideForm: true });
        }

        return (
            <div>
                {this.state.hideForm ? null :
                (<Panel>
                    <label className="new-country-label">New Country</label>
                    <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Country" className="country-input" />
                            <input type="number" name="countryCode" placeholder="Country Code" className="country-input" />
                            <div className="form-buttons">
                            <button onClick={cancel}>Cancel</button>
                            <button type='submit'>Save</button>
                            </div>
                    </form>
                </Panel>)}
            <Panel>
                <label className="country-label">Countries</label>
                <PlusButton label="Country" onClick={newCountry}/>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Panel>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.country.list });
const mapDispatchToProps = dispatch => bindActionCreators({ createCountry }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Country);