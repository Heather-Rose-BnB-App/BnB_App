import React from "react";
import './styles.css';
import Login from '../components/login'

export class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Login></Login>
            </div>
        );
    };
}