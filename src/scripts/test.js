const MongoClient = require("mongodb");
const mongoUrl = "mongodb://localhost:27017";

function guaranteeCard () {
    let out = [];
    MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err,db) => {
        if(err) throw err;
        const targetDB = db.db("fgo");
        const where3Servant = {
            rare: 3,
            type: "servant",
            inRange: true
        };
        const where4Card = {
            rare: 4,
            inRange: true,
        };
        targetDB.collection("card").find(where3Servant).toArray((err,res) => {
            if(err) throw err;
            const tmp = Math.floor(Math.random() * res.length);
            out.push(res[tmp]);
        });
        targetDB.collection("card").find(where4Card).toArray((err,res) => {
            if(err) throw err;
            const tmp = Math.floor(Math.random() * res.length);
            out.push(res[tmp]);
        });
        return out;
    })
}

console.log(guaranteeCard());