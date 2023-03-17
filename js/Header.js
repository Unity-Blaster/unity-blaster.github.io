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

// Get the div with the "box" class
    var he1 = document.getElementById("he1");
    var ft = document.getElementById("ft");

    //// Generate random values for the red, green, and blue color channels
    ////var r1 = Math.floor(Math.random() * 256); var g1 = Math.floor(Math.random() * 256); var b1 = Math.floor(Math.random() * 256);
    //// var r2 = Math.floor(Math.random() * 256); var g2 = Math.floor(Math.random() * 256); var b2 = Math.floor(Math.random() * 256);

    //// var r3 = Math.floor(Math.random() * 256); var g3 = Math.floor(Math.random() * 256); var b3 = Math.floor(Math.random() * 256);
    //// var r4 = Math.floor(Math.random() * 256); var g4 = Math.floor(Math.random() * 256); var b4 = Math.floor(Math.random() * 256);

    //// var r5 = Math.floor(Math.random() * 256); var g5 = Math.floor(Math.random() * 256); var b5 = Math.floor(Math.random() * 256);
    //// var r6 = Math.floor(Math.random() * 256); var g6 = Math.floor(Math.random() * 256); var b6 = Math.floor(Math.random() * 256);

    //// var r7 = Math.floor(Math.random() * 256); var g7 = Math.floor(Math.random() * 256); var b7 = Math.floor(Math.random() * 256);
    //// var r8 = Math.floor(Math.random() * 256); var g8 = Math.floor(Math.random() * 256); var b8 = Math.floor(Math.random() * 256);

    // Generate random values in hex
    var hex1 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex2 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex3 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex4 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex5 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex6 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex7 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex8 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

    // Set the background gradient of the div to the random values
    // he1.style.background = 'linear-gradient(-45deg, rgb('+r1+','+g1+','+b1+'), rgb('+r2+','+g2+','+b2+'), rgb('+r3+','+g3+','+b3+'), rgb('+r4+','+g4+','+b4+'), rgb('+r5+','+g5+','+b5+'), rgb('+r6+','+g6+','+b6+'), rgb('+r7+','+g7+','+b7+'), rgb('+r8+','+g8+','+b8+'))';
    // he1.style.background = hex1;
    he1.style.background = 'linear-gradient(-45deg, var('+hex1+'), var('+hex2+'), var('+hex3+'), var('+hex4+'), var('+hex5+'), var('+hex6+'), var('+hex7+'), var('+hex8+'))';
    he1.style.backgroundSize = '400% 400%';
    he1.style.animation = 'gradient 40s ease infinite';
    he1.style.height = 'var(--HeadHeight)';
    he1.style.zIndex = '1';
    he1.style.position = 'relative';
    ft.style.background = 'linear-gradient(-45deg, rgb('+r1+','+g1+','+b1+'), rgb('+r2+','+g2+','+b2+'), rgb('+r3+','+g3+','+b3+'), rgb('+r4+','+g4+','+b4+'), rgb('+r5+','+g5+','+b5+'), rgb('+r6+','+g6+','+b6+'), rgb('+r7+','+g7+','+b7+'), rgb('+r8+','+g8+','+b8+'))';
    ft.style.backgroundSize = '400% 400%';
    ft.style.animation = 'gradient 40s ease infinite';
    ft.style.height = 'var(--HeadHeight)';
    ft.style.zIndex = '1';
    ft.style.position = 'relative';
