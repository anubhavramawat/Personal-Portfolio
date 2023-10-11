const Toggle=document.querySelector('.toggle_icon');
const navbar=document.querySelector('.menu');
const menuLinks=document.querySelector('.menu_link');
const close=document.querySelector('.close_icon');

Toggle.addEventListener('click',function(){
    console.log("clicked")
    navbar.classList.toggle('active')
})

close.addEventListener('click',function(){
    navbar.classList.remove('active')
})

const arr = Array.from(menuLinks);
arr.forEach((menuLink)=>{
    menuLink.addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
})


function scrollHeader(){
    const header=document.querySelector('#header')
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active')
}
window.addEventListener('scroll',scrollHeader)

// typed effects

const typed=document.querySelector('.typed')

if(typed){
    let typed_strings=typed.getAttribute('data-typed-items')
    typed_strings=typed_strings.split(',')
    new Typed('.typed',{
        strings:typed_strings,
        loop:true,
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000
    })
}

// 
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset;

    sections.forEach(section=>{
        const sectionHeight=section.offsetHeight
        const sectionTop=section.offsetTop - 50;

        let sectionId=section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)


// resume scroll

const pages=document.querySelectorAll('.page')
const resume=document.querySelector('resume')

function resumeActive(){
    const scrollY=window.pageYOffset

    pages.forEach(page=>{
        const sectionHeight=page.offsetHeight
        const sectionTop=page.offsetTop - 50;

        let sectionId=page.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current')
        }
        else{
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current')
        }
    })
}

window.addEventListener('scroll',resumeActive)

// portfolio

let filterItems=document.querySelectorAll('.portfolio_filters li')

function activePortfolio(){
    filterItems.forEach(el => {
        console.log("its you")
        el.classList.remove('filter-active')
        this.classList.add('filter-active')
    })
}

filterItems.forEach(el => {
    el.addEventListener('click',activePortfolio)
})

// mixitup filter portfolio

let mixerPortfolio=mixitup('.portfolio_wrap-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 900
    }
})

// testimonial swiper

let swiper=new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
})

// Services

let modalBtns=document.querySelectorAll('.services_button')
let modalViews=document.querySelectorAll('.services_modal')
let modalClose=document.querySelectorAll('.fa-xmark')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach(el=>{
    el.addEventListener('click', ()=>{
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})