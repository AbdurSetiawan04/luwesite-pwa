import CONFIG from './config';

const API_ENDPOINT = {
  Home: `${CONFIG.BASE_URL}list`,
  Detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  Picture: (id) => `${CONFIG.BASE_URL}/images/medium${id}`,
  Review: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
