// Setup how the game scales in the browser

var Boot = function( game ) {};

Boot.prototype = {
  preload: function() {

  },
  create: function() {
    // specify each pixel is crisp
    this.game.stage.smoothed = false;

    // specify how to scale the game. in other words, the game viewport dosnt
    // scale therefore is fixed
    this.game.scale.minWidth = doom.baseWidth;
    this.game.scale.maxWidth = doom.baseWidth * doom.scale;
    this.game.scale.minHeight = doom.baseHeight;
    this.game.scale.maxHeight = doom.baseHeight * doom.scale;

    // ensures the game fits nicely in the browser
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // cache the right mouse click. this will prevent the browser default
    // dialog popping up.
    // we also start the Preloader.
    this.game.canvas.oncontextmenu = function(e) {
      e.preventDefault(); 
    };

    this.game.state.start('Preloader');
  }
};
