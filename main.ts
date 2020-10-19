let dAdO = 0
input.onGesture(Gesture.Shake, function () {
    dAdO = randint(1, 6)
    if (dAdO == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (dAdO == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . # .
            . . . . .
            . . . . .
            `)
    }
    if (dAdO == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    if (dAdO == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (dAdO == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (dAdO == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
