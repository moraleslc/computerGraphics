#include <GL/glut.h>
#include <GL/gl.h>
#include <time.h>
#include <iostream>
#include <stdlib.h>
#include <math.h>

const double TWO_PI = 6.2831853;

void setup (void)
{
  glClearColor (0.0, 0.0, 0.0, 0.0); 
	glMatrixMode (GL_PROJECTION); 
	gluOrtho2D (0.0, 600.0, 0.0, 600.0); 
    GLsizei winWidth = 400, winHeight = 400;
    GLuint regHex;
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowPosition(50, 100);
    glutInitWindowSize(400, 400);
    glutCreateWindow("Draw a Polygon");
}

void init(void)
{
    screenPt hexVertex, circCtr;
    GLdouble theta;
    GLint k;

    /* Set circle center coordinates. */
    circCtr.setCoords (winWidth / 2, winHeight / 2);

    glClearColor (1.0, 1.0, 1.0, 0.0); //    Display-window color = white.
    /* Set up a display list for a red regular hexagon.
     * Vertices for the hexagon are six equally spaced
     * points around the circumference of a circle.
     */

    regHex = glGenLists (1); // Get an identifier for the display list.
    glNewList (regHex, GL_COMPILE);
    glColor3f (1.0, 0.0, 0.0);  // Set fill color for hexagon to red.
    glBegin (GL_POLYGON);

    for (k = 0; k < n; k++) {
	theta = TWO_PI * k / 6.0;
	hexVertex.setCoords (circCtr.getx ( ) + 150 * cos (theta),
			     circCtr.gety ( ) + 150 * sin (theta));
	glVertex2i (hexVertex.getx ( ), hexVertex.gety ( ));
    }
    glEnd ( );
    glEndList ( );
}

int main(){
    setup();
    glutDisplayFunc(drawPolygon);
    glutMainLoop();
    return 0;
}