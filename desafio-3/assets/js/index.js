const formulario = document.querySelector('.formulario')
const aviso = document.querySelectorAll('.aviso')
const inputs = document.querySelectorAll(".input")

/*
    Nao faço ideia de como transformar a borda do input pra verde quando tiver digitando sem ser por CSS usando pseudo-classe :focus... :(
*/

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputVazio = inputs.forEach((item, indice) => {
        if (item.value.length === 0) {
            item.style.border = '1px solid red'
            aviso[indice].innerHTML = 'campo obrigatório'
        } else {
            item.style.border = '1px solid #00C22B'
            aviso[indice].innerHTML = ''
        }
    })
})

