// Get the div with the "box" class
var he1 = document.getElementById("he1");
var ft = document.getElementById("ft");

// Generate random values for the red, green, and blue color channels
// var random = (Math.random() * (0.8 - 0.2) + 0.2);
var rMax = 1.0;
var rMin = 0.4;
function randomA() {
  return Math.floor(Math.random() * (rMax - rMin + rMin) * 256);
}

var r1 = randomA();
var g1 = randomA();
var b1 = randomA();
var r2 = randomA();
var g2 = randomA();
var b2 = randomA();

var r3 = randomA();
var g3 = randomA();
var b3 = randomA();
var r4 = randomA();
var g4 = randomA();
var b4 = randomA();

var r5 = randomA();
var g5 = randomA();
var b5 = randomA();
var r6 = randomA();
var g6 = randomA();
var b6 = randomA();

var r7 = randomA();
var g7 = randomA();
var b7 = randomA();
var r8 = randomA();
var g8 = randomA();
var b8 = randomA();

// Generate random values in hex
// var hex1 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex2 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex3 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex4 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex5 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex6 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex7 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`, hex8 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

// Set the background gradient of the div to the random values
he1.style.background ="linear-gradient(-90deg, rgb(" +
  r1 +
  "," +
  g1 +
  "," +
  b1 +
  "), rgb(" +
  r2 +
  "," +
  g2 +
  "," +
  b2 +
  "), rgb(" +
  r3 +
  "," +
  g3 +
  "," +
  b3 +
  "), rgb(" +
  r4 +
  "," +
  g4 +
  "," +
  b4 +
  "), rgb(" +
  r5 +
  "," +
  g5 +
  "," +
  b5 +
  "), rgb(" +
  r6 +
  "," +
  g6 +
  "," +
  b6 +
  "), rgb(" +
  r7 +
  "," +
  g7 +
  "," +
  b7 +
  "), rgb(" +
  r8 +
  "," +
  g8 +
  "," +
  b8 +
  "))";
// he1.style.background = hex1;
// he1.style.background = 'linear-gradient(-45deg, var('+hex1+'), var('+hex2+'), var('+hex3+'), var('+hex4+'), var('+hex5+'), var('+hex6+'), var('+hex7+'), var('+hex8+'))';
he1.style.backgroundSize = "400% 400%";
he1.style.animation = "gradient 40s ease infinite";
he1.style.height = "var(--HeadHeight)";
he1.style.zIndex = "1";
he1.style.position = "relative";
ft.style.background ="linear-gradient(-90deg, rgb(" +
  r1 +
  "," +
  g1 +
  "," +
  b1 +
  "), rgb(" +
  r2 +
  "," +
  g2 +
  "," +
  b2 +
  "), rgb(" +
  r3 +
  "," +
  g3 +
  "," +
  b3 +
  "), rgb(" +
  r4 +
  "," +
  g4 +
  "," +
  b4 +
  "), rgb(" +
  r5 +
  "," +
  g5 +
  "," +
  b5 +
  "), rgb(" +
  r6 +
  "," +
  g6 +
  "," +
  b6 +
  "), rgb(" +
  r7 +
  "," +
  g7 +
  "," +
  b7 +
  "), rgb(" +
  r8 +
  "," +
  g8 +
  "," +
  b8 +
  "))";
ft.style.backgroundSize = "400% 400%";
ft.style.animation = "gradient 40s ease infinite";
// ft.style.height = "var(--HeadHeight)";
ft.style.zIndex = "1";
ft.style.position = "relative";
