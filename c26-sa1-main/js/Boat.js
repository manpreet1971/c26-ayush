class Boat{
    constructor(x,y,width,height,boatPos){
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0,
      };

      this.width=width
      this.height=height
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.boat_img=loadImage("./assets/boat.png");
      this.boatPosition=boatPos;
      World.add(world,this.body);
   }
   remove(index) {
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 200);
  }
    display(){
      // var angle=this.body.angle;
      var pos=this.body.position
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.boat_img,0,this.boatPosition, this.width, this.height);
      pop();
  }
}
