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
    const doAll = async () => {
        const pick = await pickOne();
        await res.send(pick);
    }
    doAll().catch(err => console.log(err));
})

app.get("/pickTen",(req,res) => {
    const doAll = async () => {
        let pick = [];
        pick.push(await pickGuarantee3servant());
        pick.push(await pickGuarantee4());
        for(let i=2;i<10;i++) {
            pick.push(await pickOne());
        }
        for(let i=0;i<pick.length;i++) {
            pick[i].No = i;
        }
        await res.send(pick);
    }
    doAll().catch(err => console.log(err));
})

app.get("/calculate",(req,res) => {
    const doAll = async () => {
        const nobel = req.query.nobel;
        let nobelNow = 0, pickNum = 0, stone = 0;
        let pick = [];
        while (nobelNow < nobel) {
            pick.push(await pickGuarantee3servant());
            pick.push(await pickGuarantee4());
            for(let i=2;i<10;i++) {
                pick.push(await pickOne());
            }
            for(let i=0;i<pick.length;i++) {
                if(pick[i].type === "servant" && pick[i].rare > 3) {
                    console.log(pick[i].name);
                }
                if(pick[i].name === "ジャンヌ・オルタ" && pick[i].isPickedUp === true) nobelNow += 1;
            }
            pickNum += 1;
            stone += 30;
            pick = [];
        }
        const money = Math.ceil(stone / 167) * 9800;
        const p = nobelNow / (pickNum * 10);
        await console.log(nobelNow,pickNum,stone,money);
        await res.send({
            nobel: nobelNow,
            pickNum: pickNum,
            stone:stone,
            money: money,
            moneyType: "JPY(￥)",
            p: p,
        })
    };
    doAll().catch(err => console.log(err));
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
    return new Promise(resolve => {
        MongoClient.connect(mongoUrl, { useNewUrlParser: true } ,(err,db) => {
            if(err) throw err;
            const targetDB = db.db("fgo");
            const item = percentage();
            targetDB.collection("card").find(item).toArray((err,result) => {
                if(err) throw err;
                const tmp = Math.floor(Math.random() * result.length);
                resolve(result[tmp]);
            })
            db.close().then(()=> {
                console.log("connection ended!");
            }).catch();
        })
    })
}

function pickGuarantee3servant () {
    return new Promise(resolve => {
        MongoClient.connect(mongoUrl, { useNewUrlParser: true } ,(err,db) => {
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
            db.close().then(()=> {
                console.log("connection ended!");
            }).catch();
        })
    })
}

function pickGuarantee4 () {
    return new Promise(resolve => {
        MongoClient.connect(mongoUrl, { useNewUrlParser: true } ,(err,db) => {
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
            db.close().then(()=> {
                console.log("connection ended!");
            }).catch();
        })
    })
}