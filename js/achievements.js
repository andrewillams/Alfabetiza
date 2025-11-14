/**
 * 🏆 SISTEMA DE CONQUISTAS E MEDALHAS
 *
 * Recompensas e badges para motivar o aprendizado
 */

class AchievementSystem {
  constructor() {
    this.achievements = this.defineAchievements();
    this.unlockedAchievements = this.loadUnlocked();
  }

  /**
   * Define todas as conquistas disponíveis
   */
  defineAchievements() {
    return {
      // ========== CONQUISTAS DE PONTUAÇÃO ==========
      firstWord: {
        id: 'firstWord',
        title: '🌟 Primeira Palavra',
        description: 'Acertou sua primeira palavra!',
        emoji: '🌟',
        condition: (stats) => stats.score >= 1,
        tier: 'bronze'
      },

      score5: {
        id: 'score5',
        title: '⭐ Aprendiz',
        description: 'Alcançou 5 pontos',
        emoji: '⭐',
        condition: (stats) => stats.score >= 5,
        tier: 'bronze'
      },

      score10: {
        id: 'score10',
        title: '🌟 Estudante',
        description: 'Alcançou 10 pontos',
        emoji: '🌟',
        condition: (stats) => stats.score >= 10,
        tier: 'silver'
      },

      score20: {
        id: 'score20',
        title: '⭐ Expert',
        description: 'Alcançou 20 pontos',
        emoji: '⭐',
        condition: (stats) => stats.score >= 20,
        tier: 'gold'
      },

      score30: {
        id: 'score30',
        title: '🏆 Mestre',
        description: 'Alcançou 30 pontos',
        emoji: '🏆',
        condition: (stats) => stats.score >= 30,
        tier: 'platinum'
      },

      // ========== CONQUISTAS DE SEQUÊNCIA ==========
      streak3: {
        id: 'streak3',
        title: '🔥 Sequência de 3',
        description: 'Acertou 3 palavras seguidas',
        emoji: '🔥',
        condition: (stats) => stats.currentStreak >= 3,
        tier: 'bronze'
      },

      streak5: {
        id: 'streak5',
        title: '🔥 Sequência de 5',
        description: 'Acertou 5 palavras seguidas',
        emoji: '🔥',
        condition: (stats) => stats.currentStreak >= 5,
        tier: 'silver'
      },

      streak10: {
        id: 'streak10',
        title: '🔥 Em Chamas!',
        description: 'Acertou 10 palavras seguidas',
        emoji: '🔥',
        condition: (stats) => stats.currentStreak >= 10,
        tier: 'gold'
      },

      // ========== CONQUISTAS DE NÍVEIS ==========
      reachedMedium: {
        id: 'reachedMedium',
        title: '📈 Nível Médio',
        description: 'Chegou ao nível médio',
        emoji: '📈',
        condition: (stats) => stats.levelReached === 'medium' || stats.levelReached === 'hard',
        tier: 'bronze'
      },

      reachedHard: {
        id: 'reachedHard',
        title: '🚀 Nível Difícil',
        description: 'Chegou ao nível difícil',
        emoji: '🚀',
        condition: (stats) => stats.levelReached === 'hard',
        tier: 'silver'
      },

      // ========== CONQUISTAS DE CATEGORIAS ==========
      explorer: {
        id: 'explorer',
        title: '🗺️ Explorador',
        description: 'Jogou com 5 categorias diferentes',
        emoji: '🗺️',
        condition: (stats) => stats.categoriesPlayed >= 5,
        tier: 'silver'
      },

      master: {
        id: 'master',
        title: '🎓 Mestre das Categorias',
        description: 'Jogou com todas as categorias',
        emoji: '🎓',
        condition: (stats) => stats.categoriesPlayed >= 13,
        tier: 'gold'
      },

      // ========== CONQUISTAS ESPECIAIS ==========
      perfectDay: {
        id: 'perfectDay',
        title: '💯 Dia Perfeito',
        description: 'Acertou 10 palavras sem errar nenhuma',
        emoji: '💯',
        condition: (stats) => stats.score >= 10 && stats.errors === 0,
        tier: 'platinum'
      },

      speedster: {
        id: 'speedster',
        title: '⚡ Velocista',
        description: 'Completou 20 palavras em uma sessão',
        emoji: '⚡',
        condition: (stats) => stats.wordsInSession >= 20,
        tier: 'gold'
      },

      dedicated: {
        id: 'dedicated',
        title: '📚 Dedicado',
        description: 'Jogou 50 palavras únicas',
        emoji: '📚',
        condition: (stats) => stats.uniqueWords >= 50,
        tier: 'gold'
      },

      champion: {
        id: 'champion',
        title: '👑 Campeão',
        description: 'Bateu o recorde pessoal 5 vezes',
        emoji: '👑',
        condition: (stats) => stats.recordsBroken >= 5,
        tier: 'platinum'
      }
    };
  }

  /**
   * Carrega conquistas desbloqueadas do LocalStorage
   */
  loadUnlocked() {
    try {
      const saved = localStorage.getItem('alfabetiza_achievements');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Salva conquistas desbloqueadas no LocalStorage
   */
  saveUnlocked() {
    try {
      localStorage.setItem('alfabetiza_achievements', JSON.stringify(this.unlockedAchievements));
    } catch (e) {
      console.warn('Erro ao salvar conquistas:', e);
    }
  }

  /**
   * Verifica e desbloqueia conquistas baseado nas estatísticas
   */
  checkAchievements(stats) {
    const newlyUnlocked = [];

    for (const key in this.achievements) {
      const achievement = this.achievements[key];

      // Pula se já foi desbloqueada
      if (this.unlockedAchievements.includes(achievement.id)) {
        continue;
      }

      // Verifica se a condição foi atingida
      if (achievement.condition(stats)) {
        this.unlockAchievement(achievement.id);
        newlyUnlocked.push(achievement);
      }
    }

    return newlyUnlocked;
  }

  /**
   * Desbloqueia uma conquista
   */
  unlockAchievement(achievementId) {
    if (!this.unlockedAchievements.includes(achievementId)) {
      this.unlockedAchievements.push(achievementId);
      this.saveUnlocked();
    }
  }

  /**
   * Verifica se uma conquista foi desbloqueada
   */
  isUnlocked(achievementId) {
    return this.unlockedAchievements.includes(achievementId);
  }

  /**
   * Retorna todas as conquistas desbloqueadas
   */
  getUnlockedAchievements() {
    return this.unlockedAchievements.map(id => this.achievements[id]).filter(a => a);
  }

  /**
   * Retorna todas as conquistas bloqueadas
   */
  getLockedAchievements() {
    return Object.values(this.achievements).filter(a => !this.isUnlocked(a.id));
  }

  /**
   * Retorna o progresso total (% de conquistas desbloqueadas)
   */
  getProgress() {
    const total = Object.keys(this.achievements).length;
    const unlocked = this.unlockedAchievements.length;
    return Math.round((unlocked / total) * 100);
  }

  /**
   * Reseta todas as conquistas (para debug/teste)
   */
  reset() {
    this.unlockedAchievements = [];
    this.saveUnlocked();
  }
}

// Exporta instância global
if (typeof window !== 'undefined') {
  window.achievementSystem = new AchievementSystem();
}
