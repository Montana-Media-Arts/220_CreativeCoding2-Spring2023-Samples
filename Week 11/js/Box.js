class Box extends threedshape
{
    constructor(x, y, width, height)
    {
        super(x,y);
        this.width = width;
        this.height = height;

    }

    draw()
    {
        push();
        super.moveShape();
        rotateX(frameCount * .01);
        rotateY(frameCount * .01);
        box(this.width, this.height);
        pop();
    }

}