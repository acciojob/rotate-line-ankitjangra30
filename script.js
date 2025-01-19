//your JS code here. If required.

const line = document.getElementById('line');

let angle = 0;

function rotateLine() {
  line.style.transform = `rotate(${angle}deg)`;
  angle += 2;

  if (angle >= 360) {
    angle = 0;
  }

  requestAnimationFrame(rotateLine);
}

// Initial setup
line.style.position = 'absolute';
line.style.top = '50%';
line.style.left = '50%';
line.style.transformOrigin = 'center'; // Set origin for rotation
line.style.width = '200px';
line.style.height = '2px';
line.style.backgroundColor = 'black';

// Start the animation
rotateLine();

	