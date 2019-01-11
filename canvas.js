// CANVAS MAIN
const canvas = document.querySelector('#main');
let p = 4;
// SIZE and COO X, Y
canvas.width = 18 * p;
canvas.height = 17 * p;
canvas.style.left = '50px';
canvas.style.top = '400px';

const mario = canvas.getContext('2d');

// CANVAS IDLE
const canvasIdle = document.querySelector('#idle');
// SIZE
canvasIdle.width = 16 * p;
canvasIdle.height = 17 * p;

const idleMario = canvasIdle.getContext('2d');

// red
idleMario.fillStyle = '#fd0200';
idleMario.fillRect(3 * p, 0, 6 * p, p);
idleMario.fillRect(2 * p, p, 10 * p, p);
idleMario.fillRect(2 * p, 7 * p, 2 * p, p);
idleMario.fillRect(5 * p, 7 * p, 4 * p, p);
idleMario.fillRect(1 * p, 8 * p, 3 * p, p);
idleMario.fillRect(5 * p, 8 * p, 2 * p, p);
idleMario.fillRect(8 * p, 8 * p, 3 * p, p);
idleMario.fillRect(0, 9 * p, 4 * p, p);
idleMario.fillRect(8 * p, 9 * p, 4 * p, p);
idleMario.fillRect(2 * p, 10 * p, p, p);
idleMario.fillRect(9 * p, 10 * p, p, p);

// brown
idleMario.fillStyle = '#974708';
idleMario.fillRect(2 * p, 2 * p, 3 * p, p);
idleMario.fillRect(1 * p, 3 * p, 1 * p, p);
idleMario.fillRect(3 * p, 3 * p, 1 * p, p);
idleMario.fillRect(1 * p, 4 * p, 1 * p, p);
idleMario.fillRect(3 * p, 4 * p, 2 * p, p);
idleMario.fillRect(1 * p, 5 * p, 2 * p, p);
idleMario.fillRect(1 * p, 14 * p, 3 * p, p);
idleMario.fillRect(8 * p, 14 * p, 3 * p, p);
idleMario.fillRect(0, 15 * p, 4 * p, p);
idleMario.fillRect(8 * p, 15 * p, 4 * p, p);

// black
idleMario.fillStyle = '#000000';
idleMario.fillRect(8 * p, 2 * p, 1 * p, p);
idleMario.fillRect(8 * p, 3 * p, 1 * p, p);
idleMario.fillRect(9 * p, 4 * p, 1 * p, p);
idleMario.fillRect(8 * p, 5 * p, 4 * p, p);

// blue
idleMario.fillStyle = '#0073c9';
idleMario.fillRect(4 * p, 7 * p, 1 * p, p);
idleMario.fillRect(4 * p, 8 * p, 1 * p, p);
idleMario.fillRect(7 * p, 8 * p, 1 * p, p);
idleMario.fillRect(4 * p, 9 * p, 4 * p, p);
idleMario.fillRect(3 * p, 10 * p, 1 * p, p);
idleMario.fillRect(5 * p, 10 * p, 2 * p, p);
idleMario.fillRect(8 * p, 10 * p, 1 * p, p);
idleMario.fillRect(3 * p, 11 * p, 6 * p, p);
idleMario.fillRect(2 * p, 12 * p, 8 * p, p);
idleMario.fillRect(2 * p, 13 * p, 3 * p, p);
idleMario.fillRect(7 * p, 13 * p, 3 * p, p);

// flesh
idleMario.fillStyle = '#fdc092';
idleMario.fillRect(5 * p, 2 * p, 3 * p, p);
idleMario.fillRect(9 * p, 2 * p, 1 * p, p);
idleMario.fillRect(2 * p, 3 * p, 1 * p, p);
idleMario.fillRect(4 * p, 3 * p, 4 * p, p);
idleMario.fillRect(9 * p, 3 * p, 3 * p, p);
idleMario.fillRect(2 * p, 4 * p, 1 * p, p);
idleMario.fillRect(5 * p, 4 * p, 4 * p, p);
idleMario.fillRect(10 * p, 4 * p, 2 * p, p); // nose
idleMario.fillRect(3 * p, 5 * p, 5 * p, p);
idleMario.fillRect(3 * p, 6 * p, 8 * p, p);

