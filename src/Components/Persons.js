import React, { Component } from "react";

import Person from "./Person";


class Persons extends Component {
    constructor(props){
        super(props)
        this.refItem=React.createRef();
    }
    lista = () => {
        const date = this.props.date.map((item, index) => {
            return (<Person
                name={item.name}
                age={item.age}
                key={item.id}
                sterge={() => this.props.sterge(index)}
                change={(e) => this.props.change(e, index)}
                nr={item.id}
            />);
        });

        return date
    }
    render() {
        return (<div>
            {this.lista()}
            < input id="nou" ref={this.refItem} type="text" placeholder="nume card nou" /> <br />
            <button  onClick={()=>this.props.adauga(this.refItem)}>Adauga card nou</button>
        </div >);
    }

}

export default Persons;