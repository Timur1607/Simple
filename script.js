import {data} from "./data.js";

let burger = document.querySelectorAll('.burger')
console.log(burger);

let burgerOpen = document.querySelector('#burger-open')
let burgerClose = document.querySelector('#burger-close')
let navWindow = document.querySelector('.burger-window')
let burgerLinks = document.querySelectorAll('.burgerLinks')

let site = document.querySelector('body')

let search = document.querySelectorAll('.nav-nav__search_el')
let closeSearch = document.querySelectorAll('.search-input__close')

let position__y = 0

window.addEventListener('scroll', function() {
  position__y = window.scrollY;
  navWindow.style.top = `${position__y}px`
});


function Burger(){
    for(let el of burger){
        el.classList.toggle('action')
        if(el.classList.length === 2){
            el.children[1].style.opacity = '0'

            el.children[0].style.top = '14px'
            el.children[0].style.rotate = '45deg'

            el.children[2].style.top = '14px'
            el.children[2].style.rotate = '-45deg'

            navWindow.style.left = '0'

            site.style.overflow = 'hidden'
        } else if(el.classList.length === 1){
            el.children[1].style.opacity = '1'

            el.children[0].style.top = '5px'
            el.children[0].style.rotate = '0deg'

            el.children[2].style.top = '23px'
            el.children[2].style.rotate = '0deg'

            navWindow.style.left = '-100%'

            site.style.overflow = 'auto'
        }
    }
    
}

function Search(el, check = 0){
    if(check === 0){
        let open = el.currentTarget.parentElement.children[1]
        window.innerWidth <= 620 ? open.style.width = '146px' : open.style.width = '259px'
        
    } else if(check === 1){
        let close = el.currentTarget.parentElement
        close.style.width = '0'
    }
}
burgerOpen.addEventListener('click', () => Burger())
burgerClose.addEventListener('click', () => Burger())

for(let el of search){
    el.addEventListener('click', (el)=> Search(el))
}
for(let el of closeSearch){
    el.addEventListener('click', (el)=> Search(el, 1))
}
for(let el of burgerLinks){
    el.addEventListener('click', ()=> Burger())
}



let viewArticles = document.querySelector(".view-articles")
for(let i = 0; i <= 2; i++){
    let check = i
    
    let viewArticle = document.createElement('article')
    viewArticle.classList.add('view-article')
    viewArticle.innerHTML=`
        <span class="view-article__span"></span>
        <div class="view-article-content">
            <img class="view-article__img" src="./img/view/viewEx${check+1}.png" alt="article">
            <div class="view-article__text">
                <h3 class="view-article__text_h3">V.${check+1}</h3>
                <p class="view-article__text_p">Результат вашего обучения</p>
            </div>
        </div>
    `
    viewArticles.appendChild(viewArticle)
}

let itemsContent = document.querySelector('.items-content')
for(let el of data.items){
    let article = document.createElement('article')
    article.classList.add('items-article')

    article.innerHTML = `
        <img class="items-article__img" src="${el.img}" alt="item img">
        <h3 class="items-article__name">${el.name}</h3>
        <p class="items-article__amount">Тираж: от ${el.amount} штук</p>
        <p class="items-article__description">${el.description}</p>
        <a class="items-article__link" href="#">
            <p class="items-article__link_text">Подробнее</p>
            <svg class="items-article__link_img" xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                <path d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z" fill="#7875FE"/>
            </svg>
        </a>
    `
    itemsContent.appendChild(article)
}

let companiesContent = document.querySelector('.companies-content')
for(let el of data.companies){
    let article = document.createElement('article')
    article.classList.add('companies-article')
    article.innerHTML = `
        <img class="companies-article__img" src="${el.img}" alt="company logo">
    `

    companiesContent.appendChild(article)
}