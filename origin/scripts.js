const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("botao-adicionar");
const listaDeCompras = document.getElementById("lista-de-compras");
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(event) {
    event.preventDefault();

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");

    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;

    const containerBotoes = document.createElement("div");
    const botaoDelete = document.createElement("button");
    botaoDelete.classList.add("botao-acao");
    

    const imagemDelete = document.createElement("img");
    imagemDelete.src = "img/delete.svg";

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");

    const imagemEdit = document.createElement("img");
    imagemEdit.src = "img/edit.svg";

    itemDaLista.appendChild(containerItemLista);
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    containerNomeDoItem.appendChild(nomeDoItem);
    
    containerBotoes.appendChild(botaoDelete);
    botaoDelete.appendChild(imagemDelete);
    containerBotoes.appendChild(botaoEditar);
    botaoEditar.appendChild(imagemEdit);
    listaDeCompras.appendChild(itemDaLista);
}
