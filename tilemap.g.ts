// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`200010000104040401010101010101050303030303030303030303030404040404040404010101040404010101010101010101030303030303030303030304040404040401010101010404040101010101010101010103030303030303030303040404040101010101010104040101010101010101010101030303030303030303030404010101010101010104040401010101010101010101010303030303030303030401010101010101010101040401010101010101010101010103030303030303030101010101010101010101010404010101010101010101010101010303030303010101010101010101010101010404040101010101010101010101010103030301010101010101010101010101010104040101010101010101010101010101010101010101010101010101010101010104040404040404010101010101010101010101010101010101010101010101010101010101010104040401010101010102010101010101010101010101010101010101010101010101040404010101020202010101010101010101010101010101010101010101010101010104040202020202010101010101010101010101010101010101010101010101010102020202020202020202010101010102020202010101010101010101010101020202020202020202020201020201010202020202010102020202010202010202020202`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
