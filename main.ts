function Ampeln_zeigen () {
    auto.show()
    fuss.show()
}
input.onButtonPressed(Button.A, function () {
    Ampeln_aus()
    auto.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    auto.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    fuss.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Ampeln_zeigen()
    basic.pause(500)
    Ampeln_aus()
    auto.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    fuss.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Ampeln_zeigen()
    basic.pause(1000)
    Ampeln_aus()
    auto.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    fuss.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    Ampeln_zeigen()
    basic.pause(2000)
    Ampeln_aus()
    auto.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    fuss.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Ampeln_zeigen()
    basic.pause(1000)
    Ampeln_aus()
    auto.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    auto.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    fuss.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Ampeln_zeigen()
    basic.pause(500)
    Ampeln_aus()
    auto.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    fuss.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Ampeln_zeigen()
})
function Ampeln_aus () {
    auto.clear()
    fuss.clear()
}
let fuss: neopixel.Strip = null
let auto: neopixel.Strip = null
auto = neopixel.create(DigitalPin.C16, 3, NeoPixelMode.RGB)
fuss = neopixel.create(DigitalPin.C17, 2, NeoPixelMode.RGB)
auto.setBrightness(50)
fuss.setBrightness(50)
auto.clear()
fuss.clear()
auto.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
fuss.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
auto.show()
fuss.show()
basic.forever(function () {
	
})
