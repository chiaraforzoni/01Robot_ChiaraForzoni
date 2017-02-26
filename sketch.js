function setup() {
      createCanvas(800,600)
      background(200)
    //Antennas
    strokeWeight(2)
    line(width/2,200,width/2-40,160)
    line(width/2,200,width/2+40,90)
    line(width/2,200,width/2+70,220)
    
    //Head
    fill(0)
  ellipse(width/2,200,100,100)
  
 //Small Circles
  fill(150)
  ellipse(width/2-10,185,10,10)
  ellipse(width/2+25,175,8,8)
   ellipse(width/2+30,210,6,6)
   
   //Neck
  line(width/2,250,width/2,320)
   line(width/2+15,247,width/2+15,320)
   line(width/2-15,247,width/2-15,320)
   
   //Body
   noStroke()
    ellipse(width/2-20,470,80,80)
    fill(0)
   rect(width/2-70,320,100,150)
   strokeWeight(2)
   stroke(150)
   line(width/2-70,340,width/2+30,340)
  
}

function draw() {
  //Eye
  noStroke()
  fill('#ffffff')
  ellipse(width/2+15,195,30,30)
   fill(0)
  ellipse((width/2+15)+mouseX/100,195+mouseY/100,4,4)
  
}