// yellow
idleMario.fillStyle = '#f8ff04';
idleMario.fillRect(4 * p, 10 * p, 1 * p, p);
idleMario.fillRect(7 * p, 10 * p, 1 * p, p);

// white
idleMario.fillStyle = '#ffffff';
idleMario.fillRect(0 * p, 10 * p, 2 * p, p);
idleMario.fillRect(10 * p, 10 * p, 2 * p, p);
idleMario.fillRect(0 * p, 11 * p, 3 * p, p);
idleMario.fillRect(9 * p, 11 * p, 3 * p, p);
idleMario.fillRect(0 * p, 12 * p, 2 * p, p);
idleMario.fillRect(10 * p, 12 * p, 2 * p, p);

///////////////////////////////////////////////////////

// CANVAS RUN1
const canvasRun1 = document.querySelector('#run1');
// SIZE
canvasRun1.width = 18 * p;
canvasRun1.height = 17 * p;
const pr = 2;

const run1Mario = canvasRun1.getContext('2d');

// red
run1Mario.fillStyle = '#fd0200';
run1Mario.fillRect((pr + 3) * p, 0, 6 * p, p);
run1Mario.fillRect((pr + 2) * p, p, 10 * p, p);

run1Mario.fillRect((pr + 0) * p, 7 * p, 4 * p, p);
run1Mario.fillRect((pr + 5) * p, 7 * p, 4 * p, p);

run1Mario.fillRect((pr + 0) * p, 8 * p, 4 * p, p);
run1Mario.fillRect((pr + 5) * p, 8 * p, 2 * p, p);
run1Mario.fillRect((pr + 8) * p, 8 * p, 3 * p, p);
run1Mario.fillRect((pr + 2) * p, 9 * p, 4 * p, p);
run1Mario.fillRect((pr + 8) * p, 9 * p, 4 * p, p);

// brown
run1Mario.fillStyle = '#974708';
run1Mario.fillRect((pr + 2) * p, 2 * p, 3 * p, p);
run1Mario.fillRect((pr + 1) * p, 3 * p, 1 * p, p);
run1Mario.fillRect((pr + 3) * p, 3 * p, 1 * p, p);
run1Mario.fillRect((pr + 1) * p, 4 * p, 1 * p, p);
run1Mario.fillRect((pr + 3) * p, 4 * p, 2 * p, p);
run1Mario.fillRect((pr + 1) * p, 5 * p, 2 * p, p);

run1Mario.fillRect(1 * p, 14 * p, 3 * p, p);
run1Mario.fillRect(1 * p, 15 * p, 3 * p, p);
run1Mario.fillRect(2 * p, 16 * p, 3 * p, p);
run1Mario.fillRect((pr + 10) * p, 11 * p, 2 * p, p);
run1Mario.fillRect((pr + 10) * p, 12 * p, 2 * p, p);
run1Mario.fillRect((pr + 10) * p, 13 * p, 2 * p, p);
run1Mario.fillRect((pr + 11) * p, 10 * p, 1 * p, p);

// black
run1Mario.fillStyle = '#000000';
run1Mario.fillRect((pr + 8) * p, 2 * p, 1 * p, p);
run1Mario.fillRect((pr + 8) * p, 3 * p, 1 * p, p);
run1Mario.fillRect((pr + 9) * p, 4 * p, 1 * p, p);
run1Mario.fillRect((pr + 8) * p, 5 * p, 4 * p, p);

