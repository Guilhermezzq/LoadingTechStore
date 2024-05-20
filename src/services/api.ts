
// import axios from "axios";

// // json-server --watch db.json

// export const api = axios.create({
//     baseURL: "https://api-db-json-products.vercel.app/"

    
    
// });

import axios from "axios";


// json-server --watch db.json


// Defina a instância axios com a baseURL
const api = axios.create({
    baseURL: "https://api-db-json-products.vercel.app/"
});

// Exporte a instância api


export async function fetchProducts() {
    try {
        const products = [];
        for (let i = 1; i <= 15; i++) {
            const response = await api.get(`/products/${i}`); // Use api.get com a baseURL já definida
            const product = response.data;

            // Agora que temos os dados básicos do produto, buscar a descrição em outra URL
            const descriptionResponse = await api.get(`https://loading-tech.vercel.app/products/${i}`);
            product.description = descriptionResponse.data; // Adicionar a descrição ao objeto do produto

            products.push(product);
        }
        return products;
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        throw error;
    }
}

export { api };

