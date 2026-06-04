input.onButtonPressed(Button.A, function () {
    잡는사람.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    잡는사람.change(LedSpriteProperty.X, 1)
})
let 잡는사람: game.LedSprite = null
잡는사람 = game.createSprite(2, 4)
let 사과 = game.createSprite(2, randint(0, 4))
game.setLife(5)
/**
 * https://www.youtube.com/watch?v=wRLMoYCwZkQ
 */
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        사과.change(LedSpriteProperty.Y, 1)
        basic.pause(400)
    }
    if (잡는사람.isTouching(사과)) {
        game.addScore(1)
        사과.delete()
        사과 = game.createSprite(randint(0, 4), 0)
    } else {
        game.addScore(-1)
        game.removeLife(1)
        사과.delete()
        사과 = game.createSprite(randint(0, 4), 0)
    }
})
