import { api } from './api';

const categoryService = {
  getById(id) {
    const response = api.call().get('/wp/v2/categories/' + id, {
      params: {
        lang: 'vi'
      }
    });
    return response;
  },
}

export default categoryService;