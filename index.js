
const loadedCategory = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
try{
    const res = await fetch(url);
    const data = await res.json();
    newsCategory(data.data.news_category);  
}
catch(error){
    console.log(error);
}
}
 loadedCategory()
 const newsCategory = category =>{
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
}

document.getElementById('home').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.add('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/08')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('first').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('second').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/02')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('rd3').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/03')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('th4').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/04')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('th5').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/05')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('th6').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.add('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/06')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('th7').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/07')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

document.getElementById('th8').addEventListener('click', function(){
    const disable = document.getElementById('first')
    disable.classList.remove('home')
    const footer = document.getElementById('footers')
    footer.classList.remove('d-none')
    fetch('https://openapi.programming-hero.com/api/news/category/08')
    .then(res => res.json())
    .then(data => cardDataLoad(data.data))
    loader(true)
})

const loader = Loading => {
    if (Loading) {
        const load = document.getElementById('loader')
        load.classList.remove('d-none')
    }
    else{
        const load = document.getElementById('loader')
        load.classList.add('d-none')
    }
}
 fetch('https://openapi.programming-hero.com/api/news/category/01')
 .then(res => res.json())
 .then(tata =>  cardDataLoad(tata.data));
 

const cardDataLoad = cardData =>{
            const length = cardData.length
            if (length > 0) {
                const items = length +" " + 'News founded based on this category'
                const found= document.getElementById('found')
                found.innerText = items
            }
            else{
                const sorry = 'Sorry!!!! no news found '
                const found= document.getElementById('found')
                found.innerText = sorry
            }
            const viewCard = document.getElementById('cards')
            viewCard.innerHTML = ''
            loader(false)

            cardData.sort((big , small) => {
                return small.total_view - big.total_view;
             });
        cardData.forEach(newsOnCard =>{
                const viewCardData = document.createElement('div') 
                viewCardData.classList.add('col')
                viewCardData.innerHTML = `
                <div class="card h-100 shadow rounded">
                    <img src="${newsOnCard.image_url ? newsOnCard.image_url : 'Did not find'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title title-height">${newsOnCard.title ? newsOnCard.title : 'Did not find'}</h5>
                    <p class="card-text">${newsOnCard.details.slice(0,200) ? newsOnCard.details.slice(0, 87) : 'Did not find'}...</p>
                     <div class="d-flex justify-content-between ">
                        <div class=' d-flex pt-2'>
                            <img id='images' src="${newsOnCard.author.img ? newsOnCard.author.img : 'Did Not find'}" class="" alt="..." style="height:45px; width:44px;border-radius: 50%;
                            ">
                            <div>
                            <p class='ms-2 fw-bold' id='author'>${newsOnCard.author.name ? newsOnCard.author.name : 'Did not find'} <br> ${newsOnCard.author.published_date ? newsOnCard.author.published_date : 'Did not find'}</p>
                            
                            </div>
                        </div >
                            <h6 class="pt-4 eye"><i class="fa-solid fa-eye"></i> ${newsOnCard.total_view ? newsOnCard.total_view : "00"}K</h6>
                            <button class='btn btn-info' id='see-more' style="height:50px;" onclick="loadCardDetailFull('${newsOnCard._id ? newsOnCard._id : 'Did not find'}')" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">Detail <i class="fa-solid fa-book-open-reader"></i></button>
                        </div>
                    </div> 
                </div>
                  
                `
            viewCard.appendChild(viewCardData)
        })
        
}
const loadCardDetailFull = async id =>{
    const urls = `https://openapi.programming-hero.com/api/news/${id}`
    try{
        const res = await fetch(urls);
        const data = await res.json();
        detailsFull(data.data);  
    }
    catch(error){
        console.log(error);
    }
}
    const detailsFull = detail => {
        const titles = document.getElementById('title-modal')
        titles.innerText = detail[0].title
        const detailsModal = document.getElementById('details-modal')
         detailsModal.innerText = detail[0].details
        const picture = document.getElementById('pic')
         picture.innerHTML = `
        <img src="${detail[0].thumbnail_url}" alt="" style="height:90px; width:90px; margin-left:25%;" class='rounded-4'>`
}




