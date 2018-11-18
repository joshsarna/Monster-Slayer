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
    attack: function() {
      var playerAttack = Math.floor(5 + Math.random() * 8);
      var monsterAttack = Math.floor(5 + Math.random() * 8);
      this.monsterHealth -= playerAttack;
      this.moves.push('PLAYER HITS MONSTER FOR ' + playerAttack);
      this.playerHealth -= monsterAttack;
      this.moves.push('MONSTER HITS PLAYER FOR ' + monsterAttack);
    }
  }
});