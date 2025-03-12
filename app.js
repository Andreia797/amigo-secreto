//O principal objetivo deste desafio é fortalecer minhas habilidades em lógica de programação. Aqui eu desenvolvi a lógica para resolver o problema.
// Array para armazenar os nomes
const nomes = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços extras

    // Validação do campo de texto
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    if (nomes.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    // Adicionar o nome à lista
    nomes.push(nome);

    // Atualizar a exibição da lista
    atualizarLista();

    // Limpar o campo de entrada
    input.value = '';
    input.focus();
}

// Função para atualizar a lista visível
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizá-la

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Verifica se há nomes na lista
    if (nomes.length === 0) {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return;
    }

    // Realiza o sorteio
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceAleatorio];

    // Exibe o resultado
    resultado.innerHTML = `🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;

    // Limpa a lista de amigos
    nomes.length = 0; // Esvazia o array
    atualizarLista(); // Atualiza a exibição da lista
}
