class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true     
       // restitution:0.8,
      // friction:1.0,
      // density:1.0,

    };
    this.r = 20;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("assets/cannonball.png");
    this.trajectory = [];
    World.add(world, this.body);
  }

  shoot() {
    var velocity=p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body, {x: velocity.x , y: velocity.y});
  }
  remove(index) {
    Matter.Body.setVelocity(this.body, { x: 0, y: 0 });

    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete balls[index];
    }, 1000);
  }
  // remove(index){
  //  Body.setVelocity(this.body,{x:0, y:0})
  //   setTimeout(()=>{
  //    World.remove(world,boats[index].body);//error is that u  have written here boats[index] whicj is wrong, ok
  //     delete balls[index]; },2000);     
  // }

  display() {
    //var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    if(this.body.velocity.x>0){
      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position);
    }
    
    for(var i=0;i<this.trajectory.length;i++){
      image(this.image, this.trajectory[i][0],this.trajectory[i][1],5,5);
     }
  } 
}
