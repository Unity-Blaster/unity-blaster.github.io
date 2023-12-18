const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randNameAnim() {
  setTimeout(() => {
    const randName = document.querySelector(".randName");
    const randNamelength = Number(randName.textContent.length);
    // randName.onmouseover = event => {
    let iterations = 0;
      
    const interval = setInterval(() => {
      randName.innerText = randName.innerText.split("")
        .map((letter, index) => {
          if (index < iterations) {
            return randName.dataset.value[index];
          }
          
          return letters[Math.floor(Math.random() * (randNamelength + 2))]
        })
        .join("");
        
      if (iterations >= randName.dataset.value.length) {
        clearInterval(interval);
      }
        
      iterations += 1 / 2;
    }, randNamelength);
    // }
  }, 0);
}

// declare a var and generate random no between 0.2 and 0.8
// var random = Math.random() * (0.8 - 0.2) + 0.2;

// make a function that retuns the val 10-10
// function randomA() {
//   return Math.floor(Math.random() * 256)
// }

