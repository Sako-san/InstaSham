import { connect } from 'react-redux';
import React from 'react';
import { createComment } from '../../actions/comment_actions';

class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();

        const commentData = this.state;
        commentData.comment_body = this.state.comment_body;
        commentData.user_id = this.props.user_id;
        commentData.post_id = this.props.post_id;

        this.props.createComment(commentData);
        this.setState({ comment: {
            comment_body: '',
            post_id: '',
            user_id: ''
        }});

    };

    render() {
        return (
            <>
                <form className='comment-box' onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.comment_body}
                    onChange={this.update('comment_body')}
                    placeholder='Add Comment...'/>
                    <button>Post</button>
                </form>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        comment: {
            comment_body: '',
            user_id: '',
            post_id: ''
        }
    };
};

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
