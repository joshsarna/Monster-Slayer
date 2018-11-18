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
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.moves = [];
    },
    checkForWinners: function() {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        alert('You won!');
        this.giveUp();
      } else if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        alert('You lost!');
        this.giveUp();
      }
    },
    calculateDamage: function(min, range) {
      return Math.floor(min + Math.random() * range);
    },
    attack: function() {
      var playerAttack = this.calculateDamage(5, 6);
      var monsterAttack = this.calculateDamage(5, 8);
      this.monsterHealth -= playerAttack;
      this.moves.unshift('PLAYER HITS MONSTER FOR ' + playerAttack);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);

      this.checkForWinners();
    },
    specialAttack: function() {
      var playerAttack = this.calculateDamage(10, 6);
      var monsterAttack = this.calculateDamage(5, 8);
      this.monsterHealth -= playerAttack;
      this.moves.unshift('PLAYER HITS MONSTER FOR ' + playerAttack);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);

      this.checkForWinners();
    },
    heal: function() {
      var playerHealing = 10;
      var monsterAttack = this.calculateDamage(5, 8);
      this.playerHealth += playerHealing;
      this.moves.unshift('PLAYER HEALS THEMSELF FOR ' + playerHealing);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);

      this.checkForWinners();
    },
    giveUp: function() {
      this.gameStarted = false;
    }
  }
});