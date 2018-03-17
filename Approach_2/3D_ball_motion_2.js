//this is approach 2
//Author: Austin Bearden
//Date Created: 3/11/2018
//Last Modified: 3/12/2018

//including math library


//Ball class
function Ball() {

    //initalize variables
    this.X = 0.00;
    this.Y = 0.00;
    this.Z = 0.00;
    this.Velocity = 0.00;
    //declare and define methods
    this.set_position = function(x, y, z) {
        this.X = x;
        this.Y = y;
        this.Z = z;
    
    };
    this.move = function(velocity, directionXY, directionXZ, time) {

        //now compute where ball will be after specified time given
        //use the equation Rfinal = Rinitial + velocity * (time in motion)
        x_final = this.X + (velocity*Math.sin((directionXY*Math.PI)/180) * time);
        y_final = this.Y + (velocity*Math.cos((directionXY*Math.PI)/180) * time);
        z_final = this.Z + (this.Velocity*Math.sin((directionXZ*Math.PI)/180) * time) - (0.5*(9.81)*((time)^2));
        
        this.set_position(x_final, y_final, z_final);

    };
    this.get_position_X = function() {

        //output to HTML page
        document.getElementById("x-axis").innerHTML = "X-Position: " + this.X + " meters";

    };
    this.get_position_Y = function() {
        
        //output to HTML page
        document.getElementById("y-axis").innerHTML = "Y-Position: " + this.Y + " meters";

    };
    this.get_position_Z = function() {

        //output to HTML page
        document.getElementById("z-axis").innerHTML = "Z-Position: " + this.Z + " meters";

    };

}

//execute calculations when button is clicked
function calculateAll() {

    //get values from input boxes
    //my problem is here right here and Now I am going to solve it!!!!
    var X_input = parseFloat(document.getElementById('Xcoord').value);
    console.log(X_input);
    var Y_input = parseFloat(document.getElementById('Ycoord').value);
    console.log(Y_input);
    var Z_input = parseFloat(document.getElementById('Zcoord').value);
    console.log(Z_input);
    var speed = parseFloat(document.getElementById('SpeedInp').value);
    console.log(speed);
    var XYangle = parseFloat(document.getElementById('XYDirection').value);
    console.log(XYangle);
    var XZangle = parseFloat(document.getElementById('XZDirection').value);
    console.log(XZangle);
    var time = parseFloat(document.getElementById('TimeInp').value);
    console.log(time);
    
    ball_move_1 = new Ball();
    ball_move_1.set_position(X_input, Y_input, Z_input);
    ball_move_1.move(speed, XYangle, XZangle, time);
    ball_move_1.get_position_X();
    ball_move_1.get_position_Y();
    ball_move_1.get_position_Z();
    	
}

//Accesses button from html	
var calculate = document.getElementById("calculate");
calculate.addEventListener("click", function() { calculateAll(); } );