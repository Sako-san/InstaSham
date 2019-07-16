import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import { cpus } from 'os';

class PostCommentIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchComments(); 
    }
    

    render() {
        const comments = this.props.comments.map(comment => {
            return (
                <li key={comment.id}>
                    <span>{comment.user_id}</span>
                    <p>{comment.comment_body}</p>
                </li>
            )
        });

        return (
            <ul>
               {comments}
            </ul>
        )
    }
}



const mapStateToProps = (state) => {
    return ({
        comments: Object.keys(state.entities.comments).map( id => state.entities.comments[id])
    })
};

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentIndex);