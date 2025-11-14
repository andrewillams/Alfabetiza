# 🎮 Joguinho das Letras - Alfabetização Divertida

Um jogo interativo e educativo para ajudar crianças de 4-5 anos a aprenderem a ler e escrever de forma lúdica e divertida!

## 🚀 Deploy Automático Configurado!

Este projeto possui **deploy automático** para GitHub Pages!

### ⚡ Ativação Rápida (Uma vez só):
👉 **[Ver Guia de Ativação Rápida](ATIVACAO_RAPIDA.md)** - 5 passos, 1 minuto

### 📖 Guia Completo:
👉 **[Ver Guia Completo de Deploy Automático](DEPLOY_AUTOMATICO.md)**

### 🌐 Após Ativado:
Seu jogo estará online em: **https://andrewillams.github.io/Alfabetiza/**

---

## ✨ Características

### 🎮 Gameplay
- 🎯 **3 Níveis de Dificuldade**: Fácil (3 letras), Médio (4-5 letras), Difícil (6+ letras)
- 📚 **400+ Palavras**: Banco gigante com 13 categorias diferentes
- 🎲 **Seleção Inteligente**: Sem repetição até esgotar todas as palavras
- 🔄 **Progressão Automática**: Muda de nível aos 10 e 20 pontos

### 🎨 Visual & Áudio
- 💜 **Design Moderno**: Cores vibrantes, gradientes e animações suaves
- 🔊 **Síntese de Voz**: Pronuncia palavras em português (pt-BR)
- 🎵 **7 Sons Interativos**: Acerto, erro, level up, estrelas e cliques
- 🎉 **Feedback Visual**: Confetes, estrelas flutuantes e animações

### ⚙️ Configurações
- 🔇 **Toggle de Sons**: Liga/desliga sons do jogo
- 🐱 **8 Modos de Categoria**: Todas, Animais, Comidas, Objetos, Natureza, Transportes, Cores, Fantasia
- 📊 **Modo Focado**: Jogue apenas com palavras de uma categoria específica

### 📱 Compatibilidade
- 💻 **Desktop**: Windows, Mac, Linux
- 📱 **Mobile**: iOS, Android (touch-friendly)
- 💾 **Offline**: Funciona sem internet após carregar
- 🌐 **Navegadores**: Chrome, Safari, Firefox, Edge

## 🎓 Pedagogia

O jogo foi desenvolvido com base em princípios de alfabetização infantil:

### ✅ Consciência Fonêmica
Associação entre imagem e som inicial da palavra

### ✅ Reconhecimento de Letras
Identificação visual de letras do alfabeto

### ✅ Estruturas Silábicas Progressivas
- **Nível Fácil**: Palavras de 3 letras (SOL, LUA, CÃO)
- **Nível Médio**: Palavras de 4-5 letras (GATO, BOLA, CASA)
- **Nível Difícil**: Palavras complexas (BRUXA, ESTRELA, CORAÇÃO)

### ✅ Reforço Multissensorial
Aprendizado através de visão (imagem + letras), audição (voz) e interação (toque/clique)

## 🚀 Como Usar

### No Computador

1. Baixe o arquivo `index.html`
2. Dê dois cliques no arquivo
3. O jogo abrirá no seu navegador padrão
4. Pronto para jogar! 🎉

### No Celular/Tablet

#### Opção 1: WhatsApp/Telegram
1. Envie o arquivo `index.html` para si mesmo
2. Abra o arquivo no dispositivo
3. Escolha "Abrir com navegador"

#### Opção 2: Download Direto
1. Faça o download do arquivo
2. Abra o gerenciador de arquivos
3. Toque no arquivo e escolha seu navegador

#### Opção 3: GitHub Pages (Online)
Acesse: `https://seu-usuario.github.io/Alfabetiza/`

## 🎮 Como Jogar

### Passo a Passo
1. **Veja o emoji** 🐱 - Representa a palavra
2. **Observe a palavra**: `G A _ O` - Uma letra está faltando
3. **Escolha a letra** - Clique na letra correta (T)
4. **Comemore!** 🎉 - Confetes, sons e estrelas ao acertar
5. **Continue** - Clique em "Próxima →" para nova palavra

