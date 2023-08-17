import axios from 'axios';
const url = `https://api.themoviedb.org/3`;
const key = `0c8267feb1ee05e15cfc71672867e1c1`;
export const getAllMovies = async (page) => {
    const data = await axios.get(`${url}/movie/popular?api_key=${key}&language=ar&page=${page}`)
    return data.data;
}
export const searchAllMovies = async (text) => {
    const data = await axios.get(`${url}/search/movie?api_key=${key}&query=${text}`)
    return data.data;
}
export const getMovie = async (id) => {
    const data = await axios.get(`${url}/movie/${id}?api_key=${key}&language=ar`)
    return data.data;
}
