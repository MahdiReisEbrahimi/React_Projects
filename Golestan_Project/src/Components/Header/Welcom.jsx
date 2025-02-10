import React from "react";
import styles from "./Welcom.module.css";
import styled from "styled-components";


const Container = styled.div`
    background-color: blue;
    
`;
const Welcom = () => {

    return (
        <div>
            <div className={styles.welcompage_massage}>Welcom to golestan website.</div>
            <div className={styles.welcomPage__guideAndButton}>
                <h1>This page is for the managers.</h1>
                <button className={styles.welcomPage__Button}>Are u student?</button>
            </div>
        </div>
    );

}

export default Welcom;