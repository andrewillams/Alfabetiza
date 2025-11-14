/**
 * 🔊 SISTEMA DE SONS DO JOGO
 *
 * Usa Web Audio API para gerar sons programaticamente
 * Não precisa de arquivos externos!
 */

class GameSounds {
  constructor() {
    this.audioContext = null;
    this.enabled = true;
    this.initAudio();
  }

  initAudio() {
    try {
      // Cria contexto de áudio
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
    } catch (e) {
      console.warn('Web Audio API não suportada:', e);
      this.enabled = false;
    }
  }

  // Retoma contexto de áudio (necessário após interação do usuário)
  resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  // Toca uma nota com frequência e duração específicas
  playTone(frequency, duration, type = 'sine', volume = 0.3) {
    if (!this.enabled || !this.audioContext) return;

    this.resume();

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    // Envelope (fade in/out)
    const now = this.audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  // Som de ACERTO - alegre e celebrativo
  playCorrect() {
    if (!this.enabled) return;

    // Arpejo ascendente (Dó - Mi - Sol - Dó)
    this.playTone(523.25, 0.1, 'sine', 0.2); // C5
    setTimeout(() => this.playTone(659.25, 0.1, 'sine', 0.2), 80); // E5
    setTimeout(() => this.playTone(783.99, 0.15, 'sine', 0.25), 160); // G5
    setTimeout(() => this.playTone(1046.50, 0.2, 'triangle', 0.3), 240); // C6
  }

  // Som de ERRO - gentil e encorajador
  playWrong() {
    if (!this.enabled) return;

    // Duas notas descendentes suaves
    this.playTone(392.00, 0.15, 'sine', 0.15); // G4
    setTimeout(() => this.playTone(329.63, 0.2, 'sine', 0.15), 100); // E4
  }

  // Som ao clicar em botão
  playClick() {
    if (!this.enabled) return;

    this.playTone(800, 0.05, 'square', 0.1);
  }

  // Som de mudança de nível
  playLevelUp() {
    if (!this.enabled) return;

    // Escala ascendente rápida
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.1, 'triangle', 0.2), i * 50);
    });
  }

  // Som de estrelinhas/confete
  playStar() {
    if (!this.enabled) return;

    // Tom alto e brilhante
    this.playTone(2093.00, 0.15, 'sine', 0.15); // C7
    setTimeout(() => this.playTone(2637.02, 0.1, 'sine', 0.1), 50); // E7
  }

  // Som de início do jogo
  playStart() {
    if (!this.enabled) return;

    // Acorde amigável
    this.playTone(523.25, 0.3, 'sine', 0.15); // C
    this.playTone(659.25, 0.3, 'sine', 0.15); // E
    this.playTone(783.99, 0.3, 'sine', 0.15); // G
  }

  // Ativa/desativa sons
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }
}

// Exporta instância global
if (typeof window !== 'undefined') {
  window.gameSounds = new GameSounds();
}
