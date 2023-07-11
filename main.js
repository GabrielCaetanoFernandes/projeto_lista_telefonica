const nome = document.getElementById('nome-ctt');
const phone = document.getElementById('tel-ctt');
const form = document.getElementById('form-ctt');
const tabela = document.querySelector('#lista-ctt')
const nome_array = [];
const phone_array = [];

let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    incluirCtt();
    atualizaTabela();
})

function incluirCtt(){

    if(nome_array.includes(nome.value)){
        alert('Contato duplicado!')
    }else{
        nome_array.push(nome.value);
        phone_array.push(phone.value);
        
        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${phone.value}</td>`;
        linha += `<td><button class="btn btn-outline-danger btn-excluir">X</button></td>`;
        linha += `</tr>`; 

        linhas += linha;
    }

    nome.value = ' ';
    phone.value = ' ';
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
tabela.addEventListener('click', function(event){
    let elementoClicado = event.target;
    if(elementoClicado.classList.contains('btn-excluir')){
        let celula = elementoClicado.parentNode;
        let linha_rmv = celula.parentNode;
        linha_rmv.remove();
    }
})