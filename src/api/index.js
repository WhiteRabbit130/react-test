import { apiGet } from "./baseApi";

async function getProducts() {
    const response = await apiGet("product?pubKey=75cfc28c-e623-4cc4-a8bb-b6a27724aa3a");

    return response.data;
}

export { getProducts };