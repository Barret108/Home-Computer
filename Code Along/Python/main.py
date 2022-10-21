from typing import Final

while True:
    topic: Final = input("What do you want to convert today or type 'options': ")

    if topic.upper() == "OPTIONS":
        print("Available Categories: Weight and Length. ")
    else:
        break


def measure(offset, unit, distance, multiply = False):
    distance = float(distance)
    print(str(distance * offset if multiply else distance / offset) + unit)


# Weight conversions
if topic.upper() == "WEIGHT":
    weight = input("What is your weight: ")
    weight_unit = input("Would you like to convert to Kilo or Pound: ")
    if weight_unit.upper() == "KILO":
        weight = float(weight) * 0.45
        print(weight)
    else:
        weight = float(weight) * 2.2
        print(weight)

# measurement conversions
elif topic.upper() == "LENGTH":
    distance = input("How long is the measured item (do not include unit): ")
    measurement_type1 = input("Did you measure in cm, m, km, in, feet or mile: ")
    # Converting from CM
    if measurement_type1.upper() == "CM":
        measurement_to1 = input("Would you like to convert to m, km, in, feet or mile: ")
        if measurement_to1.upper() == "M":
            measure(100, 'm', distance)
        elif measurement_to1.upper() == "KM":
            measure(10000, 'km', distance)
        elif measurement_to1.upper() == "IN":
            measure(0.39, '"', distance, True)
        elif measurement_to1.upper() == "FEET":
            measure(10000, "'", distance, True)
        elif measurement_to1.upper() == "MILE":
            distance = float(distance) * 0.0000062
            distance= str(distance)
            print(distance + "mi")
    elif measurement_type1.upper() == "M":
        measurement_to1 = input("Would you like to convert to cm, km, in, feet or mile: ")
        if measurement_to1.upper() == "CM":
            measure(100, 'cm', distance, True)
        elif measurement_to1.upper() == "KM":
            measure(1000, 'km', distance)
        elif measurement_to1.upper() == "IN":
            measure(39, '"', distance, True)
        elif measurement_to1.upper() == "FEET":
            measure(3.2, "'", distance, True)
        elif measurement_to1.upper() == "MILE":
            measure(0.00062, 'mi', distance, True)
    elif measurement_type1.upper() == "KM":
        measurement_to1 = input("Would you like to convert to cm, km, in, feet or mile: ")
        if measurement_to1.upper() == "M":
            measure(1000, 'm', distance, True)
        elif measurement_to1.upper() == "CM":
            measure(100000, 'cm', distance, True)
        elif measurement_to1.upper() == "IN":
            measure(39000, '"', distance, True)
        elif measurement_to1.upper() == "FEET":
            measure(3280, "'", distance, True)
        elif measurement_to1.upper() == "MILE":
            measure(0.62, 'mi', distance, True)
    elif measurement_type1.upper() == "IN":
        measurement_to1 = input("Would you like to convert to m, km, cm, feet or mile: ")
        if measurement_to1.upper() == "M":
            measure(0.025, 'm', distance, True)
        elif measurement_to1.upper() == "KM":
            measure(0.000025, 'km', distance, True)
        elif measurement_to1.upper() == "CM":
            measure(2.54, 'cm', distance, True)
        elif measurement_to1.upper() == "FEET":
            measure(0.083, "'", distance, True)
        elif measurement_to1.upper() == "MILE":
            measure(0.000015, 'mi', distance, True)
    elif measurement_type1.upper() == "FEET":
        measurement_to1 = input("Would you like to convert to m, km, cm, in or mile: ")
        if measurement_to1.upper() == "M":
            measure(0.304, 'm', distance, True)
        elif measurement_to1.upper() == "KM":
            measure(0.000304, 'km', distance, True)
        elif measurement_to1.upper() == "CM":
            measure(30.4, 'cm', distance, True)
        elif measurement_to1.upper() == "IN":
            measure(12, '"', distance, True)
        elif measurement_to1.upper() == "MILE":
            measure(0.00018, 'mi', distance, True)
    elif measurement_type1.upper() == "MILE":
        measurement_to1 = input("Would you like to convert to m, km, cm, in or feet: ")
        if measurement_to1.upper() == "M":
            measure(1609, 'm', distance, True)
        elif measurement_to1.upper() == "KM":
            measure(1.609, 'km', distance, True)
        elif measurement_to1.upper() == "CM":
            measure(160934, 'cm', distance, True)
        elif measurement_to1.upper() == "IN":
            measure(63360, '"', distance)
        elif measurement_to1.upper() == "FEET":
            measure(5280, "'", distance)

# Invalid inputs go here
else:
    print("Reload and use valid inputs")
