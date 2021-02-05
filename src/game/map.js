var thisMap

function Map(game)
{
    thisMap = this
  
    this.width = 0
    this.height = 0

    this.backgroundDict = {}
    this.foreground1Dict = {}
    this.foreground2Dict = {}
    this.entityDict = {}
  
    this.background = []
    this.foreground1 = []
    this.foreground2 = []
    this.entities = []

    this.entityTracker = new EntityTracker(this, game)
    this.tileLoader = new TileLoader(this)
    this.mapLoader = new MapLoader(this)
    this.mapDrawer = new MapDrawer(this, this.entityTracker)
}