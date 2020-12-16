class Plinko {
    constructor(x,y,r){
        var options={
            isStactic:true
        }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(x,y,r,options);
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
    }
}