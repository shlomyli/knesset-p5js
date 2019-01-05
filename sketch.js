// Shlomi Lifshits (2019)

var r = 12;
var fill_value;
var seats = []; // array of seats objects
var speed = 0.5;

function setup() {
  createCanvas(480, 480);

    fill_val = "#00AB87";
    seats.push(new Seat(13.47,173.34,r,fill_val));
    seats.push(new Seat(30.15,173.34,r,fill_val));
    seats.push(new Seat(46.83,173.34,r,fill_val));
    seats.push(new Seat(63.52,173.34,r,fill_val));
    seats.push(new Seat(80.22,173.34,r,fill_val));
    seats.push(new Seat(96.93,173.35,r,fill_val));
    seats.push(new Seat(15.40,153.82,r,fill_val));
    seats.push(new Seat(32.35,153.57,r,fill_val));
    seats.push(new Seat(49.38,153.24,r,fill_val));
    seats.push(new Seat(66.28,153.94,r,fill_val));
    seats.push(new Seat(83.55,153.60,r,fill_val));
    seats.push(new Seat(19.62,134.66,r,fill_val));
    seats.push(new Seat(37.14,134.26,r,fill_val));
    fill_val = "#40B439";
    seats.push(new Seat(101.12,153.12,r,fill_val));
    seats.push(new Seat(54.94,133.76,r,fill_val));
    seats.push(new Seat(26.06,116.13,r,fill_val));
    seats.push(new Seat(72.25,135.27,r,fill_val));
    seats.push(new Seat(44.45,115.75,r,fill_val));
    fill_val = "#FE171C";
    seats.push(new Seat(90.74,134.91,r,fill_val));
    seats.push(new Seat(63.39,115.35,r,fill_val));
    seats.push(new Seat(34.62,98.49,r,fill_val));
    seats.push(new Seat(81.26,117.86,r,fill_val));
    seats.push(new Seat(54.15,98.38,r,fill_val));
    seats.push(new Seat(110.15,134.55,r,fill_val));
    seats.push(new Seat(45.21,81.98,r,fill_val));
    seats.push(new Seat(74.53,98.43,r,fill_val));
    seats.push(new Seat(101.51,118.04,r,fill_val));
    seats.push(new Seat(66.06,82.44,r,fill_val));
    seats.push(new Seat(93.05,102.21,r,fill_val));
    seats.push(new Seat(57.66,66.82,r,fill_val));
    seats.push(new Seat(88.10,83.39,r,fill_val));
    seats.push(new Seat(123.48,118.77,r,fill_val));
    seats.push(new Seat(79.97,68.22,r,fill_val));
    seats.push(new Seat(71.80,53.23,r,fill_val));
    seats.push(new Seat(115.43,103.64,r,fill_val));
    seats.push(new Seat(107.30,88.75,r,fill_val));
    seats.push(new Seat(103.80,70.59,r,fill_val));
    fill_val = "#003068";
    seats.push(new Seat(95.64,55.97,r,fill_val));
    seats.push(new Seat(87.44,41.40,r,fill_val));
    seats.push(new Seat(123.60,77.87,r,fill_val));
    seats.push(new Seat(131.94,92.31,r,fill_val));
    seats.push(new Seat(140.27,106.75,r,fill_val));
    fill_val = "#399FD0";
    seats.push(new Seat(104.37,31.48,r,fill_val));
    seats.push(new Seat(112.80,45.90,r,fill_val));
    seats.push(new Seat(121.26,60.30,r,fill_val));
    seats.push(new Seat(122.34,23.63,r,fill_val));
    seats.push(new Seat(141.49,69.87,r,fill_val));
    seats.push(new Seat(131.14,38.18,r,fill_val));
    seats.push(new Seat(140.07,52.79,r,fill_val));
    seats.push(new Seat(150.37,84.49,r,fill_val));
    seats.push(new Seat(159.51,99.23,r,fill_val));
    seats.push(new Seat(141.11,17.93,r,fill_val));
    seats.push(new Seat(150.33,32.96,r,fill_val));
    fill_val = "#00AFF0";
    seats.push(new Seat(160.47,64.98,r,fill_val));
    seats.push(new Seat(159.80,48.21,r,fill_val));
    seats.push(new Seat(160.42,14.49,r,fill_val));
    seats.push(new Seat(169.99,80.50,r,fill_val));
    seats.push(new Seat(170.05,30.33,r,fill_val));
    seats.push(new Seat(180.00,13.33,r,fill_val));
    seats.push(new Seat(180.00,46.67,r,fill_val));
    seats.push(new Seat(180.00,63.33,r,fill_val));
    seats.push(new Seat(180.00,96.67,r,fill_val));
    seats.push(new Seat(189.95,30.33,r,fill_val));
    fill_val = "#1F5AA5";
    seats.push(new Seat(190.01,80.50,r,fill_val));
    seats.push(new Seat(199.58,14.49,r,fill_val));
    seats.push(new Seat(200.20,48.21,r,fill_val));
    seats.push(new Seat(199.53,64.98,r,fill_val));
    seats.push(new Seat(209.67,32.96,r,fill_val));
    seats.push(new Seat(218.89,17.93,r,fill_val));
    seats.push(new Seat(200.49,99.23,r,fill_val));
    seats.push(new Seat(209.63,84.49,r,fill_val));
    seats.push(new Seat(219.93,52.79,r,fill_val));
    seats.push(new Seat(228.86,38.18,r,fill_val));
    seats.push(new Seat(218.51,69.87,r,fill_val));
    seats.push(new Seat(237.66,23.63,r,fill_val));
    seats.push(new Seat(238.74,60.30,r,fill_val));
    seats.push(new Seat(247.20,45.90,r,fill_val));
    seats.push(new Seat(255.63,31.48,r,fill_val));
    seats.push(new Seat(219.73,106.75,r,fill_val));
    seats.push(new Seat(228.06,92.31,r,fill_val));
    seats.push(new Seat(236.40,77.87,r,fill_val));
    seats.push(new Seat(272.56,41.40,r,fill_val));
    seats.push(new Seat(264.36,55.97,r,fill_val));
    seats.push(new Seat(256.20,70.59,r,fill_val));
    seats.push(new Seat(252.70,88.75,r,fill_val));
    seats.push(new Seat(244.57,103.64,r,fill_val));
    seats.push(new Seat(288.20,53.23,r,fill_val));
    seats.push(new Seat(280.03,68.22,r,fill_val));
    seats.push(new Seat(236.52,118.77,r,fill_val));
    seats.push(new Seat(271.90,83.39,r,fill_val));
    seats.push(new Seat(302.34,66.82,r,fill_val));
    seats.push(new Seat(266.95,102.21,r,fill_val));
    seats.push(new Seat(293.94,82.44,r,fill_val));
    fill_val = "#00A2E3";
    seats.push(new Seat(258.49,118.04,r,fill_val));
    seats.push(new Seat(285.47,98.43,r,fill_val));
    seats.push(new Seat(314.79,81.98,r,fill_val));
    seats.push(new Seat(249.85,134.55,r,fill_val));
    seats.push(new Seat(305.85,98.38,r,fill_val));
    seats.push(new Seat(278.74,117.86,r,fill_val));
    seats.push(new Seat(325.38,98.49,r,fill_val));
    fill_val = "#000000";
    seats.push(new Seat(296.61,115.35,r,fill_val));
    seats.push(new Seat(269.26,134.91,r,fill_val));
    seats.push(new Seat(315.55,115.75,r,fill_val));
    seats.push(new Seat(287.75,135.27,r,fill_val));
    seats.push(new Seat(333.94,116.13,r,fill_val));
    seats.push(new Seat(305.06,133.76,r,fill_val));
    fill_val = "#013068";
    seats.push(new Seat(258.88,153.12,r,fill_val));
    seats.push(new Seat(322.86,134.26,r,fill_val));
    seats.push(new Seat(340.38,134.66,r,fill_val));
    seats.push(new Seat(276.45,153.60,r,fill_val));
    seats.push(new Seat(293.72,153.94,r,fill_val));
    fill_val = "#0085FF";
    seats.push(new Seat(310.62,153.24,r,fill_val));
    seats.push(new Seat(327.65,153.57,r,fill_val));
    seats.push(new Seat(344.60,153.82,r,fill_val));
    fill_val = "#006088";
    seats.push(new Seat(263.07,173.35,r,fill_val));
    seats.push(new Seat(279.78,173.34,r,fill_val));
    seats.push(new Seat(296.48,173.34,r,fill_val));
    seats.push(new Seat(313.17,173.34,r,fill_val));
    seats.push(new Seat(329.85,173.34,r,fill_val));
    fill_val = "#CDD4CD";
    seats.push(new Seat(346.53,173.34,r,fill_val));
}


function draw() {
  noStroke();
  background(255);

  for (var i=0; i<seats.length; i++) {
    seats[i].move();  
    seats[i].display();
  }
}


// Seat class
function Seat(x,y,r,color) {
  this.x = x;
  this.y = y;
  this.diameter = r;
  this.color = color;

  this.display = function() {
    fill(this.color);  
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
    
  this.move = function() {
    this.x += random(-speed, speed);
    this.y += random(-speed, speed);
    //this.diameter += random(speed/2);
  };
}
