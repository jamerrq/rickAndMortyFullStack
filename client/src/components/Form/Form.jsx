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
            <div className="formBody">
                <div className="formContainer">
                    <form onSubmit={this.handleSubmit}>
                        <img src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-519.gif" alt="logoRM" />
                        <hr />
                        <div className="inputField">
                            <i
                                className='fas fa-user-alt'
                                style={this.state.errors.email ? {
                                    color: "red"
                                } : undefined}
                            >
                            </i>
                            &nbsp;
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="user"
                            />
                        </div>
                        {this.state.errors.email && <p>
                            {this.state.errors.email}</p>}
                        <div className="inputField">
                            <i
                                className='fas fa-fingerprint'
                                style={this.state.errors.password ? {
                                    color: "red"
                                } : undefined}
                            >
                            </i>
                            &nbsp;
                            <input
                                type="password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                                placeholder="password"
                            />
                        </div>
                        {this.state.errors.password && <p>
                            {this.state.errors.password}</p>}
                        <button
                            className="formSubmitButton"
                            disabled={Object.keys(this.state.errors).reduce((acc, value) => { return acc + this.state.errors[value].length }, 0)}
                        >
                            LOG IN
                        </button>
                    </form>
                </div>
            </div>
        );
    };
};


export default Form;
