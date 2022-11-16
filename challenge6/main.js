function setup() {
    createCanvas(400, 400);
}

x1 = 0;
y1 = 0;
x2 = 0;
y2 = 0;
ctrlx1 = 0;
ctrly1 = 0;
ctrlx2 = 0;
ctrly2 = 0;
puntos = 0;
value = 0;
puntitos = 0;
movimientito1 = 0;
movimientito2 = 0;

function draw() {

    background(220);
    strokeWeight(5);
    point(ctrlx1, ctrly1);
    point(ctrlx2, ctrly2);
    if (puntitos == 3) {
        bezier(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2);
    } else {
        line(x1, y1, x2, y2);

    }
}

function mousePressed() {
    if (puntitos == 0) {
        x1 = mouseX;
        y1 = mouseY;
        x2 = mouseX;
        y2 = mouseY;
        puntitos = puntitos + 1;
    } else if (puntitos == 1) {
        ctrlx1 = mouseX;
        ctrly1 = mouseY;
        puntitos = puntitos + 1;
    } else if (puntitos == 2) {
        ctrlx2 = mouseX;
        ctrly2 = mouseY;
        puntitos = puntitos + 1;
        // condicional pa mover puntitos
    } else if (mouseX + 10 > ctrlx1 && mouseX - 10 < ctrlx1 && mouseY + 10 > ctrly1 && mouseY - 10 < ctrly1) {
        movimientito1 = 1;
    } else if (mouseX + 10 > ctrlx2 && mouseX - 10 < ctrlx2 && mouseY + 10 > ctrly2 && mouseY - 10 < ctrly2) {
        movimientito2 = 1;
    }
}


function mouseReleased() {
    if (puntitos == 1) {
        x2 = mouseX;
        y2 = mouseY;
    } else if (movimientito1 == 1) {
        ctrlx1 = mouseX;
        ctrly1 = mouseY;
        movimientito1 = 0;
    } else if (movimientito2 == 1) {
        ctrlx2 = mouseX;
        ctrly2 = mouseY;
        movimientito2 = 0;
    }
}