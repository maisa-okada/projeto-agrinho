// === FUNÇÃO PARA GERAR AS FLORES E FOLHAS CAINDO CONFORME SEU CSS ===
function ativarEfeitoNatureza() {
    const container = document.getElementById('containerNatureza');
    
    // Lista de flores e folhas que combinam com o tema agro-ambiente
    const elementos = ['🌿', '🌱', '🍃', '🌸', '🌼', '🍀'];

    setInterval(() => {
        const elemento = document.createElement('span');
        elemento.classList.add('folha-caindo'); // Usa a classe exata criada no seu CSS
        
        // Sorteia qual folha ou flor vai cair
        elemento.innerText = elementos[Math.floor(Math.random() * elementos.length)];
        
        // Sorteia a posição horizontal de início (0 a 100% da largura da tela)
        elemento.style.left = Math.random() * 100 + 'vw';
        
        // Sorteia tamanhos variados para dar profundidade visual (1.2rem a 2.2rem)
        elemento.style.fontSize = Math.random() * (2.2 - 1.2) + 1.2 + 'rem';
        
        // Sorteia velocidades de queda ligeiramente diferentes (entre 5 e 9 segundos)
        elemento.style.animationDuration = Math.random() * (9 - 5) + 5 + 's';
        
        if (container) {
            container.appendChild(elemento);
        }

        // Remove o elemento após o fim da animação para economizar memória do site
        setTimeout(() => {
            elemento.remove();
        }, 9000);
    }, 450); // Cria uma nova folha/flor a cada 450 milissegundos
}

// Inicializa a animação de queda assim que o documento carregar na tela
window.addEventListener('DOMContentLoaded', ativarEfeitoNatureza);


// === SUAS LOGICAS ORIGINAIS MANTIDAS E INTEGRADAS ===

const dicas = [
    "💧 Economizar água é proteger a vida.",
    "🌱 Um solo saudável produz alimentos de qualidade.",
    "🤖 A tecnologia pode ajudar a preservar a natureza.",
    "🚁 Drones permitem monitoramento eficiente das plantações.",
    "🌎 Pequenas ações geram grandes transformações.",
    "☀️ Energias renováveis tornam o campo mais sustentável."
];

function mostrarDica(){
    const indice = Math.floor(Math.random() * dicas.length);
    const dicaBox = document.getElementById("dica-box");
    if (dicaBox) {
        dicaBox.innerHTML = dicas[indice];
    }
}

function calcularAgua(){
    const alimentoInput = document.getElementById("alimento");
    const quantidadeInput = document.getElementById("quantidade");
    const resultadoBox = document.getElementById("resultado");

    if (!alimentoInput || !quantidadeInput || !resultadoBox) return;

    const alimento = parseFloat(alimentoInput.value);
    const quantidade = parseFloat(quantidadeInput.value);

    if(isNaN(quantidade) || quantidade <= 0){
        alert("Digite uma quantidade válida.");
        return;
    }

    const total = alimento * quantidade;

    resultadoBox.innerHTML =
        "💧 Consumo estimado: <br><br><strong>" +
        total.toLocaleString("pt-BR") +
        " litros de água</strong>";
}

