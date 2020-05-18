# pickCardFgo v2.0 (under making)


## 中文说明：

这是一个由JavaScript写成的fgo模拟抽卡系统。下面简单介绍一下其原理和构成。

#### 原理:

该系统採用client-server模式。前端为`React`，后端为`Node.js`，数据库为`Mongodb`。前端将抽卡要求发送到后端node服务器。node服务器查询数据库寻找角色的信息并传回前端，展示给浏览者。

#### 构成：

- `Pick 1 card` 按钮：”为从卡池中抽取一个角色或是概念礼装。

- `Pick 10 cards` 按钮：为从卡池中抽取一个10连，并应用一些保底机制。

- `Calculate` 按钮：是一个独立功能，用于计算抽取当前池子中的概率提升卡所需圣晶石的期望。

- ##### 补充：

1. 当自由模式（圣晶石图标上面有叉）时，抽卡不会扣除圣晶石。

2. 当标准模式（圣晶石图标上面没有叉）时，抽卡会和游戏中一样消耗圣晶石。具体为：抽1次消耗3圣晶石，抽10次消耗30圣晶石。

3. 在标准模式下，当圣晶石数量不足时，系统会提示是否购买圣晶石，如果购买则会花费¥9800购买167圣晶石，可以继续抽卡。

4. 在标准模式下，当圣晶石数量不足且未购买圣晶石的情况下，不允许继续抽卡。

#### 使用
该系统运行在node环境下，而且需要mongodb，express，cors等依赖包。如果你的电脑上已经配置了node环境并且安装了git，你可以直接使用

`git clone https://github.com/killbe5419/pickCardFgo_New.git` 

来下载本系统并使用

`node run server`

来在[本地服务器](http://localhost:2333)运行它。如果你嫌麻烦，没关系！我把样例发布在了[我的网站](http://pickcard.net-labo.icu/react), 如果有兴趣你可以去看一看。但是样例的服务器性能不好,因此运行起来可能会比较慢。我对此表示歉意但请也请你耐心等待加载过程。希望你能喜欢！


## English Description:
This is a system of fgo pick-card simulation. I'll introduce principle and structure about it.

#### principle:
this system uses client-server mode. frontend used `React`, backend used by `Node.js`, and DB is `Mongodb`. Frontend sends pick-card request to server, and server searches a character info in DataBase. then server returns the character info back to client as respond. Finally, frontend processes the responded data and shows it to user.

#### structure:

- `Pick 1 card`  pick one servant or craft essence from a card pool.

- `Pick 10 cards`  pick a ten-pick from a card pool and use some guarantee rules.

- `Calculation`  an independent function that help you calculate expected expense to get a pick-up card.

- ##### Additional comments:

1. In free mode(a X covers holystone icon), pick card will not spend holystones.

2. In standard mode(no X covers holystone icon), pick card spends holystones.In detail:pick one card spends 3 stones, pick-ten spends 30 stones.

3. In standard mode, system will notice you to buy holystone if your stones are not enough for picking. If you use ¥9800 to buy 167 stones and have enough stone, you can continue your picking.

4. In standard mode, if you do not have enough holystone for picking and refused the stone purchasing, You will not be allowed to pick card.

#### How to use:
This system works under node environment. Make sure you installed Node v8.x.x+ before you use this system. If you have Git, you can download this system by coding:

`git clone https://github.com/killbe5419/pickCardFgo.git`  

and use it by coding:

`node run server`

to run it in [localhost](http://localhost:2333). If you feel sticky, that's ok! I have already published it on [my site](http://pickcard.net-labo.icu). If you're interested in it, go there and try it! In addition, because of the poor performance of that cloud server, the exp may be a little slow, I feel sorry about that but please be patient. I hope you could enjoy it!