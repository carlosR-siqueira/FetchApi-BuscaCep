const inputCep = document.querySelector('#CEP')
const btnCep = document.querySelector('#btnCep')
const resultado = document.querySelector('.resultado')
const rua = document.querySelector('#rua')
const bairro = document.querySelector('#bairro')
const localidade = document.querySelector('#localidade')

btnCep.addEventListener('click', handleClick)

function handleClick(event){
    event.preventDefault()
    const cep = inputCep.value;
    buscaCep(cep)    
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    .then(response => response.json())
    .then(body => {
        console.log(body);
        rua.value = body.logradouro
        bairro.value = body.bairro
        localidade.value = body.localidade
    })
    
}

   
