import React from 'react';
import { withRouter } from 'react-router-dom';

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.post;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    render() {
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Location
                        <br/>
                    <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('location')} />
                    </label>
                        <br/>
                    <label>Body
                        <br/>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')} />
                    </label>
                        <br/>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default CreatePostForm;