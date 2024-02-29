import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Starship() {
    const [starship, setStarship] = useState({});
    // const params = useParams();
    const { starshipId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}/`)
        .then(res => res.json())
        .then(result => {
            setStarship(result);
        })
        .catch(() => {
            navigate('/not-found');
        })
    }, [starshipId]);

    const nextProductHandler = () => {
        navigate(`/starships/${Number(starshipId) + 1}`, {replace: false})
    }

    return (
        <>
            <h2>
                Starships Page
            </h2>

            <h3>
                {/* Product {params.starshipId} Specification */}
                Starship {starshipId} Specification
            </h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>

            <button onClick={nextProductHandler}>Next</button>
        </>
    )
}