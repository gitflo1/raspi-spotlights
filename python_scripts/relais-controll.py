#!/usr/bin/python
import RPi.GPIO as GPIO
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
def mein_callback(channel):
    print('Motion detected!')
    GPIO.output(2, GPIO.LOW)
    print "ONE"
    time.sleep(sleepTime) 
    GPIO.output(3, GPIO.LOW)
    print "TWO"
    time.sleep(sleepTime)  
    GPIO.output(4, GPIO.LOW)
    print "THREE"
    time.sleep(sleepTime)
    GPIO.output(17, GPIO.LOW)
    print "FOUR"
    time.sleep(sleepTime)
    GPIO.output(27, GPIO.LOW)
    print "FIVE"
    time.sleep(sleepTime)
    GPIO.output(22, GPIO.LOW)
    print "SIX"
    time.sleep(sleepTime)
    GPIO.output(10, GPIO.LOW)
    print "SEVEN"
    time.sleep(sleepTime)
    GPIO.output(9, GPIO.LOW)
    print "EIGHT"
    time.sleep(sleepTime)
    GPIO.output(2, GPIO.HIGH)
    GPIO.output(3, GPIO.HIGH)
    GPIO.output(4, GPIO.HIGH)
    GPIO.output(17, GPIO.HIGH)
    GPIO.output(27, GPIO.HIGH)
    GPIO.output(22, GPIO.HIGH)
    GPIO.output(10, GPIO.HIGH)
    GPIO.output(9, GPIO.HIGH)

try:
    GPIO.add_event_detect(motionDetectorPin , GPIO.RISING, callback=mein_callback, bouncetime=16000)
    while True:
        time.sleep(16000)
except KeyboardInterrupt:
    print "KeyBoardInterrupt detected! Stop application!"
GPIO.cleanup()

