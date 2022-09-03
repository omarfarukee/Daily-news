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
                viewCardData.classList.add('col')
                viewCardData.innerHTML = `
                <div class="card h-100">
                    <img src="${newsOnCard.image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${newsOnCard.title}</h5>
                    <p class="card-text">${newsOnCard.details}</p>
                     <div class="d-flex justify-content-between">
                        <div class=' d-flex pt-2'>
                            <img src="${newsOnCard.author.img}" class="" alt="..." style="height:45px; width:44px;border-radius: 50%;
                            ">
                            <div>
                            <p class='ms-2'>${newsOnCard.author.name} <br> ${newsOnCard.author.published_date}</p>
                            
                            </div>
                        </div >
                            <h6 class="pt-4">1.3m</h6>
                            <button class='btn btn-info' style="height:50px;"> see more </button>
                        </div>
                    </div> 
                </div>   
                `
            viewCard.appendChild(viewCardData)
                console.log(newsOnCard)
        })
        
}
