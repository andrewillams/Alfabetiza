/**
 * 🎯 BANCO DE PALAVRAS PARA ALFABETIZAÇÃO
 *
 * Organizado por dificuldade e categoria
 * Total: 200+ palavras
 */

const WORD_BANK = {
  // ==========================================
  // NÍVEL FÁCIL - Palavras de 3 letras
  // ==========================================
  easy: {
    animals: [
      { text: "BOI", emoji: "🐂" },
      { text: "CÃO", emoji: "🐕" },
      { text: "OI", emoji: "🐄" },
    ],
    nature: [
      { text: "SOL", emoji: "☀️" },
      { text: "LUA", emoji: "🌙" },
      { text: "MAR", emoji: "🌊" },
      { text: "CÉU", emoji: "☁️" },
      { text: "FOI", emoji: "🌿" },
    ],
    family: [
      { text: "PAI", emoji: "👨" },
      { text: "MÃE", emoji: "👩" },
      { text: "AVÓ", emoji: "👵" },
      { text: "AVÔ", emoji: "👴" },
      { text: "TIO", emoji: "👨‍🦱" },
      { text: "TIA", emoji: "👩‍🦰" },
    ],
    objects: [
      { text: "PÉ", emoji: "🦶" },
      { text: "MÃO", emoji: "✋" },
      { text: "REI", emoji: "👑" },
      { text: "DIA", emoji: "📅" },
      { text: "NOZ", emoji: "🌰" },
      { text: "UVA", emoji: "🍇" },
    ],
    food: [
      { text: "PÃO", emoji: "🍞" },
      { text: "OVO", emoji: "🥚" },
      { text: "CHÁ", emoji: "🍵" },
      { text: "MEL", emoji: "🍯" },
      { text: "SAL", emoji: "🧂" },
    ],
    others: [
      { text: "RUA", emoji: "🛣️" },
      { text: "BOA", emoji: "👍" },
      { text: "SIM", emoji: "✅" },
      { text: "NÃO", emoji: "❌" },
      { text: "VER", emoji: "👁️" },
      { text: "LER", emoji: "📖" },
      { text: "VOZ", emoji: "🗣️" },
      { text: "PAZ", emoji: "☮️" },
    ]
  },

  // ==========================================
  // NÍVEL MÉDIO - Palavras de 4-5 letras
  // ==========================================
  medium: {
    animals: [
      { text: "GATO", emoji: "🐱" },
      { text: "RATO", emoji: "🐭" },
      { text: "PATO", emoji: "🦆" },
      { text: "SAPO", emoji: "🐸" },
      { text: "URSO", emoji: "🐻" },
      { text: "LOBO", emoji: "🐺" },
      { text: "FOCA", emoji: "🦭" },
      { text: "LEÃO", emoji: "🦁" },
      { text: "COBRA", emoji: "🐍" },
      { text: "MACACO", emoji: "🐵" },
      { text: "PORCO", emoji: "🐷" },
      { text: "VACA", emoji: "🐄" },
      { text: "PEIXE", emoji: "🐟" },
      { text: "ZEBRA", emoji: "🦓" },
      { text: "CEGONHA", emoji: "🦩" },
      { text: "PANDA", emoji: "🐼" },
      { text: "TIGRE", emoji: "🐯" },
      { text: "CORUJA", emoji: "🦉" },
      { text: "PÁSSARO", emoji: "🐦" },
      { text: "FORMIGA", emoji: "🐜" },
    ],
    food: [
      { text: "BOLO", emoji: "🎂" },
      { text: "PIZZA", emoji: "🍕" },
      { text: "SOPA", emoji: "🍲" },
      { text: "SUCO", emoji: "🧃" },
      { text: "LEITE", emoji: "🥛" },
      { text: "QUEIJO", emoji: "🧀" },
      { text: "MAÇÃ", emoji: "🍎" },
      { text: "BANANA", emoji: "🍌" },
      { text: "LARANJA", emoji: "🍊" },
      { text: "MELANCIA", emoji: "🍉" },
      { text: "MORANGO", emoji: "🍓" },
      { text: "CEREJA", emoji: "🍒" },
      { text: "ABACAXI", emoji: "🍍" },
      { text: "CENOURA", emoji: "🥕" },
      { text: "TOMATE", emoji: "🍅" },
      { text: "BATATA", emoji: "🥔" },
      { text: "MILHO", emoji: "🌽" },
      { text: "ARROZ", emoji: "🍚" },
      { text: "FEIJÃO", emoji: "🫘" },
    ],
    objects: [
      { text: "BOLA", emoji: "⚽" },
      { text: "MESA", emoji: "🪑" },
      { text: "MALA", emoji: "🧳" },
      { text: "DADO", emoji: "🎲" },
      { text: "FOGO", emoji: "🔥" },
      { text: "VELA", emoji: "🕯️" },
      { text: "CAMA", emoji: "🛏️" },
      { text: "PORTA", emoji: "🚪" },
      { text: "JANELA", emoji: "🪟" },
      { text: "CADEIRA", emoji: "🪑" },
      { text: "LIVRO", emoji: "📚" },
      { text: "LÁPIS", emoji: "✏️" },
      { text: "PAPEL", emoji: "📄" },
      { text: "BOLSA", emoji: "👜" },
      { text: "RELÓGIO", emoji: "⏰" },
      { text: "CHAVE", emoji: "🔑" },
      { text: "PENTE", emoji: "🪮" },
      { text: "ESCOVA", emoji: "🪥" },
      { text: "SABÃO", emoji: "🧼" },
      { text: "ESPELHO", emoji: "🪞" },
    ],
    nature: [
      { text: "FLOR", emoji: "🌸" },
      { text: "ÁRVORE", emoji: "🌳" },
      { text: "FOLHA", emoji: "🍂" },
      { text: "NUVEM", emoji: "☁️" },
      { text: "CHUVA", emoji: "🌧️" },
      { text: "VENTO", emoji: "💨" },
      { text: "RAIO", emoji: "⚡" },
      { text: "NEVE", emoji: "❄️" },
      { text: "ARCO-ÍRIS", emoji: "🌈" },
      { text: "MONTANHA", emoji: "⛰️" },
      { text: "RIO", emoji: "🏞️" },
      { text: "LAGO", emoji: "🏞️" },
      { text: "PRAIA", emoji: "🏖️" },
      { text: "OCEANO", emoji: "🌊" },
      { text: "DESERTO", emoji: "🏜️" },
      { text: "FLORESTA", emoji: "🌲" },
    ],
    places: [
      { text: "CASA", emoji: "🏠" },
      { text: "ESCOLA", emoji: "🏫" },
      { text: "PARQUE", emoji: "🏞️" },
      { text: "PRÉDIO", emoji: "🏢" },
      { text: "LOJA", emoji: "🏪" },
      { text: "HOSPITAL", emoji: "🏥" },
      { text: "IGREJA", emoji: "⛪" },
      { text: "JARDIM", emoji: "🌺" },
      { text: "FAZENDA", emoji: "🌾" },
      { text: "CIDADE", emoji: "🏙️" },
    ],
    people: [
      { text: "BEBÊ", emoji: "👶" },
      { text: "CRIANÇA", emoji: "🧒" },
      { text: "MENINO", emoji: "👦" },
      { text: "MENINA", emoji: "👧" },
      { text: "AMIGO", emoji: "👫" },
      { text: "IRMÃO", emoji: "👦" },
      { text: "IRMÃ", emoji: "👧" },
      { text: "PRIMO", emoji: "👦" },
      { text: "PRIMA", emoji: "👧" },
    ],
    actions: [
      { text: "PULAR", emoji: "🦘" },
      { text: "CORRER", emoji: "🏃" },
      { text: "ANDAR", emoji: "🚶" },
      { text: "DORMIR", emoji: "😴" },
      { text: "COMER", emoji: "🍽️" },
      { text: "BEBER", emoji: "🥤" },
      { text: "BRINCAR", emoji: "🎮" },
      { text: "ESTUDAR", emoji: "📚" },
      { text: "CANTAR", emoji: "🎤" },
      { text: "DANÇAR", emoji: "💃" },
    ],
    colors: [
      { text: "AZUL", emoji: "🔵" },
      { text: "VERDE", emoji: "🟢" },
      { text: "VERMELHO", emoji: "🔴" },
      { text: "AMARELO", emoji: "🟡" },
      { text: "ROSA", emoji: "🌸" },
      { text: "ROXO", emoji: "🟣" },
      { text: "LARANJA", emoji: "🟠" },
      { text: "BRANCO", emoji: "⚪" },
      { text: "PRETO", emoji: "⚫" },
      { text: "CINZA", emoji: "⚪" },
    ],
    transport: [
      { text: "CARRO", emoji: "🚗" },
      { text: "ÔNIBUS", emoji: "🚌" },
      { text: "TREM", emoji: "🚂" },
      { text: "AVIÃO", emoji: "✈️" },
      { text: "BARCO", emoji: "⛵" },
      { text: "BICICLETA", emoji: "🚲" },
      { text: "MOTO", emoji: "🏍️" },
      { text: "CAMINHÃO", emoji: "🚚" },
    ],
    fantasy: [
      { text: "FADA", emoji: "🧚‍♀️" },
      { text: "BRUXA", emoji: "🧙‍♀️" },
      { text: "DRAGÃO", emoji: "🐉" },
      { text: "UNICÓRNIO", emoji: "🦄" },
      { text: "SEREIA", emoji: "🧜‍♀️" },
      { text: "FANTASMA", emoji: "👻" },
      { text: "ROBÔ", emoji: "🤖" },
      { text: "ALIEN", emoji: "👽" },
    ]
  },

  // ==========================================
  // NÍVEL DIFÍCIL - Palavras complexas
  // ==========================================
  hard: {
    animals: [
      { text: "ELEFANTE", emoji: "🐘" },
      { text: "GIRAFA", emoji: "🦒" },
      { text: "RINOCERONTE", emoji: "🦏" },
      { text: "HIPOPÓTAMO", emoji: "🦛" },
      { text: "CROCODILO", emoji: "🐊" },
      { text: "BORBOLETA", emoji: "🦋" },
      { text: "JOANINHA", emoji: "🐞" },
      { text: "CARACOL", emoji: "🐌" },
      { text: "TARTARUGA", emoji: "🐢" },
      { text: "DINOSSAURO", emoji: "🦕" },
    ],
    nature: [
      { text: "RELÂMPAGO", emoji: "⚡" },
      { text: "TROVÃO", emoji: "🌩️" },
      { text: "TERREMOTO", emoji: "🌍" },
      { text: "VULCÃO", emoji: "🌋" },
      { text: "CACHOEIRA", emoji: "🏞️" },
      { text: "ARCO-ÍRIS", emoji: "🌈" },
      { text: "TEMPESTADE", emoji: "⛈️" },
    ],
    objects: [
      { text: "COMPUTADOR", emoji: "💻" },
      { text: "TELEFONE", emoji: "📱" },
      { text: "TELEVISÃO", emoji: "📺" },
      { text: "GELADEIRA", emoji: "🧊" },
      { text: "FOGÃO", emoji: "🍳" },
      { text: "MICROONDAS", emoji: "🍲" },
      { text: "BRINQUEDO", emoji: "🧸" },
      { text: "PRESENTE", emoji: "🎁" },
      { text: "INSTRUMENTO", emoji: "🎸" },
      { text: "TELESCÓPIO", emoji: "🔭" },
      { text: "MICROSCÓPIO", emoji: "🔬" },
    ],
    emotions: [
      { text: "FELICIDADE", emoji: "😊" },
      { text: "ALEGRIA", emoji: "😄" },
      { text: "TRISTEZA", emoji: "😢" },
      { text: "SAUDADE", emoji: "💭" },
      { text: "AMOR", emoji: "❤️" },
      { text: "AMIZADE", emoji: "🤝" },
      { text: "CORAGEM", emoji: "💪" },
      { text: "ESPERANÇA", emoji: "🌟" },
    ],
    concepts: [
      { text: "ESTRELA", emoji: "⭐" },
      { text: "CORAÇÃO", emoji: "❤️" },
      { text: "FAMÍLIA", emoji: "👨‍👩‍👧‍👦" },
      { text: "EDUCAÇÃO", emoji: "🎓" },
      { text: "SABEDORIA", emoji: "🦉" },
      { text: "IMAGINAÇÃO", emoji: "💭" },
      { text: "AVENTURA", emoji: "🗺️" },
      { text: "DESCOBERTA", emoji: "🔍" },
    ]
  }
};

