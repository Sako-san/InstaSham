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

    componentWillUnmount() {
        this.props.clearErrors();
    };



    renderErrors() {
        if (this.props.errs.length >= 1) {
          return ('Invalid username or password')
        };
    };

    render() {
        const { username, password } = this.state;
        const isEnabled = username.length > 0 && password.length > 0;

        return (
            <article className="a1">
                    <div className="d2">
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
                            <button disabled={!isEnabled} className="login-submit" type="submit" >{this.props.formType}</button>
                        </form>
                        <div className='errors'> {this.renderErrors()} </div>

                        <div className='demo-user'>
                            <Link to='/'>Log in with Demo</Link>
                        </div>
                </div>

                    <div className="switch-form">
                        <div className="account-signup">
                            <span> Don't have an account? </span>
                            <span> {this.props.navLink} </span>
                        </div>
                    </div>
            </article>
        );
    };

};

export default LoginSessionForm;