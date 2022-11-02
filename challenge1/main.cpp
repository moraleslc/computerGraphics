/*
Carla Morales López A01639225

Correr en consola con el directorio abierto del archivo el siguiente comando:
g++ main.cpp -o main.exe -std=c++17
Después correr:
./main
*/

#include <iostream>
#include <cmath>
using namespace std;

main()
{

    double x1, x2, y1, y2;

    cin >> x1 >> y1;
    cin >> x2 >> y2;

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
        cout << round(x) << " " << round(y) << endl;

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