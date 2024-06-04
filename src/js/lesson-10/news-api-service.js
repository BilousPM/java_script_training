import axios from 'axios';
const API_KEY = 'a084699e34654c649a85877972cf0cce';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    'X-Api-Key': API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    // потрибно доопрацювати відео axios 1.33
    // return axios.get(url, options).then(({ articles }) => {
    //   this.page += 1;
    //   return articles;
    // });

    return fetch(url, options)
      .then(respons => respons.json())
      .then(({ articles }) => {
        this.page += 1;
        return articles;
      });
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
