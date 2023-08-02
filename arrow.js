const botao = document.querySelector('#img')

botao.addEventListener('click', () => {
    window.scrollTo({
        top: 730,
        behavior: 'smooth', })
        botao.style.display = 'none'
    })