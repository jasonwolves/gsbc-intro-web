var points = new Array(100);
        for (var i = 1; i < 1000; i++) {
            points[i] = i + 1;
        }

        for (var i = 0; i < points.length; i++) {
            console.log(points[i]);
        }
        
        function getRandom(max)
        {
          
        return Math.floor(Math.random()* max);
            
        }
        
