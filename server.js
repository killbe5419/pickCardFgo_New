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
    pickOne()
        .then(doc => {
            res.send(doc);
        })
})

app.get("/pickTen",(req,res) => {
    pickTen()
        .then(doc => {
            res.send(doc);
        })
})

app.get("/calculate",(req,res) => {
    calculate(req.query.nobel)
        .then(doc => {
            res.send(doc);
        })
});

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

function pickOne () {
    return new Promise((resolve,reject) => {
        MongoClient.connect(mongoUrl,(err,client) => {
            if(err) reject(err);
            const targetDB = client.db("fgo");
            const item = percentage();
            targetDB.collection("card").find(item).toArray((err,result) => {
                if(err) reject(err);
                const tmp = Math.floor(Math.random() * result.length);
                resolve(result[tmp]);
            })
            client.close().catch();
        })
    })
}

function pickGuarantee3servant () {
    return new Promise(resolve => {
        MongoClient.connect(mongoUrl,(err,db) => {
            if(err) throw err;
            const targetDB = db.db("fgo");
            const item = {
                type: "servant",
                rare: 3,
                inRange: true
            }
            targetDB.collection("card").find(item).toArray((err,result) => {
                if(err) throw err;
                const tmp = Math.floor(Math.random() * result.length);
                resolve(result[tmp]);
            })
            db.close().catch();
        })
    })
}

function pickGuarantee4 () {
    return new Promise(resolve => {
        MongoClient.connect(mongoUrl, (err,db) => {
            if(err) throw err;
            const targetDB = db.db("fgo");
            const item = {
                rare: 4,
                inRange: true
            };
            targetDB.collection("card").find(item).toArray((err,result) => {
                if(err) throw err;
                const tmp = Math.floor(Math.random() * result.length);
                resolve(result[tmp]);
            })
            db.close().catch();
        })
    })
}

async function pickTen () {
    let outArray = [];
    outArray.push(await pickGuarantee3servant());
    outArray.push(await pickGuarantee4());

    for (let i = 0; i < 8; i++) {
        outArray.push(await pickOne());
    }

    for (let i = 0; i < outArray.length; i++) {
        outArray[i].id = i;
    }

    return outArray;
}

async function calculate(nobel) {
    let nobelNow = 0, pickNum = 0, stone = 0;
    while(nobelNow < nobel) {
        const pick = await pickTen();
        for (let i = 0; i < pick.length; i++) {
            if(pick[i].rare === 5 && pick[i].isPickedUp) {
                nobelNow ++;
            }
        }
        pickNum += 10;
        stone += 30;
    }
    const money = Math.ceil(stone / 167) * 9800;
    const p = nobelNow / (pickNum * 10);
    return({
        nobel: nobelNow,
        pickNum: pickNum,
        stone:stone,
        money: money,
        moneyType: "JPY(￥)",
        p: p,
    });
}