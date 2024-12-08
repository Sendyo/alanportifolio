// Exibir data e hora atual no footer
function displayDateTime() {
    const dateTimeElement = document.createElement('div');
    dateTimeElement.classList.add('date-time');
    const currentDate = new Date();
    dateTimeElement.textContent = `Hoje: ${currentDate.toLocaleDateString()} | Hora: ${currentDate.toLocaleTimeString()}`;
    document.body.appendChild(dateTimeElement);
}

window.onload = displayDateTime;


// Função para mostrar o botão ao rolar para baixo
window.onscroll = function() {
    mostrarBotaoTopo();
};

function mostrarBotaoTopo() {
    const botao = document.getElementById("botaoTopo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botao.style.display = "block"; // Exibe o botão
    } else {
        botao.style.display = "none"; // Esconde o botão
    }
}

// Função para rolar até o topo
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores com scroll no body
    document.documentElement.scrollTop = 0; // Para navegadores com scroll no html
}