document.addEventListener('DOMContentLoaded',()=>{
    const number =document.querySelector('.count')
    const btn =document.querySelector('.button')
    let count =0
    number.textContent=count
    btn && btn.addEventListener('click',function(){
        count++
        number.textContent=count
    })
})