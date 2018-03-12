//this is approach 2
//Author: Austin Bearden
//Date Created: 3/11/2018

//including math library

//add jQuery for output to html page
$(document).ready(function() {

function Ball() {

    this.X = 4.00;
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

        document.getElementById("x-axis").innerHTML = "X-Coordinate: " + this.X;
        console.log(this.X);

    };
    this.get_position_Y = function() {

        document.getElementById("y-axis").innerHTML = "Y-Coordinate: " + this.Y;
        console.log(this.Y);

    };
    this.get_position_Z = function() {

        document.getElementById("z-axis").innerHTML = "Z-Coordinate: " + this.Z;
        console.log(this.Z);

    };

}

ball_move_1 = new Ball();
ball_move_1.set_position(4.0, -4.0, 4.0);
ball_move_1.move(3.5, 45, 45, 5);
ball_move_1.get_position_X();
ball_move_1.get_position_Y();
ball_move_1.get_position_Z();

});