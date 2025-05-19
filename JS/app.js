document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const title = document.getElementById("title");
  const restartBtn = document.getElementById("restart-btn");
  
  let battleshipIndex;
  
  function setupGame() {
    grid.innerHTML = ""; // Clear the grid

  // Create 9 squares
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.index = i;
    grid.appendChild(square);
  }

  // Randomly select the battleship location
 battleshipIndex = Math.floor(Math.random() * 9);

  // Add click event to each square
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("click", () => {
      const index = parseInt(square.dataset.index);

      // Prevent multiple guesses on the same square
      if (square.classList.contains("correct") || square.classList.contains("incorrect")) return;

      if (index === battleshipIndex) {
        square.classList.add("correct");
        alert("Hit! You found the battleship!");
      } else {
        square.classList.add("incorrect");
      }
    });
  });
}
restartBtn.addEventListener("click", setupGame);
setupGame();
});
