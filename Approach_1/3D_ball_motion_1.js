//Author: Austin Bearden
//Creation Date: 3/13/2108
//Project": PhysicsFoosball Approach 1

//create the world
var ball_world = new CANNON.World();
ball_world.gravity.set(0,0,-9.81); // meters/sec^2

//create the ball
var radius = 0; // meters
var ball_body = new CANNON.Body({

    mass: 5, // kg
    position: new CANNON.Vec3(0,0,0), // meters
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

var fixed_time_step = 1.0 / 60.0; // seconds (So, steps per seconds or second per steps ??)
var max_sub_steps = 3; // figure out these last two lines

//Start the simulation loop
var last_time;
(function simloop(time){
    requestAnimationFrame(simloop);
    if(last_time !== undefined){
        var dt = (time - last_time) / 1000;
        ball_world.step(fixed_time_step, dt, max_sub_steps);
    }
    var X_final = ball_body.position.x;
    var Y_final = ball_body.position.y;
    var Z_final = ball_body.position.z;
    console.log("X position: " + ball_body.position.x);
    console.log("Y position: " + ball_body.position.y);
    console.log("Z position: " + ball_body.position.z);
    last_time = time;

})();