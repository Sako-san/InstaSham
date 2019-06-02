import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';

const mapStateToProps = ({ session, entities: {users}}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout().then( () => this.props.history.push('/login')))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);