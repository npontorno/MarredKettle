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