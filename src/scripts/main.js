import Game from '../modules/Game.class.js';

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('.grid');
  const scoreDisplay = document.querySelector('.game-score');
  const messageWin = document.querySelector('.message-win');
  const messageLose = document.querySelector('.message-lose');
  const restartBtn = document.querySelector('.restart-btn');

  const game = new Game(null, render);

  function render() {
    const board = game.getState();
    const score = game.getScore();
    const gameStatus = game.getStatus();

    gridContainer.innerHTML = '';

    board.forEach((row, i) => {
      row.forEach((value, j) => {
        const tile = document.createElement('div');

        tile.classList.add('tile', `tile-${value}`);
        tile.dataset.row = i;
        tile.dataset.col = j;
        tile.textContent = value !== 0 ? value : '';
        gridContainer.appendChild(tile);
      });
    });

    scoreDisplay.textContent = score;
    messageWin.classList.toggle('hidden', gameStatus !== 'win');
    messageLose.classList.toggle('hidden', gameStatus !== 'lose');
  }

  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        game.moveLeft();
        break;
      case 'ArrowRight':
        game.moveRight();
        break;
      case 'ArrowUp':
        game.moveUp();
        break;
      case 'ArrowDown':
        game.moveDown();
        break;
    }
  });

  restartBtn.addEventListener('click', () => {
    game.restart();
  });

  render();
});
