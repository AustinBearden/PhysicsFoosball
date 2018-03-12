//this is approach 2
//Author: Austin Bearden
//Date Created: 3/11/2018

function Ball() {

    this.X = 0.00;
    this.Y = 0.00;
    //this.Z = 0.00;
    this.Velocity = 0.00;
    this.set_position = function(x, y) {
        this.X = x;
        this.Y = y;
        //this.Z = z;
    
    };
    this.move = function(velocity, directionXY, time) {
        //now compute where ball will be after specified time given
        //use the equation Rfinal = Rinitial + velocity * (time in motion)

        x_inter = X + (velocity * time);
        y_inter = Y + (velocity * time);
        //z_inter = Z + (velocity * time);

        x_final = 
        y_final = 
        //z_final = 
        
        set_position(x_final, y_final);

    };
    this.get_position_X = function() {

        return X;

    };
    this.get_position_Y = function() {

        return Y;

    };
    //this.get_position_Z = function() {

    //    return Z;

    //};

}