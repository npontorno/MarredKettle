var gameCharacter

function ActionProcessor(collisionDetector)
{
    this.character = null
    this.debouncer = new Debouncer()
    this.collisionDetector = collisionDetector

    this.moveUp = function()
    {
        let newPos = gameCharacter.ypos
        newPos--

        if (!collisionDetector.checkCollisions(gameCharacter.xpos, newPos))
        {
            gameCharacter.ypos = newPos
        }
    }

    this.moveDown = function()
    {   
        let newPos = gameCharacter.ypos
        newPos++

        if (!collisionDetector.checkCollisions(gameCharacter.xpos, newPos))
        {
            gameCharacter.ypos = newPos
        }
    }

    this.moveLeft = function()
    {
        let newPos = gameCharacter.xpos
        newPos--

        if (!collisionDetector.checkCollisions(newPos, gameCharacter.ypos))
        {
            gameCharacter.xpos = newPos
        }
    }

    this.moveRight = function()
    {
        let newPos = gameCharacter.xpos
        newPos++

        if (!collisionDetector.checkCollisions(newPos, gameCharacter.ypos))
        {
            gameCharacter.xpos = newPos
        }
    }

    this.processInput = function(keyCode)
    {
        //print(keyCode)
        if (this.character == null)
        {
            return
        }

        gameCharacter = this.character

        if (keyCode == 87)
        {
            this.debouncer.debounce(this.moveUp, 200)
        }

        else if (keyCode == 83)
        {
            this.debouncer.debounce(this.moveDown, 200)
        }

        else if (keyCode == 65)
        {
            this.debouncer.debounce(this.moveLeft, 200)
        }

        else if (keyCode == 68)
        {
            this.debouncer.debounce(this.moveRight, 200)
        }
    }
}