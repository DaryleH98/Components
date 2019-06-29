import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => { //in the child reference the props that is  the object which contains the information that we provided to the parent
    console.log(props); 
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
            <a href="/" className="author">
             {props.author}
            </a>
        <div className="metadata">
            <span className="data">{props.timeAgo}</span>
        </div>
            <div className="text">{props.metaData}</div>
        </div>
        </div>
    ) ;
};

export default CommentDetail;