var http = require('http');

var server = http.createServer(function(req, res){
  
  
 var  categoria = req.url

 if (categoria  == 'jogos'){
   res.end("<html><body>/jogos</body></html>");

} else if (categoria == '/terror') {
  res.end ('<html><body>terror</body></html>');

}else{
    res.end('<html><body>/jogos</body></html>'); 

}

}).listen (3000); 

