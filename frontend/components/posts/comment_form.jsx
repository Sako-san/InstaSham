import React from 'react';
import { withRouter } from 'react-router-dom';
import  CommentContainer from './comment_container';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();


    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    render() {
        console.log(this.props)
        return (
            <>
            <span> Comment goes here! </span>
            <form className="comment-form">
                <input type="textarea" className='comment-input'/>
                <button >Post</button>
            </form>
            </>
        )
    }
}

export default withRouter(CreateCommentForm);