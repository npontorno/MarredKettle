var gameMap

function TileLoader(map)
{
    gameMap = map

    this.loadBackground1 = function()
    {
        loadJSON("src/objects/backgroundDict.json", this.loadBackground2)
    }
    
    this.loadBackground2 = function(backgroundDict)
    {
        gameMap.backgroundDict = backgroundDict
      
        let keys = Object.keys(gameMap.backgroundDict)
      
        for (let i = 0; i < keys.length; i++)
        {
            let image = gameMap.backgroundDict[keys[i]].image
            let url = "src/sprites/background/" + image + ".png"
            gameMap.backgroundDict[keys[i]].image = loadImage(url)
        }
    }
  
    this.loadForeground1 = function()
    {
        loadJSON("src/objects/foregroundDict.json", this.loadForeground2)
    }
    
    this.loadForeground2 = function(foregroundDict)
    {
        gameMap.foregroundDict = foregroundDict
      
        let keys = Object.keys(gameMap.foregroundDict)
      
        for (let i = 0; i < keys.length; i++)
        {
           let image = gameMap.foregroundDict[keys[i]].image
           let url = "src/sprites/foreground/" + image + ".png"
           gameMap.foregroundDict[keys[i]].image = loadImage(url)
        }
    }

    this.loadEntities1 = function()
    {
        loadJSON("src/objects/entityDict.json", this.loadEntities2)
    }
    
    this.loadEntities2 = function(entityDict)
    {
        gameMap.entityDict = entityDict
      
        let keys = Object.keys(gameMap.entityDict)
      
        for (let i = 0; i < keys.length; i++)
        {
           let image = gameMap.entityDict[keys[i]].image
           let url = "src/sprites/entities/" + image + ".png"
           gameMap.entityDict[keys[i]].image = loadImage(url)
        }
    }
}