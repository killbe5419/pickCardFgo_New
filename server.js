const express = require("express");
const path = require("path");
const MongoClient = require("mongodb");

const app = express();
const staticPath = path.join(__dirname,"src");
app.use(express.static(staticPath));

const mongoUrl = "mongodb://localhost:27017/"


app.get("/",(req,res) => {
    res.sendFile(staticPath + "index.html");
})

app.get("/pickOne",(req,res) => {
    console.log(req.query);
    MongoClient.connect(mongoUrl,(err,db) => {
        if(err) throw err;
        let out;
        const targetDB = db.db("fgo");
        const item = percentage();
        targetDB.collection("card").find(item).toArray((err,results) => {
            if(err) throw err;
            const tmp = Math.floor(Math.random() * results.length);
            out = results[tmp];
        })
        db.close().then(()=> {
            console.log("connection ended!");
            res.send(out);
        }).catch();
    })
})

app.get("/pickTen",(req,res) => {
    console.log(req.query);
    MongoClient.connect(mongoUrl,(err,db) => {
        if(err) throw err;
        const targetDB = db.db("fgo");
        let out = [];
        for(let i=0;i<10;i++) {
            const item = percentage();
            targetDB.collection("card").find(item).toArray((err,results) => {
                if(err) throw err;
                const tmp = Math.floor(Math.random() * results.length);
                out.push(results[tmp]);
            })
        }
        db.close().then(()=> {
            console.log("connection ended!");
            for(let i=0;i<out.length;i++) {
                out[i].No = i;
            }
            res.send(out);
        }).catch();
    })
})

app.listen(2333,() => {
    console.log("Listening on port 2333!\n");
})

//////////////////////////////////////////////////////////////////////

function percentage() {
    let item;
    const p = Math.random() * 100;
    if(p <= 0.88) {
        item = {
            type: "servant",
            rare: 5,
            isPickedUp: true,
            inRange: true,
        }
    }
    else if(p <= 1) {
        item = {
            type: "servant",
            rare: 5,
            inRange: true,
        }
    }
    else if(p <= 4) {
        item = {
            type: "servant",
            rare: 4,
            inRange: true,
        }
    }
    else if(p <= 8) {
        item = {
            type: "craft essence",
            rare: 5,
            inRange: true,
        }
    }
    else if(p <= 20) {
        item = {
            type: "craft essence",
            rare: 4,
            inRange: true,
        }
    }
    else if(p< 60) {
        item = {
            type: "servant",
            rare: 3,
            inRange: true,
        }
    } else {
        item = {
            type: "craft essence",
            rare: 3,
            inRange: true,
        }
    }
    return item;
}