// // javascript

// const menu = document.querySelector('.menu')
//       filter = document.querySelector('.filter')
//       filterStyle = window.getComputedStyle(filter)
//       hearts = document.querySelectorAll('.far');


// menu.addEventListener('click', ()=> {

//     if (filterStyle.getPropertyValue('clip-path') === 'circle(0% at 100% 0%)') {
//         filter.style.clipPath = 'circle(100% at 50% 50%)'
//     }

//     else{
//         filter.style.clipPath = 'circle(0% at 100% 0%)'
//     }
// })

// document.addEventListener('mouseup', (event) => {
//     if (filterStyle.getPropertyValue('clip-path') === 'circle(100% at 50% 50%)') {
//         if(!filter.contains(event.target))
//             filter.style.clipPath = 'circle(0% at 100% 0%)'

//     }

// })

// function changeHeart(x){
//     x.classList.toggle('fas')
//     x.classList.toggle('far')
// }


function ten(){
    console.log(10)
}

ten()

const arrowFun = _ => 9

console.log(arrowFun())

const logger = name => name

console.log(logger('ninininini'))

const add = (num1, num2) => num1+ num2

console.log(add(1,3))