/**
 * Retorna todas as palavras de um nível, mescladas de todas as categorias
 */
function getAllWordsForLevel(level) {
  const levelWords = WORD_BANK[level];
  const allWords = [];

  for (const category in levelWords) {
    allWords.push(...levelWords[category]);
  }

  return allWords;
}

/**
 * Retorna palavras de uma categoria específica
 */
function getWordsByCategory(level, category) {
  return WORD_BANK[level][category] || [];
}

/**
 * Retorna uma palavra aleatória do nível
 */
function getRandomWord(level, excludeWords = []) {
  const allWords = getAllWordsForLevel(level);
  const availableWords = allWords.filter(w => !excludeWords.includes(w.text));

  if (availableWords.length === 0) {
    return null;
  }

  return availableWords[Math.floor(Math.random() * availableWords.length)];
}

/**
 * Retorna estatísticas do banco de palavras
 */
function getWordBankStats() {
  const stats = {};

  for (const level in WORD_BANK) {
    stats[level] = {
      total: getAllWordsForLevel(level).length,
      categories: Object.keys(WORD_BANK[level]).length
    };
  }

  return stats;
}

// Exporta para uso global
if (typeof window !== 'undefined') {
  window.WORD_BANK = WORD_BANK;
  window.getAllWordsForLevel = getAllWordsForLevel;
  window.getWordsByCategory = getWordsByCategory;
  window.getRandomWord = getRandomWord;
  window.getWordBankStats = getWordBankStats;
}
