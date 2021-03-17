import React from 'react';

const Book = ({title, author, publicationDate}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h3>{publicationDate}</h3>
        </div>
    )
}

export default Book