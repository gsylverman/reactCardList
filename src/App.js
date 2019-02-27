import React, { Component } from "react";
import Persons from "./Components/Persons";
import "./index.css"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { id: 1, name: "Andrei", age: 18 },
                { id: 2, name: "George", age: 25 },
                { id: 3, name: "Flaviu", age: 30 }
            ],
            show: true,
            toggle: 0
        }
        this.refNou=React.createRef();
        this.ups=React.createRef();
    }


    sterge = (index) => {
        const lista = [...this.state.persons]
        lista.splice(index, 1);
        this.setState({
            persons: lista
        });
    }
    showHide = () => {
        let daNU = this.state.show;
        this.setState((previousState, props) => {
            return {
                show: !daNU,
                toggle: previousState.toggle + 1
            }
        });

    }
    arataAscunde = () => {
        let show = null;
        if (this.state.show) {
            show = (
                <div >
                    <Persons
                        change={this.change}
                        sterge={this.sterge}
                        date={this.state.persons}
                        adauga={this.adauga} />
                </div>
            );
        }
        return show;
    }
    change = (e, index) => {
        const lista = [...this.state.persons];
        const item = lista[index];
        item.name = e.target.value;
        this.setState({ persons: lista });
    }
    adauga = (p) => {
        const lista = [...this.state.persons];
        const nume = document.getElementById("nou").value;
        let id = lista.length > 0 ? lista[this.state.persons.length - 1].id + 1 : 1;
        const elementNou = { id: id, name: nume, age: 18 };
        lista.push(elementNou);
        this.setState({
            persons: lista
        });
        document.getElementById("nou").value = "";
        p.current.focus()
       

    }

    red() {
        let clasa = "green";
        if (this.state.persons.length <= 1) {
            clasa = "red"
        }
        
        return clasa;

    }
    componentDidMount() {
           
    this.ups.current.style.color="red"
    }
    render() {

        return (

            <div id="container">
                <h1 ref={this.ups}> change</h1>
                <h1 >List contains: <span className={this.red()}>  {this.state.persons.length} cards </span></h1>
                <p>{this.state.toggle}</p>
                <button onClick={this.showHide}>Arata/Ascunde</button>
                {this.arataAscunde()}
               

            </div>
        );
    }
}


export default App;