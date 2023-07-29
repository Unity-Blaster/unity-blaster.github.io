const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h3").onmouseover = event => {
  let iterations = 0;
  
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter,index) => {
        if(index < iterations) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iterations >= event.target.dataset.value.length){
      clearInterval(interval);
    } 
    
    iterations += 1/2;
  }, 24);
}

// declare a var and generate random no between 0.2 and 0.8
// var random = Math.random() * (0.8 - 0.2) + 0.2;

// make a function that retuns the val 10-10
// function randomA() {
//   return Math.floor(Math.random() * 256)
// }

