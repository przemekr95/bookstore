import React, { useState, useEffect } from 'react';
import useDropdown from '../useDropdown';


const Add = () =>{ 

    const [author, setAuthor] = useState("");
    // const [genre, setGenre] = useState("");
    // const [audience, setAudience] = useState("");

    const genres = ["Fantastyka", "Horror", "Kryminał"];
    const audiences =["Dzieci", "Młodzież", "Dorośli"];

    const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
    const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

    useEffect(()=>{
        console.log("test")
    },[])

    return (
        <div>
            <form>
                <label htmlFor="author">
                    Autor 
                    <input id="author" value={author} placeholder="Autor" onChange={event => setAuthor(event.target.value)}/>
                </label>
                <GenreDropdown/>
                <AudienceDropdown/>
                <button>Dodaj</button>
            </form>
        </div>
    )
}

export default Add;