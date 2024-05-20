// import axios from "axios";

// // json-server --watch db.json

// export const api = axios.create({
//     baseURL: "https://api-db-json-products.vercel.app/"

    
    
// });

// // Função para buscar os produtos
// async function fetchProducts() {
//     const productsBaseURL = "https://api-db-json-products.vercel.app/"; // Base URL específica para os produtos
//     const products = [];
//     for (let i = 1; i <= 15; i++) {
//         try {
//             // Buscar o produto usando a baseURL específica para os produtos
//             const response = await axios.get(`${productsBaseURL}products/${i}`);
//             const product = response.data;

//             // Agora que temos os dados básicos do produto, buscar a descrição em outra URL
//             const descriptionResponse = await axios.get(`https://loading-tech.vercel.app/products/${i}`);
//             product.description = descriptionResponse.data; // Adicionar a descrição ao objeto do produto

//             products.push(product);
//         } catch (error) {
//             console.error(`Erro ao buscar o produto com ID ${i}:` , error);
//         }
//     }
//     return products;
// }

// // Exemplo de como usar a função fetchProducts
// fetchProducts()




import axios from 'axios';

// Crie a instância axios
const api = axios.create({
    baseURL: "https://api-db-json-products.vercel.app/"
});

async function fetchProducts() {
    const productsBaseURL = "https://api-db-json-products.vercel.app/"; // Base URL específica para os produtos
    const products = [];

    try {
        // Criar um array de promises para buscar todos os produtos
        const productPromises = [];
        for (let i = 1; i <= 15; i++) {
            productPromises.push(api.get(`${productsBaseURL}products/${i}`)); // Use api.get em vez de axios.get
        }

        // Esperar que todas as chamadas sejam concluídas
        const responses = await Promise.all(productPromises);

        // Processar as respostas para adicionar descrições aos produtos
        for (const response of responses) {
            const product = response.data;
            const descriptionResponse = await api.get(`https://loading-tech.vercel.app/products/${product.id}`); // Use api.get em vez de axios.get
            product.description = descriptionResponse.data;
            products.push(product);
        }
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        throw error;
    }

    return products;
}

// Exporte a instância axios antes de usá-la
export { api, fetchProducts };

// Agora você pode chamar fetchProducts() onde precisar buscar os produtos
fetchProducts().then(products => {
    console.log(products);
}).catch(error => {
    console.error('Erro ao buscar e processar os produtos:', error);
});
