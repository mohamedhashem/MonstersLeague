import React from "react";

import './card.styles.css';

export const Card = (props) =>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.user.id}set=set4?size=200x200`} />
        <h3> {props.user.name}</h3>
        <p>{props.user.email}</p>
    </div>
)