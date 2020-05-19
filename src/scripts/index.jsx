import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../stylesheets/styles.css";
import checkRare from "./checkRare.js";
import checkLength from "./checkLength.js";


class Case extends React.Component {
    render() {

        if(this.props.method === "pickOne") {
            return (
                <div className="case" style={ this.props.input.style }>
                    <p> { checkLength(this.props.input.data.name) } </p>
                    <img src={ this.props.input.data.img } alt={ this.props.input.alt } />
                </div>
            );
        }
        if(this.props.method === "pickTen") {

            const list = this.props.input.data.map(item =>
                <div className="case" key={item.No.toString()} style={checkRare(item.rare)}>
                    <p>{ checkLength(item.name) }</p>
                    <img src={ item.img } alt={ item.name } />
                </div>
            );

            list.splice(5,0,<br key="br"/>)

            return (
                <div>
                    { list }
                </div>
            );
        }
        if(this.props.method === "calculate") {
            return (
                <div className="calcResult">
                    <p> Nobel: { this.props.input.nobel }</p>
                    <p>Numbers of picks: { this.props.input.data.pickNum }</p>
                    <p>Money: { this.props.input.data.moneyType } { this.props.input.data.money }</p>
                    <p>Percentage: { (this.props.input.data.p * 100).toFixed(3) }% </p>
                </div>
            );
        }

    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stone: 167,
            stoneUse: false,
            stoneUrl: "../images/holystoneNo.jpg",
            stoneAlt: "a stone icon",
            input: {
                style: {display: "none"},
                alt: "waiting for image",
                method:"pickOne",
                data:{
                    name: "",
                    img: "",
                }
            }
        }
    }

    handleUseStone = () => {
        if(!this.state.stoneUse) {
            this.setState({
                stoneUse: true,
                stoneUrl: "../images/holystone.jpg"
            })
        } else {
            this.setState({
                stoneUse: false,
                stoneUrl: "../images/holystoneNo.jpg"
            })
        }
    }

    checkStone = (num,method) => {
        if(method === "pickOne") {
            if(num - 3 < 0) {
                const answer = window.confirm("You don't have enough holystone for picking, " +
                    "Do you want to spend ￥9800 charging 167 holystones?");
                if(answer) {
                    alert("processing...");
                    const data = {
                        params: {
                            method: "charge",
                            fromClient: true,
                            money: 9800,
                            moneyType: "JPY",
                            holystone: 167,
                        }
                    }
                    axios.get("/charge",data)
                        .then(res => {
                            if(res.data.correct) {
                                console.log(res.data);
                                let tmp = this.state.stone;
                                tmp += 167;
                                this.setState({
                                    stone: tmp,
                                })
                                alert("Thank you for charging! Now you have " + this.state.stone
                                    + " holystones for picking");
                            } else {
                                alert("something error happened while charging, please try again");
                            }
                        })
                    return false;
                } else {
                    alert("Sorry, You can't pick cards because of the lack of holystone");
                    return false;
                }
            } else {
                return true;
            }
        }
        if(method === "pickTen") {
            if(num - 30 < 0) {
                const answer = window.confirm("You don't have enough holystone for picking, " +
                    "Do you want to spend ￥9800 charging 167 holystones?");
                if(answer) {
                    alert("processing...");
                    const data = {
                        params: {
                            method: "charge",
                            fromClient: true,
                            money: 9800,
                            moneyType: "JPY",
                            holystone: 167,
                        }
                    }
                    axios.get("/charge",data)
                        .then(res => {
                            if(res.data.correct) {
                                let tmp = this.state.stone;
                                tmp += 167;
                                this.setState({
                                    stone: tmp,
                                })
                                alert("Thank you for charging! Now you have " + this.state.stone
                                    + " holystones for picking");
                            } else {
                                alert("something error happened while charging, please try again");
                            }
                        })
                    return false;
                } else {
                    alert("Sorry, You can't pick cards because of the lack of holystone");
                    return false;
                }
            } else {
                return true;
            }
        }
    }

    handlePickOne = () => {
        if(this.state.stoneUse) {
            const haveStone = this.checkStone(this.state.stone,"pickOne");
            if(!haveStone) return ;
        }

        const data = {
            params:{
                method:"pickOne",
                fromClient: true
            }
        }
        axios.get("/pickOne",data)
            .then(res => {
                if(res.data.rare === 5 && res.data.type === "servant") {
                    alert("Congratulations! You got a SSR servant => " + res.data.name);
                }
                const rare = checkRare(res.data.rare);
                this.setState({
                   input:{
                       method:"pickOne",
                       style: rare,
                       data: res.data
                   }
                });
                if(this.state.stoneUse) {
                    let tmp = this.state.stone;
                    tmp -= 3;
                    this.setState({
                        stone: tmp
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    handlePickTen = () => {
        if(this.state.stoneUse) {
            const haveStone = this.checkStone(this.state.stone,"pickTen");
            if(!haveStone) return ;
        }

        const data = {
            params:{
                method:"pickTen",
                fromClient: true
            }
        };
        axios.get("/pickTen",data)
            .then(res => {
                for(let i=0;i<res.data.length;i++) {
                    if(res.data[i].type === "servant" && res.data[i].rare === 5) {
                        alert("Congratulations! You got a SSR servant => " + res.data[i].name);
                    }
                }
                this.setState({
                    input:{
                        method:"pickTen",
                        data: res.data
                    }
                })
                if(this.state.stoneUse) {
                    let tmp = this.state.stone;
                    tmp -= 30;
                    this.setState({
                        stone: tmp
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    handleCalc = () => {
        const input = prompt("Nobel:?");
        const reg = /^([0]|[1-9][0-9]*)$/;

        if(!(reg.test(input))) {
            alert("illegal input");
            return;
        }
        const nobel = Number(input);
        const data = {
            params:{
                method:"calculate",
                nobel: nobel,
                fromClient: true
            }
        };
        axios.get("/calculate",data)
            .then(res => {
                console.log(res.data);
                this.setState({
                    input: {
                        method: "calculate",
                        nobel: nobel,
                        data: res.data
                    }
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <h1 className="title">FGO Pick-card Simulator</h1>
                <button onClick={ this.handlePickOne }>Pick 1 card</button>
                <button onClick={ this.handlePickTen }>Pick 10 cards</button>
                <button onClick={ this.handleCalc }>Calculate</button>
                <div id="showStone">
                    <img src={ this.state.stoneUrl } alt={ this.state.stoneAlt } onClick={ this.handleUseStone }/>
                    <p> { this.state.stone } </p>
                </div>
                <br/>
                <Case method={ this.state.input.method } input={ this.state.input }/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-dom")
)