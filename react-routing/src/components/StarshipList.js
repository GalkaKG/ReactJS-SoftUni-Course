import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const StarshipList = () => {
    const [starships, setStarship] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
            .then(res => res.json())
            .then(result => {
                setStarship(result.results);
            })
    }, [])

    return (
        <>
        <h3>Starships</h3>
        <ul>
            {starships.map((x, i) => <li><Link key={x.name} to={`/starships/${i + 1}`}>{x.name} </Link></li> )}
        </ul>
        </>
    )
}

export default StarshipList;