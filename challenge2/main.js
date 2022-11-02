function setup() {
    createCanvas(400, 400);
}
function tablitas(x1, y1, x2, y2) {
    var dx, dy, steps, x, xinc, y, yinc;
    dx = (x1 - x2);
    dy = (y1 - y2);

    if (dx < 0) {
        dx = dx * -1;
    }

    if (dy < 0) {
        dy = dy * -1;
    }

    if (dx > dy) {
        steps = (dx);
    } else {
        steps = (dy);
    }

    xinc = dx / steps;
    yinc = dy / steps;
    x = x1;
    y = y1;

    var tablita = [];

    for (var i = 0; i < steps; i = i + 1) {
        tablita.push(x);
        tablita.push(y);

        if (x < x2) {
            x += xinc;
        } else {
            x -= xinc;
        }

        if (y < y2) {
            y += yinc;
        } else {
            y -= yinc;
        }
    }
    return tablita;
}

tablita1 = tablitas(1, 2, 100, 20);
tablita2 = tablitas(10, 200, 50, 10);
tablita3 = tablitas(300, 300, 10, 10);
tablita4 = tablitas(200, 300, 250, 50);
tablita5 = tablitas(350, 350, 100, 300);


function draw() {
    background(220);
    for (var i = 0; i < tablita1.length; i = i + 2) {
        point(tablita1[i], tablita1[i + 1]);
    }
    for (var i = 0; i < tablita2.length; i = i + 2) {
        point(tablita2[i], tablita2[i + 1]);
    }
    for (var i = 0; i < tablita3.length; i = i + 2) {
        point(tablita3[i], tablita3[i + 1]);
    }
    for (var i = 0; i < tablita4.length; i = i + 2) {
        point(tablita4[i], tablita4[i + 1]);
    }
    for (var i = 0; i < tablita5.length; i = i + 2) {
        point(tablita5[i], tablita5[i + 1]);
    }

}