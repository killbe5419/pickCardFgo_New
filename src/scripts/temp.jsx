import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../stylesheets/styles.css";

function checkRare(num) {
    let output;
    if(num === 5) {
        output = { color: "orange" };
    }
    else if(num === 4) {
        output = { color: "purple" };
    } else {
        output = { color: "blue" };
    }
    return output;
}

class Case extends React.Component {

    render() {
        return (
            <div className="case" style={ this.props.style }>
                <p> { this.props.imgName } </p>
                <img src={ this.props.imgUrl } alt="waiting for image" />
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stone: 167,
            stoneUrl: "../images/holystoneNo.jpg",
            stoneAlt: "a stone icon",
            case0:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case1:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case2:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case3:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case4:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case5:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case6:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case7:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case8:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
            case9:{
                status: {display: "none"},
                imgName: "",
                imgUrl: ""
            },
        }
    }

    handleUseStone = () => {
        if(this.state.stoneUrl === "../images/holystoneNo.jpg") {
            this.setState({
                stoneUrl: "../images/holystone.jpg"
            })
        } else {
            this.setState({
                stoneUrl: "../images/holystoneNo.jpg"
            })
        }
    }

    handlePickOne = () => {
        const data = {
            params:{
                method:"pickOne",
                fromClient: true
            }
        }
        axios.get("/pickOne",data)
            .then(res => {
                const rare = checkRare(res.data.rare);
                this.setState({
                    case0:{
                        status: rare ,
                        imgName: res.data.name,
                        imgUrl: res.data.img
                    }
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <h1 className="title">FGO pick-card simulation</h1>
                <button onClick={ this.handlePickOne }>Pick 1 card</button>
                <button>Pick 10 cards</button>
                <button>Calculate</button>
                <div id="showStone">
                    <img src={ this.state.stoneUrl } alt={ this.state.stoneAlt } onClick={ this.handleUseStone }/>
                    <p> { this.state.stone } </p>
                </div>
                <Case style={this.state.case0.status} imgName={this.state.case0.imgName} imgUrl = {this.state.case0.imgUrl} />
                <Case style={this.state.case1.status} imgName={this.state.case1.imgName} imgUrl = {this.state.case1.imgUrl} />
                <Case style={this.state.case2.status} imgName={this.state.case2.imgName} imgUrl = {this.state.case2.imgUrl} />
                <Case style={this.state.case3.status} imgName={this.state.case3.imgName} imgUrl = {this.state.case3.imgUrl} />
                <Case style={this.state.case4.status} imgName={this.state.case4.imgName} imgUrl = {this.state.case4.imgUrl} />
                <br/>
                <Case style={this.state.case5.status} imgName={this.state.case5.imgName} imgUrl = {this.state.case5.imgUrl} />
                <Case style={this.state.case6.status} imgName={this.state.case6.imgName} imgUrl = {this.state.case6.imgUrl} />
                <Case style={this.state.case7.status} imgName={this.state.case7.imgName} imgUrl = {this.state.case7.imgUrl} />
                <Case style={this.state.case8.status} imgName={this.state.case8.imgName} imgUrl = {this.state.case8.imgUrl} />
                <Case style={this.state.case9.status} imgName={this.state.case9.imgName} imgUrl = {this.state.case9.imgUrl} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-dom")
)