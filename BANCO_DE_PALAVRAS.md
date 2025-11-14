# 📚 Banco de Palavras - Sistema Inteligente

## 🎯 Visão Geral

O joguinho agora possui um **banco de palavras gigante** com mais de **200 palavras** organizadas por:
- **Nível de dificuldade** (Fácil, Médio, Difícil)
- **Categorias temáticas** (Animais, Comida, Natureza, etc.)

## 📊 Estatísticas do Banco

### Nível Fácil (3 letras)
- **Total**: ~30 palavras
- **Categorias**: 5
  - Animais (BOI, CÃO, etc.)
  - Natureza (SOL, LUA, MAR, etc.)
  - Família (PAI, MÃE, AVÓ, AVÔ, TIO, TIA)
  - Objetos (PÉ, MÃO, REI, etc.)
  - Comida (PÃO, OVO, CHÁ, MEL, SAL)
  - Outros (RUA, BOA, SIM, NÃO, PAZ, etc.)

### Nível Médio (4-5 letras)
- **Total**: ~150 palavras
- **Categorias**: 9
  - Animais (GATO, RATO, PATO, SAPO, URSO, LEÃO, ZEBRA, etc.)
  - Comida (BOLO, PIZZA, SOPA, BANANA, MAÇÃ, LARANJA, etc.)
  - Objetos (BOLA, MESA, MALA, LIVRO, LÁPIS, etc.)
  - Natureza (FLOR, ÁRVORE, NUVEM, CHUVA, VENTO, etc.)
  - Lugares (CASA, ESCOLA, PARQUE, PRÉDIO, JARDIM, etc.)
  - Pessoas (BEBÊ, CRIANÇA, MENINO, MENINA, AMIGO, etc.)
  - Ações (PULAR, CORRER, ANDAR, DORMIR, COMER, etc.)
  - Cores (AZUL, VERDE, VERMELHO, AMARELO, ROSA, etc.)
  - Transporte (CARRO, ÔNIBUS, TREM, AVIÃO, BARCO, etc.)
  - Fantasia (FADA, BRUXA, DRAGÃO, UNICÓRNIO, etc.)

### Nível Difícil (palavras complexas)
- **Total**: ~30 palavras
- **Categorias**: 4
  - Animais (ELEFANTE, GIRAFA, RINOCERONTE, HIPOPÓTAMO, etc.)
  - Natureza (RELÂMPAGO, TROVÃO, TERREMOTO, VULCÃO, etc.)
  - Objetos (COMPUTADOR, TELEFONE, TELEVISÃO, GELADEIRA, etc.)
  - Emoções (FELICIDADE, ALEGRIA, TRISTEZA, AMOR, CORAGEM, etc.)
  - Conceitos (ESTRELA, CORAÇÃO, FAMÍLIA, EDUCAÇÃO, etc.)

## 🎲 Sistema de Seleção Aleatória

### Como Funciona:

1. **Seleção Inteligente**
   - O jogo escolhe palavras aleatoriamente do nível atual
   - Nunca repete uma palavra até que todas sejam jogadas
   - Quando todas as palavras do nível forem usadas, o histórico é resetado
   - Cada nível mantém seu próprio histórico de palavras usadas

2. **Progressão de Níveis**
   - **Nível Fácil** → Nível Médio (após 10 acertos)
   - **Nível Médio** → Nível Difícil (após 20 acertos)
   - Ao mudar de nível, o histórico de palavras é resetado

3. **Contador de Palavras Únicas**
   - O jogo rastreia quantas palavras diferentes foram jogadas
   - Exibido na interface: "📖 X palavras diferentes jogadas"
   - Conta palavras únicas em toda a sessão (não reseta ao mudar de nível)

## 🔧 Como Funciona Tecnicamente

### Arquivo: `js/words-bank.js`

```javascript
// Estrutura do banco
const WORD_BANK = {
  easy: {
    animals: [...],
    nature: [...],
    // ... mais categorias
  },
  medium: {
    animals: [...],
    food: [...],
    // ... mais categorias
  },
  hard: {
    animals: [...],
    emotions: [...],
    // ... mais categorias
  }
};
```

