import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.demoUser = this.demoUser.bind(this);
<<<<<<< HEAD

=======
>>>>>>> auth
        this.state = {
                username: '',
                password: '',
        };
    }

    demoUser(e) {
        e.preventDefault();
        this.props.processForm({
            user: {
                username: 'demo',
                password: '123456'
            }
        });

    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    demoUser(e) {
        e.preventDefault();
        let user = { username: 'demo', password: '123456'}
        this.props.processForm( user );
    };

    handleSubmit(e) {
        e.preventDefault();
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
<<<<<<< HEAD
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
                            <input className="login-submit" type="submit" value={this.props.formType} />
                        </form>
                    <div className='demo-user'>
                        <button onClick={this.DemoUser}>Log in with Demo</button>
                    </div>
=======
        <article className='a1'>
            <div className="aside-1">
                    <img className='imgurl' src={window.splashImage} />
            </div>

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
                <button className='demo-login' onClick={this.demoUser}>Log in with Demo</button>
                </div>
            

            <div className="switch-form">
                <div className="account-signup">
                    <span> Don't have an account? </span>
                    <span> {this.props.navLink} </span>
>>>>>>> auth
                </div>
            </div>

            </div>
        </article>
        );
    };

};

export default withRouter(LoginSessionForm);