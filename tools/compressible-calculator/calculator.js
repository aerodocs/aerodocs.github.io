var gamma = document.getElementById('gamma');
var machNumber = document.getElementById('machnumber');
var machAngle = document.getElementById('machangle');
var PMAngle = document.getElementById('pmangle');
var p_p0 = document.getElementById('p_p0');
var r_r0 = document.getElementById('rho_rho0');
var T_T0 = document.getElementById('T_T0');
var p_ps = document.getElementById('p_pstar');
var r_rs = document.getElementById('rho_rhostar');
var T_Ts = document.getElementById('T_Tstar');
var A_As = document.getElementById('A_Astar');

var radToDeg = 180 / Math.PI;
var degToRad = Math.PI / 180;
function toDeg(rad) { return rad * radToDeg }
function toRad(deg) { return deg * degToRad }
function prettyPrint(x) { return +parseFloat(x).toPrecision(15) }
function prettyPrintAll() {
    machNumber.value = prettyPrint(machNumber.value);
    machAngle.value = prettyPrint(machAngle.value);
    PMAngle.value = prettyPrint(PMAngle.value);
    p_p0.value = prettyPrint(p_p0.value);
    r_r0.value = prettyPrint(r_r0.value);
    T_T0.value = prettyPrint(T_T0.value);
    p_ps.value = prettyPrint(p_ps.value);
    r_rs.value = prettyPrint(r_rs.value);
    T_Ts.value = prettyPrint(T_Ts.value);
    A_As.value = prettyPrint(A_As.value);
}

function getPMAngle(M2m, kp, km) {
    return Math.sqrt(kp / km) * Math.atan(Math.sqrt(km * M2m / kp)) - Math.atan(Math.sqrt(M2m));
}

function getAstarRatio(M, kp, km, p) {
    return Math.pow(kp / (2 + km * M * M), -p) / M;
}

machNumber.onchange = function() {
    var k = parseFloat(gamma.value);
    var M = parseFloat(machNumber.value);
    machAngle.value = toDeg(Math.asin(1 / M));

    kp = k + 1;
    km = k - 1;
    M2 = M * M;
    M2m = M2 - 1;
    PMAngle.value = toDeg( getPMAngle(M2m, kp, km) );

    var f = 1 + 0.5 * km * M2;
    p_p0.value = Math.pow(f, -k / km);
    r_r0.value = Math.pow(f, -1 / km);
    T_T0.value = Math.pow(f, -1);

    var f1 = 1 + 0.5 * km;
    p_ps.value = Math.pow(f / f1, -k / km);
    r_rs.value = Math.pow(f / f1, -1 / km);
    T_Ts.value = Math.pow(f / f1, -1);

    var p = kp / (2.0 * km);
    A_As.value = getAstarRatio(M, kp, km, p);

    prettyPrintAll();
}

gamma.onchange = function() { machNumber.onchange() }

machAngle.onchange = function() {
    var mu = toRad(parseFloat(machAngle.value));
    machNumber.value = 1 / Math.sin(mu);
    machNumber.onchange();
}

/*
 * Newton's Method
 * Solves the following equation for x:
 * y = func(x) --- Equivalently: func(x) - y = 0
 */
function solve(func, y, initial_guess, tolerance=1e-15) {
    var x0 = initial_guess;
    var y0 = func(x0);
    var x1 = x0 + 0.05;
    var y1 = 0;
    var dy_dx = 0;
    var i = 0;
    while(Math.abs(y - y0) > tolerance && i++ < 100) {
        y1 = func(x1);
        dy_dx = (y1 - y0) / (x1 - x0);
        x0 = x1;
        y0 = y1;
        x1 -= (y0 - y) / dy_dx;
    }
    return x0;
}

PMAngle.onchange = function() {
    var k = parseFloat(gamma.value);
    var nu = toRad(parseFloat(PMAngle.value));

    var kp = k + 1;
    var km = k - 1;
    var M2m = solve(function(x) { return getPMAngle(x, kp, km) }, nu, 2.0);
    machNumber.value = Math.sqrt(M2m + 1.0);
    machNumber.onchange();
}

p_p0.onchange = function() {
    var k = parseFloat(gamma.value);
    var pr = parseFloat(p_p0.value);

    var kp = k + 1;
    var km = k - 1;
    var f = Math.pow(pr, -km / k);
    machNumber.value = Math.sqrt(2 * (f - 1) / km);
    machNumber.onchange();
}

r_r0.onchange = function() {
    var k = parseFloat(gamma.value);
    var rr = parseFloat(r_r0.value);

    var kp = k + 1;
    var km = k - 1;
    var f = Math.pow(rr, -km);
    machNumber.value = Math.sqrt(2 * (f - 1) / km);
    machNumber.onchange();
}

T_T0.onchange = function() {
    var k = parseFloat(gamma.value);
    var Tr = parseFloat(T_T0.value);

    var kp = k + 1;
    var km = k - 1;
    var f = Math.pow(Tr, -1);
    machNumber.value = Math.sqrt(2 * (f - 1) / km);
    machNumber.onchange();
}

p_ps.onchange = function() {
    var k = parseFloat(gamma.value);
    var pr = parseFloat(p_ps.value);

    var kp = k + 1;
    var km = k - 1;
    var f1 = 1 + 0.5 * km;
    var f = Math.pow(pr, -km / k) * f1;
    machNumber.value = Math.sqrt(2 * (f - 1) / km);
    machNumber.onchange();
}

r_rs.onchange = function() {
    var k = parseFloat(gamma.value);
    var rr = parseFloat(r_rs.value);

    var kp = k + 1;
    var km = k - 1;
    var f1 = 1 + 0.5 * km;
    var f = Math.pow(rr, -km) * f1;
    machNumber.value = Math.sqrt(2 * (f - 1) / km);
    machNumber.onchange();
}

T_Ts.onchange = function() {
    var k = parseFloat(gamma.value);
    var Tr = parseFloat(T_Ts.value);

    var kp = k + 1;
    var km = k - 1;
    var f1 = 1 + 0.5 * km;
    var f = Math.pow(Tr, -1) * f1;
    machNumber.value = Math.sqrt(2 * (f - 1) / km);
    machNumber.onchange();
}

A_As.onchange = function() {
    var k = parseFloat(gamma.value);
    var Ar = parseFloat(A_As.value);

    var kp = k + 1;
    var km = k - 1;
    var p = kp / (2.0 * km);
    machNumber.value = solve(function(x) { return getAstarRatio(x, kp, km, p) }, Ar, Math.sqrt(Ar), Ar * Ar * 1e-15);
    machNumber.onchange();
}
