//function that is main engine
document.addEventListener('DOMContentLoaded',()=>{
    menuOperation();
    offerOperation();
});

//function that operate menu
const menuOperation =()=>{
    let buttonMenu = document.querySelector('button.navHamburgerButton')
    buttonMenu.addEventListener('click',()=>{
        let barAnimation = document.querySelector('button.navHamburgerButton .navHamburgerButtonBarMiddle');
        let navAnimation = document.querySelector('nav.mainNav ul.navList');
        let navToggle = document.querySelector('nav.mainNav');
        barAnimation.classList.toggle('active');
        navAnimation.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
};

//function that operate toggle section
const offerOperation =()=>{
    let sectionToggle = document.querySelectorAll('section.offerSection .offerCardHolder .offerCardHolderInner');
    let headingToggle = document.querySelectorAll('section.offerSection .offerCardHolder .offerCardHolderInner h3.offerCardHolderInnerHeading');
    let paragrafToggle = document.querySelectorAll('section.offerSection .offerCardHolder .offerCardHolderInner p.offerCardHolderInnerParagraf');
    for(let i = 0;i< sectionToggle.length;i++){
        sectionToggle[i].addEventListener('click',()=>{
            headingToggle[i].classList.toggle('disable');
            paragrafToggle[i].classList.toggle('active');
            sectionToggle[i].classList.toggle('disable');
            sectionToggle[i].classList.toggle('off');
        });
    }
};
