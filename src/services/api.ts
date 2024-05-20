import axios from "axios";


// json-server --watch db.json

export const api = axios.create({
    baseURL: "https://api-db-json-products.vercel.app/"

    
    
});

export async function fetchProducts() {
    const baseURL = "https://api-db-json-products.vercel.app/";
    const products = [];
    for (let i = 1; i <= 15; i++) {
        try {
            const response = await axios.get(`${baseURL}products/${i}`);
            products.push(response.data);
        } catch (error) {
            console.error(`Erro ao buscar o produto com ID ${i}`);
        }
    }
    return products;
}

// Exemplo de como usar a função fetchProducts
fetchProducts()
    .then(products => {
        console.log('Produtos:', products);
    })
    .catch(error => {
        console.error('Erro ao buscar produtos:', error);
    });