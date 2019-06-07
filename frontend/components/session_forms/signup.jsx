import React from 'react';
import {merge} from 'lodash'
import { Link } from 'react-router-dom';

class SignupSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
                email: '',
                name: '',
                username: '',
                password: '',
        };
    };




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
        if(this.props.errs.length > 1){
            return(
                "Field(s) can't be blank."
            )
        };
    };

    render() {  

    const { 
        email, 
        name,
        password,
        username
    } = this.state;
    
    return (
            <div className='container'>
            
            <img className='imgurl' src={window.splashImage}/>

            <article className="signup-formbox">
                <h1 className="insta-logo-signup">Instasham
                </h1>
                <h4 className="sign-up-blurb">Sign up to see photos and videos from your friends.
                </h4>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="signup-email"
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Full Name"
                            className="signup-name"
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                            className="signup-username"
                        />
                    </label>
                    <br/>
                    <label >
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="signup-pw"
                        />
                    </label>
                    <br/>
                    <button className="submit-signup" type="submit"> {this.props.formType} </button>
                        <div className="errors"> {this.renderErrors()} </div> 
                </form>

                <div className="switch-form">
                    <div className="account-login">
                        <span> Have an account? </span>
                        <span> {this.props.navLink} </span>
                    </div>
                </div>
                
                </article>


            </div>
        );
    };

};



export default SignupSessionForm;