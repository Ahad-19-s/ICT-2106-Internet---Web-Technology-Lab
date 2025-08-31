const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // cols
  [0,4,8], [2,4,6]           // diagonals
];

function startGame(){
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  running = true;
}

function cellClicked(){
  const index = this.dataset.index;
  if(board[index] !== "" || !running) return;

  board[index] = currentPlayer;
  this.textContent = currentPlayer;

  checkWinner();
}

function checkWinner(){
  let winner = false;

  for(let condition of winPatterns){
    const [a,b,c] = condition;
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      winner = true;

      // 🔹 জেতা সেলগুলো হাইলাইট করো
      document.querySelector(`[data-index='${a}']`).classList.add("win");
      document.querySelector(`[data-index='${b}']`).classList.add("win");
      document.querySelector(`[data-index='${c}']`).classList.add("win");
      
      break;
    }
  }

  if(winner){
    statusText.textContent = `🎉 Player ${currentPlayer} wins!`;
    running = false;
  }
  else if(!board.includes("")){
    statusText.textContent = "It's a Draw!";
    running = false;
  }
  else{
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}


function restartGame(){
  board.fill("");
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win"); // 🔹 আগের লাইন রিসেট করবে
  });
  currentPlayer = "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  running = true;
}

startGame();
