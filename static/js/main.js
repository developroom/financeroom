//function that is main engine
document.addEventListener('DOMContentLoaded',()=>{
    menuOperation();
});

//function that operate menu
const menuOperation =()=>{
    let buttonMenu = document.querySelector('nav.mainNav button.navHamburgerButton')
    buttonMenu.addEventListener('click',()=>{
        let barAnimation = document.querySelector('nav.mainNav button.navHamburgerButton .navHamburgerButtonBarMiddle');
        let navAnimation = document.querySelector('nav.mainNav ul.navList');
        barAnimation.classList.toggle('active');
        navAnimation.classList.toggle('active');
    });
};