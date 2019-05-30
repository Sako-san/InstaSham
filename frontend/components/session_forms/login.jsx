import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.state = {
                username: '',
                password: '',
        };
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errs.map((err, idx) =>
                    <li key={`err-${idx}`}>
                        {err}
                    </li>
                )};
            </ul>
        );
    };

    render() {

        return (

        <div className="d1">
            <article className="a1">
                    <div className="d3">
                        <h1 className="insta-logo">Instasham
                        </h1>
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <label className="username-field">
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                    className="login-username"
                                />
                            </label>
                            <br/>
                            <label className="pw-field">
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    className="login-password"
                                />
                            </label>
                            <br/>
                            <input className="login-submit" type="submit" value={this.props.formType} />
                        </form>

                        <div className="switch-form">
                            Don't have an account? {this.props.navLink}
                        </div>
                    </div>

            </article>
        </div>
   
        );
    };

};

export default LoginSessionForm;