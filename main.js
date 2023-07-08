const form = document.getElementById('form-contato');
const msg = document.getElementById('msg');
const nomes = telefones = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if(nomes.includes(inputNome.value)){
        renderizaMensagem(`O contato ${inputNome.value} já foi adicionado!`, 'erro');
        return;
    }
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';
    linhas += linha;
    
    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);
    
    inputNome.value = '';
    inputTelefone.value = '';
    
    renderizaMensagem(`O contato ${inputNome.value} foi adicionado!`, 'sucesso');
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function renderizaMensagem(mensagem, tipo){
    msg.innerHTML = mensagem;
    msg.style.display = 'block';
    msg.classList = '';
    msg.classList.add(tipo);
    setTimeout(()=>{msg.style.display = 'none'}, 4000);
}