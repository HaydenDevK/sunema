import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4ae7e3c1afba212f2a37c1e33792869c',
    language: 'ko-KR'
  }
})
export const request2 = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4ae7e3c1afba212f2a37c1e33792869c'
  }
})