// blue
run1Mario.fillStyle = '#0073c9';
run1Mario.fillRect((pr + 4) * p, 7 * p, 3 * p, p);
run1Mario.fillRect((pr + 4) * p, 8 * p, 3 * p, p);
run1Mario.fillRect((pr + 7) * p, 8 * p, 1 * p, p);
run1Mario.fillRect((pr + 4) * p, 9 * p, 5 * p, p);
run1Mario.fillRect((pr + 2) * p, 10 * p, 6 * p, p);
run1Mario.fillRect((pr + 5) * p, 10 * p, 2 * p, p);
run1Mario.fillRect((pr + 8) * p, 10 * p, 1 * p, p);
run1Mario.fillRect((pr + 2) * p, 11 * p, 8 * p, p);
run1Mario.fillRect((pr + 1) * p, 12 * p, 9 * p, p);
run1Mario.fillRect((pr + 0) * p, 13 * p, 7 * p, p);
run1Mario.fillRect((pr + 1) * p, 14 * p, 3 * p, p);
run1Mario.fillRect((pr + 7) * p, 13 * p, 3 * p, p);

// flesh
run1Mario.fillStyle = '#fdc092';
run1Mario.fillRect((pr + 5) * p, 2 * p, 3 * p, p);
run1Mario.fillRect((pr + 9) * p, 2 * p, 1 * p, p);
run1Mario.fillRect((pr + 2) * p, 3 * p, 1 * p, p);
run1Mario.fillRect((pr + 4) * p, 3 * p, 4 * p, p);
run1Mario.fillRect((pr + 9) * p, 3 * p, 3 * p, p);
run1Mario.fillRect((pr + 2) * p, 4 * p, 1 * p, p);
run1Mario.fillRect((pr + 5) * p, 4 * p, 4 * p, p);
run1Mario.fillRect((pr + 10) * p, 4 * p, 2 * p, p); // nose
run1Mario.fillRect((pr + 3) * p, 5 * p, 5 * p, p);
run1Mario.fillRect((pr + 3) * p, 6 * p, 8 * p, p);

// yellow
run1Mario.fillStyle = '#f8ff04';
run1Mario.fillRect((pr + 5) * p, 9 * p, 1 * p, p);

// white
run1Mario.fillStyle = '#ffffff';
run1Mario.fillRect(0 * p, 8 * p, 2 * p, p);
run1Mario.fillRect(0 * p, 9 * p, 3 * p, p);
run1Mario.fillRect((pr + 10) * p, 8 * p, 3 * p, p);
run1Mario.fillRect(0 * p, 10 * p, 2 * p, p);
run1Mario.fillRect((pr + 11) * p, 9 * p, 2 * p, p);

////////////////////////////////////////////////////////

// CANVAS RUN2
const canvasRun2 = document.querySelector('#run2');
// SIZE
canvasRun2.width = 18 * p;
canvasRun2.height = 17 * p;

const run2Mario = canvasRun2.getContext('2d');

// red
run2Mario.fillStyle = '#fd0200';
run2Mario.fillRect((pr + 3) * p, 0, 6 * p, p);
run2Mario.fillRect((pr + 2) * p, p, 10 * p, p);

run2Mario.fillRect((pr + 2) * p, 7 * p, 5 * p, p);
run2Mario.fillRect((pr + 8) * p, 7 * p, 1 * p, p);
run2Mario.fillRect((pr + 2) * p, 8 * p, 7 * p, p);
run2Mario.fillRect((pr + 3) * p, 9 * p, 6 * p, p);

// brown
run2Mario.fillStyle = '#974708';
run2Mario.fillRect((pr + 2) * p, 2 * p, 3 * p, p);
run2Mario.fillRect((pr + 1) * p, 3 * p, 1 * p, p);
run2Mario.fillRect((pr + 3) * p, 3 * p, 1 * p, p);
run2Mario.fillRect((pr + 1) * p, 4 * p, 1 * p, p);
run2Mario.fillRect((pr + 3) * p, 4 * p, 2 * p, p);
run2Mario.fillRect((pr + 1) * p, 5 * p, 2 * p, p);

