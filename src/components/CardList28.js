import React from 'react';
import Card28 from './Card28';

const CardList28 = ({ Demo28 }) => {
    return (
        <div>
            {
            Demo28.map((item, index) => {
                return (
                    <Card28
                        key={index}
                        id={item.id}
                        name={item.name}
                        content={item.content}
                    />
                );
            })
            }
        </div>
    );
};

export default CardList28;