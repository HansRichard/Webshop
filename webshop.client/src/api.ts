import { ProductData } from './types';

const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

export const submitProductData = async (productData: ProductData) => {
    const formData = new FormData();

    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('price', productData.price.toString());

    if (productData.image) {
        const imageBase64 = await toBase64(productData.image); // Convert to Base64
        formData.append('image', imageBase64);
    }

    const response = await fetch('api/product/create', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Failed to submit product. Status: ${response.status}`);
    }

    return response;
};

