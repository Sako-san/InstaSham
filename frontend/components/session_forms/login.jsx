import React from 'react';
import { Link } from 'react-router-dom';

// class LoginSessionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = {
//             user: {
//                 username: '',
//                 password: '',
//             }
//         };
//     }

//     update(field) {
//         return (e) => {
//             this.setState({ [field]: e.target.value });
//         };
//     };

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = merge({}, this.state);
//         this.props.processForm(user);
//     };

//     renderErrors() {
//         return (
//             <ul>
//                 {this.props.errs.map((err, idx) =>
//                     <li key={`err-${idx}`}>
//                         {err}
//                     </li>
//                 )};
//             </ul>
//         );
//     };

//     render() {

//         return (
//             <div>
//                 <h1 className="insta-logo">Instasham
//                 </h1>
//                 <h3>{this.props.formType}</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         <input
//                             type="text"
//                             value={this.state.username}
//                             onChange={this.update('username')}
//                             placeholder="Username"
//                             className="login-username"
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="password"
//                             value={this.state.password}
//                             onChange={this.update('password')}
//                             placeholder="Password"
//                             className="login-password"
//                         />
//                     </label>
//                     <input type="submit" value={this.props.formType} />
//                 </form>

//                 <div>
//                     Don't have an account? {this.props.navLink}
//                 </div>
//             </div>
//         );
//     };

// };