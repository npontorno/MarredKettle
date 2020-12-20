var game

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

function draw()
{
  if (!keyIsDown(keyCode))
  {
    keyCode = 0
  }

  //game.checkInput(keyCode)
  
  game.processInput(keyCode)
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