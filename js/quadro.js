// Ordem de exibição: da missão mais difícil para a mais simples.
const ORDEM_NIVEIS = ["platina", "ouro", "prata", "bronze", "cobre"];

const quadro = document.getElementById("quadro");

function criarMissao(missao) {
  const card = document.createElement("article");
  card.className = "missao missao--" + missao.nivel;

  const titulo = document.createElement("h3");
  titulo.className = "missao__titulo";
  titulo.textContent = missao.titulo;

  const descricao = document.createElement("p");
  descricao.className = "missao__descricao";
  descricao.textContent = missao.descricao;

  card.append(titulo, descricao);
  return card;
}

function renderizar(missoes) {
  quadro.innerHTML = "";

  ORDEM_NIVEIS.forEach(function (nivel) {
    const doNivel = missoes.filter(function (m) {
      return m.nivel.toLowerCase() === nivel;
    });
    if (doNivel.length === 0) return;

    const secao = document.createElement("section");
    secao.className = "nivel nivel--" + nivel;

    const titulo = document.createElement("h2");
    titulo.className = "nivel__titulo";
    titulo.textContent = "Nível " + nivel.charAt(0).toUpperCase() + nivel.slice(1);

    const lista = document.createElement("div");
    lista.className = "nivel__lista";
    doNivel.forEach(function (m) {
      lista.appendChild(criarMissao(m));
    });

    secao.append(titulo, lista);
    quadro.appendChild(secao);
  });
}

// MISSOES vem de data/missoes.js, carregado antes deste script.
if (typeof MISSOES === "undefined") {
  quadro.innerHTML =
    '<p class="aviso">Não foi possível carregar as missões. ' +
    "Verifique se o arquivo <code>data/missoes.js</code> existe e não tem erros de sintaxe.</p>";
} else {
  MISSOES.forEach(function (m) {
    m.nivel = String(m.nivel).toLowerCase();
  });
  renderizar(MISSOES);
}
