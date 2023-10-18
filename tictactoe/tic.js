let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');

function handleCellClick(index) {
  if (board[index] === '' && !checkWinner()) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
      showWinnerPopup(`Player ${currentPlayer} wins!`);
    } else if (board.every(cell => cell !== '')) {
      showWinnerPopup("It's a draw!");
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  board.fill('');
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}

function showWinnerPopup(message) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <p>${message}</p>
      <button onclick="resetGameAndClosePopup()">New Game</button>
    </div>
  `;
  document.body.appendChild(popup);
}

function resetGameAndClosePopup() {
  resetBoard();
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
  }
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});