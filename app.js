/* global Vue */

new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    playerHealth: 100,
    monsterHealth: 100,
    moves: []
  },

  methods: {
    startGame: function() {
      this.gameStarted = true;
    },
    checkForWinners: function() {
      if (this.monsterHealth <= 0) {
        alert('You won!');
        this.giveUp();
        this.moves = [];
      } else if (this.playerHealth <= 0) {
        alert('You lost!');
        this.giveUp();
        this.moves = [];
      }
    },
    attack: function() {
      var playerAttack = Math.floor(5 + Math.random() * 8);
      var monsterAttack = Math.floor(5 + Math.random() * 8);
      this.monsterHealth -= playerAttack;
      this.moves.unshift('PLAYER HITS MONSTER FOR ' + playerAttack);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);

      this.checkForWinners();
    },
    specialAttack: function() {
      var playerAttack = Math.floor(10 + Math.random() * 8);
      var monsterAttack = Math.floor(5 + Math.random() * 8);
      this.monsterHealth -= playerAttack;
      this.moves.unshift('PLAYER HITS MONSTER FOR ' + playerAttack);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);

      this.checkForWinners();
    },
    heal: function() {
      var playerHealing = 10;
      var monsterAttack = Math.floor(5 + Math.random() * 8);
      this.playerHealth += playerHealing;
      this.moves.unshift('PLAYER HEALS THEMSELF FOR ' + playerHealing);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);

      this.checkForWinners();
    },
    giveUp: function() {
      this.gameStarted = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.momves = [];
    }
  }
});