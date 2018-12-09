#!/usr/bin/python
import RPi.GPIO as GPIO # pylint: disable=import-error
import time

motionDetectorPin = 18

GPIO.setmode(GPIO.BCM)
GPIO.setup(motionDetectorPin, GPIO.IN)

# init list with pin numbers
pinList = [2, 3, 4, 17, 27, 22, 10, 9]

# loop through pins and set mode and state to 'low'
for i in pinList: 
    GPIO.setup(i, GPIO.OUT) 
    GPIO.output(i, GPIO.HIGH)

# time to sleep between operations in the main loop
sleepTime = 2

# start all relais one after another with timer as delay
def switchOnLights():
    print("Motion detected!")
    for i in pinList:
        GPIO.output(i, GPIO.LOW) # switch light on at pin i
        time.sleep(sleepTime)
    for i in pinList:
        GPIO.output(i, GPIO.HIGH) # switch light off at pin i

try:
    while True:
        time.sleep(0.1)
        currentState = GPIO.input(motionDetectorPin)
        if currentState == 1:
            print("Motion detected - switching lights on!")
            switchOnLights()
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()
    print("KeyBoardInterrupt detected! Application stopped!")
