import { useState } from 'react';
import { ProductData } from './types';
import { submitProductData } from './api';
import './ProductForm.css';

export default function ProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<File | null>(null);

    // Handle the image change event
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const productData: ProductData = {
            name,
            description,
            category,
            price: parseFloat(price),
            image,
        };

        try {
            const response = await submitProductData(productData);
            if (!response.ok) {
                // Handle server errors properly
                const errorText = await response.text();
                const errorData = errorText ? JSON.parse(errorText) : { message: 'Unknown error occurred' };
                alert(`Error creating product: ${errorData.message}`);
            } else {
                alert('Product created successfully!');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Error creating product');
        }
    };

    return (
        <div className="product-form-container">
            <div className="product-form-box">
                <h3>Add Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
