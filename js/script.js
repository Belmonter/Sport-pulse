// SWIPER SLIDE --------------------------------------------------------------------------------------------------------------------------------

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlidesBounds: true,
    speed: 200,
});

//  TABS --------------------------------------------------------------------------------------------------------------------------------

let tabNavItem = document.querySelectorAll('.catalog__tab');
let tabContentItem = document.querySelectorAll('.catalog__content');
let contentLink = document.querySelectorAll('.catalog-item__link');
let tabCatalogContent = document.querySelectorAll('.catalog-item__content');
let descrContent = document.querySelectorAll('.catalog-item__list');
let descrContentLink = document.querySelectorAll('.catalog-item__back')


tabNavItem.forEach(function (elem) {
    elem.addEventListener('click', activeTab);
})

function activeTab() {
    tabNavItem.forEach(function (elem) {
        elem.classList.remove('catalog__tab_active')
    })
    this.classList.add('catalog__tab_active');
    let tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function (el) {
        if (el.classList.contains(tabName)) {
            el.classList.add('catalog__content_active')
        } else {
            el.classList.remove('catalog__content_active')
        }
    })
}

contentLink.forEach(function (el, i) {
    el.addEventListener('click', function (el) {
        el.preventDefault();
        tabCatalogContent[i].classList.toggle('catalog-item__content_active')
        descrContent[i].classList.toggle('catalog-item__list_active')
    })
})

descrContentLink.forEach(function (el, i) {
    el.addEventListener('click', function (el) {
        el.preventDefault();
        tabCatalogContent[i].classList.toggle('catalog-item__content_active')
        descrContent[i].classList.toggle('catalog-item__list_active')
    })
})


// MODALS -------------------------------------------------------------------------------------------------------------------------------- 


const bacgkround = document.querySelector('.overlay')
const modalConsult = document.getElementById('consultation')
const modalOrder = document.getElementById('order')
const consultBtn = document.querySelectorAll(`.button[data-modal="consultation"]`)
const orderBtn = document.querySelectorAll('.button[data-modal="order"]')
const closeModal = document.querySelectorAll('.modal__close')
const itemName = document.querySelectorAll('.catalog-item__title')

consultBtn.forEach(function (el) {
    el.addEventListener('click', pressBtnConsult)
})

closeModal.forEach(function (el) {
    el.addEventListener('click', close)
})

orderBtn.forEach(function (el, i) {
    el.addEventListener('click', function (el) {
        bacgkround.classList.add('overlay_active');
        t = itemName[i].textContent
        console.log(t);
        modalOrder.querySelector('.modal__subtitle').textContent = t
        modalOrder.style.display = 'block'
    })
})

function pressBtnConsult() {
    bacgkround.classList.add('overlay_active');
    modalConsult.style.transition = '0.5s all'
    modalConsult.style.display = 'block'
};

function close() {
    bacgkround.classList.remove('overlay_active');
    modalConsult.style.display = 'none'
}


// SCROLL UP -------------------------------------------------------------------------------------------------------------------------------- 

const arrow = document.querySelector('.arrow_up');
console.log(window.scrollY);

window.addEventListener('scroll', function () {
    if (window.scrollY > 1600) {
        arrow.classList.add('arrow_up__active')
    } else {
        arrow.classList.remove('arrow_up__active')
    }
});

// WOW JS ANIMATION -------------------------------------------------------------------------------------------------------------------------------- 

new WOW().init();


