namespace SpriteKind {
    export const bigShark = SpriteKind.create()
    export const Ghoul = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ghoul, function (sprite, otherSprite) {
    if (eatGhost) {
        sprites.destroy(otherSprite, effects.bubbles, 100)
        info.changeScoreBy(10)
        ghoul.changeScale(0.15, ScaleAnchor.Middle)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(Fish, sprites.dungeon.collectibleInsignia)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        scene.cameraShake(4, 500)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.follow(Fish, 300)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction >= 0) {
        Fish.vx += 200
    } else {
        Fish.vx += -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bigShark, function (sprite, otherSprite) {
    if (eatBig) {
        sprites.destroy(otherSprite, effects.bubbles, 100)
        info.changeScoreBy(5)
        Fish.changeScale(0.1, ScaleAnchor.Middle)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        if (info.score() >= 30 && !(eatGhost)) {
            eatGhost = true
            Upgrade()
        }
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(Fish, sprites.dungeon.collectibleInsignia)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        scene.cameraShake(4, 500)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fish,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `],
    100,
    true
    )
    direction = -1
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
function ghost () {
    ghoul = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Ghoul)
    ghoul.setPosition(randint(scene.cameraProperty(CameraProperty.Right), scene.cameraProperty(CameraProperty.Right) - 10), randint(scene.cameraProperty(CameraProperty.Top), scene.cameraProperty(CameraProperty.Bottom)))
    ghoul.follow(Fish, 15)
    ghoul.setScale(1, ScaleAnchor.Middle)
    ghoul.setFlag(SpriteFlag.AutoDestroy, true)
    if (ghoul.vx <= 0) {
        animation.runImageAnimation(
        ghoul,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        ghoul,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff11111f........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fddd111111df......
            ......fdddd11111df......
            ......fddddddd11df......
            ......fddddddd111f......
            ......fddddddcf11f......
            .......fbdddb1111bf.....
            ........fffcfdb1b1f.....
            .......ffffffffbfbf.....
            ....ff.fffffffffff......
            .....ffffffff...........
            .....ffffffb1b1f........
            ......ffffffbfbf........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......fd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fbddddbfd1df......
            ......fcbbbdcfddbf......
            .......fcbb11111f.......
            ........fffff1b1f.......
            ........fb111cfbf.......
            ........ffb1b1ff........
            ......f.fffbfbf.........
            ......ffffffff..........
            .......fffff............
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fish,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        . . . c c d 4 4 4 4 c c . . . . 
        c c . c 1 4 4 4 4 4 d 4 c . . . 
        c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
        f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
        f f f f d 4 f 4 c 1 4 4 4 4 f . 
        . . c f c 4 f f 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c d d d d d c . . . . . . 
        . . . c d c c c c c . . . . . . 
        . . . c c d 4 4 4 4 c . . . . . 
        . . . c 1 4 4 4 4 4 d c . . . . 
        . . c 1 4 4 4 4 4 1 4 4 c . . . 
        c c c 1 4 4 4 4 1 4 4 4 4 c . . 
        c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
        f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
        f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
        f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
        f f c b c 4 4 4 4 1 4 4 4 4 f . 
        . . c d d c 4 4 4 4 d f f f . . 
        . . . c c c f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        c c . c c d 4 4 4 4 c c . . . . 
        c 4 c c 1 4 4 4 4 4 d 4 c . . . 
        f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
        f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
        f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
        . . f f d 4 4 c c 1 4 4 4 4 f . 
        . . . f c 4 4 4 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c . . . . . . . . . 
        . . c d d d d c c . . . . . . . 
        . . c d d c c c c c c . . . . . 
        c c c c c d 4 4 4 4 c c c . . . 
        f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
        f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
        f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
        . . f d 4 4 f 4 4 1 4 4 4 4 f . 
        . . . f d 4 4 c c 4 1 4 4 f . . 
        . . . f c 4 4 4 4 4 4 d f . . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `],
    100,
    true
    )
    direction = 1
})
function Upgrade () {
    animation.runImageAnimation(
    Fish,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        . . . c c d a a a a c c . . . . 
        c c . c 1 a a a a a d a c . . . 
        c 4 c 1 d a a a a 1 a a a c . . 
        c 4 c 1 a a a a a 1 a a a a c . 
        f 4 4 1 a a a a a 1 a a a a a f 
        f 4 f 1 a a a c c 1 a f a a a f 
        f 4 f d a a f 4 4 1 a a a a a f 
        f f f f d a f 4 c 1 a a a a f . 
        . . c f c a f f 4 4 d a f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c d d d d d c . . . . . . 
        . . . c d c c c c c . . . . . . 
        . . . c c d a a a a c . . . . . 
        . . . c 1 a a a a a d c . . . . 
        . . c 1 a a a a a 1 a a c . . . 
        c c c 1 a a a a 1 a a a a c . . 
        c 4 4 1 a a c c 1 a a a a a c . 
        f 4 f 1 a f 4 4 1 a a a a a c . 
        f 4 f d a f 4 c 1 a f a a a a f 
        f 4 f f a f f 4 1 a a a a a a f 
        f f c b c 4 4 4 4 1 a a a a f . 
        . . c d d c 4 4 4 4 d f f f . . 
        . . . c c c f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        c c . c c d a a a a c c . . . . 
        c 4 c c 1 a a a a a d a c . . . 
        f 4 c 1 d a a a a 1 a a a c . . 
        f 4 4 1 a a a a a 1 a a a a c . 
        f 4 f 1 a a f c 1 1 a a a a a f 
        f 4 f 1 a a f 4 c 1 a f a a a f 
        f f f d a a f 4 4 1 a a a a a f 
        . . f f d a a c c 1 a a a a f . 
        . . . f c a a a a a d a f f . . 
        . . c b d c a a a a f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c . . . . . . . . . 
        . . c d d d d c c . . . . . . . 
        . . c d d c c c c c c . . . . . 
        c c c c c d 4 4 4 4 c c c . . . 
        f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
        f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
        f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
        . . f d 4 4 f 4 4 1 4 4 4 4 f . 
        . . . f d 4 4 c c 4 1 4 4 f . . 
        . . . f c 4 4 4 4 4 4 d f . . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `],
    200,
    false
    )
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
}
function bigFish () {
    big = sprites.create(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.bigShark)
    big.setPosition(randint(scene.cameraProperty(CameraProperty.Left), scene.cameraProperty(CameraProperty.Right)), randint(scene.cameraProperty(CameraProperty.Top), scene.cameraProperty(CameraProperty.Bottom)))
    big.setVelocity(randint(-25, 25), randint(-25, 25))
    big.setScale(1, ScaleAnchor.Middle)
    big.setFlag(SpriteFlag.AutoDestroy, true)
    if (big.vx <= 0) {
        animation.runImageAnimation(
        big,
        [img`
            .............ccfff..............
            ...........ccddbcf..............
            ..........ccddbbf...............
            ..........fccbbcf...............
            .....fffffccccccff.........ccc..
            ...ffbbbbbbbcbbbbcfff....ccbbc..
            ..fbbbbbbbbcbcbbbbcccff.cdbbc...
            ffbbbbbbffbbcbcbbbcccccfcdbbf...
            fbcbbb11ff1bcbbbbbcccccffbbf....
            fbbb11111111bbbbbcccccccbbcf....
            .fb11133cc11bbbbcccccccccccf....
            ..fccc31c111bbbcccccbdbffbbcf...
            ...fc13c111cbbbfcddddcc..fbbf...
            ....fccc111fbdbbccdcc.....fbbf..
            ........ccccfcdbbcc........fff..
            .............fffff..............
            `,img`
            .............ccfff..............
            ............cddbbf..............
            ...........cddbbf...............
            ..........fccbbcf............ccc
            ....ffffffccccccff.........ccbbc
            ..ffbbbbbbbbbbbbbcfff.....cdbbc.
            ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            fbcbbbbbffbbcbcbbbcccccfffdbbf..
            fbbb1111ff1bcbcbbbcccccccbbbcf..
            .fb11111111bbbbbbcccccccccbccf..
            ..fccc33cc11bbbbccccccccfffbbcf.
            ...fc131c111bbbcccccbdbc...fbbf.
            ....f33c111cbbbfdddddcc.....fbbf
            .....ff1111fbdbbfddcc........fff
            .......cccccfbdbbfc.............
            .............fffff..............
            `,img`
            ..............cfff..............
            ............ccddbf..............
            ...........cbddbff.........ccc..
            ..........fccbbcf.........cbbc..
            ...fffffffccccccff.......cdbc...
            .ffcbbbbbbbbbbbbbcfff....cdbf...
            fcbbbbbbbbbcbbbbbbcccff.cdbf....
            fbcbbbbffbbbcbcbbbcccccffdcf....
            fbb1111ffbbbcbcbbbccccccbbcf....
            .fb11111111bbcbbbccccccccbbcf...
            ..fccc33cb11bbbbcccccccfffbbf...
            ...fc131c111bbbcccccbdbc..fbbf..
            ....f33c111cbbccdddddbc....fff..
            .....ff1111fdbbccddbcc..........
            .......cccccfdbbbfcc............
            .............fffff..............
            `,img`
            .............ccfff..............
            ............cddbbf..............
            ...........cddbbf...............
            ..........fccbbcf............ccc
            ....ffffffccccccff.........ccbbc
            ..ffbbbbbbbbbbbbbcfff.....cdbbc.
            ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            fbcbbbbbffbbcbcbbbcccccfffdbbf..
            fbbb1111ff1bcbcbbbcccccccbbbcf..
            .fb11111111bbbbbbcccccccccbccf..
            ..fccc33cc11bbbbccccccccfffbbcf.
            ...fc131c111bbbcccccbdbc...fbbf.
            ....f33c111cbbbfdddddcc.....fbbf
            .....ff1111fbdbbfddcc........fff
            .......cccccfbdbbfc.............
            .............fffff..............
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        big,
        [img`
            ..............fffcc.............
            ..............fcbddcc...........
            ...............fbbddcc..........
            ...............fcbbccf..........
            ..ccc.........ffccccccfffff.....
            ..cbbcc....fffcbbbbcbbbbbbbff...
            ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
            ...fbbdcfcccccbbbcbcbbffbbbbbbff
            ....fbbffcccccbbbbbcb1ff11bbbcbf
            ....fcbbcccccccbbbbb11111111bbbf
            ....fcccccccccccbbbb11cc33111bf.
            ...fcbbffbdbcccccbbb111c13cccf..
            ...fbbf..ccddddcfbbbc111c31cf...
            ..fbbf.....ccdccbbdbf111cccf....
            ..fff........ccbbdcfcccc........
            ..............fffff.............
            `,img`
            ..............fffcc.............
            ..............fbbddc............
            ...............fbbddc...........
            ccc............fcbbccf..........
            cbbcc.........ffccccccffffff....
            .cbbdc.....fffcbbbbbbbbbbbbbff..
            .fbbddc..ffcccbbbbcbcbbbbbbbbbff
            ..fbbdfffcccccbbbcbcbbffbbbbbcbf
            ..fcbbbcccccccbbbcbcb1ff1111bbbf
            ..fccbcccccccccbbbbbb11111111bf.
            .fcbbfffccccccccbbbb11cc33cccf..
            .fbbf...cbdbcccccbbb111c131cf...
            fbbf.....ccdddddfbbbc111c33f....
            fff........ccddfbbdbf1111ff.....
            .............cfbbdbfccccc.......
            ..............fffff.............
            `,img`
            ..............fffc..............
            ..............fbddcc............
            ..ccc.........ffbddbc...........
            ..cbbc.........fcbbccf..........
            ...cbdc.......ffccccccfffffff...
            ...fbdc....fffcbbbbbbbbbbbbbcff.
            ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
            ....fcdffcccccbbbcbcbbbffbbbbcbf
            ....fcbbccccccbbbcbcbbbff1111bbf
            ...fcbbccccccccbbbcbb11111111bf.
            ...fbbfffcccccccbbbb11bc33cccf..
            ..fbbf..cbdbcccccbbb111c131cf...
            ..fff....cbdddddccbbc111c33f....
            ..........ccbddccbbdf1111ff.....
            ............ccfbbbdfccccc.......
            ..............fffff.............
            `,img`
            ..............fffcc.............
            ..............fbbddc............
            ...............fbbddc...........
            ccc............fcbbccf..........
            cbbcc.........ffccccccffffff....
            .cbbdc.....fffcbbbbbbbbbbbbbff..
            .fbbddc..ffcccbbbbcbcbbbbbbbbbff
            ..fbbdfffcccccbbbcbcbbffbbbbbcbf
            ..fcbbbcccccccbbbcbcb1ff1111bbbf
            ..fccbcccccccccbbbbbb11111111bf.
            .fcbbfffccccccccbbbb11cc33cccf..
            .fbbf...cbdbcccccbbb111c131cf...
            fbbf.....ccdddddfbbbc111c33f....
            fff........ccddfbbdbf1111ff.....
            .............cfbbdbfccccc.......
            ..............fffff.............
            `],
        100,
        true
        )
    }
}
function smallFish () {
    small = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.Enemy)
    small.setPosition(randint(scene.cameraProperty(CameraProperty.Left), scene.cameraProperty(CameraProperty.Right)), randint(scene.cameraProperty(CameraProperty.Top), scene.cameraProperty(CameraProperty.Bottom)))
    small.setVelocity(randint(-10, 10), randint(-10, 10))
    small.setScale(0.75, ScaleAnchor.Middle)
    small.setFlag(SpriteFlag.AutoDestroy, true)
    if (small.vx <= 0) {
        animation.runImageAnimation(
        small,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c c . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c b b b b 1 b b c c . . 
            . . . . c 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 b b c c 
            . . c c d 1 1 1 b 1 b 1 5 5 5 c 
            . . c c d 1 c 1 1 1 b 1 b b 5 c 
            . c c d d 1 1 1 1 1 b 1 f b 5 c 
            f d d d 1 1 1 1 1 b b b f . c c 
            f f f f f 1 1 1 b b 5 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . c c c c c . . 
            . . . . . . c c c 5 5 5 5 c c . 
            . . . . c c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . c 1 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 c b 5 c 
            . . c c d 1 c 1 b 1 1 1 b b 5 c 
            c c c d d 1 1 1 b 1 b 1 5 5 5 c 
            f d d d 1 1 1 1 1 1 b 1 b b c c 
            . f f 1 1 1 1 1 1 b b 1 f . . . 
            . . . f 1 1 1 1 1 b b b f . . . 
            . . . . f f 1 1 b b 5 5 f . . . 
            . . . . . . f 5 5 5 5 5 f . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        small,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b b b c . . . . 
            . . . c 1 1 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b 1 1 1 1 c . . . 
            c c b b 1 1 1 b 1 1 1 1 c . . . 
            c 5 5 5 1 b 1 b 1 1 1 d c c . . 
            c 5 b b 1 b 1 1 1 c 1 d c c . . 
            c 5 b f 1 b 1 1 1 1 1 d d c c . 
            c c . f b b b 1 1 1 1 1 d d d f 
            . . f 5 5 5 b b 1 1 1 f f f f f 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c c . . . . . . . . 
            . . c 5 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b b 1 1 1 b 1 1 1 d c . . . 
            c 5 5 5 1 b 1 b 1 c 1 d c c . . 
            c 5 b b 1 b 1 1 1 1 1 d d c c . 
            c c . f 1 b b 1 1 1 1 1 d d d f 
            . . . f b b b 1 1 1 1 1 1 f f f 
            . . f 5 5 b b b 1 1 1 f f . . . 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            `,img`
            . . c c c c c . . . . . . . . . 
            . c c 5 5 5 5 c c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c c . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b c 1 1 1 b 1 1 1 d c . . . 
            c 5 b b 1 1 1 b 1 c 1 d c c . . 
            c 5 5 5 1 b 1 b 1 1 1 d d c c c 
            c c b b 1 b 1 1 1 1 1 1 d d d f 
            . . . f 1 b b 1 1 1 1 1 1 f f . 
            . . . f b b b 1 1 1 1 1 f . . . 
            . . . f 5 5 b b 1 1 f f . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . c c c c c . . . . . . . . 
            . . c 5 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b b 1 1 1 b 1 1 1 d c . . . 
            c 5 5 5 1 b 1 b 1 c 1 d c c . . 
            c 5 b b 1 b 1 1 1 1 1 d d c c . 
            c c . f 1 b b 1 1 1 1 1 d d d f 
            . . . f b b b 1 1 1 1 1 1 f f f 
            . . f 5 5 b b b 1 1 1 f f . . . 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.bubbles, 100)
    info.changeScoreBy(1)
    Fish.changeScale(0.05, ScaleAnchor.Middle)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    if (info.score() >= 10 && !(eatBig)) {
        eatBig = true
        Upgrade()
    }
})
let small: Sprite = null
let big: Sprite = null
let eatBig = false
let direction = 0
let ghoul: Sprite = null
let eatGhost = false
let Fish: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(Fish, 100, 100)
scene.cameraFollowSprite(Fish)
Fish.setScale(0.75, ScaleAnchor.Middle)
animation.runImageAnimation(
Fish,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 4 4 4 4 d c c . . . 
    . . . . c d 4 4 4 4 4 1 c . . . 
    . . . c 4 4 1 4 4 4 4 4 1 c . . 
    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
    . f 4 4 4 4 1 4 4 4 4 c b c f f 
    . . f f f d 4 4 4 4 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `],
100,
true
)
info.startCountdown(30)
game.setGameOverScoringType(game.ScoringType.HighScore)
info.setLife(4)
game.onUpdateInterval(2500, function () {
    ghost()
})
game.onUpdateInterval(1500, function () {
    bigFish()
})
game.onUpdateInterval(500, function () {
    smallFish()
})
