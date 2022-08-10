import axios from 'axios'

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/api'

const api = axios.create({
  baseURL: BASE_URL
});

export default api