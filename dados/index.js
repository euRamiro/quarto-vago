const apiURL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const divQuartos = document.getElementById('quartos');
let quartos = [];

async function carregarQuartos(){
  const response = await fetch(apiURL);
  return await response.json();
}

function renderQuartos(quartos){
  divQuartos.innerHTML = "";
  quartos.map(renderQuarto);
}

function renderQuarto(quarto){
  const div = document.createElement("div");
  div.className = "quarto";
  div.id="quarto";
  div.innerHTML = `
    <img src="${quarto.photo}" class="card-img-top" alt="${quarto.name}"/>
    <div class="quarto-body">
      <h5 class="quarto-titulo">${quarto.name}</h5>
      <p class="quarto-texto">
        Tipo: ${quarto.property_type}
      </p>
      <p class="quarto-valor">
        Valor: R$${quarto.price}
      </p>
    </div>
  `;
  divQuartos.appendChild(div);
}

async function main(){
  quartos = await carregarQuartos();
  if(quartos[0]){
    renderQuartos(quartos);
  }
}

main();