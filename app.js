const MongoClient = require("mongodb").MongoClient;
 
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb+srv://kudos:kudos@clusterkudos-m11u8.azure.mongodb.net/admin", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
      
    const db = client.db("KudoData");
    const collection = db.collection("billennium");
    // let user = {name: "Tom", age: 23};
    let user = {
    "company":"billennium",
    "value":
        [
            "Zaufanie","Kreatywność","Rozwój","Energia","Profesjonalizm"],
    "users":
        [   
            {"name":"Arkadiusz Brzostowski","email":"a.brzostowski@neonet.pl"},
            {"name":"Adam Adam","email":"Adam.Adam@billennium.com"}],
    "kudos":
        [
            {   
                "value":"Kreatywność",
                "from":"a.brzostowski@neonet.pl",
                "to":"Adam.Adam@billennium.com",
                "date":"2019-03-02T00:00:00.000Z",
                "message":"you are great persone. thank you"
            }
        ]
     }       
    collection.insertOne(user, function(err, result){
          
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});