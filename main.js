const containerBox = document.querySelectorAll('.container-box');
const bottomLine = document.querySelectorAll('.bottom-line');

containerBox.forEach((ele) => {
    ele.addEventListener('click', () => {
        containerBox.forEach(ele => {
            ele.classList.remove('js-active');
            ele.lastElementChild.classList.remove('bottom');
        })
        ele.classList.toggle('js-active');
        ele.lastElementChild.classList.toggle('bottom');
    })  
})

