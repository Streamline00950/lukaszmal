let angle;
let angle2;
let angle3;
let angle4;
let ellipses = [];
let pos=[];
let z;

function setup(){
	createCanvas(innerWidth,innerHeight);
	angleMode(DEGREES);
	angle=0;
	angle2=0;
	angle3=0;
	angle4=0;
	buttonLoop = createButton('Loop');
	buttonStopLoop = createButton('Stop Loop');

	buttonLoop.position(5, 10);
	buttonStopLoop.position(5, 35);
	
	buttonLoop.mousePressed(()=>{loop();});
	buttonStopLoop.mousePressed(()=>{noLoop();});
 }
 
 function draw(){
	background(51);

	var x = width/2;
	var y = height/2;
	
	noFill();
	stroke(200);
	ellipses[0] = new Elipsa(x,y,400);

	stroke(255);
	point(x,y);
	var r = 200;
 
	var dx = r*cos(angle);
	var dy = r*sin(angle);
	let xr = dx+x;
	let yr = dy+y;

	strokeWeight(1);
	line(x,y,xr,yr);
	ellipses[1] = new Elipsa(x+dx,dy+y,24);
	angle+=0.4;
	angle2-=0.8;
	angle3+=1.6;
	angle4-=3.2;
	var dx = r/4*cos(angle2);
	var dy = r/4*sin(angle2);
	ellipses[2] = new Elipsa(xr+dx,yr+dy,12);
	z=0;
	zz=0;
	z=xr+dx
	zz=yr+dy
	var dx = r/8*cos(angle3);
	var dy = r/8*sin(angle3);
	ellipses[3] = new Elipsa(z+dx,zz+dy,6);
	// z=z+dx;
	// zz=z+dy;
	console.log(z);
	// ellipse(z+dx+dx,zz+dy+dy,50,50);
	var dx = r/8*cos(-angle3);
	var dy = r/8*sin(-angle3);
	ellipses[4] = new Elipsa(z+dx+dx,zz+dy+dy,3);

	ellipses[0].show();
	ellipses[1].show();
	ellipses[2].show();
	ellipses[3].show();
	ellipses[4].show();
 }
 
class Elipsa {
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	show(){
		noFill();
		ellipse(this.x,this.y,this.r);
	}
	nextPos(r,a){
		let dx = r*cos(a);
		let dy = r*sin(a);
		return [dx,dy];
	}
}