run2Mario.fillRect(1 * p, 13 * p, 1 * p, p);
run2Mario.fillRect(1 * p, 12 * p, 2 * p, p);
run2Mario.fillRect(2 * p, 11 * p, 1 * p, p);
run2Mario.fillRect(2 * p, 10 * p, 2 * p, p);
run2Mario.fillRect((pr + 4) * p, 14 * p, 3 * p, p);
run2Mario.fillRect((pr + 4) * p, 15 * p, 4 * p, p);

// black
run2Mario.fillStyle = '#000000';
run2Mario.fillRect((pr + 8) * p, 2 * p, 1 * p, p);
run2Mario.fillRect((pr + 8) * p, 3 * p, 1 * p, p);
run2Mario.fillRect((pr + 9) * p, 4 * p, 1 * p, p);
run2Mario.fillRect((pr + 8) * p, 5 * p, 4 * p, p);

// flesh
run2Mario.fillStyle = '#fdc092';
run2Mario.fillRect((pr + 5) * p, 2 * p, 3 * p, p);
run2Mario.fillRect((pr + 9) * p, 2 * p, 1 * p, p);
run2Mario.fillRect((pr + 2) * p, 3 * p, 1 * p, p);
run2Mario.fillRect((pr + 4) * p, 3 * p, 4 * p, p);
run2Mario.fillRect((pr + 9) * p, 3 * p, 3 * p, p);
run2Mario.fillRect((pr + 2) * p, 4 * p, 1 * p, p);
run2Mario.fillRect((pr + 5) * p, 4 * p, 4 * p, p);
run2Mario.fillRect((pr + 10) * p, 4 * p, 2 * p, p); // nose
run2Mario.fillRect((pr + 3) * p, 5 * p, 5 * p, p);
run2Mario.fillRect((pr + 3) * p, 6 * p, 8 * p, p);

// white
run2Mario.fillStyle = '#ffffff';
run2Mario.fillRect((pr + 10) * p, 7 * p, 1 * p, p);
run2Mario.fillRect((pr + 9) * p, 8 * p, 3 * p, p);
run2Mario.fillRect((pr + 9) * p, 9 * p, 2 * p, p);
run2Mario.fillRect((pr + 1) * p, 8 * p, 1 * p, p);
run2Mario.fillRect((pr + 0) * p, 9 * p, 2 * p, p);

// blue
run2Mario.fillStyle = '#0073c9';
run2Mario.fillRect((pr + 7) * p, 7 * p, 1 * p, p);
run2Mario.fillRect((pr + 2) * p, 9 * p, 1 * p, p);
run2Mario.fillRect((pr + 2) * p, 10 * p, 8 * p, p);
run2Mario.fillRect((pr + 1) * p, 11 * p, 9 * p, p);
run2Mario.fillRect((pr + 1) * p, 11 * p, 8 * p, p);
run2Mario.fillRect((pr + 1) * p, 12 * p, 3 * p, p);
run2Mario.fillRect((pr + 5) * p, 12 * p, 4 * p, p);
run2Mario.fillRect((pr + 5) * p, 13 * p, 3 * p, p);

//////////////////////////////////////////////////////////

// CANVAS RUN3
const canvasRun3 = document.querySelector('#run3');
// SIZE
canvasRun3.width = 18 * p;
canvasRun3.height = 17 * p;

const run3Mario = canvasRun3.getContext('2d');

// red
run3Mario.fillStyle = '#fd0200';
run3Mario.fillRect((pr + 3) * p, 0, 6 * p, p);
run3Mario.fillRect((pr + 2) * p, p, 10 * p, p);

run3Mario.fillRect((pr + 2) * p, 7 * p, 2 * p, p);
run3Mario.fillRect((pr + 1) * p, 8 * p, 4 * p, p);
run3Mario.fillRect((pr + 1) * p, 9 * p, 3 * p, p);
run3Mario.fillRect((pr + 1) * p, 10 * p, 3 * p, p);
run3Mario.fillRect((pr + 1) * p, 11 * p, 4 * p, p);
run3Mario.fillRect((pr + 2) * p, 12 * p, 2 * p, p);
run3Mario.fillRect((pr + 3) * p, 13 * p, 1 * p, p);

