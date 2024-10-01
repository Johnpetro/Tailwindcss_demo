// const menu =  document.querySelector('#close');
// const ul =  document.querySelector('#list')
// menu.addEventListener('click',(e)=>{
//   let val =ul.classList.contains('-top-full')
//   if(val) {
//     ul.classList.remove('-top-full');
//     ul.classList.add('top-16')
//   }else{
//     ul.classList.add('-top-full');
//     ul.classList.remove('top-16')
//   }

// const { reset } = require("nodemon");

// })

const scroll = ScrollReveal({
  reset:true,
  duration:2600,
  distance:'60px'

})
scroll.reveal('.image-transform',{delay:400,origin:'top'})
scroll.reveal('.text-transform',{delay:100,origin:'left'})