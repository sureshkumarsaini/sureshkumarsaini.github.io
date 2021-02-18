burger = document.querySelector('.burger')
fullNav = document.querySelector('.fullNav')
leftNav = document.querySelector('.leftNav')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    leftNav.classList.toggle('v-class');
    fullNav.classList.toggle('h-nav');
})

