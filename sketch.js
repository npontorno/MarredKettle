var game
var previousKey = 0

function preload()
{
  game = new Game()
  game.preload()
}

function setup()
{
  createCanvas(1280, 768)
  game.setup()
}

function keyPressed()
{
  previousKey = keyCode
  game.processInput(keyCode)
}

function draw()
{
  if (keyIsDown(previousKey))
  {
    game.processInput(previousKey)
  }
  
  game.updateGameState()

  try
  {
    background(0)
    game.render()
  }
  
  catch (error)
  {
    print(error)
  }
}