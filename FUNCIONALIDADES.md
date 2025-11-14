# 🎮 GUIA DE FUNCIONALIDADES - Joguinho das Letras

## 📖 Índice
1. [Funcionalidades Principais](#funcionalidades-principais)
2. [Menu de Configurações](#menu-de-configurações)
3. [Modo de Categoria](#modo-de-categoria)
4. [Sistema de Sons](#sistema-de-sons)
5. [Sistema de Pontuação](#sistema-de-pontuação)
6. [Dicas de Uso](#dicas-de-uso)

---

## ✨ Funcionalidades Principais

### 🎯 3 Níveis de Dificuldade
O jogo possui progressão automática baseada na pontuação:

| Nível | Pontos | Tipo de Palavras | Mudança |
|-------|--------|------------------|---------|
| 🌟 Fácil | 0-9 | 3 letras (SOL, LUA, PAI) | - |
| 🌟🌟 Médio | 10-19 | 4-5 letras (GATO, BOLA, CASA) | Aos 10 pontos |
| 🌟🌟🌟 Difícil | 20+ | 6+ letras (ELEFANTE, ESTRELA) | Aos 20 pontos |

**Características:**
- Mudança automática ao atingir pontuação
- Som especial de "level up"
- Confetes e animação
- Histórico de palavras é resetado

### 📚 Banco de Palavras Gigante
- **400+ palavras** únicas
- **13 categorias** diferentes
- **Seleção aleatória** inteligente
- **Sem repetição** até esgotar todas as palavras

---

## ⚙️ Menu de Configurações

### Como Acessar
Clique no botão **⚙️** no canto superior direito da tela.

### Opções Disponíveis

#### 1. 🔊 Toggle de Sons
Liga ou desliga os sons do jogo:
- **Ligado** (padrão): Sons de acerto, erro, level up, estrelas
- **Desligado**: Jogo silencioso (mantém apenas síntese de voz)

**Como usar:**
- Clique no toggle (switch azul/cinza)
- Verde = Ligado | Cinza = Desligado
- Configuração é mantida durante a sessão

#### 2. 🎮 Modo de Categoria
Escolha jogar com palavras de categorias específicas:

**Opções:**
1. **🌟 Todas** (padrão)
   - Mistura todas as categorias
   - Máxima variedade

2. **🐱 Animais**
   - Apenas palavras de animais
   - Ex: GATO, LEÃO, PEIXE, BALEIA

3. **🍕 Comidas**
   - Apenas alimentos
   - Ex: PIZZA, BOLO, BANANA, CHOCOLATE

4. **⚽ Objetos**
   - Coisas do dia a dia
   - Ex: BOLA, MESA, LIVRO, CADEIRA

5. **🌸 Natureza**
   - Elementos naturais
   - Ex: FLOR, ÁRVORE, CHUVA, SOL

6. **🚗 Transportes**
   - Veículos
   - Ex: CARRO, AVIÃO, TREM, BARCO

7. **🎨 Cores**
   - Cores e tons
   - Ex: AZUL, VERDE, ROSA, AMARELO

8. **🧚‍♀️ Fantasia**
   - Personagens mágicos
   - Ex: FADA, BRUXA, DRAGÃO, UNICÓRNIO

**Como usar:**
- Clique no card da categoria desejada
- O card ficará destacado (roxo)
- O jogo reinicia com a nova categoria
- Modal fecha automaticamente

**Observações:**
- Ao trocar categoria, a pontuação **não** é resetada
- O histórico de palavras usadas **é** resetado
- Se categoria não tem palavras no nível atual, volta para "Todas"

---

## 🔊 Sistema de Sons

### Tipos de Sons

#### 1. ✅ Som de Acerto
- **Quando:** Acerta a letra correta
- **Som:** Arpejo alegre ascendente (Dó-Mi-Sol-Dó)
- **Duração:** 0.4 segundos
- **Efeito:** Celebrativo e recompensador

#### 2. ❌ Som de Erro
- **Quando:** Erra a letra
- **Som:** Duas notas descendentes suaves
- **Duração:** 0.3 segundos
- **Efeito:** Gentil e encorajador (não frustra)

#### 3. 🏆 Som de Level Up
- **Quando:** Muda de nível (10 e 20 pontos)
- **Som:** Escala ascendente rápida (8 notas)
- **Duração:** 0.8 segundos
- **Efeito:** Fanfarra triunfal

#### 4. ✨ Som de Estrela
- **Quando:** Aparecem as estrelinhas ao acertar
- **Som:** Tom alto e brilhante
- **Duração:** 0.15 segundos
- **Efeito:** Tinkling mágico

#### 5. 🖱️ Som de Clique
- **Quando:** Clica em botões
- **Som:** Tom curto
- **Duração:** 0.05 segundos
- **Efeito:** Feedback tátil

### Tecnologia
- **Web Audio API** nativa do navegador
- Sons gerados programaticamente (sem arquivos!)
- Funciona offline
- Leve (< 5KB de código)
- Compatível com todos navegadores modernos

---

## 🏆 Sistema de Pontuação

### Como Funciona
- **+1 ponto** por cada palavra acertada
- **Recorde** é salvo automaticamente (LocalStorage)
- **Barra de progresso** visual (máximo 30 pontos)

### Estatísticas Exibidas
1. **Palavrinhas certas:** Total de acertos na sessão atual
2. **🏆 Recorde:** Melhor pontuação de todas as sessões
3. **📖 Palavras diferentes:** Quantas palavras únicas foram jogadas

### Comportamento
- Pontuação **não** reseta ao trocar categoria
- Pontuação **não** reseta ao mudar nível
- Recorde **persiste** entre sessões (salvo no navegador)
- Contador de palavras únicas **não** reseta durante sessão

---

## 💡 Dicas de Uso

### Para os Pais

#### 🎯 Escolhendo a Categoria Certa
- **Início:** Use "Todas" para máxima variedade
- **Foco temático:** Escolha categoria específica (ex: "Animais" se criança gosta)
- **Reforço:** Use categoria que criança tem dificuldade

#### 🔊 Sobre os Sons
- Sons ajudam no aprendizado (reforço positivo)
- Se criança se distrai, pode desligar
- Sons são apropriados para a idade (suaves)

#### 📈 Progressão
- Deixe criança jogar no seu ritmo
- Não force mudança de nível
- Comemore os acertos juntos!

#### ⏱️ Duração das Sessões
- **Ideal:** 10-15 minutos por sessão
- **Máximo:** 20 minutos
- Faça pausas regulares

### Para as Crianças

#### 🎮 Como Jogar
1. Olhe o desenho 🐱
2. Veja a palavra com letra faltando: `G A _ O`
3. Pense qual letra está faltando
4. Clique na letra certa
5. Veja os confetes! 🎉
6. Clique em "Próxima →" para continuar

#### 🆘 Se Errar
- Não tem problema! ❤️
- Tente de novo
- Pense no som da palavra
- Clique em "🔊 Ouvir" para ouvir a palavra

#### 🌟 Dicas
- Use o teclado (se estiver no computador)
- Peça ajuda se precisar
- Divirta-se! É um jogo! 🎮

---

## 🔧 Resolução de Problemas

### Sons não funcionam
- Verifique se toggle está **ligado** (⚙️ → Sons)
- Aumente volume do dispositivo
- Alguns navegadores bloqueiam áudio automático (clique na tela primeiro)

### Categoria não tem palavras
- Algumas categorias podem não ter palavras em todos os níveis
- O jogo volta automaticamente para "Todas"
- Exemplo: "Transportes" tem poucas palavras no nível Fácil

### Jogo muito fácil/difícil
- Escolha categoria específica para ajustar dificuldade
- "Comidas" e "Animais" tendem a ser mais fáceis
- "Fantasia" tende a ser mais difícil

### Modal não abre
- Recarregue a página (F5)
- Limpe cache do navegador
- Teste em outro navegador

---

## 📊 Estatísticas por Categoria

### Palavras por Categoria (Nível Médio)

| Categoria | Quantidade | Exemplos |
|-----------|-----------|----------|
| Animais | 60 | GATO, LEÃO, BALEIA, PINGUIM |
| Comidas | 71 | PIZZA, BOLO, CHOCOLATE, SORVETE |
| Objetos | 82 | BOLA, MESA, LIVRO, TELEFONE |
| Natureza | 16 | FLOR, ÁRVORE, CHUVA, VENTO |
| Lugares | 10 | CASA, ESCOLA, PARQUE, JARDIM |
| Pessoas | 9 | BEBÊ, CRIANÇA, AMIGO, IRMÃO |
| Ações | 10 | PULAR, CORRER, DORMIR, COMER |
| Cores | 10 | AZUL, VERDE, ROSA, VERMELHO |
| Transportes | 8 | CARRO, AVIÃO, TREM, BARCO |
| Fantasia | 8 | FADA, BRUXA, DRAGÃO, UNICÓRNIO |

---

## 🎨 Personalizações Futuras

### Em Desenvolvimento
- [ ] Modo de digitação (escrever palavra completa)
- [ ] Conquistas e medalhas
- [ ] Palavras customizadas pelos pais
- [ ] Temas visuais (cores diferentes)
- [ ] Modo multiplayer
- [ ] Histórico de progresso

### Sugestões?
Se tiver ideias de melhorias, entre em contato! 💡

---

## 📱 Compatibilidade

### Navegadores Testados
- ✅ Chrome/Edge (Recomendado)
- ✅ Safari (iOS/macOS)
- ✅ Firefox
- ✅ Opera
- ✅ Brave

### Dispositivos
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablet (iOS, Android)
- ✅ Smartphone (iOS, Android)

### Requisitos
- Navegador moderno (2020+)
- JavaScript habilitado
- LocalStorage habilitado (para salvar recorde)

---

**Desenvolvido com ❤️ para alfabetização infantil**

*Versão 2.0 - Atualizado em 14/11/2025*
