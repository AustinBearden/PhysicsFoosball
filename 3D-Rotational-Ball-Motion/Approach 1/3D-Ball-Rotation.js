//Author: Austin Bearden
//Date Created: 4/4/2018
//File name: 3D-Ball-Rotation.js
//Project: Project 2- Approach 1

//creating the ball class
//only argument is the ball's radius since this maters
function Ball(radius) {

    //initialize variables
    this.Radius = radius;
    this.ang_deceleration = (-3.0); //in meters per second^2
    this.X = 0.00;
    this.Y = 0.00;
    this.Z = 0.00;
    this.time = 0.0;
    this.angular_velocity = 0.0;
    this.direction_xy = 0.0;
    
    //helper methods
    this.set_radius = function(new_radius)
    {
        this.Radius = new_radius;
    };

    this.set_ang_velocity = function(new_ang_velocity)
    {
        this.angular_velocity = new_ang_velocity;
    };

    this.set_ang_deceleration = function(new_ang_deceleration)
    {
        this.ang_deceleration = new_ang_deceleration;
    };

    this.set_X = function(new_X)
    {
        this.X = new_X;
    };

    this.set_Y = function(new_Y)
    {
        this.Y = new_Y;
    };
    
    this.get_position_X = function()
    {

        //output to HTML page
        document.getElementById("x-axis").innerHTML = "X-Position: " + this.X + " meters";

    };

    this.get_position_Y = function()
    {

        //output to HTML page
        document.getElementById("y-axis").innerHTML = "Y-Position: " + this.Y + " meters";

    };

    //movement method
    //Arguments: Angular velocity of the ball, direction based on angle from the positive X-axis,
    //
    //This will set the ball's new x and y positions after time given
    //It will also set the ball's new angular velocity after the time given
    this.move_ball = function(time, ang_velocity, direction_xy)
    {
        
        //1) change the angular velocity to linear velocity
        var lin_velcoity = this.Radius * ang_velocity;
        //2) split up the velocity into x and y components
        var x_lin_velocity = lin_velcoity*Math.cos(direction_xy*Math.PI/180);
        //conditions that set x_final to zero if tbey are zero or negative
        if(x_lin_velocity <= 0) {
            x_lin_velocity = 0;
        } else {
        }
        var y_lin_velocity = lin_velcoity*Math.sin(direction_xy*Math.PI/180);
        if(y_lin_velocity <= 0) {
            y_lin_velocity = 0;
        } else {
        }
        //find linear x and y placement of the ball
        var new_x = this.X + x_lin_velocity*time + 0.5*(this.ang_deceleration*this.Radius)*(Math.pow(time, 2));
        var new_y = this.Y + y_lin_velocity*time + 0.5*(this.ang_deceleration*this.Radius)*(Math.pow(time, 2));

        //set the balls new position (x and y) and current angular velocity
        this.set_ang_velocity(ang_velocity + this.ang_deceleration*time);
        this.set_X(new_x);
        this.set_Y(new_y);
        
    };

}

    //execute calculations when button is clicked
    function calculate_all() {

        //get values from input boxes
        var radius_input = parseFloat(document.getElementById('radiusID').value);
        console.log("Radius: " + radius_input);
        var time_input = parseFloat(document.getElementById('timeID').value);
        console.log("Time: " + time_input);
        var ang_velocity_input = parseFloat(document.getElementById('ang_velocityID').value);
        console.log("Angular Velocity: " + ang_velocity_input);
        var XYdirection_input = parseFloat(document.getElementById('XYdirectionID').value);
        console.log("XYdirection: " + XYdirection_input);

        ball_move_1 = new Ball(radius_input);
        ball_move_1.move_ball(time_input, ang_velocity_input, XYdirection_input);
        ball_move_1.get_position_X();
        ball_move_1.get_position_Y();
            
    }

    //Accesses button from html	
    var calculate = document.getElementById("calculate");
    calculate.addEventListener("click", function() { calculate_all(); } );