run3Mario.fillRect((pr + 5) * p, 7 * p, 3 * p, p);
run3Mario.fillRect((pr + 7) * p, 8 * p, 2 * p, p);

// brown
run3Mario.fillStyle = '#974708';
run3Mario.fillRect((pr + 2) * p, 2 * p, 3 * p, p);
run3Mario.fillRect((pr + 1) * p, 3 * p, 1 * p, p);
run3Mario.fillRect((pr + 3) * p, 3 * p, 1 * p, p);
run3Mario.fillRect((pr + 1) * p, 4 * p, 1 * p, p);
run3Mario.fillRect((pr + 3) * p, 4 * p, 2 * p, p);
run3Mario.fillRect((pr + 1) * p, 5 * p, 2 * p, p);

run3Mario.fillRect((pr + 7) * p, 14 * p, 3 * p, p);
run3Mario.fillRect((pr + 7) * p, 15 * p, 4 * p, p);
run3Mario.fillRect((pr + 3) * p, 15 * p, 3 * p, p);
run3Mario.fillRect((pr + 3) * p, 16 * p, 4 * p, p);

// black
run3Mario.fillStyle = '#000000';
run3Mario.fillRect((pr + 8) * p, 2 * p, 1 * p, p);
run3Mario.fillRect((pr + 8) * p, 3 * p, 1 * p, p);
run3Mario.fillRect((pr + 9) * p, 4 * p, 1 * p, p);
run3Mario.fillRect((pr + 8) * p, 5 * p, 4 * p, p);

// flesh
run3Mario.fillStyle = '#fdc092';
run3Mario.fillRect((pr + 5) * p, 2 * p, 3 * p, p);
run3Mario.fillRect((pr + 9) * p, 2 * p, 1 * p, p);
run3Mario.fillRect((pr + 2) * p, 3 * p, 1 * p, p);
run3Mario.fillRect((pr + 4) * p, 3 * p, 4 * p, p);
run3Mario.fillRect((pr + 9) * p, 3 * p, 3 * p, p);
run3Mario.fillRect((pr + 2) * p, 4 * p, 1 * p, p);
run3Mario.fillRect((pr + 5) * p, 4 * p, 4 * p, p);
run3Mario.fillRect((pr + 10) * p, 4 * p, 2 * p, p); // nose
run3Mario.fillRect((pr + 3) * p, 5 * p, 5 * p, p);
run3Mario.fillRect((pr + 3) * p, 6 * p, 8 * p, p);

// white
run3Mario.fillStyle = '#ffffff';
run3Mario.fillRect((pr + 4) * p, 13 * p, 2 * p, p);
run3Mario.fillRect((pr + 4) * p, 12 * p, 3 * p, p);

// yellow
run3Mario.fillStyle = '#f8ff04';
run3Mario.fillRect((pr + 6) * p, 10 * p, 1 * p, p);
run3Mario.fillRect((pr + 10) * p, 10 * p, 1 * p, p);

// blue
run3Mario.fillStyle = '#0073c9';
run3Mario.fillRect((pr + 4) * p, 7 * p, 1 * p, p);
run3Mario.fillRect((pr + 5) * p, 8 * p, 2 * p, p);
run3Mario.fillRect((pr + 8) * p, 7 * p, 1 * p, p);
run3Mario.fillRect((pr + 9) * p, 8 * p, 1 * p, p);
run3Mario.fillRect((pr + 4) * p, 9 * p, 7 * p, p);
run3Mario.fillRect((pr + 4) * p, 10 * p, 2 * p, p);
run3Mario.fillRect((pr + 7) * p, 10 * p, 3 * p, p);
run3Mario.fillRect((pr + 5) * p, 11 * p, 6 * p, p);
run3Mario.fillRect((pr + 7) * p, 12 * p, 4 * p, p);
run3Mario.fillRect((pr + 6) * p, 13 * p, 4 * p, p);
run3Mario.fillRect((pr + 3) * p, 14 * p, 3 * p, p);
run3Mario.fillRect((pr + 2) * p, 13 * p, 1 * p, p);
run3Mario.fillRect((pr + 1) * p, 12 * p, 1 * p, p);

