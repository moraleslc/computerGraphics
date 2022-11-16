function setup() {
    createCanvas(1920, 1080);
}

function myTranslate(x, y, tx, ty) {
    newX = x + tx;
    newY = y + ty;
    return [newX, newY];
}

function myRotation(x, y, angle) {
    newX = x * cos(angle) - y * sin(angle);
    newY = x * sin(angle) + y * cos(angle);
    return [newX, newY];
}

function myRotationPiv(x, y, angle, pivX, pivY) {
    angle = angle * (PI / 180);
    newX = pivX + (x - pivX) * cos(angle) - (y - pivY) * sin(angle);
    newY = pivY + (x - pivX) * sin(angle) + (y - pivY) * cos(angle);
    return [newX, newY];
}

function myScaling(x, y, sx, sy, fixedX, fixedY) {
    newX = x * sx + fixedX * (1 - sx);
    newY = y * sy + fixedY * (1 - sy);
    return [newX, newY];
}

function myReflectionX(x, y) {
    let pivX = width / 2;
    let diffX = x - pivX;
    return [pivX - diffX, y];
}

function myShearX(x, y, s) {
    let pivY = height / 2;
    let d = y - pivY;
    return [x + d * s, y];
}

function myShearY(x, y, s) {
    let piv = width / 2;
    let d = x - piv;
    let newY = y + d * s;
    return [x, newY];
}

function draw() {
    background(102);
    fill(255);
    polygon(width / 2, height / 2, 50, 6, myScaling, 2, 2, width / 4, height / 4);
    fill(255, 1, 1);
    polygon(width / 2, height / 2, 50, 6, null);
    fill(1);
    polygon(width / 2, height / 2, 50, 6, myTranslate, 50, 50);
    fill(1, 255, 1);
    polygon(width / 2, height / 2, 50, 6, myRotation, 50, 50);
    fill(1, 1, 255);
    polygon(width / 2, height / 2, 50, 6, myRotationPiv, 50, 50, 50);
    fill(255, 255, 1);
    polygon(width / 2, height / 2, 50, 3, myReflectionX);
    fill(255, 1, 255);
    polygon(100 + width / 2, height / 2, 50, 4, myShearX, 0.5);
    fill(1, 255, 255);
    polygon(width / 2, 150 + height / 2, 50, 4, myShearY, 0.5);
}

function polygon(x, y, radius, npoints, transform, ...params) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        if (transform != null) {
            [sx, sy] = transform(sx, sy, ...params);
        }
        vertex(sx, sy);
    }
    endShape(CLOSE);
}