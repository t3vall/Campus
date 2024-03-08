namespace SpriteKind {
    export const pnj = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 13))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(62, 57))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`panneaufablab0`)) {
        if (xppanneaufablab == 0) {
            game.showLongText("Ce panneau vous indique ou se trouve le pole création, aussi appelé le Fablab", DialogLayout.Bottom)
            game.showLongText("vous gagnez 10xp pour avoir découvert cette information", DialogLayout.Bottom)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            info.changeScoreBy(10)
            xppanneaufablab += 1
        } else {
            game.showLongText("vous avez déjà lu ce panneau", DialogLayout.Bottom)
            game.showLongText("Ce panneau vous indique ou se trouve le pole création, aussi appelé le Fablab", DialogLayout.Bottom)
        }
    }
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile7`)) {
        game.showLongText("Bonjour je sui un chat qui parle ", DialogLayout.Bottom)
    }
})
let mySprite: Sprite = null
let xppanneaufablab = 0
xppanneaufablab = 0
info.setScore(0)
tiles.setCurrentTilemap(tilemap`niveau1`)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(40, 59))
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.pnj)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(43, 52))
forever(function () {
	
})
