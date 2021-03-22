import React from 'react';
import './../../css/Book.css'

const Book = ({title, author, publicationDate, genre, audience}) => {
    return (
        <div className="book">
            <h2>{title}</h2>
            <h3><span>Autor: </span>{author}</h3>
            <h3><span>Rok publikacji: </span>{publicationDate}</h3>
            <h3><span>Gatunek: </span>{genre}</h3>
            <h3><span>Dla: </span>{audience}</h3>
        </div>
    )
}

export default Book