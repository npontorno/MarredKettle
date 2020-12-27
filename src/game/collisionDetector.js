function CollisionDetector(map)
{
    this.map = map

    this.checkCollisions = function(x, y)
    {
        if ((x < 0) || (y < 0) || (x >= map.width) || (y >= map.height))
        {
            return true
        }
 
        else if (map.foreground2[y][x] != 0)
        {
            return true
        }

        else if (map.entities[y][x] != 0)
        {
            return true
        }

        else
        {
            return false
        }
    }
}