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
function toDeg(rad) { return rad * radToDeg }

machNumber.onchange = function() {
    var k = parseFloat(gamma.value);
    var M = parseFloat(machNumber.value);
    machAngle.value = toDeg(Math.asin(1 / M));

    kp = k + 1;
    km = k - 1;
    M2 = M * M;
    M2m = M2 - 1;
    PMAngle.value = toDeg(Math.sqrt(kp / km) * Math.atan(Math.sqrt(km * M2m / kp)) - Math.atan(Math.sqrt(M2m)));

    var f = 1 + 0.5 * km * M2;
    p_p0.value = Math.pow(f, -k / km);
    r_r0.value = Math.pow(f, -1 / km);
    T_T0.value = Math.pow(f, -1);

    var f1 = 1 + 0.5 * km;
    p_ps.value = Math.pow(f / f1, -k / km);
    r_rs.value = Math.pow(f / f1, -1 / km);
    T_Ts.value = Math.pow(f / f1, -1);

    var factor2 = kp / (2.0 * km);
    arat = M * Math.pow(f, -1*factor2) * Math.pow(kp/2.0, factor2);
    A_As.value = 1.0/arat;
}