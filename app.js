//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    // Obtém o nome digitado
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    // Verifica se o nome não está vazio
    if (nome === '') {
        mostrarMensagem('Por favor, insira um nome válido!');
        return;
    }

    // Adiciona o nome à lista
    listaAmigos.push(nome);

    // Atualiza a lista na página
    atualizarLista();

    // Limpa o campo de entrada
    nomeInput.value = '';
}

function atualizarLista() {
    // Pega o elemento da lista na página
    const listaElement = document.getElementById('listaAmigos');

    // Limpa a lista antes de reatualizar
    listaElement.innerHTML = '';

    // Adiciona cada nome à lista
    listaAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se a lista de amigos tem pelo menos 1 nome
    if (listaAmigos.length === 0) {
        mostrarMensagem('Adicione pelo menos um amigo para sortear!');
        return;
    }

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li><strong>O amigo secreto sorteado é:</strong> ${amigoSorteado}</li>`;
}

// Função para exibir mensagens de erro ou informação
function mostrarMensagem(mensagem) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = 'red'; // Mensagem de erro fica em vermelho
}



