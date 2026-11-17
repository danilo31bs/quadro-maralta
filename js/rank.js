// Méritos mínimos para cada nível. Ajuste aqui se quiser mudar as faixas.
const NIVEIS = [
  { nome: "platina", minimo: 90000 },
  { nome: "ouro",    minimo: 30000 },
  { nome: "prata",   minimo: 10000 },
  { nome: "bronze",  minimo: 5000 },
  { nome: "cobre",   minimo: 0 }
];

const corpo = document.getElementById("rank-corpo");

function nivelPorMeritos(meritos) {
  for (const nivel of NIVEIS) {
    if (meritos >= nivel.minimo) return nivel.nome;
  }
  return "cobre";
}

// Aceita "obsidiana" escrito com qualquer combinação de maiúsculas/minúsculas
// e o valor true (ou "true"). Se o campo não existir, vale false.
function ehObsidiana(membro) {
  return Object.keys(membro).some(function (chave) {
    const valor = membro[chave];
    return chave.toLowerCase() === "obsidiana" && (valor === true || valor === "true");
  });
}

// Membros obsidiana têm esse nível, qualquer que seja o mérito.
function nivelDoMembro(membro) {
  return ehObsidiana(membro) ? "obsidiana" : nivelPorMeritos(membro.meritos);
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function celula(classe, texto) {
  const td = document.createElement("td");
  td.className = classe;
  td.textContent = texto;
  return td;
}

if (typeof MEMBROS === "undefined") {
  corpo.innerHTML =
    '<tr><td colspan="5" class="aviso">Não foi possível carregar os membros. ' +
    "Verifique se o arquivo <code>data/membros.js</code> existe e não tem erros de sintaxe.</td></tr>";
} else {
  // Obsidianas ficam por último (abaixo do cobre); os demais são ordenados por méritos.
  const ordenados = MEMBROS.slice().sort(function (a, b) {
    const obsA = ehObsidiana(a) ? 1 : 0;
    const obsB = ehObsidiana(b) ? 1 : 0;
    return obsA - obsB || b.meritos - a.meritos || a.nome.localeCompare(b.nome, "pt-BR");
  });

  corpo.innerHTML = "";
  // A colocação reinicia em 1 a cada nível (ex.: 1º ouro, 1º prata...).
  const contagemPorNivel = {};
  ordenados.forEach(function (membro) {
    const nivel = nivelDoMembro(membro);
    contagemPorNivel[nivel] = (contagemPorNivel[nivel] || 0) + 1;
    const colocacao = contagemPorNivel[nivel];

    const tr = document.createElement("tr");
    tr.className = "linha linha--" + nivel;

    const tdNivel = document.createElement("td");
    tdNivel.className = "col-nivel";
    const selo = document.createElement("span");
    selo.className = "selo selo--" + nivel;
    selo.textContent = capitalizar(nivel);
    tdNivel.appendChild(selo);

    tr.append(
      celula("col-pos", String(colocacao)),
      celula("col-nome", membro.nome),
      celula("col-classe", membro.classe),
      celula("col-meritos", membro.meritos.toLocaleString("pt-BR")),
      tdNivel
    );
    corpo.appendChild(tr);
  });
}
