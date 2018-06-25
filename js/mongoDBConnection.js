
var listarDetalle = function(){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var a;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("DB_PERU");
        var query = {"idSolicitude": "123"};
        dbo.collection("cSolicitudes").findOne(query, function (err, result) {
            if (err) throw err;
            //console.log(result);
            
            db.close();
            return result;
        });
        
    });

    
    
}


module.exports.listarDetalle = listarDetalle;

