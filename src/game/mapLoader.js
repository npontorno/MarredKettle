var gameMap

var loadMap3 = function()
{
    for (let i = 0; i < gameMap.height; i++)
    {
        for (let j = 0; j < gameMap.width; j++)
        {
            let key = gameMap.foreground2[i][j]
            let tile = gameMap.foreground2Dict[key.toString()]
            
            if ((tile !== undefined) && ("collisionOffset" in tile))
            {
                for (let k = 0; k < tile.collisionOffset.length; k++)
                {
                    if (gameMap.foreground2[i + tile.collisionOffset[k][1]][j + tile.collisionOffset[k][0]] == 0)
                    {
                        gameMap.foreground2[i + tile.collisionOffset[k][1]][j + tile.collisionOffset[k][0]] = -1
                    }
                }
            }
        }
    }
}

function MapLoader(map)
{
    gameMap = map

    this.loadMap1 = function(mapName)
    {    
        loadJSON("src/maps/" + mapName + ".json", this.loadMap2)
    }
    
    this.loadMap2 = function(loadedMap)
    {
        gameMap.width = loadedMap.width
        gameMap.height = loadedMap.height
        gameMap.background = loadedMap.background
        gameMap.foreground1 = loadedMap.foreground1
        gameMap.foreground2 = loadedMap.foreground2
        gameMap.entities = loadedMap.entities
        loadMap3()
    }
}