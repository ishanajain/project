
class particle {
    constructor(x, y) {
        this.body = Bodies.circle(x , y , this.r , options);
        this.colour = colour(ramdom(0, 255) , random(0,255), random(0 , 255));
        World.add(world , this.body);
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
    
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};