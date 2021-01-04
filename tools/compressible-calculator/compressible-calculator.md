---
layout: default
title: Compressible Aerodynamics Calculator
nav_order: 3
description: "Compressible Aerodynamics Calculator"
permalink: /compressible-calculator
mathjax: true
---

# Compressible Aerodynamics Calculator

Solve isentropic flow, normal shock, oblique shock, Fanno flow, and Rayleigh flow relations quickly and easily.
See sample implementations in Python, JavaScript, MATLAB, and C++.
This calculator is based on Virginia Tech's [Compressible Aerodynamics Calculator](http://www.dept.aoe.vt.edu/~devenpor/aoe3114/calc.html).

<script async src="/tools/compressible-calculator/calculator.js"></script>

## Isentropic Flow Relations

Information about isentropic flow relations.

<div class="calculator">
    <label for="gamma">\( \gamma \) =
        <input type="number" id="gamma" name="gamma" value="1.4" min="1.01" step="0.01">
    </label>
    <br>
    <label for="machnumber">\( M \) =
        <input type="number" id="machnumber" name="machnumber" min="0" step="0.1">
    </label>
    <label for="machangle">\( \mu \) =
        <input type="number" id="machangle" name="machangle" min="0" step="0.1">
    </label>
    <label for="pmangle">\( \nu \) =
        <input type="number" id="pmangle" name="pmangle" min="0" step="0.1">
    </label>
    <label for="p_p0">\( \frac{p}{p_0} \) =
        <input type="number" id="p_p0" name="p_p0" min="0" step="0.1">
    </label>
    <label for="rho_rho0">\( \frac{\rho}{\rho_0} \) =
        <input type="number" id="rho_rho0" name="rho_rho0" min="0" step="0.1">
    </label>
    <label for="T_T0">\( \frac{T}{T_0} \) =
        <input type="number" id="T_T0" name="T_T0" min="0" step="0.1">
    </label>
    <label for="p_pstar">\( \frac{p}{p*} \) =
        <input type="number" id="p_pstar" name="p_pstar" min="0" step="0.1">
    </label>
    <label for="rho_rhostar">\( \frac{\rho}{\rho*} \) =
        <input type="number" id="rho_rhostar" name="rho_rhostar" min="0" step="0.1">
    </label>
    <label for="T_Tstar">\( \frac{T}{T*} \) =
        <input type="number" id="T_Tstar" name="T_Tstar" min="0" step="0.1">
    </label>
    <label for="A_Astar">\( \frac{A}{A*} \) =
        <input type="number" id="A_Astar" name="A_Astar" min="0" step="0.1">
    </label>
</div>

{% include addtab.html name="python" file="isentropic_flow.py" type="python" %}
{% include addtab.html name="js" file="isentropic_flow.js" type="javascript" %}
{% include addtab.html name="MATLAB" file="isentropic_flow.m" type="matlab" %}
{% include addtab.html name="C++" file="isentropic_flow.cpp" type="cpp" %}
{% include compiletabs.html %}
