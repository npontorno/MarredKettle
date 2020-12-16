var gameMap

function EntityTracker(map)
{
    gameMap = map

    this.entityList = {}

    this.add = function(id, xpos, ypos)
    {
        let entity = Object.create(gameMap.entityDict[id.toString()])
        let uid = Date.now()

        entity.uid = uid
        entity.xpos = xpos
        entity.ypos = ypos

        this.entityList[uid.toString()] = entity
        gameMap.entities[xpos][ypos] = entity.uid
    }
}