## English Description(On Editing):
pickCardFgo is an Extraction of smartphone game Fate/GrandOrder and made by Javascript. I'll simply introduce principle and structure about it.

#### principle:
this system uses client-server mode. frontend used `React`, backend used by `Node.js`, and DB is `Mongodb`. Frontend sends pick-card request to server, and server searches a character info in DataBase. then server returns the character info back to client as respond. Finally, frontend processes the responded data and shows it to user.

#### structure:

- `Pick 1 card`  pick one servant or craft essence from a card pool.

- `Pick 10 cards`  pick a ten-pick from a card pool and use some guarantee rules.

- `Calculation`  an independent function that help you calculate expected expense to get a pick-up card.

- ##### contents description:

1. In free mode(a X covers holystone icon), pick card will not spend holystones.

2. In standard mode(no X covers holystone icon), pick card spends holystones.In detail:pick one card spends 3 stones, pick-ten spends 30 stones.

3. In standard mode, system will notice you to buy holystone if your stones are not enough for picking. If you use ¥9800 to buy 167 stones and have enough stone, you can continue your picking.

4. In standard mode, if you do not have enough holystone for picking and refused the stone purchasing, You will not be allowed to pick card.

#### How to use:
This system works under node environment. Make sure you installed Node v8.x.x+ before you use this system. If you have Git, you can download this system by coding:

`git clone https://github.com/killbe5419/pickCardFgo.git`  

and use it by coding:

`node run server`

to run it in [localhost](http://localhost:2333). If you feel sticky, that's ok! I have already published it on [my site](http://pickcard.net-labo.icu:2333). If you're interested in it, go there and try it! In addition, because of the poor performance of that cloud server, the exp may be a little slow, I feel sorry about that but please be patient. I hope you could enjoy it!
