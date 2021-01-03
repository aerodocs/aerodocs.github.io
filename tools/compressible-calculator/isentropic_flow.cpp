#include <stdio.h>      /* printf */
#include <math.h>       /* asin */

#define PI 3.14159265

int main ()
{
  double M = 0.5;  // Mach Number
  double mach_angle = asin(1 / M) * 180.0 / PI;
  printf ("The Mach angle at M = %f is %f degrees.\n", M, mach_angle);
  return 0;
}