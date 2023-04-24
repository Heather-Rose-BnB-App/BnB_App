import React from "react";
import './styles.css';
import axios from "axios";


export class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            error: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, message } = this.state;

        // Perform validation
        if (!name || !email || !message) {
            this.setState({ error: 'Please fill in all the fields.' });
            return;
        }

        // Make API call to send contact form data
        axios.post('http://localhost:4000/api/contact', { name, email, message })
            .then((response) => {
                // Handle success, e.g. show success message, reset form, etc.

                console.log('Form submission successful:', response);
            })
            .catch((error) => {
                // Handle error, e.g. show error message, etc.
                console.error('Form submission failed:', error);
            });
    }

    render() {
        const { name, email, message, error } = this.state;
        return (
            <div className="contact-container">
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <p>Email: caheroyanhouse@gmail.com</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Address: Caheroyan House and Farm, Athenry, Galway H65AO65</p>
                    </div>
                    <div className="contact-form">
                        <h3>Contact Form</h3>
                        <form onSubmit={this.handleSubmit}>
                            {error && <p className="error">{error}</p>}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleInputChange} placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" name="message" value={message} onChange={this.handleInputChange} rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;





