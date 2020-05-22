# pickCardFgo v2.0 (under making)


## 中文说明：

这是一个由JavaScript写成的fgo模拟抽卡系统。下面简单介绍一下其原理和构成。

#### 原理:

该系统採用client-server模式。前端为`React`，后端为`Node.js`，数据库为`Mongodb`。前端将抽卡要求发送到后端node服务器。node服务器查询数据库寻找角色的信息并传回前端，展示给浏览者。

#### 构成：

- `Pick 1 card` 按钮：”为从卡池中抽取一个角色或是概念礼装。

- `Pick 10 cards` 按钮：为从卡池中抽取一个10连，并应用一些保底机制。

- `Calculate` 按钮：是一个独立功能，用于计算抽取当前池子中的概率提升卡所需圣晶石的期望。

- ##### 内容说明：

1. 当自由模式（圣晶石图标上面有叉）时，抽卡不会扣除圣晶石。

2. 当标准模式（圣晶石图标上面没有叉）时，抽卡会和游戏中一样消耗圣晶石。具体为：抽1次消耗3圣晶石，抽10次消耗30圣晶石。

3. 在标准模式下，当圣晶石数量不足时，系统会提示是否购买圣晶石，如果购买则会花费¥9800购买167圣晶石，可以继续抽卡。

4. 在标准模式下，当圣晶石数量不足且未购买圣晶石的情况下，不允许继续抽卡。

#### 新版本改良

1. 之前的老版本JS的框架用的是Vue，新版本改为用React了。最近正好在学React和Webpack，就顺便实践一下这些新学的技术。现在前端开发受到Microservice思想的影响，一般也在用面对组件开发了。而Vue和React作为完全支持虚拟DOM的框架也成了现在的主流。我个人的话，学了些React之后果然还是觉得React更适合我。理由是能在一个JSX中整合所有的东西。这个确实很方便，比起按照模板来的Vue来说流程简化比较多。虽然JSX的语法对新手来说比较有迷惑性，但是习惯了之后反倒觉得顺手了。React这个技术栈有很多深奥的东西，比如TypeScript和Redux。我目前的程度就到用React的jsx的阶段，以后深入学习了TS和Redux之后估计还会再重写一遍这个吧(^_^)。

2. 之前版本的JS部分并没有经过转译，而是直接使用Vue的兼容模式写成的。而这次因为前端代码写在JSX里面，所以用了Webpack的babel-loader，把JSX转译成JS1.8。5。这么做的目的有2个，一个是正好可以练习Webpack部分的知识，主要是关于如何配置Webpack.config.js。还有一个是为了保持兼容。现在的网络开发，尤其是网络前端开发都是在用与时俱进的技术的。但是网络相关的东西都是依赖于网页浏览器的，而且现在正在被使用网页浏览器的版本和厂商很多，有的时候就算看相同的网站，因为各个浏览器JS引擎的差异，用户看到的内容也有可能不同。为了解决这个问题，果然还是把JS代码还原为老版本，兼容老版本的浏览器，这样可以给用户带来更好的观看体验。

3. 这次在写代码时，并没有像旧版本一样在HTML中静态生成文件，而是利用了React的vdom动态地生成html的要素。这是因为要遵守TreeShading原则。对于浏览器来说，存在于RenderTree中的元素，即使是空元素，也会被渲染到网页上。而通过动态生成HTML元素可以有效避免空元素被渲染，从而优化了Web浏览器的渲染效率。这也使得Web浏览器占用更少的电脑资源。

4. 和之前一样，这次的新版本使用了MongoDB这个noSQL数据库来储存卡片的数据。关于为什么不选择MySQL这种SQL类型的RDBMS而选择MongoDB这种DSDB，主要是因为SQL对于数据的架构要求过于严格，所有数据必选强制满足所有所需架构才能进表。而对于游戏数据来说，很多数据并没有这样的规则。所以在游戏相关数据中使用SQL会显得十分不自由。而且noSQL（not only SQL）除了表形式的二次元数据之外，也可以储存JSON这种立体形式的数据，自由度相对RDBMS系统高。而RDBMS系统适用于数据需要频繁变化的，数据之间的关联需要被严格遵守的动态数据。这里的由于是静态多元数据，所以使用了noSQL。




#### 使用
该系统运行在node环境下，而且需要mongodb，express，cors等依赖包。如果你的电脑上已经配置了node环境并且安装了git，你可以直接使用

`git clone https://github.com/killbe5419/pickCardFgo_New.git` 

来下载本系统并使用

`node run server`

来在[本地服务器](http://localhost:2333)运行它。如果你嫌麻烦，没关系！我把样例发布在了[我的网站](http://pickcard.net-labo.icu:2333), 如果有兴趣你可以去看一看。但是样例的服务器性能不好,因此运行起来可能会比较慢。我对此表示歉意但请也请你耐心等待加载过程。希望你能喜欢！


## English Description:
This is a system of fgo pick-card simulation. I'll introduce principle and structure about it.

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

to run it in [localhost](http://localhost:2333). If you feel sticky, that's ok! I have already published it on [my site](http://pickcard.net-labo.icu). If you're interested in it, go there and try it! In addition, because of the poor performance of that cloud server, the exp may be a little slow, I feel sorry about that but please be patient. I hope you could enjoy it!