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

document.getElementById("dica-box").innerHTML = dicas[indice];

}

function calcularAgua(){

const alimento =
parseFloat(document.getElementById("alimento").value);

const quantidade =
parseFloat(document.getElementById("quantidade").value);

if(isNaN(quantidade) || quantidade <= 0){

alert("Digite uma quantidade válida.");

return;

}

const total = alimento * quantidade;

document.getElementById("resultado").innerHTML =

"💧 Consumo estimado: <br><br><strong>" +

total.toLocaleString("pt-BR") +

" litros de água</strong>";

}

