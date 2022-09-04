controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.fx = 90
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.fx = 90
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . . f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . . f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 4 e f f f . 
    . . . f f e e e e e f . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 7 7 7 e 4 4 e . . 
    . . . f 6 6 6 f e e f . . 
    . . . . f f f f f f . . . 
    . . . . . . f f f . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
game.onUpdate(function () {
    if (controller.right.isPressed() && !(controller.left.isPressed())) {
        mySprite.fx = 0
        if (mySprite.vx < 100) {
            mySprite.vx += 5
        } else {
            mySprite.vx = 100
        }
    } else {
        if (controller.left.isPressed() && !(controller.right.isPressed())) {
            mySprite.fx = 0
            if (mySprite.vx > -100) {
                mySprite.vx += -5
            } else {
                mySprite.vx = -100
            }
        }
    }
})
