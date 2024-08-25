const API_KEY = "154b4dd8f3cc4dc79b4271d502bb1722";
const url = "https://newsapi.org/v2/everything?q="
window.addEventListener('load',()=>fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data =await res.json();
    bindData(data.articles);
    console.log(data);
}
function bindData(articles){
    const cardContainer = document.getElementById("card-container");
    const newsCardTemplate = document.getElementById("template-news-card");
    cardContainer.innerHTML ="";
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardContainer.appendChild(cardClone);
    });
}
function fillDataInCard(cardClone,article){
    const newsImg= cardClone.querySelector('#news-img');
    const newsTitle= cardClone.querySelector('#news-title');
    const newsSource= cardClone.querySelector('#news-source');
    const newsDesc= cardClone.querySelector('#news-desc');
    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    
    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name} . ${date}`;
    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    })
}
const links = document.querySelectorAll("li");
links.forEach(link =>{
    link.addEventListener("click",(event)=>{
        const clickEvent = event.target;
        console.log(event);
        fetchNews(clickEvent.id);
    }
    )
});
const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');
searchButton.addEventListener('click',()=>{
    const searchQuery = searchText.value.trim();
    console.log(searchQuery)
    if(searchQuery.length === 0) return;
    fetchNews(searchQuery);
})
