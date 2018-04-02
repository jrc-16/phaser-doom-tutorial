var Menu = function( game ) {};

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    // we look at Game.js
    this.game.state.start('Game');
  },
  update: function() {

  }
};
