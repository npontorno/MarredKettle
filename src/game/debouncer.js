var wait = false

function Debouncer()
{
    this.debounce = function(func, time)
    {
        if (wait == false)
        {
            wait = true
            func()
            setTimeout(function() {wait = false}, time);
        }
    }
}