function Game()
{
    this.test = false

    this.map = new Map(this)
    //this.userInput = new UserInput()
    this.actionProcessor = new ActionProcessor()
  
    this.preload = function()
    {
        this.map.tileLoader.loadBackground1()
        this.map.tileLoader.loadForeground1()
        this.map.tileLoader.loadEntities1()
    }
  
    this.setup = function()
    {
        this.map.mapLoader.loadMap1("templateMap")
    }
  
    /*this.checkInput = function(keyCode)
    {
        this.userInput.checkInput(keyCode)
    }*/

    this.processInput = function(keyCode)
    {
        this.actionProcessor.processInput(keyCode)
    }

    this.updateGameState = function()
    {
        this.map.entityTracker.update()
    }

    this.render = function()
    {
        if (this.test == false)
        {
            this.test = true
            this.map.entityTracker.add(1, 4, 6)
        }

        this.map.mapDrawer.drawBackground()
        this.map.mapDrawer.drawForeground()
        this.map.mapDrawer.drawEntities()
    }
}