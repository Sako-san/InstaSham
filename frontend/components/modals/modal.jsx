import React from 'react';
import CreatePost from '../posts/create_post_form'
import PostShow from '../posts/post_show';

const Modal = ({ closeModal, modal}) => {
    if (!modal) {
        return null;
    };

    let component;

    switch( modal.type ) {
        case 'createPost':
            component = <CreatePost/>;
            break;
        case 'postShow':
            component = <PostShow/>;
            break;
        default:
            return null;
    };

    return (
        <>
            <div className='modal-backdrop' onClick={closeModal}>
                <div className='modal-body' onClick={}>
                    {component}
                </div>
            </div>
        </>
    );
};

export default Modal;
