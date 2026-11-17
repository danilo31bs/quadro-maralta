// Regras de aquisição de méritos da Guilda de Aventureiros de Maralta.
// Este arquivo só alimenta o popup "Méritos" (nenhum cálculo é feito pelo site).
// Para mudar uma regra, edite os números e textos abaixo.
// O campo "valor" é exibido exatamente como está escrito.
const REGRAS_MERITOS = {
  // Méritos base que cada membro recebe ao concluir uma missão de cada nível.
  base: [
    { "nivel": "cobre",   "meritos": 100 },
    { "nivel": "bronze",  "meritos": 200 },
    { "nivel": "prata",   "meritos": 500 },
    { "nivel": "ouro",    "meritos": 1200 },
    { "nivel": "platina", "meritos": 3000 }
  ],

  // Adicional de periculosidade: escolha UM, conforme o risco real da missão.
  periculosidade: [
    { "nome": "Baixa",  "descricao": "Pouco ou nenhum risco de morte.", "valor": "+0%" },
    { "nome": "Moderada", "descricao": "Combate ou perigo real, mas controlável.", "valor": "+15%" },
    { "nome": "Alta", "descricao": "Risco sério, com inimigos acima do esperado para o nível da missão.", "valor": "+30%" },
    { "nome": "Mortal", "descricao": "Risco de vida constante; é provável que alguém caia.", "valor": "+50%" },
    { "nome": "Acima do rank do grupo", "descricao": "Missão de nível superior ao rank médio do grupo (por nível de diferença, somado à periculosidade).", "valor": "+10% por nível" }
  ],

  // Bônus por resultados que beneficiam a Guilda.
  bonus: [
    { "nome": "Recurso recuperado", "descricao": "Carga, relíquia ou artefato devolvido à Guilda intacto.", "valor": "+20%" },
    { "nome": "Recursos extras", "descricao": "Tesouro, itens ou materiais entregues ao cofre da Guilda.", "valor": "+15%" },
    { "nome": "Informação valiosa", "descricao": "Inteligência útil sobre a Confraria, uma Cidade Livre ou outra ameaça.", "valor": "+10%" },
    { "nome": "Resgate adicional", "descricao": "Aliado ou testemunha salvo além do objetivo da missão.", "valor": "+10%" },
    { "nome": "Antes do prazo", "descricao": "Missão concluída antes do prazo combinado com o contratante.", "valor": "+10%" }
  ],

  // Penalidades por falhas durante a missão.
  penalidades: [
    { "nome": "Culpado escapou", "descricao": "O alvo principal fugiu e não foi capturado nem detido.", "valor": "−25%" },
    { "nome": "Vítima morta", "descricao": "Um civil, contratante ou pessoa sob proteção do grupo morreu.", "valor": "−30% por vítima" },
    { "nome": "Recurso perdido", "descricao": "A carga, relíquia ou artefato foi perdido ou destruído.", "valor": "−30%" },
    { "nome": "Objetivo parcial", "descricao": "Apenas parte do objetivo da missão foi cumprida.", "valor": "−40%" },
    { "nome": "Dano à reputação", "descricao": "Destruição desnecessária ou desrespeito às leis e costumes de uma cidade.", "valor": "−20%" },
    { "nome": "Abandono ou traição", "descricao": "O grupo abandonou o contrato ou traiu a Guilda ou o contratante.", "valor": "Sem méritos e perde 50% da base" }
  ],

  // Como o cálculo funciona.
  notas: [
    "Méritos finais = base × (1 + periculosidade + bônus − penalidades). Os percentuais são somados, não multiplicados.",
    "O total de bônus e periculosidade não passa de +100%.",
    "Uma missão concluída nunca rende menos que 0 méritos; missão falha rende 0.",
    "Cada membro que participou da missão recebe o valor completo.",
    "Exemplo: missão de prata (500), periculosidade alta (+30%), recurso recuperado (+20%) e culpado escapou (−25%) rende 500 × 1,25 = 625 méritos."
  ]
};
