import React from "react";
import "./Card.css"

import hoc from "./hoc";
import Horder from "./Horder";

const Person = (props) => {
    return (
        <Horder>
        <div className="card">
            <p className="tit">Card {props.nr}</p>
            <p> Numele meu este {props.name} si am {props.age} ani </p>
            <input type="text" value={props.name} onChange={props.change} /><br />
            <button onClick={props.sterge} className="st">Sterge</button>
        </div>
        </Horder>
    );
};

export default hoc(Person);