// The only purpose of this file is to load all the files into the game

var Preloader = function( game ) {};

Preloader.prototype = {
  preload: function() {

  },
  create: function() {
    // send us to the menu
    this.game.state.start('Menu');
  }
};
