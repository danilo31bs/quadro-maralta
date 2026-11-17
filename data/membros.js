// Membros da Guilda de Aventureiros de Maralta.
// Para atualizar os méritos de alguém, basta mudar o número em "meritos".
// O nível (cobre, bronze, prata, ouro, platina) é calculado automaticamente.
// Os nomes abaixo são apenas exemplos: troque pelos personagens da sua mesa.
// Membros da Guilda de Aventureiros de Maralta.



const MEMBROS = [
  { "nome": "Aethrys", "classe": "Clérigo", "meritos": 11000 },
  { "nome": "Agamenon Mcdrilli", "Espadachim": "Não definida", "meritos": 2830 },
  { "nome": "Anel da vida", "classe": "Curandeiro", "meritos": 15000 },
  { "nome": "Arashi", "classe": "Espadachim", "meritos": 5500 },
  { "nome": "Belgim", "classe": "Guerreiro", "meritos": 5200 },
  { "nome": "Clathea", "classe": "Caçadora", "meritos": 12000 },
  { "nome": "Damaran, o santo da espada", "classe": "Espadachim", "meritos": 38000 },
  { "nome": "Doroth, A guardiã da arte do combate", "classe": "Guerreira", "meritos": 45000 },
  { "nome": "Dum Dum Pim, O guardião da arte da aventura", "classe": "Aventureiro", "meritos": 999999 },
  { "nome": "Ediv Makoda", "classe": "Guerreiro", "meritos": 5300 },
  { "nome": "Enya Malbud", "classe": "Necromante", "meritos": 37000 },
  { "nome": "Ephrain", "classe": "Espadachim", "meritos": 5600 },
  { "nome": "Estion Koholan", "classe": "Guerreiro", "meritos": 5400 },
  { "nome": "Gangral", "classe": "Guerreiro", "meritos": 1000 },
  { "nome": "Gorukan", "classe": "Barbaro", "meritos": 5700 },
  { "nome": "Gunther", "classe": "Paladino", "meritos": 5800 },
  { "nome": "Horácio", "classe": "Guerreiro", "meritos": 5900 },
  { "nome": "Jaina Praundmore", "classe": "Mago", "meritos": 40000 },
  { "nome": "Julião", "classe": "Mago", "meritos": 13000 },
  { "nome": "Limeric Usnition", "classe": "Guerreiro", "meritos": 1353 },
  { "nome": "Lirio, O guardião da arte da ladinagem", "classe": "Ladino", "meritos": 42000 },
  { "nome": "Losdo Mitsugana, O guardião da arte da Magia", "classe": "Mago", "meritos": 39000 },
  { "nome": "Luchist Escalion, O Guardião da arte da espada", "classe": "Guerreiro", "meritos": 44000 },
  { "nome": "Lucus", "classe": "Ladino", "meritos": 5100 },
  { "nome": "Magnólia Rainheart", "classe": "Mago", "meritos": 10000 },
  { "nome": "Petunia", "classe": "Druida", "meritos": 2237 },
  { "nome": "Pinochio", "classe": "Guardião", "meritos": 214 },
  { "nome": "Suzano'oh Mcnamara", "classe": "Espadachim", "meritos": 2054 },
  { "nome": "Tup duriv", "classe": "Guerreiro", "meritos": 1136 },
  { "nome": "Vassago", "classe": "Guerreiro", "meritos": 14000 },
  { "nome": "Venia", "classe": "Guerreiro", "meritos": 4075 },
  { "nome": "Ydra, Guardiã da arte da cura", "classe": "Curandeira", "meritos": 35000 },
  { "nome": "Zanon Maravel, O Guardião da arte da alquimia", "classe": "Alquimista", "meritos": 36000 },
  { "nome": "zizix", "classe": "Alquimista", "meritos": 2070 },
  { "nome": "Caelthor", "classe": "Guardião", "meritos": 2489 },
  { "nome": "Skips", "classe": "Maga", "meritos": 43000 },
  { "nome": "Styron", "classe": "Ilusionista", "meritos": 41000 },
  { "nome": "Agamenon", "classe": "Clérigo", "meritos": 25, "obsidiana": true },
  { "nome": "Cardnali's", "classe": "Guerreiro", "meritos": 159, "obsidiana": true },
  { "nome": "Eredin", "classe": "Feiticeiro", "meritos": 159, "obsidiana": true },
  { "nome": "Kamarada", "classe": "Paladino", "meritos": 214, "obsidiana": true },
  { "nome": "Sylas", "classe": "Mago", "meritos": 159, "obsidiana": true },
  { "nome": "Gorvak ", "classe": "Mago", "meritos": 159, "obsidiana": true },
  { "nome": "Artemis ", "classe": "Bruxa", "meritos": 159, "obsidiana": true },
  { "nome": "Valdrik", "classe": "Guerreiro", "meritos": 8750, "obsidiana": true },
  { "nome": "Nymeria", "classe": "Bruxa", "meritos": 7920, "obsidiana": true },
  { "nome": "Thorgal", "classe": "Bárbaro", "meritos": 6840, "obsidiana": true },
  { "nome": "Elyndra", "classe": "Maga", "meritos": 6230, "obsidiana": true },
  { "nome": "Kaedor", "classe": "Paladino", "meritos": 5570, "obsidiana": true },
  { "nome": "Mordrek", "classe": "Ladino", "meritos": 5180, "obsidiana": true }
];

