import { useState } from "react";
import Button from "../UI/Button";
import './DataInput.css';
import DialogueBox from "../Error Handling/DialogueBox";

function DataInput(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [usernameValid, setIsUsernameValid] = useState(false);
    const [isAgeValid, setIsAgeValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);

    const submitDataHandler = (event) => {
        event.preventDefault();
        if (!usernameValid || !isAgeValid) {
            setIsFormValid(false);
            return;
        }
        const submitData = {
            username: username,
            age: age
        };
        props.onFormSubmit(submitData);
        setUsername('');
        setIsUsernameValid(false);
        setAge('');
        setIsAgeValid(false);
        setIsFormValid(true);
    }

    const usernameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsUsernameValid(true);
        }
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        if (event.target.value.trim() > 0) {
            setIsAgeValid(true);
        }
        setAge(event.target.value);
    }

    const errorCloseHandler = () => {
        setIsFormValid(true);
    }

    return (
        <div>
            <form onSubmit={submitDataHandler}>
                <label>Username</label>
                <input type='text' value={username} onChange={usernameChangeHandler} />
                <label>Age (Years)</label>
                <input type='number' value={age} onChange={ageChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
            {!isFormValid?<DialogueBox handleClose={errorCloseHandler} />:<p></p>}
        </div>
    )
}

export default DataInput;