/////////////////////////////////////////////////////////////

// CANVAS JUMP
const canvasJump = document.querySelector('#jump');
// SIZE
canvasJump.width = 18 * p;
canvasJump.height = 17 * p;
const pj = 4;
const jumpMario = canvasJump.getContext('2d');

// red
jumpMario.fillStyle = '#fd0200';
jumpMario.fillRect((pj + 3) * p, 0, 6 * p, p);
jumpMario.fillRect((pj + 2) * p, p, 10 * p, p);
jumpMario.fillRect((pj + 11) * p, 2 * p, 3 * p, p);
jumpMario.fillRect((pj + 12) * p, 3 * p, 2 * p, p);
jumpMario.fillRect((pj + 12) * p, 4 * p, 2 * p, p);
jumpMario.fillRect((pj + 12) * p, 5 * p, 1 * p, p);
jumpMario.fillRect((pj + 11) * p, 6 * p, 1 * p, p);
jumpMario.fillRect((pj + 10) * p, 7 * p, 1 * p, p);

jumpMario.fillRect(3 * p, 7 * p, 6 * p, p);
jumpMario.fillRect((pj + 5) * p, 7 * p, 5 * p, p);

jumpMario.fillRect(2 * p, 8 * p, 12 * p, p);
jumpMario.fillRect(3 * p, 9 * p, 7 * p, p);
jumpMario.fillRect((pj + 3) * p, 10 * p, p, p);
jumpMario.fillRect((pj + 9) * p, 10 * p, p, p);

// brown
jumpMario.fillStyle = '#974708';
jumpMario.fillRect((pj + 2) * p, 2 * p, 3 * p, p);
jumpMario.fillRect((pj + 1) * p, 3 * p, 1 * p, p);
jumpMario.fillRect((pj + 3) * p, 3 * p, 1 * p, p);
jumpMario.fillRect((pj + 1) * p, 4 * p, 1 * p, p);
jumpMario.fillRect((pj + 3) * p, 4 * p, 2 * p, p);
jumpMario.fillRect((pj + 1) * p, 5 * p, 2 * p, p);

jumpMario.fillRect(4 * p, 13 * p, 1 * p, p);
jumpMario.fillRect(3 * p, 14 * p, 3 * p, p);
jumpMario.fillRect(2 * p, 15 * p, 3 * p, p);
jumpMario.fillRect(2 * p, 16 * p, 1 * p, p);
jumpMario.fillRect((pj + 12) * p, 10 * p, 1 * p, p);
jumpMario.fillRect((pj + 12) * p, 11 * p, 1 * p, p);
jumpMario.fillRect((pj + 11) * p, 12 * p, 2 * p, p);
jumpMario.fillRect((pj + 11) * p, 13 * p, 2 * p, p);
jumpMario.fillRect((pj + 11) * p, 14 * p, 2 * p, p);

// black
jumpMario.fillStyle = '#000000';
jumpMario.fillRect((pj + 8) * p, 2 * p, 1 * p, p);
jumpMario.fillRect((pj + 8) * p, 3 * p, 1 * p, p);
jumpMario.fillRect((pj + 9) * p, 4 * p, 1 * p, p);
jumpMario.fillRect((pj + 8) * p, 5 * p, 4 * p, p);

