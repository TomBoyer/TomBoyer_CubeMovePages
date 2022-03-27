// Page 1 airplane

let airplane = document.querySelector('.airplane')
let go = document.querySelector('.go')
let cache = document.querySelector('.cache')
let reload = document.querySelector('.reload')

go.addEventListener('click', ()=>{
    airplane.classList.add('active')
    cache.classList.add('active')
    reload.classList.remove('active')
})

reload.addEventListener('click', ()=>{
    airplane.classList.remove('active')
    cache.classList.remove('active')
    reload.classList.add('active')
})