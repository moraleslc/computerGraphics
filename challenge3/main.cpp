#include <GL/glut.h>
#include <GL/gl.h>
#include <time.h>
#include <iostream>
#include <stdlib.h>
#include <math.h>

using namespace std;



void setup (void)
{
  glClearColor (0.0, 0.0, 0.0, 0.0); 
	glMatrixMode (GL_PROJECTION); 
	gluOrtho2D (0.0, 600.0, 0.0, 600.0); 
}

void dibujarPunto (GLint x, GLint y)
{
	glColor3f (1.0, 1.0, 1.0); 
	glBegin (GL_POINTS);
		glVertex2i (x, y);	
	glEnd ();
	glFlush (); 
}


void dibujarLinea ( int x1, int y1, int x2, int y2)
{

	double dx = abs(x1 - x2);
    double dy = abs(y1 - y2);

    double steps;

    if (dx > dy)
    {
        steps = dx;
    }
    else
    {
        steps = dy;
    }

    double xinc = (dx / steps);
    double yinc = (dy / steps);

    double x = x1;
    double y = y1;

    for (double i = 0; i <= steps; i++)
    {
        dibujarPunto(round(x), round(y));

        if (x < x2)
        {
            x += xinc;
        }
        else
        {
            x -= xinc;
        }

        if (y < y2)
        {
            y += yinc;
        }
        else
        {
            y -= yinc;
        }
    }

}


void casosDePrueba (void)
{
    dibujarLinea (1, 2, 100, 20);
    dibujarLinea (10, 200, 50, 100);
    dibujarLinea (300, 300, 10, 10);
    dibujarLinea (200, 300, 250, 50);
    dibujarLinea (350, 350, 100, 300);	
}

int main (int argc, char** argv)
{

	
	glutInit (&argc, argv); 
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB); 
	glutInitWindowPosition (0, 0); 
	glutInitWindowSize (400, 400); 
	glutCreateWindow ("Challenge 3"); 

	setup (); 
	
	glutDisplayFunc (casosDePrueba); 
	glutMainLoop (); 

	return 0;
}
