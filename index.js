// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(245);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }
function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(253);
    
    noStroke();
    fill(231, 6, 4);
    rect(0, 0, width * 5/11, height*10/24);
    fill(253, 213, 4);
    rect(0, height*15/23, width * 2/19, height);
    fill(23, 13, 92);
    rect(width * 5/11, height*15/23, width * 10/13-width * 5/11, height * 22/23-height*15/23);
    
    stroke(0);
    strokeWeight(118);
    line(0, height*10/24, width, height*10/24);
    line(0, height*15/23, width, height*15/23);
    stroke(14);
    line(width * 5/11, height*10/24, width * 5/11, height*15/23);
    strokeWeight(12);
    line(width * 5/11 + 2, 0, width * 5/11+ 2, height*10/24);
    strokeWeight(14);
    line(width * 5/11+1, height*15/23, width * 5/11+1, height);
    strokeWeight(12);
    line(width * 2/19, height*15/23, width * 2/19, height);
    strokeWeight(13);
    line(width * 10/13, height*15/23, width * 10/13, height);
    strokeWeight(14);
    line(width * 5/11+1, height * 22/23, width * 10/13-1, height * 22/23);
  
  }
  
  function keyPressed() {
    if (key == ' '){
      saveFrame("mondrian.png");
    }
  }