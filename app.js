/* global Vue */

var vm = new Vue({
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
    monsterAttacks: function() {
      var monsterAttack = this.calculateDamage(5, 8);
      this.playerHealth -= monsterAttack;
      this.moves.unshift('MONSTER HITS PLAYER FOR ' + monsterAttack);
    },
    attack: function() {
      var playerAttack = this.calculateDamage(5, 6);
      this.monsterHealth -= playerAttack;
      this.moves.unshift('PLAYER HITS MONSTER FOR ' + playerAttack);

      this.monsterAttacks();
      this.checkForWinners();
    },
    specialAttack: function() {
      var playerAttack = this.calculateDamage(10, 6);
      this.monsterHealth -= playerAttack;
      this.moves.unshift('PLAYER HITS MONSTER HARD FOR ' + playerAttack);

      this.monsterAttacks();
      this.checkForWinners();
    },
    heal: function() {
      var playerHealing = Math.min(100 - this.playerHealth, 10);
      this.playerHealth += playerHealing;
      this.moves.unshift('PLAYER HEALS THEMSELF FOR ' + playerHealing);

      this.monsterAttacks();
      this.checkForWinners();
    },
    giveUp: function() {
      this.gameStarted = false;
    }
  }
});

console.log(vm);