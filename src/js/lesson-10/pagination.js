import NewsApiService from './news-api-service';
import LoadMoreBtn from './load-mor-Btn';

const refs = {
  articleContainerRef: document.querySelector('.js-articles-container'),
  newsFormRef: document.querySelector('.js-form'),
  // loadMorRef: document.querySelector('.js-load-mor'),
};

const newsApiSwrvice = new NewsApiService();
const loadMorButton = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

console.log(loadMorButton);

refs.newsFormRef.addEventListener('submit', hendleSearchFormClick);
// loadMorButton.refs.button.addEventListener('click', hendleloadMorClick);

function hendleSearchFormClick(e) {
  e.preventDefault();
  newsApiSwrvice.query = e.currentTarget.elements.queryNews.value;

  if (newsApiSwrvice.query === '') {
    return alert('enter the correct request');
  }

  newsApiSwrvice.resetPage();
  loadMorButton.show();

  clearArticleContainer();

  newsApiSwrvice.fetchArticles().then(articles => {
    const markup = appendArticleMarkup(articles);
    refs.articleContainerRef.insertAdjacentHTML('beforeend', markup);
  });
}

function hendleloadMorClick() {
  newsApiSwrvice.fetchArticles().then(articles => {
    const markup = appendArticleMarkup(articles);
    refs.articleContainerRef.insertAdjacentHTML('beforeend', markup);
  });
}

function appendArticleMarkup(articles) {
  return articles
    .map(article => {
      return `<li>
  <article>
  <a href="${article.url}" target="_blank">
    <h2>${article.title}</h2>
    <img src="${article.urlToImage}" alt="something" width="200" />
  </a>
    <p>${article.author}</p>
    <p>${article.description}</p>
  </article>
</li>`;
    })
    .join('');
}

function clearArticleContainer() {
  refs.articleContainerRef.innerHTML = '';
}
