import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getPostsPage = async(pageParam = 1, option)