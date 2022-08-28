console.log('BismiLlah');
let openMenu=document.getElementById('open-menu');
let mobileMenu=document.getElementById('mobile-menu');
let closeMenu=document.getElementById('close-menu');
/*let hover=document.querySelector('.hover');
let arrowDown=document.querySelector('.arrow-down');
let arrowUp=document.querySelector('.arrow-up');
console.log(hover)*/
openMenu.addEventListener('click', (e)=>{
e.preventDefault();    
mobileMenu.style.display='block';
openMenu.style.display='none'
});
closeMenu.addEventListener('click', (e)=>{
    e.preventDefault(); 
    mobileMenu.style.display='none';
    openMenu.style.display='block';
});
/*hover.addEventListener('mouseover', (e)=>{
    e.preventDefault(); 
    arrowDown.remove();
    arrowUp.style.display='block';
})*/
