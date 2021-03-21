import notification from '../notification';
import setting from '../settings/index.js';

const {errorNotif} = notification;
const { BASE_URL, API_KEY } = setting;

const api = {
  fetchImages(page = '', searchKey = '') {
    const url = `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${page}&per_page=12&key=${API_KEY}`;

    return fetch(url).then(rawData => {if(rawData.ok)  return rawData.json()}).catch(() => errorNotif());
  },
};

export default api;