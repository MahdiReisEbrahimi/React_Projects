import React, { useState } from "react";
import "./AddNewStudent.css"

const AddNewStudent = (props) => {


    const [Student_Name, setStudent_Name] = useState('');
    const [Student_Number, setStudent_Number] = useState();
    const [Student_User, setStudent_User] = useState("");
    const [Student_Pass, setStudent_Pass] = useState("");

    const [isInputOk, setIsInputOk] = useState({ name: true, number: true, pass: true, user: true });

    const Name_changeHandler = (event) => {
        setStudent_Name(event.target.value);
        if (event.target.value.trim().length)
            setIsInputOk({
                name: true,
                number: isInputOk.number,
                pass: isInputOk.pass,
                user: isInputOk.user
            });
        else setIsInputOk({
            name: false,
            number: isInputOk.number,
            pass: isInputOk.pass,
            user: isInputOk.user
        });
    }
    const SN_changeHandler = (event) => {
        setStudent_Number(event.target.value);
        if (event.target.value.trim().length)
            setIsInputOk({
                name: isInputOk.name,
                number: true,
                pass: isInputOk.pass,
                user: isInputOk.user,
            });
        else setIsInputOk({
            name: isInputOk.name,
            number: false,
            pass: isInputOk.pass,
            user: isInputOk.user,
        });
    }
    const USER_changeHandler = (event) => {
        setStudent_User(event.target.value);
        if (event.target.value.trim().length)
            setIsInputOk({
                name: isInputOk.name,
                number: isInputOk.number,
                pass: isInputOk.pass,
                user: true,
            });
        else setIsInputOk({
            name: isInputOk.name,
            number: isInputOk.number,
            pass: isInputOk.pass,
            user: false,
        });
    }
    const PASS_changeHandler = (event) => {
        setStudent_Pass(event.target.value);
        if (event.target.value.trim().length)
            setIsInputOk({
                name: isInputOk.name,
                number: isInputOk.number,
                pass: true,
                user: isInputOk.user,
            });
        else setIsInputOk({
            name: isInputOk.name,
            number: isInputOk.number,
            pass: false,
            user: isInputOk.user,
        });
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        if (Student_Name.trim().length === 0) {
            setIsInputOk({ name: false, number: isInputOk.number, pass: isInputOk.pass, user: isInputOk.user });
            return;

        } else if (Student_Pass.trim().length === 0) {
            setIsInputOk({ name: isInputOk.name, number: isInputOk.number, pass: false, user: isInputOk.user });
            return;

        } else if (Student_User.trim().length === 0) {
            setIsInputOk({ name: isInputOk.name, number: isInputOk.number, pass: isInputOk.pass, user: false });
            return;

        } else if (Student_Number === undefined) {
            setIsInputOk({ name: isInputOk.name, number: false, pass: isInputOk.pass, user: isInputOk.user });
            return;

        } else {
            setIsInputOk({ name: true, number: true, pass: true, user: true });

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
    }

    return (
        <div>
            <form onSubmit={SubmitHandler} className="add_student__form">
                <input
                    onChange={Name_changeHandler}
                    value={Student_Name}
                    className={`input_student ${isInputOk.name ? '' : 'invalid'}`}
                    type="text"
                    placeholder="Enter Name Of Student"
                />
                <input
                    onChange={SN_changeHandler}
                    value={Student_Number}
                    className={`input_student ${isInputOk.number ? '' : 'invalid'}`}
                    type="number"
                    placeholder="Enter Student Number"
                />
                <input
                    onChange={USER_changeHandler}
                    value={Student_User}
                    className={`input_student ${isInputOk.user ? '' : 'invalid'}`}
                    type="text"
                    placeholder="Enter Student userName"
                />
                <input
                    onChange={PASS_changeHandler}
                    value={Student_Pass}
                    className={`input_student ${isInputOk.pass ? '' : 'invalid'}`}
                    type="text"
                    placeholder="Enter Student pass"
                />
                <button className="input_student add_student_submit_button" onClick={SubmitHandler} type="submit">Add this Student</button>
            </form>
        </div>
    );
}

export default AddNewStudent;