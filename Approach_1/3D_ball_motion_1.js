//Author: Austin Bearden
//Date Created: 3/16/2108
//Project: PhysicsFoosball Approach 1

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

    //create the world
    var ball_world = new CANNON.World();
    ball_world.gravity.set(0,0,-9.81); // meters/sec^2

    //create the ball
    var radius = 0; // meters
    var ball_body = new CANNON.Body({

        mass: 5, // kg
        position: new CANNON.Vec3(X_input,Y_input,Z_input), // meters
        shape: new CANNON.Sphere(radius)

    });

    ball_world.addBody(ball_body);

    // Create floor of ball world
    var world_ground = new CANNON.Body({

        mass: 0 // mass == 0 makes the body static

    });

    var ground_shape = new CANNON.Plane();
    world_ground.addShape(ground_shape);
    ball_world.addBody(world_ground);

    //var fixed_time_step = 1.0 / 1.0; // seconds (So, steps per seconds or second per steps ??)
    //var max_sub_steps = 1; // figure out these last two lines


        ball_world.step(time);

        var X_final = ball_body.position.x;
        var Y_final = ball_body.position.y;
        var Z_final = ball_body.position.z;
        //output to HTML page
        document.getElementById("x-axis").innerHTML = "X-Position: " + X_final + " meters";
        console.log("X position: " + ball_body.position.x);
        //output to HTML page
        document.getElementById("y-axis").innerHTML = "Y-Position: " + Y_final + " meters";
        console.log("Y position: " + ball_body.position.y);
        //output to HTML page
        document.getElementById("z-axis").innerHTML = "Z-Position: " + Z_final + " meters";
        console.log("Z position: " + ball_body.position.z);

}

//Accesses button from html	
var calculate = document.getElementById("calculate");
calculate.addEventListener("click", function() { calculateAll(); } );