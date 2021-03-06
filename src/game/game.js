function Game()
{
    this.test = false
    this.map = new Map(this)
    this.collisionDetector = new CollisionDetector(this.map)
    this.actionProcessor = new ActionProcessor(this.collisionDetector)
  
    this.preload = function()
    {
        this.map.tileLoader.loadBackground1()
        this.map.tileLoader.loadForeground1_1()
        this.map.tileLoader.loadForeground2_1()
        this.map.tileLoader.loadEntities1()
    }
  
    this.setup = function()
    {
        this.map.mapLoader.loadMap1("templateMap")
    }

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

        for (let i = 0; i < this.map.height; i++)
        {
            this.map.mapDrawer.drawBackground(i)
            this.map.mapDrawer.drawForeground1(i)
            this.map.mapDrawer.drawEntities(i)
            this.map.mapDrawer.drawForeground2(i)
        }
    }
}