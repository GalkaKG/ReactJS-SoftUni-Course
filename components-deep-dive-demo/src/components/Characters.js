import { useState } from "react";

export const CharacterList = () => {
    const [characters, setCharacters] = useState();

    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(result => {
            setCharacters(result);
        });

    return (
        <ul>
            <li>{characters?.name || 'Loading...'}</li>
        </ul>
    );
}