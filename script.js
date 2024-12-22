//your JS code here. If required.

let line = document.getElementById('line');
let angle = 0;

let rotateline = () =>{
	line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            angle += 2; 
            if (angle >= 360) {
                angle = 0; 
            }
            requestAnimationFrame(rotateLine); 
        };

        rotateLine(); 
}


	