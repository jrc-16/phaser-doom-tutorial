// Holds the main Phaser variable

window.onload = function() {

  // Make game var public
  doom.phaserGame = new Phaser.Game(doom.baseWidth, doom.baseHeight, Phaser.AUTO);

  // setup states
  doom.phaserGame.state.add('Boot', Boot);
  doom.phaserGame.state.add('Preloader', Preloader);
  doom.phaserGame.state.add('Menu', Menu);
  doom.phaserGame.state.add('Game', Game);

  // Start the game
  doom.phaserGame.state.start('Boot');

};
