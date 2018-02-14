
function Slupek(x,d,h) {
  this.d = d;
  this.h = h;
  this.x = x;
  this.y = 600;
  this.show = function () {
    noStroke();
    rect(this.x, this.y, this.d, -this.h);
  }
}

var slupki = [];
var odl = 3;
var grb = 2;
var cos;
var arr=[];
var newArr=[];

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  let j=0;
  for(let i=1;i<451;i++){
    arr[j]=i;
    j++;
  }
  newArr = shuffle(arr);

  for (let i = 0; i < 450; i++) {
    slupki[i] = new Slupek(odl,grb,newArr[i]);
    odl = odl + 3;
  }
}

function draw() {
  background(200);
  fill(0)
  for (let i = 0; i < slupki.length; i++) {
    slupki[i].show();
  }

  fill(255);
  text('x:'+mouseX+' y:'+mouseY, mouseX,mouseY);
}

function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++){
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j + 1] = temp;
    }
   }
  }
  return arr;
}

function mousePressed(){
  bubbleSort(newArr);
  odl=3;
  for (let i = 0; i < 450; i++) {
    slupki[i] = new Slupek(odl,grb,newArr[i]);
    odl = odl + 3;
  }
}