import React from 'react';

function UserCard(props) {
    return (
        <div className='Card'>
            <h2>{props.user.login}</h2>
            <img src='../../sponge.png' alt='pic'/>
            <p>{props.user.url}</p>
            <div>
                <h2 className='total'>Followers:</h2>
                {props.followers.map(follower => (
                    <div key={follower.id}>{follower.login}</div>
                ))}
            </div>
        </div>
    );
}

export default UserCard;