import math

M = 2.0  # Mach Number

mach_angle = math.degrees(math.asin(1 / M))
print(f'The Mach angle at M = { M } is { mach_angle } degrees.')