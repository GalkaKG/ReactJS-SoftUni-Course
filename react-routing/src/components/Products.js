import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Products() {
    const [starship, setStarship] = useState({});
    // const params = useParams();
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${productId}/`)
        .then(res => res.json())
        .then(result => {
            setStarship(result);
        })
    });

    const nextProductHandler = () => {
        // TODO: Redirect to next product
    }

    return (
        <>
            <h2>
                Product Page
            </h2>

            <h3>
                {/* Product {params.productId} Specification */}
                Product {productId} Specification
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