/*
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import qs from "qs";
import "../stylesheets/styles.css";

class Case extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caseStatus:{
                display: "",
                hide: "display: none"
            },
            caseStatusNow: {display: "none"}
        }
    }
    render() {
        return (
            <div className="case" style={ this.state.caseStatusNow }>
                <p> {} </p>
                <img src="" alt="waiting for image" />
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stone: 167
        }
    }


    render() {
        return (
            <div>
                <h1 className="title">FGO pick-card simulation</h1>
                <button>Pick 1 card</button>
                <button>Pick 10 cards</button>
                <button>Calculate</button>
                <div id="showStone">
                    <img src={ this.state.urlNow } alt={ this.state.alt } onClick={ this.handleClick }/>
                    <p> { this.state.stone } </p>
                </div>
                <Case /><Case /><Case /><Case /><Case />
                <br />
                <Case /><Case /><Case /><Case /><Case />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-dom")
)

 */