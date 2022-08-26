import { api } from './api';

const tagService = {
  getList({
    page = 1,
    per_page = 100
  } = {}) {
    return api.call().get('/wp/v2/tags', {
      params: {
        page,
        per_page
      }
    });
  }
}

export default tagService;