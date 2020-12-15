var game

function preload()
{
  game = new Game()
  game.preload()
}

function setup()
{
  createCanvas(640, 480)
  game.setup()
}

function draw()
{
  background(0)
  
  try
  {
    game.render()
  }
  
  catch (error)
  {
    print(error)
  }
}