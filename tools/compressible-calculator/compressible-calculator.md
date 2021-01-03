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

{% include addtab.html name="python" file="isentropic_flow.py" type="python" %}
{% include addtab.html name="js" file="isentropic_flow.js" type="javascript" %}
{% include addtab.html name="MATLAB" file="isentropic_flow.m" type="matlab" %}
{% include addtab.html name="C++" file="isentropic_flow.cpp" type="cpp" %}
{% include compiletabs.html %}
