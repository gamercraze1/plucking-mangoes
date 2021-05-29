class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.008,
            length: 11
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
    }
    
}