### Controles
- **🔊 Ouvir**: Repete a palavra em voz alta
- **⚙️ Configurações**: Abre menu de opções
- **Teclado (PC)**: Digite a letra para selecioná-la

### Menu de Configurações
Clique no botão **⚙️** para:
- **Liga/desligar sons** do jogo
- **Escolher categoria**: Jogar só animais, comidas, etc.
- **Ver informações** sobre o jogo

👉 **[Ver Guia Completo de Funcionalidades](FUNCIONALIDADES.md)**

## 🌟 Níveis de Dificuldade

| Nível | Pontos Necessários | Tipo de Palavras |
|-------|-------------------|------------------|
| 🌟 Fácil | 0-9 | 3 letras (SOL, LUA) |
| 🌟🌟 Médio | 10-19 | 4-5 letras (GATO, BOLA) |
| 🌟🌟🌟 Difícil | 20+ | Palavras complexas (ESTRELA, CORAÇÃO) |

## 💡 Dicas para os Pais

- ✅ **Jogue junto**: Acompanhe e incentive seu filho
- ✅ **Use o áudio**: Clique em "🔊 Ouvir" para reforçar a pronúncia
- ✅ **Não tenha pressa**: Deixe a criança explorar e aprender no seu ritmo
- ✅ **Comemore os acertos**: O reforço positivo é fundamental
- ✅ **Sessões curtas**: 10-15 minutos por vez são suficientes

## 🔧 Personalização

Para personalizar o jogo:

1. Abra o arquivo `index.html` em um editor de texto
2. Procure pela seção `wordsByLevel`
3. Adicione ou modifique palavras conforme necessário

Exemplo:
```javascript
easy: [
  { text: "BOI", emoji: "🐄" },
  { text: "OVO", emoji: "🥚" }
]
```

## 📊 Funcionalidades

- ✅ **Auto-salvamento**: O recorde é salvo automaticamente no navegador
- ✅ **Sem repetição**: Palavras não se repetem até que todas sejam jogadas
- ✅ **Progressão automática**: Níveis mudam automaticamente com a pontuação
- ✅ **Feedback visual**: Cores diferentes para acerto (verde) e erro (vermelho)
- ✅ **Animações suaves**: Tudo pensado para atrair a atenção infantil

## 🌐 Publicar Online

Este projeto já vem com **GitHub Actions** configurado para deploy automático!

### ⚡ Para Ativar (Uma vez só):
Siga o guia: **[ATIVACAO_RAPIDA.md](ATIVACAO_RAPIDA.md)**

### 🤖 Como Funciona:
- Todo push → Deploy automático
- Sem configuração manual
- Atualizações em 1-2 minutos
- URL permanente: https://andrewillams.github.io/Alfabetiza/

## 🛠️ Tecnologias

- HTML5
- CSS3 (Animações e Gradientes)
- JavaScript Vanilla (Sem dependências)
- Web Speech API (Síntese de voz)
- LocalStorage (Salvamento de pontuação)

## 📱 Compatibilidade

- ✅ Chrome/Edge (Recomendado)
- ✅ Safari (iOS/macOS)
- ✅ Firefox
- ✅ Opera
- ✅ Navegadores mobile

## 📝 Licença

Livre para uso pessoal e educacional. Feito com ❤️ para ajudar na alfabetização infantil.

## 📦 O que há de novo (v2.0)

### ✅ Implementado
- ✅ **400+ palavras** (antes: 200)
- ✅ **Sistema de sons** com Web Audio API
- ✅ **Menu de configurações** interativo
- ✅ **8 modos de categoria** (Animais, Comidas, etc.)
- ✅ **Toggle de sons** (liga/desliga)
- ✅ **Contador de palavras únicas** jogadas
- ✅ **Bug de repetição** corrigido

### 🎯 Próximas Melhorias
- [ ] Modo de digitação (escrever palavra completa)
- [ ] Sistema de conquistas/medalhas
- [ ] Palavras customizadas pelos pais
- [ ] Temas visuais (cores diferentes)
- [ ] Modo multiplayer
- [ ] Gráfico de progresso temporal

---

**Desenvolvido por André para sua filha** 💜

*Bom aprendizado e muita diversão!* 🎉📚✨
