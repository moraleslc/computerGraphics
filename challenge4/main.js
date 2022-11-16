function setup()
{
    createCanvas(400, 400);
}

let lados = 5;
let color1 = 3;
let color2 = 105;
let color3 = 95;

function mousePressed()
{
    color1 = random(255);
    color2 = random(255);
    color3 = random(255);

    if (lados < 12)
    {
        lados = lados + 1;
    }
    else
    {
        lados = 5;
    }
}

function draw()
{
    background(102);
    fill(color1, color2, color3);
    polygon(width / 2, height / 2, 50, lados);
}

function polygon(x, y, radius, npoints)
{
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle)
    {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}