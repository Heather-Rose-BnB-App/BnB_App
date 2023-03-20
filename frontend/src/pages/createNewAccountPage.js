import React from "react";
import './styles.css';
import CreateNewUserForm from '../components/createUserForm'

export class CreateNewAccount extends React.Component {
    render() {
        return (
            <div>
                <h1>Create New Account</h1>
                <CreateNewUserForm></CreateNewUserForm>
            </div>
        );
    };
}