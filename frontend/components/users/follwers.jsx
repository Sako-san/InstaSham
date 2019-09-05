import React from 'react';
import { connect } from 'react-redux';


class Followers extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        
    }
}

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
};

export default connect(mapStateToProps, null)(Followers);