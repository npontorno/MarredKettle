var gameMap

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
        gameMap.foreground = loadedMap.foreground
    }
}