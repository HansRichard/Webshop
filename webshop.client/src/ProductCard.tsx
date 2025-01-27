import React from "react";
import { Product } from "./Product";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const addToBasket = () => {
        
    };

    return (
        <div style={styles.card}>
            <img
                src={`data:image/jpeg;base64,${product.image}`}
                alt={product.name}
                style={styles.image}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <button onClick={() => addToBasket()}>
                🛒
            </button>
        </div>
    );
};


const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        width: "200px",
        textAlign: "center" as const,
        margin: "10px",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
    },
};
export default ProductCard;
