import React, { Component } from "react";
import { connect } from "react-redux";

import Panel from "../components/panel";

import "../assets/css/pages/countryStyle.css"

class Country extends Component {

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
        return (
            <Panel>
                <label className="country-label">Countries</label>
                <button className="country-button">Create</button>
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
        );
    }
}

const mapStateToProps = state => ({ list: state.country.list });

export default connect(mapStateToProps)(Country);