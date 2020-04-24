console.log('Animal friends!!');

console.log(window, document);

// Store variables for elements we want to manipulate

// Buttons to control the emoji grids
var animateButtons = document.querySelectorAll('button.animate');
var btnScale = document.querySelector('#btn-scale');
var btnTranslate = document.querySelector('#btn-translate');
var btnRotate = document.querySelector('#btn-rotate');
var btnRumble = document.querySelector('#btn-rumble');
var btnReset = document.querySelector('#btn-reset');

// Store grid references, in a couple of different ways.
var firstGrid = document.querySelector('.grid');
var grids = Array.from(document.querySelectorAll('.grid'));
var secondGrid = grids[1];

// Scale button handler
btnScale.addEventListener('click', function(event) {
  // check out this element object!!
  console.log(event);
  
  // reset if another effect is applied.
  resetGrid();
  
  // mark this button as pressed
  event.target.setAttribute('aria-pressed', 'true');
  
  // for loop iterating over an unknown number of wrapper elements
  for (var i=0; i<=grids.length; i++) {
    // Add .scale CSS class to each .grid element
    grids[i].classList.add('scale');
  }
});

// Translate button handler
btnTranslate.addEventListener('click', function(event) {
  resetGrid();

  // variables for individual grid elements, instead of a for-loop
  firstGrid.classList.add('translate');
  secondGrid.classList.add('translate');
});

// Rotate button handler
btnRotate.addEventListener('click', function(event) {
  resetGrid();
  
  firstGrid.classList.add('rotate');
  secondGrid.classList.add('rotate');
});

// Rumble button handler
btnRumble.addEventListener('click', function(event) {
  resetGrid();
  
  firstGrid.classList.add('rumble');
  secondGrid.classList.add('rumble');
});

// reusable Reset All function
function resetGrid() {
  // note: only the first animation button was set/reset.
  // all pressed buttons will need to be wired up for accessibility.
  btnScale.removeAttribute('aria-pressed');
  
  // clear all grid classes
  grids.forEach(function(item) {
    item.classList.remove('scale')
    item.classList.remove('translate')
    item.classList.remove('rotate')
    item.classList.remove('rumble')
  });
}
// Bind reset button to handler function
btnReset.addEventListener('click', resetGrid);
