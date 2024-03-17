import CharacterItem from "./CharacterItem";

const CharacterList = ({
    characters
}) => {
    return (
        <ul>
            <li>
                {characters.map(x => <CharacterItem key={x.name} name={x.name} />)}
            </li>
        </ul>
    );
};

export default CharacterList;