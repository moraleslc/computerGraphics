function setup() {
    createCanvas(800, 400);
    frameRate(1);
}

b1 = [120, 40, 320, 20, 320, 300, 330, 300];
b2 = [330, 300, 340, 300, 340, 20, 540, 40];

cambiadorcito = 0;

async function draw() {
    background(255);

    if (cambiadorcito == 1) {
        ruta(120, 40, 320, 20, 320, 300, 330, 300);
        ruta(330, 300, 340, 300, 340, 20, 540, 40);
    } else if (cambiadorcito == 2) {
        storyboard(120, 40, 320, 20, 320, 300, 330, 300);
        storyboard(330, 300, 340, 300, 340, 20, 540, 40);
    } else if (cambiadorcito == 3) {
        animacion(b1);
    } else if (cambiadorcito == 4) {
        animacion2(b2);
    } else if (cambiadorcito == 5) {
        ellipse(540, 40, 10, 10);
    }
}

function mouseClicked() {
    cambiadorcito = cambiadorcito + 1;
}

function ruta(x1, y1, ctrlx1, ctrly1, x2, y2, ctrlx2, ctrly2) {
    noFill();
    stroke(255, 148, 244);
    //    x1, y1, ctrlx1, ctrly1, x2, y2, ctrlx2, ctrly2
    bezier(x1, y1, ctrlx1, ctrly1, x2, y2, ctrlx2, ctrly2);
}

function storyboard(x1, y1, x2, y2, x3, y3, x4, y4) {
    fill(255);
    steps = 60;
    for (i = 0; i <= steps; i++) {
        t = i / float(steps);
        x = bezierPoint(x1, x2, x3, x4, t);
        y = bezierPoint(y1, y2, y3, y4, t);
        ellipse(x, y, 10, 10);
    }
}

async function animacion(b1) {
    rebote = 10;
    fill(255);
    steps = 60;
    for (i = 0; i <= steps; i++) {
        await sleep(10)
        t = i / float(steps);
        clear();
        background(255);
        //    x1, y1, ctrlx1, ctrly1, x2, y2, ctrlx2, ctrly2
        //    x1  y1    x2       y2   x3  y3    x4      y4
        x = bezierPoint(b1[0], b1[2], b1[4], b1[6], t);
        y = bezierPoint(b1[1], b1[3], b1[5], b1[7], t);

        ellipse(x, y, rebote, 10);
        rebote = 10 + (i * 0.5);
    }
    cambiadorcito += 1;
}

async function animacion2(b2) {
    regreso = 40;
    for (i = 0; i <= steps; i++) {
        await sleep(10)
        t = i / float(steps);
        clear();
        background(255);
        //    x1, y1, ctrlx1, ctrly1, x2, y2, ctrlx2, ctrly2
        //    x1  y1    x2       y2   x3  y3    x4      y4
        x = bezierPoint(b2[0], b2[2], b2[4], b2[6], t);
        y = bezierPoint(b2[1], b2[3], b2[5], b2[7], t);

        ellipse(x, y, regreso, 10);
        regreso = 40 - (i * 0.5);
    }
    cambiadorcito += 1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}