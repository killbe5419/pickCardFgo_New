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

function checkLength(str){
    const change = (str,key,limit) => {
        let out = [];
        out.push(str);
        const a = str.split(key);
        for(let i=0;i<a.length -1; i++) {
            let arr = out[i].toString().split(key);
            arr.pop();
            out.push(arr.join(key));
        }
        let select;
        for(let i=0;i<out.length;i++) {
            const tmp = out[i];
            if(tmp.length < limit) {
                select = tmp;
                break;
            }
        }
        return select;
    }
    let out;
    if(str.indexOf("・") > -1 && str.indexOf("〔") > -1) {
        const tmp = change(str,"〔",10);
        out = change(tmp, "・", 10);
    }
    else if(str.indexOf("・") > -1 && str.indexOf("〔") === -1) {
        out = change(str,"・",10);
    }
    else if (str.indexOf("・") === -1 && str.indexOf("〔") > -1) {
        out = change(str,"〔",10);
    } else {
        out = str.split(str[10])[0];
    }
    return out;
}

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
            return (
                <div>
                    { list }
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
                if(res.data.rare === 5 && res.data.type === "servant") {
                    alert("Congratulations! You got a SSR servant => " + res.data.name);
                }
                const rare = checkRare(res.data.rare);
                this.setState({
                   input:{
                       alt: "waiting for image",
                       method:"pickOne",
                       style: rare,
                       data: res.data
                   }
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    handlePickTen = () => {
        const data = {
            params:{
                method:"pickTen",
                fromClient: true
            }
        };
        axios.get("/pickTen",data)
            .then(res => {
                console.log(res.data);
                this.setState({
                    input:{
                        method:"pickTen",
                        data: res.data
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
                <button onClick={ this.handlePickTen }>Pick 10 cards</button>
                <button>Calculate</button>
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