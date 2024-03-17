import { useState } from "react";
import CharacterItem from "./CharacterItem";

const CharacterList = ({
    characters
}) => {
    const [favorite, setFavorite] = useState('');

    const selectFavorite = (name) => {
        setFavorite(name);
    }

    return (
        <>
            <h2>{favorite || 'Select Favorite'}</h2>
            <ul>
                <li>
                    {characters.map(x => 
                        <CharacterItem 
                            key={x.name} 
                            name={x.name} 
                            onClick={selectFavorite}
                        />)}
                </li>
            </ul>
        </>
    );
};

export default CharacterList;