fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(res => console.log(res.data.news_category))

const newsCategory = news =>{
    
}