const elemento = document.querySelector('body')
const checarInput = document.querySelector('#modo-noturno')

checarInput.addEventListener('click', () => {
      const modo = checarInput.checked ? 'dark' : 'light'
      elemento.setAttribute('data-bs-theme', modo)
})