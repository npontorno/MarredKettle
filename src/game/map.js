var thisMap

function Map(game)
{
    thisMap = this
  
    this.width = 0
    this.height = 0

    this.backgroundDict = {}
    this.foregroundDict = {}
    this.entityDict = {}
  
    this.background = []
    this.foreground = []
    this.entities = []

    this.tileLoader = new TileLoader(this)
    this.mapLoader = new MapLoader(this)
    this.mapDrawer = new MapDrawer(this)
    this.entityTracker = new EntityTracker(this, game)
}