import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link, Route, Routes } from "react-router-dom";

export default function Starship() {
    const [starship, setStarship] = useState({});
    const [film, setFilm] = useState({});
    // const params = useParams();
    const { starshipId, filmId } = useParams();
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location);

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}/`)
        .then(res => res.json())
        .then(result => {
            setStarship(result);
        })
        .catch(() => {
            navigate('/not-found');
        })
    }, [starshipId, navigate]);

    useEffect(() => {
        if (starship.films?.length > 0 && filmId) {
            const fId = Number(filmId) - 1;
            const filmUrl = starship.films[fId]
            fetch(filmUrl)
                .then(res => res.json())
                .then(result => {
                    setFilm(result);
                })
        }
    }, [starship, filmId])

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

            <h3>Movies</h3>
            <nav>
                <ul>
                    {starship.films?.map((x, i) => 
                        <li key={x}><Link to={`films/${i + 1}`}>Film {i + 1}</Link></li>
                    )}
                </ul>
            </nav>

            <section>
                <Routes>
                    <Route path="films/:filmId" element={<h3>{film.title}</h3>} />
                </Routes>
            </section>

            <button onClick={nextProductHandler}>Next</button>
        </>
    )
}