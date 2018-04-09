//Author: Austin Bearden
//Date Created: 4/8/2108
//Project: PhysicsFoosball Approach 2

//Special thank to schteppe for providing cannon.js physics engine on github for public use.
//Here's a link: https://github.com/schteppe/cannon.js 

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

//////////

    //create the world
    var my_world = new CANNON.World();
    my_world.gravity.set(0,0,-9.8); // m/sec^2

    var angular_to_linear = ang_velocity_input * radius_input;

    var x_ang_velocity = angular_to_linear * Math.cos(XYdirection_input*Math.PI/180);
    var y_ang_velocity = angular_to_linear * Math.sin(XYdirection_input*Math.PI/180);

    // Create sphere
    var radius = 5;
    var ball_body = new CANNON.Body({

        mass: 5, // kg
        position: new CANNON.Vec3(0,0,0), // m
        shape: new CANNON.Sphere(radius), // m
        velocity: new CANNON.Vec3(x_ang_velocity, y_ang_velocity, 0) // speed in m/sec

    });
    my_world.addBody(ball_body); //add our ball the world

    // Create a plane
    var ground_body = new CANNON.Body({

        mass: 0 // mass == 0 make the body static

    });
    var ground_shape = new CANNON.Plane(); // creating an instance of the plane shape
    ground_body.addShape(ground_shape); // telling the ground_body object what shape it has
    my_world.addBody(ground_body);


    my_world.step(1); // seconds

//////////

    var X_final = ball_body.position.x;
    var Y_final = ball_body.position.y;
    //output to HTML page
    document.getElementById("x-axis").innerHTML = "X-Position: " + X_final + " meters";
    console.log("X position: " + ball_body.position.x);
    //output to HTML page
    document.getElementById("y-axis").innerHTML = "Y-Position: " + Y_final + " meters";
    console.log("Y position: " + ball_body.position.y);

    console.log("Z position: " + ball_body.position.z);

}

//Accesses button from html
var calculate = document.getElementById("calculate");
calculate.addEventListener("click", function() { calculate_all(); } );