import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '43940566-be61c32425694de8ee5c8e1ee';

export const perPage = 12;

export const getImages = async (newQuery, page) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${newQuery}}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
    return response.data;
};

export const normalizedHits = hits =>
  hits.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });

