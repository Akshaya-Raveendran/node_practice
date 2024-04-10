const http= require('http')
const server= http.createServer(
    (req,res) =>{
        if(req.url=== '/')
            {
                res.end("vanakkam ulagam");
            }
        else if(req.url==='/about')
        {
            res.end("<h1>Kudumbam</h1><p>kaaadu,mala,iyarkai, athu than engaluku ellam ;)</p>");
        }
        
    }
).listen(3000);