// blue
jumpMario.fillStyle = '#0073c9';
jumpMario.fillRect((pj + 4) * p, 7 * p, 1 * p, p);
jumpMario.fillRect((pj + 8) * p, 7 * p, 1 * p, p);
jumpMario.fillRect((pj + 5) * p, 8 * p, 1 * p, p);
jumpMario.fillRect((pj + 9) * p, 8 * p, 1 * p, p);
jumpMario.fillRect((pj + 5) * p, 9 * p, 5 * p, p);
jumpMario.fillRect((pj + 2) * p, 10 * p, 1 * p, p);
jumpMario.fillRect((pj + 4) * p, 10 * p, 1 * p, p);
jumpMario.fillRect((pj + 5) * p, 10 * p, 2 * p, p);
jumpMario.fillRect((pj + 8) * p, 10 * p, 1 * p, p);
jumpMario.fillRect((pj + 2) * p, 11 * p, 8 * p, p);
jumpMario.fillRect((pj + 2) * p, 12 * p, 9 * p, p);
jumpMario.fillRect((pj + 2) * p, 13 * p, 9 * p, p);
jumpMario.fillRect((pj + 2) * p, 14 * p, 9 * p, p);
jumpMario.fillRect((pj + 1) * p, 15 * p, 7 * p, p);
jumpMario.fillRect((pj + 1) * p, 16 * p, 4 * p, p);

// flesh
jumpMario.fillStyle = '#fdc092';
jumpMario.fillRect((pj + 5) * p, 2 * p, 3 * p, p);
jumpMario.fillRect((pj + 9) * p, 2 * p, 1 * p, p);
jumpMario.fillRect((pj + 2) * p, 3 * p, 1 * p, p);
jumpMario.fillRect((pj + 4) * p, 3 * p, 4 * p, p);
jumpMario.fillRect((pj + 9) * p, 3 * p, 3 * p, p);
jumpMario.fillRect((pj + 2) * p, 4 * p, 1 * p, p);
jumpMario.fillRect((pj + 5) * p, 4 * p, 4 * p, p);
jumpMario.fillRect((pj + 10) * p, 4 * p, 2 * p, p); // nose
jumpMario.fillRect((pj + 3) * p, 5 * p, 5 * p, p);
jumpMario.fillRect((pj + 3) * p, 6 * p, 8 * p, p);

// yellow
jumpMario.fillStyle = '#f8ff04';
jumpMario.fillRect((pj + 7) * p, 10 * p, 1 * p, p);
jumpMario.fillRect((pj + 9) * p, 10 * p, 1 * p, p);

// white
jumpMario.fillStyle = '#ffffff';
jumpMario.fillRect(1 * p, 9 * p, 2 * p, p);
jumpMario.fillRect((pj + 11) * p, 0 * p, 3 * p, p);
jumpMario.fillRect(1 * p, 10 * p, 3 * p, p);
jumpMario.fillRect((pj + 12) * p, 1 * p, 2 * p, p);
jumpMario.fillRect(2 * p, 11 * p, 1 * p, p);

// ICONS

// Linkedin
const canvasIn = document.querySelector('#in');
// SIZE
// p = 10;
canvasIn.width = 10 * p;
canvasIn.height = 10 * p;

const InLogo = canvasIn.getContext('2d');

// background blueish
InLogo.fillStyle = '#0274b3';
InLogo.fillRect(0, 0, 10 * p, 10 * p);

// white
InLogo.fillStyle = '#f7f7f7';
InLogo.fillRect(1 * p, 1 * p, 2 * p, 2 * p);
InLogo.fillRect(1 * p, 3.5 * p, 2 * p, 5.5 * p);
InLogo.fillRect(3.5 * p, 3.5 * p, 2 * p, 5.5 * p);
InLogo.fillRect(7 * p, 4 * p, 2 * p, 5 * p);
InLogo.fillRect(6 * p, 3.5 * p, 2.5 * p, 2 * p);
InLogo.fillRect(3.5 * p, 4 * p, 2.5 * p, 2 * p);

// Linkedin Link
const canvasInLink = document.querySelector('#linkedinLink');
// SIZE
canvasInLink.width = 13 * p;
canvasInLink.height = 13 * p;

const InLink = canvasInLink.getContext('2d');

// background blueish
InLink.fillStyle = '#0274b3';
InLink.fillRect(0, 0, 13 * p, 13 * p);

