var thisMap

function Camera(map)
{
    thisMap = map
    thisMap.mapDrawer = new MapDrawer(this, map.entityTracker)

    this.centerX = 0
    this.centerY = 0

    this.background = Array(13).fill().map(() => Array(21).fill(0));
    this.foreground1 = Array(13).fill().map(() => Array(21).fill(0));
    this.foreground2 = Array(13).fill().map(() => Array(21).fill(0));
    this.entities = Array(13).fill().map(() => Array(21).fill(0));

    this.updateCameraPosition1 = function(charX, charY)
    {
        this.centerX = charX
        this.centerY = charY
        this.updateCameraPosition2()
    }

    this.updateCameraPosition2 = function()
    {   
        let yOffset = -6
        let xOffset = -10

        for (let i = 0; i < 13; i++)
        {
            for (let j = 0; j < 21; j++)
            {
                if (this.centerY + yOffset < 0 || this.centerX + xOffset < 0)
                {
                    this.background[i][j] = 0
                    this.foreground1[i][j] = 0
                    this.foreground2[i][j] = 0
                    this.entities[i][j] = 0
                }

                else
                {
                    this.background[i][j] = thisMap.background[this.centerY + yOffset][this.centerX + xOffset]
                    this.foreground1[i][j] = thisMap.foreground1[this.centerY + yOffset][this.centerX + xOffset]
                    this.foreground2[i][j] = thisMap.foreground2[this.centerY + yOffset][this.centerX + xOffset]
                    this.entities[i][j] = thisMap.entities[this.centerY + yOffset][this.centerX + xOffset]
                }

                xOffset++
            }

            yOffset++
        }
    }
}