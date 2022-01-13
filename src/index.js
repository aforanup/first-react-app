import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import image1 from './image/abc.jpeg';


const App = () => {
    return(
        <div className="ui comments">
            <UserCard>
                <SingleComment image={image1}/>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)