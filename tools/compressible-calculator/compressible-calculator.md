---
layout: default
title: Compressible Aerodynamics Calculator
nav_order: 3
description: "Compressible Aerodynamics Calculator"
permalink: /compressible-calculator

---

# Compressible Aerodynamics Calculator

Solve isentropic flow, normal shock, oblique shock, Fanno flow, and Rayleigh flow relations quickly and easily.
See sample implementations in Python, JavaScript, MATLAB, and C++.
This calculator is based on Virginia Tech's [Compressible Aerodynamics Calculator](http://www.dept.aoe.vt.edu/~devenpor/aoe3114/calc.html).

<script async src="/tools/compressible-calculator/calculator.js"></script>

## Isentropic Flow Relations

Information about isentropic flow relations.

<label for="gamma">Gamma
    <input type="number" id="gamma" name="gamma" value="1.4" min="1.01" step="0.01">
</label>
<br><label for="machnumber">Mach Number
    <input type="number" id="machnumber" name="machnumber" min="0" step="0.1">
</label>
<br>
<label for="machangle">Mach Angle
    <input type="number" id="machangle" name="machangle" min="0" step="0.1">
</label>
<br>
<label for="pmangle">P-M Angle
    <input type="number" id="pmangle" name="pmangle" min="0" step="0.1">
</label>
<br>
<label for="p_p0">P/P0
    <input type="number" id="p_p0" name="p_p0" min="0" step="0.1">
</label>

{% tabs isentrop %}

{% tab isentrop python %}
```python
import math

M = 2.0  # Mach Number

mach_angle = math.degrees(math.asin(1 / M))
print(f'The Mach angle at M = { M } is { mach_angle } degrees.')
```
{% endtab %}

{% tab isentrop js %}
```javascript
var M = 2.0;  // Mach Number

mach_angle = Math.asin(1 / M) * 180 / Math.PI;
console.log('The Mach angle at M = ' + M + ' is ' + mach_angle + ' degrees.');
```
{% endtab %}

{% tab isentrop MATLAB %}
```matlab
M = 2.0;  % Mach Number

mach_angle = asind(1 / M);
fprintf('The Mach angle at M = %f is %f degrees.', M, mach_angle)
```
{% endtab %}

{% tab isentrop C++ %}
```cpp
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
```
{% endtab %}

{% endtabs %}
