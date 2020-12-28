function DrawUtil()
{
    this.draw = function(tile, i, j)
    {
        if ("imageYOffset" in tile)
        {
            image(tile.image, 64 * j, (64 * i) + (64 * tile.imageYOffset))
        }

        else
        {
            image(tile.image, 64 * j, 64 * i)
        }
    }
}