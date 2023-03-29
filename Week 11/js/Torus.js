class Torus extends threedshape{

    constructor(x, y, radius, tubeRadius)
    {
        super(x,y);
        this.radius = radius;
        this.tubeRadius = tubeRadius;

    }

    draw()
    {
        push();
        super.moveShape();
        rotateX(frameCount * .01);
        rotateY(frameCount * .01);
        torus(this.radius, this.tubeRadius);
        pop();
    }
}