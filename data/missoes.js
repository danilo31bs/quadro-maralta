// Lista de missões do Quadro de Informações da Guilda de Maralta.
// Para adicionar uma missão, copie um bloco { ... } e edite os campos.
// Níveis aceitos: "cobre", "bronze", "prata", "ouro", "platina".
// Atenção: mantenha a vírgula entre os blocos e as aspas nos textos.

const MISSOES = [
  // COBRE
  {
    "titulo": "O carregamento de peixe seco",
    "descricao": "Um comerciante de Elmaribo chegou a Maralta com parte de sua carga desaparecida. Investigue o trajeto entre o porto e o mercado e descubra quem está roubando os produtos.",
    "nivel": "cobre"
  },
  {
    "titulo": "Confusão no mercado de Portus",
    "descricao": "Um vendedor de especiarias acusa outro comerciante de ter roubado sua mercadoria durante o movimento do mercado. Investigue o caso e recupere o pequeno baú desaparecido.",
    "nivel": "cobre"
  },
  {
    "titulo": "Madeira para os construtores",
    "descricao": "Um grupo de trabalhadores de Maralta precisa buscar uma encomenda de madeira vinda de Korvath, mas animais selvagens estão bloqueando a trilha. Garanta que a carga chegue à cidade.",
    "nivel": "cobre"
  },
  {
    "titulo": "O rebanho assustado",
    "descricao": "Camponeses próximos a Valara relatam que alguma criatura tem assustado seus animais durante a noite. Descubra o que está rondando os pastos e impeça novos ataques.",
    "nivel": "cobre"
  },
  {
    "titulo": "Uma mensagem para Salanka",
    "descricao": "Uma curandeira precisa enviar uma mensagem a um coletor de ervas de Salanka. A viagem é curta, mas a trilha pela floresta está tomada por criaturas territoriais. Entregue a mensagem e retorne com uma resposta.",
    "nivel": "cobre"
  },
  {
    "titulo": "O aprendiz desaparecido",
    "descricao": "Um aprendiz de alquimista de Maralta saiu para buscar materiais nos arredores e não voltou. Encontre o jovem e recupere os ingredientes que ele carregava.",
    "nivel": "cobre"
  },

  // BRONZE
  {
    "titulo": "Contrabando em Porto Problema",
    "descricao": "Um informante afirma que contrabandistas estão usando uma enseada próxima a Porto Problema para descarregar mercadorias roubadas. Investigue o local, identifique os envolvidos e recupere os produtos antes que desapareçam no mercado negro.",
    "nivel": "bronze"
  },
  {
    "titulo": "A trilha dos saqueadores",
    "descricao": "Viajantes que cruzam as estradas próximas a Plerus estão sendo atacados por um grupo de saqueadores. Siga os rastros até o esconderijo, recupere os pertences roubados e impeça novos ataques.",
    "nivel": "bronze"
  },
  {
    "titulo": "O poço contaminado",
    "descricao": "Moradores de uma pequena comunidade próxima a Ura começaram a adoecer após consumir água de um poço. Investigue a origem da contaminação e encontre uma forma de tornar a água segura novamente.",
    "nivel": "bronze"
  },
  {
    "titulo": "Ecos sob a capela",
    "descricao": "Uma antiga capela nos arredores de Maralta apresenta sinais de atividade durante a madrugada. Moradores afirmam ouvir vozes e passos vindos do subsolo. Investigue as ruínas e descubra quem está usando o local.",
    "nivel": "bronze"
  },
  {
    "titulo": "A caravana de Nerion",
    "descricao": "Uma caravana transportando ferramentas e peças de metal de Nerion precisa atravessar uma região conhecida por ataques de monstros. Escolte os comerciantes e garanta que os materiais cheguem ao destino.",
    "nivel": "bronze"
  },
  {
    "titulo": "O falsificador de documentos",
    "descricao": "Documentos falsos estão sendo usados para permitir a passagem de mercadorias pelo controle de Valara. Descubra quem está produzindo os papéis e apresente provas à autoridade local.",
    "nivel": "bronze"
  },

  // PRATA
  {
    "titulo": "Cultistas entre os moradores",
    "descricao": "Moradores de uma vila próxima a uma antiga torre começaram a agir de maneira estranha, repetindo frases e obedecendo a ordens de uma pessoa desconhecida. Investigue a comunidade e descubra se a influência de um Arquemago está por trás do comportamento.",
    "nivel": "prata"
  },
  {
    "titulo": "A disputa pelas águas",
    "descricao": "Duas comunidades próximas à Grande Serpente estão prestes a entrar em conflito pelo controle de uma passagem utilizada por pescadores e comerciantes. Investigue as acusações de ambos os lados e encontre uma solução antes que a situação termine em violência.",
    "nivel": "prata"
  },
  {
    "titulo": "O esconderijo dos escravistas",
    "descricao": "Informações indicam que uma organização criminosa está capturando pessoas nas estradas do sul e transportando-as clandestinamente para Madrada. Localize o esconderijo, liberte os prisioneiros e reúna provas contra os responsáveis.",
    "nivel": "prata"
  },
  {
    "titulo": "O artefato de Medria",
    "descricao": "Um pesquisador de Medria perdeu contato com sua equipe após encontrar um artefato mágico em uma área de escavação. Viaje até o local, descubra o que aconteceu e recupere o objeto antes que seus efeitos se espalhem.",
    "nivel": "prata"
  },

  // OURO
  {
    "titulo": "O legado do Arquemago",
    "descricao": "Uma torre antiga voltou a emitir sinais de atividade mágica, e moradores das regiões próximas começaram a relatar pesadelos compartilhados e mudanças inexplicáveis de comportamento. A Confraria suspeita que um Arquemago esteja tentando recuperar sua influência. Investigue a torre, descubra a origem dos fenômenos e interrompa seus planos.",
    "nivel": "ouro"
  }
];
