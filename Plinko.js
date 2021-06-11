class Plinko{

    constructor(x,y,r){
        var options ={
            isStatic: false,
            'restitution': 0.03,
            'friction':0.5,
            'density':1.2
        };
        
        this.r = r;

        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
    }

    display(){
      push()
      //var pos =this.body.position;
      var angle = this.body.angle;
      ellipseMode(RADIUS);
      fill(255);
      rotate(angle);
      ellipse(50,680,10,10); 
      pop()

    }
    };