// white
InLink.fillStyle = '#f7f7f7';
InLink.fillRect(2.5 * p, 2.5 * p, 2 * p, 2 * p);
InLink.fillRect(2.5 * p, 5 * p, 2 * p, 5.5 * p);
InLink.fillRect(5 * p, 5 * p, 2 * p, 5.5 * p);
InLink.fillRect(8.5 * p, 5.5 * p, 2 * p, 5 * p);
InLink.fillRect(7.5 * p, 5 * p, 2.5 * p, 2 * p);
InLink.fillRect(5 * p, 5.5 * p, 2.5 * p, 2 * p);

// CV
const canvasCV = document.querySelector('#cvlink');
// SIZE
canvasCV.width = 13 * p;
canvasCV.height = 13 * p;

const CV = canvasCV.getContext('2d');

// background
// CV.fillStyle = '#5aaf7f';
// CV.fillStyle = '#008400';
CV.fillStyle = '#f76300';
CV.fillRect(0, 0, 13 * p, 13 * p);

// white
CV.fillStyle = '#f7f7f7';
CV.fillRect(2 * p, 4.5 * p, 1 * p, 4 * p);
CV.fillRect(2.5 * p, 4 * p, 3 * p, 1 * p);
CV.fillRect(2.5 * p, 8 * p, 3 * p, 1 * p);
CV.fillRect(5 * p, 4.5 * p, 1 * p, 1 * p);
CV.fillRect(5 * p, 7.5 * p, 1 * p, 1 * p);

CV.fillRect(6.5 * p, 4 * p, 1 * p, 3.5 * p);
CV.fillRect(9.5 * p, 4 * p, 1 * p, 3.5 * p);
CV.fillRect(7.5 * p, 7.5 * p, 2 * p, 1 * p);
CV.fillRect(8 * p, 8.5 * p, 1 * p, 0.5 * p);

CV.fillRect(7 * p, 7 * p, 1 * p, 1 * p);
CV.fillRect(9 * p, 7 * p, 1 * p, 1 * p);

// CV mini
const canvasCVmini = document.querySelector('#cv');
canvasCVmini.width = 10 * p;
canvasCVmini.height = 10 * p;
const CVmini = canvasCVmini.getContext('2d');

CVmini.drawImage(canvasCV, -1.5 * p, -1.5 * p);

// PORTFOLIO
const canvasPF = document.querySelector('#folderlink');
// SIZE
canvasPF.width = 13 * p;
canvasPF.height = 13 * p;

const PF = canvasPF.getContext('2d');

// background
// PF.fillStyle = '#edddc4';
// PF.fillStyle = '#dcdcde';
// PF.fillStyle = '#000';
PF.fillStyle = '#343740';
PF.fillRect(0, 0, 13 * p, 13 * p);

// black
// PF.fillStyle = '#000';
// PF.fillStyle = '#ffffff';
PF.fillStyle = '#dcdcde';
// PF.fillStyle = '#f76300';
PF.fillRect(7 * p, 3 * p, 2 * p, 1 * p);
// PF.fillRect(5 * p, 2.5 * p, 2 * p, 0.5 * p);
// PF.fillRect(4.5 * p, 3 * p, 1 * p, 0.5 * p);
// PF.fillRect(6.5 * p, 3 * p, 1 * p, 0.5 * p);

PF.fillRect(3 * p, 3.5 * p, 6 * p, 1.5 * p);
PF.fillRect(2.5 * p, 4 * p, 0.5 * p, 4 * p);
PF.fillRect(3 * p, 5 * p, 0.5 * p, 1.5 * p);

// PF.fillStyle = '#f59f00';
PF.fillStyle = '#ffffff';
PF.fillRect(4 * p, 5.5 * p, 6.5 * p, 1.5 * p);
PF.fillRect(3.5 * p, 7 * p, 6.5 * p, 1.5 * p);
PF.fillRect(3 * p, 8.5 * p, 6.5 * p, 1.5 * p);

// PF mini
const canvasPFmini = document.querySelector('#folder');
canvasPFmini.width = 10 * p;
canvasPFmini.height = 10 * p;
const PFmini = canvasPFmini.getContext('2d');

PFmini.drawImage(canvasPF, -1.5 * p, -1.5 * p);
