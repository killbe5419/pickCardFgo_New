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

app.get("/charge",(req,res) => {
    console.log(req.query);
    res.send({
        content:req.query,
        correct: true,
    })
})

app.get("/pickOne",(req,res) => {
    MongoClient.connect(mongoUrl, { useNewUrlParser: true } ,(err,db) => {
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
    MongoClient.connect(mongoUrl,(err,db) => {
        if(err) throw err;
        const targetDB = db.db("fgo");
        let out = [];
        const guarantee = guaranteeCard();
        targetDB.collection("card").find(guarantee.guarantee3servant).toArray((err,results) => {
            if(err) throw err;
            const tmp = Math.floor(Math.random() * results.length);
            out.push(results[tmp]);
        })
        targetDB.collection("card").find(guarantee.guaranteePick).toArray((err,results) => {
            if(err) throw err;
            const tmp = Math.floor(Math.random() * results.length);
            out.push(results[tmp]);
            console.log(results[tmp].name,results[tmp].rare,results[tmp].type);
        })
        for(let i=0;i<8;i++) {
            const item = percentage();
            targetDB.collection("card").find(item).toArray((err,results) => {
                if(err) throw err;
                const tmp = Math.floor(Math.random() * results.length);
                out.push(results[tmp]);
            })
        }
        db.close().then( () => {
            console.log("connection ended!");
            for (let i = 0; i < out.length; i++) {
                out[i].No = i;
            }
            console.log(out.length);
            res.send(out);
        })
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

function guaranteeCard () {
    return {
        guarantee3servant: {
            rare: 3,
            type: "servant",
            inRange: true
        },
        guaranteePick: {
            rare: 4,
            inRange: true
        }
    }
}