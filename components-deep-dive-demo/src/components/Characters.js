import { useEffect, useState } from "react";

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(result => {
            setCharacters(result.results);
        });

    }, []);

    return (
        <ul>
            {!characters.length && <li>Loading...</li>}
            {characters.map(person => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ul>
    );
}



