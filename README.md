# pickCardFgo v2.0 (On Editing)

[日本語ドキュメント]()
[English Document]()

## 中文说明：

pickCardFgo是将手机游戏Fate/GrandOrder的抽卡项目抽出，并使用Javascript制作而成的WepApp。下面简单介绍一下其原理和构成。

#### 原理:

该项目採用client-server模式。前端为[React](https://reactjs.org)，后端为[Node.js](https://nodejs.org)+[Express](https://expressjs.com)，数据库为[Mongodb](https://mongodb.com)。关于前端部分，React的部分由.jsx格式编写，并通过[Webpack](https://webpack.js.org )并使用[babel](https://babeljs.io )的[babel-loader](https://github.com/babel/babel-loader )进行转译，将`.jsx`还原为旧版本的等效代码。并且使用[axios](https://github.com/axios/axios )完成Ajax请求，实现了单页面无刷新式交互。后端的Nodejs使用Express框架，并推送了IP地址的根目录为静态目录，在此基础上又静态地推送了主页的index.html，从而避免了跨域问题。数据库中事先导入了fgo相关卡的信息并储存在fgo的名为cards的collection中方便调取使用。该项目的实例采用[AlibabaCloud](https://www.alibabacloud.com)进行DNS解析，使用的[AWS EC2](https://aws.amazon.com/ec2 )进行环境构筑，并使用npm环境的pm2监视和确保服务器稳定运行。

**准备步骤：**

1. 获取域名：http://pickcard.net-labo.icu，并使用AliCloud将其解析到AWS的地址。

2. 配置AWS EC2环境，安装npm环境和所需依赖包，安装mongodb并使用`mongorestore`将数据还原到数据库。

3. 启动服务器，将index.html推送到域名的根"/"。

4. 使用Web浏览器访问域名，浏览器渲染主页。至此准备步骤完成。

**运作方式：**

1. 当用户在网页端进行交互时，触发onclick事件，该事件对应一个函数，会向服务器发出一个Ajax形式的GET请求（Request）。

2. 服务器端接收GET请求，读取内容，并根据需求查找DB中的数据，并通过回复（Response）的形式返回给网页端。

3. 网页端接收到回复，读取其内容，并通过网页端UI展示给使用者。

#### 构成：

- `Pick 1 card` 按钮：为从卡池中抽取1张卡。

- `Pick 10 cards` 按钮：为从卡池中进行一个10连抽卡，并应用一些保底机制。

- `Calculate` 按钮：是一个独立功能，用于计算抽取特定数量当前卡池中的pick-up卡的概率和达成时消耗的资源（游戏内消费品，现实货币，抽数等）。

- ##### 内容说明：

1. 当自由模式（圣晶石图标上面有叉）时，抽卡不会扣除圣晶石。

2. 当标准模式（圣晶石图标上面没有叉）时，抽卡会和游戏中一样消耗圣晶石。具体为：抽1次消耗3圣晶石，抽10次消耗30圣晶石。

3. 在标准模式下，当圣晶石数量不足时，项目会提示是否购买圣晶石，如果购买则会花费¥9800购买167圣晶石，可以继续抽卡。

4. 在标准模式下，当圣晶石数量不足且未购买圣晶石的情况下，不允许继续抽卡。

#### 新版本改良：


1. 关于JS框架 

之前的老版本JS的框架用的是Vue，新版本改为用React了。最近正好在学React和Webpack，就顺便实践一下这些新学的技术。现在前端开发受到Microservice思想的影响，一般也在用面对组件开发了。而Vue和React作为完全支持虚拟DOM的框架也成了现在的主流。我个人的话，学了些React之后果然还是觉得React更适合我。理由是能在一个JSX中整合所有的东西。这个确实很方便，比起按照模板来的Vue来说流程简化比较多。虽然JSX的语法对新手来说比较有迷惑性，但是习惯了之后反倒觉得顺手了。React这个技术栈有很多深奥的东西，比如TypeScript和Redux。我目前的程度就到用React的jsx的阶段，以后深入学习了TS和Redux之后估计还会再重写一遍这个吧(^_^)。

2. 关于转译

之前版本的JS部分并没有经过转译，而是直接使用Vue的兼容模式写成的。而这次因为前端代码写在JSX里面，所以用了Webpack的babel-loader，把JSX转译成JS1.8。5。这么做的目的有2个，一个是正好可以练习Webpack部分的知识，主要是关于如何配置Webpack.config.js。还有一个是为了保持兼容。现在的网络开发，尤其是网络前端开发都是在用与时俱进的技术的。但是网络相关的东西都是依赖于网页浏览器的，而且现在正在被使用网页浏览器的版本和厂商很多，有的时候就算看相同的网站，因为各个浏览器JS引擎的差异，用户看到的内容也有可能不同。为了解决这个问题，果然还是把JS代码还原为老版本，兼容老版本的浏览器，这样可以给用户带来更好的观看体验。

3. 关于HTML元素

这次在写代码时，并没有像旧版本一样在HTML中静态生成文件，而是利用了React的VDOM动态地生成html的要素。这是因为要遵守TreeShading原则。对于浏览器来说，存在于RenderTree中的元素，即使是空元素，也会被渲染到网页上。而通过动态生成HTML元素可以有效避免空元素被渲染，从而优化了Web浏览器的渲染效率。这也使得Web浏览器占用更少的电脑资源。

4. 关于数据库的选择

和之前一样，这次的新版本使用了MongoDB这个noSQL数据库来储存卡的数据。关于为什么不选择MySQL这种SQL类型的RDBMS而选择MongoDB这种DSDB，主要是因为SQL对于数据的架构要求过于严格，所有数据必选强制满足所有所需架构才能进表。而对于游戏数据来说，很多数据并没有这样的规则。所以在游戏相关数据中使用SQL会显得十分不自由。而且noSQL（not only SQL）除了表形式的二次元数据之外，也可以储存JSON这种立体形式的数据，自由度相对RDBMS项目高。而RDBMS项目适用于数据需要频繁变化的，数据之间的关联需要被严格遵守的动态数据。这里的由于是静态多元数据，所以使用了noSQL。


#### 使用：

##### 1. 下载和环境配置
该项目运行在node环境下，如果你的电脑没有安装node，请前往[Node.js官网](https://nodejs.org)安装对应版本的Node.js。
请一并[安装Git](https://git-scm.com/downloads )以便于下载本项目.

如果你的电脑上已经配置了Node.js环境并且安装了Git，你可以直接使用

`git clone https://github.com/killbe5419/pickCardFgo_New.git` 

来下载本项目并使用

`cd pickCardFgo_New`

转到项目文件夹并使用

`npm install`

来自动安装该项目的依赖包。

##### 2. 数据库导入
如果你的电脑上没有安装MongoDB，请前往[MongoDB官网](https://docs.mongodb.com/manual/installation/ )安装对应版本的MongoDB，并按照官网说明启动`mongod`。
请自行安装解压缩工具用来解压缩DB的数据备份。

如果你的电脑上已经已经安装MongoDB并启动了`mongod`，使用

`cd pickCardFgo_New`

转到该文件夹并使用解压缩工具解压缩fgo.zip。在解压缩完成后使用

`mongorestore -d fgo -h localhost:27017 fgo`

将数据备份还原到数据库中。

##### 3. 启动服务器
如果你已经完成了前2步中的所有操作，使用

`cd pickCardFgo_New`

转到该文件夹并使用

`npm run server`

来启动服务器。之后使用你的Web浏览器访问

[http://localhost:2333](http://localhost:2333) 

即可在本地服务器运行它。

如果你嫌麻烦，没关系！我把样例发布在了[我的网站](http://pickcard.net-labo.icu:2333), 如果有兴趣你可以去看一看。但是样例的服务器性能不好,因此运行起来可能会比较慢。我对此表示歉意并请也请耐心等待加载过程。希望你能喜欢！




