import React from "react";
import "./Welcom.css";

const Welcom = () => {

    return (
        <div>
            <div className="welcompage__massage">Welcom to golestan website.</div>
            <div className="welcomPage__guideAndButton">
                <h1>This page is for the managers.</h1>
                <button className="welcomPage__Button">Are u student?</button>
            </div>
        </div>
    );

}

export default Welcom;