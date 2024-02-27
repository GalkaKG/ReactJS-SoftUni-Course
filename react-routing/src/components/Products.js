import { useParams } from "react-router-dom";

export default function Products() {
    // const params = useParams();
    const { productId } = useParams();

    return (
        <>
            <h2>
                Product Page
            </h2>

            <h3>
                {/* Product {params.productId} Specification */}
                Product {productId} Specification
            </h3>
        </>
    )
}