//this is approach 2
//Author: Austin Bearden
//Date Created: 3/11/2018

//including math library

//Ball class
function Ball() {

    this.X = 0.00;
    this.Y = 0.00;
    this.Z = 0.00;
    this.Velocity = 0.00;
    this.set_position = function(x, y, z) {
        this.X = x;
        this.Y = y;
        this.Z = z;
    
    };
    this.move = function(velocity, directionXY, directionXZ, time) {
        
        //now compute where ball will be after specified time given
        //use the equation Rfinal = Rinitial + velocity * (time in motion)
        x_final = this.X + (velocity*Math.cos((directionXY*Math.PI)/180) * time);
        y_final = this.Y + (velocity*Math.sin((directionXY*Math.PI)/180) * time);
        z_final = this.Z + (velocity*Math.cos((directionXZ*Math.PI)/180) * time);
        
        this.set_position(x_final, y_final, z_final);

    };
    this.get_position_X = function() {

       document.getElementById("x-axis").innerHTML = this.X;

    };
    this.get_position_Y = function() {

       document.getElementById("y-axis").innerHTML = this.Y;

    };
    this.get_position_Z = function() {

       document.getElementById("z-axis").innerHTML = this.Z;

    };

}

//execute calculations when button is clicked
function calculateAll() {

    //get values from input boxes
    //my problem is here right here and Now I am going to solve it!!!!
    var X_input = document.getElementById('Xcoord');
    X_input_float = parseFloat(X_input.focus());
    console.log(X_input_float());
    var Y_input = document.getElementById('Ycoord');
    Y_input_float = parseFloat(Y_input.focus());
    console.log(Y_input_float);
    var Z_input = document.getElementById('Zcoord')
    Z_input_float = parseFloat(Z_input.focus());
    console.log(Z_input_float);

    //use function parseInt to convet string to integer
    
    ball_move_1 = new Ball();
    ball_move_1.set_position(X_input_float, Y_input_float, Z_input_float);
    ball_move_1.move(3.5, 45, 45, 5);
    ball_move_1.get_position_X();
    ball_move_1.get_position_Y();
    ball_move_1.get_position_Z();
    	
}

//Accesses button from html	
var calculate = document.getElementById("calculate");
calculate.addEventListener("click", function() { calculateAll(); } );