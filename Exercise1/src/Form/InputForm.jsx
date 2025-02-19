import React, { useState } from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const InputForm = (props) => {

    const [value, setValue] = useState({ name: '', age: '' });
    const [correctInput, setCorrectInput] = useState({ name: true, age: true });
    const [error, setError] = useState({ needError: false, item: '' });

    const nameChangeHandler = (event) => {
        setValue({ name: event.target.value, age: value.age });
        if (event.target.value.trim().length === 0) setCorrectInput({ name: false, age: correctInput.age, })
        else setCorrectInput({ name: true, age: correctInput.age, })
    }

    const ageChangeHandler = (event) => {
        setValue({ name: value.name, age: event.target.value });
        if (event.target.value.trim().length === 0) setCorrectInput({ name: correctInput.name, age: false, })
        else setCorrectInput({ name: correctInput.name, age: true, })
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        if (value.name.trim().length === 0) {
            setCorrectInput({ name: false, age: correctInput.age });
            if (value.age.trim().length === 0) {
                setCorrectInput({ name: correctInput.name, age: false });
            }
            setError({ needError: true, item: 'name' });
            return;
        } else if (value.age.trim().length === 0) {
            setCorrectInput({ name: correctInput.name, age: false });
            if (value.name.trim().length === 0) {
                setCorrectInput({ name: false, age: correctInput.age });
            }
            setError({ needError: true, item: 'age' });
            return;
        }

        setValue({ name: '', age: '' });

        props.onFormSave(value.name, value.age);
    }

    const OkHandler = (clicked) => {
        if (clicked) {
            setCorrectInput({ name: true, age: true });
            setError(false);
        }
    }

    return (
        <React.Fragment>
            <Container bg={"bg-amber-200"}>
                <form onSubmit={SubmitHandler} className="flex flex-col justify-around">
                    <label htmlFor="valueName" className="font-bold">Username</label>
                    <input
                        id="valueName"
                        onChange={nameChangeHandler}
                        value={value.name}
                        type="text"
                        className={`${correctInput.name ? 'bg-amber-400' : 'bg-red-400'}  p-2 mt-1 mb-3 border-2  rounded-2xl`}
                    />

                    <label htmlFor="valueAge" className="font-bold">Age (years)</label>
                    <input
                        id="valueAge"
                        onChange={ageChangeHandler}
                        value={value.age}
                        type="number"
                        className={`${correctInput.age ? 'bg-amber-400' : 'bg-red-400'}  p-2 mt-1 mb-6 border-2  rounded-2xl`}
                    />
                    <Button type={"submit"} text={"submit"} />
                </form>
            </Container>
            {
                error.needError && (
                    <ErrorModal
                        onOkClick={OkHandler}
                        title={`Enter your ${error.item}`}
                        errorMessage={error.item === 'age' ? 'valid Age is made of 1-9 characters' : 'valid Name is made of A-Z a-z characters'}
                    />)
            }
        </React.Fragment>
    );
}

export default InputForm;