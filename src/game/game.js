function Game()
{
    this.map = new Map();
  
    this.preload = function()
    {
        this.map.tileLoader.loadBackground1()
        this.map.tileLoader.loadForeground1()
    }
  
    this.setup = function()
    {
        this.map.mapLoader.loadMap1("templateMap")
    }
  
    this.render = function()
    {
        this.map.mapDrawer.drawBackground()
        this.map.mapDrawer.drawForeground()
    }
}