import React from "react";
import { Link } from "@reach/router"
import Book from "./Book/Book.js"

const Inventory = ({books}) => {

    const bookComponents = books.map(book => {
        return (
            <Book
                key={book.title}
                title={book.title}
                author={book.author}
                publicationDate={book.publicationDate}
                genre={book.genre}
                audience={book.audience}
            />
        )
    })

    return(
        <>
            {books.length === 0 ? <h3>Brak książek</h3> : bookComponents}
            <Link to="/admin">Zarządzaj inwentarzem</Link>
        </>
    )
    

    
}

export default Inventory