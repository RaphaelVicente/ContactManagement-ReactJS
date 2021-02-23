import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Panel from "../components/panel";
import { getAllCountries } from "../store/country/countryActions";

import "../assets/css/pages/mainStyle.css";

class Main extends Component {

    componentDidMount() {
        this.props.getAllCountries();
    }

    render() {
        return (
            <Panel>
                <div className="three-cols">
                    <div className="card">
                        <label>Countries</label>
                        <h1>{this.props.qtdCountries}</h1>
                    </div>
                    <div className="card">
                        <label>States</label>
                        <h1>50</h1>
                    </div>
                    <div className="card">
                        <label>Cities</label>
                        <h1>100</h1>
                    </div>
                </div>
                <div className="two-cols">
                    <div className="card">
                        <label>People</label>
                        <h1>120</h1>
                    </div>
                    <div className="card">
                        <label>Addresses</label>
                        <h1>125</h1>
                    </div>
                </div>
            </Panel>
        );
    }
}

const mapStateToProps = state => ({ qtdCountries: state.country.list.length });
const mapDispatchToProps = dispatch => bindActionCreators({ getAllCountries }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);