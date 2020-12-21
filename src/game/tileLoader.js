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
  
    this.loadForeground1_1 = function()
    {
        loadJSON("src/objects/foreground1Dict.json", this.loadForeground1_2)
    }
    
    this.loadForeground1_2 = function(foreground1Dict)
    {
        gameMap.foreground1Dict = foreground1Dict
      
        let keys = Object.keys(gameMap.foreground1Dict)
      
        for (let i = 0; i < keys.length; i++)
        {
           let image = gameMap.foreground1Dict[keys[i]].image
           let url = "src/sprites/foreground1/" + image + ".png"
           gameMap.foreground1Dict[keys[i]].image = loadImage(url)
        }
    }

    this.loadForeground2_1 = function()
    {
        loadJSON("src/objects/foreground2Dict.json", this.loadForeground2_2)
    }
    
    this.loadForeground2_2 = function(foreground2Dict)
    {
        gameMap.foreground2Dict = foreground2Dict
      
        let keys = Object.keys(gameMap.foreground2Dict)
      
        for (let i = 0; i < keys.length; i++)
        {
           let image = gameMap.foreground2Dict[keys[i]].image
           let url = "src/sprites/foreground2/" + image + ".png"
           gameMap.foreground2Dict[keys[i]].image = loadImage(url)
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