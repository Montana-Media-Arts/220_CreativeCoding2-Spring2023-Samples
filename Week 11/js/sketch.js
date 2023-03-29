var shape1, shape2;

function setup()
{
    createCanvas(800,800, WEBGL);
    shape1 = new Box(random(100,200),random(100,200), 50, 25);
    shape2 = new Torus(random(-50,-200),random(-10,-200), 30, 20);
   
}

function draw()
{
    background(120,100, 40);
    shape1.draw();
    shape2.draw();
    

}