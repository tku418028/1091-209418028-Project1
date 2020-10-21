import React from 'react';

const Card28 = ({ id, name, content }) => {
    return (
        <div>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
                <h2>{name}</h2>
                <p>{content}</p>
        </div>
    );
};

export default Card28;