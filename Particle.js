class Particle{
    constructor(x, y, r){
    var options = {
	'restitution':0.3,
	'friction':0,
	'density':1.2
    }
    this.r = r;
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.body=Bodies.circle(x, y, (this.r-20)/2, options);
    World.add(world, this.body);
   }

display(){
    
	var particlepos=this.body.position;	
    var angle = this.body.angle;
    
	push();
    translate(particlepos.x, particlepos.y);
    rotate(angle);
	fill(this.color);

    rectMode(CENTER);
    ellipse(0, 0, this.r, this.r);
	pop();
   }
}
