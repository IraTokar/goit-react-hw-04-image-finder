import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '43940566-be61c32425694de8ee5c8e1ee';

export const perPage = 12;

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

export const getImages = async (query, page) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${query}}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
    return response.data;
};

