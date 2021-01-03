var M = 2.0;  // Mach Number

mach_angle = Math.asin(1 / M) * 180 / Math.PI;
console.log('The Mach angle at M = ' + M + ' is ' + mach_angle + ' degrees.');