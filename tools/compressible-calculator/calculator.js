var gamma = document.getElementById('gamma');
var machNumber = document.getElementById('machnumber');
var machAngle = document.getElementById('machangle');
var PMAngle = document.getElementById('pmangle');
var p_p0 = document.getElementById('p_p0');

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
    p_p0.value = Math.pow(1 + (k - 1) * M * M / 2, -k / (k - 1));
}