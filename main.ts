input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P14, 90)
    soundExpression.yawn.playUntilDone()
    pins.servoWritePin(AnalogPin.P14, 45)
})
pins.servoWritePin(AnalogPin.P14, 45)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, 512)
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
})
