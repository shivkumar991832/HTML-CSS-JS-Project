const API_KEY = "c8ce867e69ea4b37a8810cbadd415735";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("India"));
async function fetchNews (query) {
    // string template
    // fetch is a asyncronous function
    const res=await fetch(`${url}${query}&apikey=${API_KEY}`);
    // now data converting into Json Formate
    const data = await res.json();
    console.log(data);

    // BINDING DATA
    bindData(data.articles);
}
function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container')
    const newsCardTemplate = document.getElementById('template-news-card')
    // container empty
    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);
    });

}

function fillDataInCard(cardClone, article) {
    const newsImg =cardClone.querySelector('#news-img')
    const newsTitle =cardClone.querySelector('#news-title')
    const newsSource =cardClone.querySelector('#news-source')
    const newsDesc =cardClone.querySelector('#news-desc')

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US" , {
        timeZone:"Asia/jakarta"
    });
   
    newsSource.innerHTML = `${article.source.name} . ${date}`;
}