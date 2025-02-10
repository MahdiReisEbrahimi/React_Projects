import React from "react";

const ThingsCard = (props) => {
    return (
        <div className="border-2 bg-amber-600 p-2 rounded-2xl font-bold mt-2">{props.thing}</div>
    );
}

export default ThingsCard;