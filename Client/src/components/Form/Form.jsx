import React from "react";
import validate from '../../validation';

require('./Form.css');


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                email: "",
                password: "",
            },
            errors: {
                email: "",
                password: "",
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        let newState = {
            ...this.state,
            "userData": {
                ...this.state.userData,
                [e.target.name]: e.target.value,
            },
        };

        this.setState(newState);

        let errors = validate(newState.userData);

        this.setState({
            ...newState,
            "errors": errors
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginFunction(this.state.userData);
    }

    render() {
        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <img className="rmLogo" src="logorm.png" alt="logoRM" />
                    <label htmlFor="emailInput">EMAIL</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    {this.state.errors.email && <p>
                        {this.state.errors.email}</p>}
                    <label htmlFor="passwordInput">PASSWORD</label>
                    <input
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                    />
                    {this.state.errors.password && <p>
                        {this.state.errors.password}</p>}
                    <button className="formSubmitButton">Submit</button>
                </form>
            </div>
        )
    }

}

export default Form;
