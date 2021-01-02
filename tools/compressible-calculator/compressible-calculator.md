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

<div class="code-example" markdown="1">
Python:

```python
import math

mach_number = 2.0

mach_angle = math.asin(1 / mach_number)
```
</div>

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a href="#profile" data-toggle="tab">Profile</a></li>
    <li><a href="#about" data-toggle="tab">About</a></li>
    <li><a href="#match" data-toggle="tab">Match</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="profile">
    <h2>Profile</h2>
<p>Praesent sit amet fermentum leo....</p>
</div>

<div role="tabpanel" class="tab-pane" id="about">
    <h2>About</h2>
    <p>Lorem ipsum ...</p></div>

<div role="tabpanel" class="tab-pane" id="match">
    <h2>Match</h2>
    <p>Vel vehicula ....</p>
</div>
</div>