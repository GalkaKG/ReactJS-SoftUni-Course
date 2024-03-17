const CharacterItem = ({
    name,
    onClick
}) => {
    return (
        <li onClick={() => onClick(name)}>{name}</li>
    );
}

export default CharacterItem;