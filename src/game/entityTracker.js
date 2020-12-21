var gameMap

function EntityTracker(map, game)
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
        gameMap.entities[ypos][xpos] = entity.uid

        if (id == 1)
        {
            game.actionProcessor.character = entity
        }
    }

    this.update = function()
    {
        let entityMap = gameMap.entities

        for (let i = 0; i < entityMap.length; i++)
        {
            for (let j = 0; j < entityMap[i].length; j++)
            {
                entityMap[i][j] = 0
            }
        }

        for (let key in this.entityList)
        {
            let entity = this.entityList[key]
            entityMap[entity.ypos][entity.xpos] = entity.uid
        }

        gameMap.entities = entityMap
    }
}