### Funções Disponíveis:

1. **`getAllWordsForLevel(level)`**
   - Retorna todas as palavras de um nível
   - Mescla todas as categorias

2. **`getWordsByCategory(level, category)`**
   - Retorna palavras de uma categoria específica
   - Útil para expansões futuras

3. **`getRandomWord(level, excludeWords)`**
   - Retorna palavra aleatória
   - Pode excluir palavras específicas

4. **`getWordBankStats()`**
   - Retorna estatísticas do banco
   - Mostra total de palavras e categorias por nível

## 📈 Vantagens do Novo Sistema

### ✅ Antes (Sistema Antigo):
- ❌ 22 palavras estáticas
- ❌ Repetia palavras rapidamente
- ❌ Limitado e previsível
- ❌ Bug de repetição no nível fácil

### ✅ Agora (Sistema Novo):
- ✅ **200+ palavras** dinâmicas
- ✅ Seleção verdadeiramente aleatória
- ✅ Organizado por categorias
- ✅ Fácil adicionar novas palavras
- ✅ Sem repetição até esgotar todas
- ✅ Contador de palavras únicas
- ✅ Bug corrigido

## 🚀 Expandindo o Banco de Palavras

### Como Adicionar Novas Palavras:

1. Abra `js/words-bank.js`
2. Escolha o nível (`easy`, `medium`, `hard`)
3. Escolha a categoria ou crie uma nova
4. Adicione a palavra:

```javascript
medium: {
  animals: [
    // Adicione aqui
    { text: "COELHO", emoji: "🐰" },
  ]
}
```

### Dicas para Adicionar Palavras:

**Nível Fácil:**
- Palavras de 3 letras
- Conceitos simples do dia a dia
- Fonética clara

**Nível Médio:**
- Palavras de 4-5 letras
- Vocabulário infantil comum
- Objetos e animais conhecidos

**Nível Difícil:**
- Palavras de 6+ letras
- Conceitos mais abstratos
- Pode incluir hífen ou acento

## 🎨 Categorias Disponíveis

### Todas as Categorias:
1. **animals** - Animais
2. **food** - Comidas
3. **nature** - Natureza
4. **objects** - Objetos
5. **places** - Lugares
6. **people** - Pessoas
7. **actions** - Ações
8. **colors** - Cores
9. **transport** - Transportes
10. **fantasy** - Fantasia
11. **family** - Família
12. **emotions** - Emoções
13. **concepts** - Conceitos abstratos

## 🔮 Futuras Expansões Possíveis

### 1. Modo de Categoria
Permitir escolher jogar apenas uma categoria:
```javascript
// Exemplo futuro
playCategory('animals', 'medium');
```

### 2. Modo Temático
Criar temas especiais:
- Dia dos Animais
- Frutas e Legumes
- Profissões
- Esportes

### 3. API Externa (Opcional)
Buscar palavras de uma API online para infinitas possibilidades:
```javascript
// Exemplo futuro
async function fetchRandomWord(level) {
  // Busca palavra de API
  // Fallback para banco local se offline
}
```

### 4. Personalização
Permitir pais/professores adicionarem palavras customizadas:
- Interface para adicionar palavras
- Salvar no localStorage
- Importar/exportar listas

## 📊 Monitoramento e Debug

### Ver Estatísticas no Console:

Ao abrir o jogo, o console mostra:
```
📚 BANCO DE PALAVRAS CARREGADO:
   Nível Fácil: 30 palavras (5 categorias)
   Nível Médio: 150 palavras (9 categorias)
   Nível Difícil: 30 palavras (4 categorias)
   TOTAL: 210 palavras! 🎉
```

### Ver no Console do Navegador:

Aperte **F12** e veja as estatísticas!

---

## 🎯 Resumo

O novo sistema de palavras torna o joguinho:
- **Muito mais divertido** (200+ palavras!)
- **Educativamente rico** (categorias organizadas)
- **Tecnicamente robusto** (sem bugs de repetição)
- **Fácil de expandir** (adicione quantas palavras quiser)

**Bom jogo e muito aprendizado!** 🎉📚✨
