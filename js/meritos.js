// Cria o botão "Méritos" no menu e o popup com as regras de méritos.
// Os dados vêm de data/meritos.js (REGRAS_MERITOS).
(function () {
  const menu = document.querySelector(".menu");
  if (!menu || typeof REGRAS_MERITOS === "undefined") return;

  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto !== undefined) e.textContent = texto;
    return e;
  }

  function secao(titulo, subtitulo) {
    const s = el("section", "regras__secao");
    s.appendChild(el("h3", "regras__titulo", titulo));
    if (subtitulo) s.appendChild(el("p", "regras__sub", subtitulo));
    return s;
  }

  function tabelaDeItens(itens, classeValor) {
    const lista = el("ul", "regras__lista");
    itens.forEach(function (item) {
      const li = el("li", "regras__item");
      const texto = el("div", "regras__texto");
      texto.appendChild(el("strong", "", item.nome));
      texto.appendChild(el("span", "", item.descricao));
      li.append(texto, el("span", "regras__valor " + classeValor, item.valor));
      lista.appendChild(li);
    });
    return lista;
  }

  // Popup
  const dialogo = el("dialog", "regras");
  dialogo.setAttribute("aria-labelledby", "regras-titulo");

  const caixa = el("div", "regras__caixa");

  const topo = el("div", "regras__topo");
  const titulo = el("h2", "regras__principal", "Aquisição de Méritos");
  titulo.id = "regras-titulo";
  const fechar = el("button", "regras__fechar", "×");
  fechar.type = "button";
  fechar.setAttribute("aria-label", "Fechar");
  fechar.addEventListener("click", function () { dialogo.close(); });
  topo.append(titulo, fechar);
  caixa.appendChild(topo);

  const corpo = el("div", "regras__corpo");

  // Méritos base
  const sBase = secao("Méritos por missão", "Valor base recebido por cada membro, conforme o nível da missão.");
  const baseLista = el("ul", "regras__base");
  REGRAS_MERITOS.base.forEach(function (b) {
    const li = el("li", "regras__base-item");
    const nome = b.nivel.charAt(0).toUpperCase() + b.nivel.slice(1);
    li.appendChild(el("span", "selo selo--" + b.nivel, nome));
    li.appendChild(el("span", "regras__base-valor", b.meritos.toLocaleString("pt-BR")));
    baseLista.appendChild(li);
  });
  sBase.appendChild(baseLista);
  corpo.appendChild(sBase);

  // Periculosidade
  const sPer = secao("Adicional de periculosidade", "Percentual somado ao valor base conforme o risco da missão.");
  sPer.appendChild(tabelaDeItens(REGRAS_MERITOS.periculosidade, "regras__valor--mais"));
  corpo.appendChild(sPer);

  // Bônus
  const sBon = secao("Bônus por recursos e resultados", "Percentuais somados quando o grupo traz benefícios extras à Guilda.");
  sBon.appendChild(tabelaDeItens(REGRAS_MERITOS.bonus, "regras__valor--mais"));
  corpo.appendChild(sBon);

  // Penalidades
  const sPen = secao("Penalidades", "Percentuais descontados quando algo dá errado durante a missão.");
  sPen.appendChild(tabelaDeItens(REGRAS_MERITOS.penalidades, "regras__valor--menos"));
  corpo.appendChild(sPen);

  // Notas
  const sNotas = secao("Como calcular");
  const notas = el("ul", "regras__notas");
  REGRAS_MERITOS.notas.forEach(function (n) { notas.appendChild(el("li", "", n)); });
  sNotas.appendChild(notas);
  corpo.appendChild(sNotas);

  caixa.appendChild(corpo);
  dialogo.appendChild(caixa);
  document.body.appendChild(dialogo);

  // Fecha ao clicar fora da caixa (no fundo escurecido).
  dialogo.addEventListener("click", function (e) {
    if (e.target === dialogo) dialogo.close();
  });

  // Botão no menu
  const botao = el("button", "menu__meritos");
  botao.type = "button";
  botao.title = "Regras de méritos";
  botao.setAttribute("aria-label", "Abrir regras de méritos");
  botao.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">' +
    '<polygon fill="currentColor" points="12,2 15,9 22,9.5 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9.5 9,9"/>' +
    "</svg><span>Méritos</span>";
  botao.addEventListener("click", function () { dialogo.showModal(); });
  menu.appendChild(botao);
})();
