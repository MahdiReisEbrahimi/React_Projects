import React, { useState } from "react";
import "./AddNewStudent.css"

const AddNewStudent = (props) => {

    const [Student_Name, setStudent_Name] = useState("");
    const [Student_Number, setStudent_Number] = useState();
    const [Student_User, setStudent_User] = useState("");
    const [Student_Pass, setStudent_Pass] = useState("");

    const Name_changeHandler = (event) => {
        setStudent_Name(event.target.value);
    }
    const SN_changeHandler = (event) => {
        setStudent_Number(event.target.value);
    }
    const USER_changeHandler = (event) => {
        setStudent_User(event.target.value);
    }
    const PASS_changeHandler = (event) => {
        setStudent_Pass(event.target.value);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        setStudent_Name('');
        setStudent_Number('');
        setStudent_User('');
        setStudent_Pass('');
        const temp = {
            sName: Student_Name,
            sNumber: Student_Number,
            sUser: Student_User,
            sPaas: Student_Pass,
        }
        props.OnAddNewStudentSubmit(temp);
    }

    return (
        <div>
            <form onSubmit={SubmitHandler} className="add_student__form">
                <input
                    onChange={Name_changeHandler}
                    value={Student_Name}
                    className="input_student"
                    type="text"
                    placeholder="Enter Name Of Student"
                />
                <input
                    onChange={SN_changeHandler}
                    value={Student_Number}
                    className="input_student"
                    type="number"
                    placeholder="Enter Student Number"
                />
                <input
                    onChange={USER_changeHandler}
                    value={Student_User}
                    className="input_student"
                    type="text"
                    placeholder="Enter Student userName"
                />
                <input
                    onChange={PASS_changeHandler}
                    value={Student_Pass}
                    className="input_student"
                    type="text"
                    placeholder="Enter Student pass"
                />
                <button className="input_student add_student_submit_button" onClick={SubmitHandler} type="submit">Add this Student</button>
            </form>
        </div>
    );
}

export default AddNewStudent;