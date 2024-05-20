import axios from "axios";


// json-server --watch db.json

export const api = axios.create({
    baseURL: "https://api-db-json-products.vercel.app/"

    
    
});

// Função para buscar os produtos
async function fetchProducts() {
    const products = [];
    for (let i = 1; i <= 15; i++) {
        try {
            // Buscar o produto usando a baseURL original
            const response = await api.get(`/products/${i}`);
            const product = response.data;

            // Agora que temos os dados básicos do produto, buscar a descrição em outra URL
            const descriptionResponse = await axios.get(`https://loading-tech.vercel.app/products/${i}`);
            // https://loading-tech.vercel.app/products/1
            product.description = descriptionResponse.data; // Adicionar a descrição ao objeto do produto

            products.push(product);
        } catch (error) {
            console.error(`Erro ao buscar o produto com ID ${i}:`);
        }
    }
    return products;
}

// Exemplo de como usar a função fetchProducts
fetchProducts();