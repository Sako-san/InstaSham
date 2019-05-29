import React from 'react-router-dom';
import { Link } from 'react-router-dom';

// class SignupSessionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = {
//             user: {
//                 email: '',
//                 name: '',
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
//                 <h2 className="sign-up-blurb">Sign up to see photos from your friends.
//                 </h2>
//                 <h3>{this.props.formType}</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         <input
//                             type="text"
//                             value={this.state.email}
//                             onChange={this.update('email')}
//                             placeholder="Email"
//                             className="signup-email"
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="text"
//                             value={this.state.name}
//                             onChange={this.update('name')}
//                             placeholder="Full Name"
//                             className="signup-name"
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="text"
//                             value={this.state.username}
//                             onChange={this.update('username')}
//                             placeholder="Username"
//                             className="signup-username"
//                         />
//                     </label>
//                     <label>
//                         <input
//                             type="password"
//                             value={this.state.password}
//                             onChange={this.update('password')}
//                             placeholder="Password"
//                             className="signup-password"
//                         />
//                     </label>
//                     <input type="submit" value={this.props.formType} />
//                 </form>

//                 <div>
//                     Have an account? {this.props.navLink}
//                 </div>
//             </div>
//         );
//     };

// };