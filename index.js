fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => newsCategory(data.data.news_category))

const newsCategory = category =>{
    const categoryList = document.getElementById('category-list')

    const  first =   document.getElementById('first')
    first.innerText = category[0].category_name
    const  second =   document.getElementById('second')
    second.innerText = category[1].category_name
    const  third =   document.getElementById('rd3')
    third.innerText = category[2].category_name
    const  forth =   document.getElementById('th4')
    forth.innerText = category[3].category_name
    const  fifth =   document.getElementById('th5')
    fifth.innerText = category[4].category_name
    const  sixth =   document.getElementById('th6')
    sixth.innerText = category[5].category_name
    const  seventh =   document.getElementById('th7')
    seventh.innerText = category[6].category_name
    const  eighth =   document.getElementById('th8')
    eighth.innerText = category[7].category_name

        console.log(category)
    // category.forEach( news => {
    //         const addCategory = document.createElement('div')
    //         addCategory.classList.add('cat')
    //         addCategory.innerHTML = `
    //             <h6>${news.category_name}</h6>
    //         `
    //         categoryList.appendChild(addCategory)
    //         console.log(news)
    // })
    
}

fetch('https://openapi.programming-hero.com/api/news/category/01')
.then(res => res.json())
.then(data => cardDataLoad(data.data))

const cardDataLoad = cardData =>{
            const viewCard = document.getElementById('cards')
            // console.log(cardData)
        cardData.forEach(newsOnCard =>{
                const viewCardData = document.createElement('div') 
                viewCardData.innerHTML = `
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
                `
            viewCard.appendChild(viewCardData)
                console.log(newsOnCard)
        })
        
}
