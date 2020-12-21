var gameMap

function MapDrawer(map)
{
    gameMap = map

    this.drawBackground = function()
    {
        for (let i = 0; i < gameMap.height; i++)
        {
            for (let j = 0; j < gameMap.width; j++)
            {
                let key = gameMap.background[i][j]
                let tile = gameMap.backgroundDict[key.toString()]
  
                if (key != 0)
                {
                    image(tile.image, 64 * j, 64 * i)
                }
            }
        }
    }
  
    this.drawForeground1 = function()
    {
        for (let i = 0; i < gameMap.height; i++)
        {
            for (let j = 0; j < gameMap.width; j++)
            {
                let key = gameMap.foreground1[i][j]
                let tile = gameMap.foreground1Dict[key.toString()]
  
                if (key != 0)
                {
                    image(tile.image, 64 * j, 64 * i)
                }
            }
        }
    }

    this.drawForeground2 = function()
    {
        for (let i = 0; i < gameMap.height; i++)
        {
            for (let j = 0; j < gameMap.width; j++)
            {
                let key = gameMap.foreground2[i][j]
                let tile = gameMap.foreground2Dict[key.toString()]
  
                if (key != 0)
                {
                    image(tile.image, 64 * j, 64 * i)
                }
            }
        }
    }

    this.drawEntities = function()
    {
        for (let i = 0; i < gameMap.height; i++)
        {
            for (let j = 0; j < gameMap.width; j++)
            {
                let key = gameMap.entities[i][j]
                let entity = gameMap.entityTracker.entityList[key.toString()]
  
                if (key != 0)
                {
                    image(entity.image, 64 * j, 64 * i)
                }
            }
        }
    }
}