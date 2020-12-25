var gameCharacter

function ActionProcessor()
{
    this.character = null

    this.debouncer = new Debouncer()

    this.moveUp = function(character)
    {
        gameCharacter.ypos--
    }

    this.moveDown = function(character)
    {
        gameCharacter.ypos++
    }

    this.moveLeft = function(character)
    {
        gameCharacter.xpos--
    }

    this.moveRight = function(character)
    {
        gameCharacter.xpos++
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