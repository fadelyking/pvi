<script>
    let progress = 50; 
    const progressStep = 1; 
    const maxProgress = 100; 
    const minProgress = 0; 
    
    export function clickLeft() {
      if (progress > minProgress) {
        progress += progressStep;
      }
      checkWin();
    }
  
   export function clickRight() {
      if (progress < maxProgress) {
        progress -= progressStep;
      }
      checkWin();
    }
  
    export function checkWin() {
      if (progress <= minProgress) {
        alert("Right side wins!");
        resetGame();
      } else if (progress >= maxProgress) {
        alert("Left side wins!");
        resetGame();
      }
    }
  
    export function resetGame() {
      progress = 50; 
    }
  </script>


  <div class="game-container">
    <button class="button" on:click={clickLeft}>Left</button>
    
    <div class="progress-bar">
      <div class="progress" style="--progress-width: {progress}%"></div>
    </div>
  
    <button class="button" on:click={clickRight}>Right</button>
  </div>
  

    
  <style>
    .game-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .progress-bar {
      width: 300px;
      height: 30px;
      background-color: blue;
      position: relative;
      border-radius: 3em;
    }
  
    .progress {
      background-color: green;
      height: 100%;
      border-radius: 3em;
      width: var(--progress-width);
    }
  </style>