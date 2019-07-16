import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';


class PostCommentIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchComments(); 
    }
    

    render() {
        const comments = this.props.comments.map(comment => {
            if( comment.post_id === this.props.post_id ){
                return (
                    <li key={comment.id}>
                        <span>{comment.user_id}</span>
                        <p>{comment.comment_body}</p>
                    </li>
                )
            };

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