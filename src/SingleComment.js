import React from 'react';


const SingleComment = (props) => {
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="No File" src={props.image} />
            </a>
            <div className="content">
                <a href="/" className="author">
                Anup Niraula
                </a>
                <div className="metadata">
                    <span className="date">
                        At 5:00 PM
                    </span>
                </div>
                <div className="text">
                    Hey whats up!
                </div>
            </div>
        </div>
    )
}


export default SingleComment;