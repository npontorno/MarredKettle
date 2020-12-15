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
                let key = parseInt(gameMap.background[i][j])
                let tile = gameMap.backgroundDict[key]
  
                if (key != 0)
                {
                    image(tile.image, 64 * j, 64 * i)
                }
            }
        }
    }
  
    this.drawForeground = function()
    {
        for (let i = 0; i < gameMap.height; i++)
        {
            for (let j = 0; j < gameMap.width; j++)
            {
                let key = parseInt(gameMap.foreground[i][j])
                let tile = gameMap.foregroundDict[key]
  
                if (key != 0)
                {
                    image(tile.image, 64 * j, 64 * i)
                }
            }
        }
    }
}