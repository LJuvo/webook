# 什么是webpack

- webpack是一个模块打包器，他会将前端所有的资源文件（js/json/img/less），都作为模块处理
- 它将根据模块的依赖关系进行分析，生成对应原资源

## Webpack核心概念

- 【入口entry】
    - 指示应该使用哪个模块，来作为构建其内部依赖图的开始
    - 默认的打包文件入口为 src -> index.js
- 【出口output】
    - 在哪里输出文件，以及如何命名这些文件
    - 默认的输出文件路径为 dist -> main.js
- 【loader】
    - 处理那些非js文件，如css/img等其他资源
    - webpack本身只能处理js和json资源，如果要处理其他类型的文件，就需要使用对应的loader
    - 它本身是一个函数，接受源文件作为参数，返回转换的结果
    - loader一般以xxx-loader的方式命名，xxx代表了这个loader要做的转换功能，如：css-loader
- 【插件plugins】
    - 执行范围更广的任务，从打包到优化都可以实现
    - 插件可以完成一些loader不能完成的功能
- 【模式mode】
    - 生产模式和开发模式
    - 生产环境和开发环境 将ES6模块化编译成浏览器能识别的模块化
    - 生产环境比开发多一个压缩JS代码

## 安装

- webpack4: npm i webpack@4 webpack-cli@3 -D 本地安装
- webpack5: npm i webpack@5 webpack-cli@4 -D 本地安装

## webpack创建新项目

1. 运行npm init -y：在项目根目录初始化package.json（npm包管理配置文件）
2. 运行mkdir src 或md src：新建src文件夹，用来放程序员写的源代码
3. 在src目录下创建项目文件：index.html和index.js等项目文件
4. 安装项目依赖包：如jquery，npm i jquery -S 安装在dependencies节点下
5. 安装指定版本的webpack：npm install webpack@5.42.1 webpack-cli@4.7.2 -save-dev 

## 配置webpack.config.js 配置文件

- 在项目根目录中，创建webpack.config.js（webpack配置文件），并初始化如下配置

``` js
module.exports = {
    mode: "development"     //mode 指定构建模式
}
```

- 在package.json的script节点下，新增dev脚本如下

``` js
"script": {
    "dev": "webpack"    // script 节点下的脚本，可以通过npm run 执行，例如 npm run dev
}
```

- 在终端运行npm run dev命令，启动webpack进行项目的打包构建
    - run dev 脚本运行前，会先读取webpack.config.js，再根据配置运行webpack
    - 启动后，目录中会多一个dist -> main.js，在index.html引入这个文件即可
    - 也可直接输入webpack命令执行打包

## webpack.config.js 基本配置

``` js
const { resolve } = require("path")

module.exports = {
    entry: "./src/index.js", //入口起点
    output: {
        filename: "built.js", //出口    //输出路径
        path: resolve(__dirname, "build")
    },
    module: {
        rules: {
            test: /\.css$/,
            //use数组中loader执行顺序：从右到左，从上到下依次执行
            //创建style标签，将js中的新式资源插入进行，添加到head中生效
            //将css文件编译成commonjs模块加载js中，里面内容是样式字符串
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }
    },
    plugins: [], // 插件配置
    mode: "development" // 打包模式
}
```

# webpack配置介绍

## entry入口

在webpack.config.js配置文件中，通过entry节点指定打包入口

## 单个入口

webpack.config.js

``` js
module.exports = {
    entry: "./src/index.js"
}

```

entry属性的单个入口语法，是下面的简写：

``` js
module.exports = {
    entry: {
        main: "./src/index.js"
    }
}
```

## 多个入口

对象语法：对象语法会比较繁琐，但这是应用程序中定义入口的最可扩展的方式

```
module.exports = {
    entry: {
        main: "./src/index.js",
        app: "./src/app.js"
    }
}
```

## output出口

配置output选项可控制webpack如何向硬盘写入编译文件。注意，即使可存在多个入口起点，但只指定一个输出配置

webpack中配置output属性的最低要求是，将它的值设置为一个对象，包括以下两点：

- filename用于输出文件的文件名
- 目标输出目标path的绝对路径

``` js
const path = require("path");

module.exports = {
    output: {
        filename: "bundle.js",
        // path如不指定，默认放在dist
        path: path.resolve(__dirname, "dist")
    }
}
```

### path

在webpack 4之后，output.path默认为dist目录。除非需要更改它，否则不必单独配置。
webpack4可写成：

``` js
const path = require("path");

module.exports = {
    output: {
        filename: "bundle.js",
        filename: "./js/bundle.js", // 相对路径，生成一个js文件夹
        filename: "[name].js" // 多入口时，打包输出不同的bundle.js
    }
}

```

### filename

- filename的作用是控制输出资源的文件名，其形式为字符串
- filename可以不仅仅是bundle的名字，还可以是一个相对路径
- 在这里把它命名为bundle.js，表示希望资源输出到一个叫bundle.js的文件里
- 打包成功后，会自动生成一个dist文件夹，里面有一个bundle.js

对于单个入口，filename会是一个静态名称
当通过多个入口起点、代码拆分或各种插件（plugin）创建多个bundle，应该使用以下一种替换方式，赋予每个bundle一个唯一的名称

- [name]：[name].js使用入口名称
- [id]：[id].js使用内部chunk id
- [hash]：指代Webpack此次打包所有资源生成的hash
- [chunkhash]：指代当前chunk内容的hash
- [id]：指代当前chunk的id
- [query]：指代filename配置项中的query

### publicPath

- publicPath是一个非常重要的配置项，用来指定资源的请求位置

## loader

loader可以将文件从不同的语言（如TypeScript）转换为javaScript，或将内联图像转换为data
URL：loader甚至允许你在JavaScript模块中 import CSS文件

- webpack默认只能打包处理.js后缀的模块，无法处理其他非.js后缀结尾的模块，需调用loader加载器才可正常打包，否则报错
- loader可用于对模块源代码进行转换，loader可在 import 或“加载”模块时预处理文件
- loader加载器的作用：协助webpack打包处理特定的文件模块，如
    - css-loader：打包处理css相关的文件
    - style-loader：将CSS模块作为样式导出到DOM中
    - less-loader：打包处理less相关的文件
    - sass-loader：加载和转义sass/scss文件
    - babel-loader：打包处理webpack无法处理的高级js语法

### loader特性

- loader支持链式传递，能够对资源使用流水线（pipeline），按照相反的顺序执行。
- loader链中的第一个loader返回值给下一个loader
- 在最后一个loader，返回webpack所预期的javaScript
- loader可以是同步的，也可以是异步的
- loader运行在Node.js中，并且能够执行任何可能的操作
- loader接收查询参数，用于对loader传递配置
- loader也能够使用options对象进行配置

### loader使用方法

- 先下载，再使用（配置loader）
- 只有一个loader时，用字符串写法，多个loader用数组写法
- webpack 5，设置img时，不需要配置loader，配置后，图片会显示不出来
- use数组中指定的loader顺序是固定的，多个loader的调用顺序是：从后往前调用，从右到左，从下往上依次执行
- url-loader，默认使用es6模块化，而html-loader引入图片是commonjs

#### 在应用程序中，有三种使用loader的方式：

- 配置（推荐）：在webpack.config.js文件中指定loader
    - 在module -> rules 数组中，添加loader
    - 使用test表示匹配的文件类型
    - use表示对应要调用的loader
- 内联：在每个import语句中显式指定loader
    - import Styles from "style-loader!css-loader?module!./style.css"
    - 通过前置所有规则及使用！，可对应覆盖到配置中的任意loader
    - 选项可以传递查询参数，例如?key=value&foo=bar
    - 或一个JSON对象，例如?{"key":"value","foo"="bar"}
- CLI：在shell命令中指定它们
    - webpack --module-bind jade-loader --module-bind "css=style-loader!css-loader"
    - 这会对.jade文件使用jade-loader
    - 对.css文件使用style-loader和css-loader

## css less图片处理loder配置例子

``` javascript
module: {
    rules: [
        {test:/\.css$/, use: ["style-loader", "css-loader"]},
        {test:/\.less$/, use : ["style-loader", "css-loader", "less-loader"]},
        {test:/\.jpg|png|gif$/, use: "url-loader?limit=22229"} // 其中？之后的是loader的参数项
    ]
}
```

- limit用来指定图片的大小，单位是字节（byte）
- 只有<=limit大小的图片，才会被转为base64格式的图片
- 如需要打包背景图片，需要做如下配置。esModule: false  type:"javascript/auto"

``` js
{
    test: /\.(png|jpg|gif)$/i,
    use: [
        {loader: "url-loader", options: {limit:151206, esModule: false}}
    ],
    type: "javascript/auto"
}
```

### 把图片文件统一生成到image目录中

``` js
{
    test: /\.jpg|png|gif$/,
    use: {
        loader: "url-loader",
        options: {
            limit: 22228,
            outputPath: "image"
        }
    }
}
```

### js文件中的高级语法 - 打包处理

webpack只能打包处理一部分高级的JS语法。对于那些无法处理的高级语法。需要借助于babel-loader进行打包处理。

``` js
{
    test: /\.js$/,
    use: "babel-loader",
    exclude: /node_modules/
}
```

> 注意：必须使用exclude指定排除项：因为node_modules目录下的第三方包不需要被打包

### 配置babel-loader

在项目根目录中与webpack.config.js同级，创建名为babel.config.js配置文件，babel的配置项如下：

``` js
module.exports = {
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true }]]
}
```

## plugins插件

插件是webpack的支柱功能，webpack自身也是构建于，你在webpack配置中用到的相同的插件系统之上！插件目的在于解决loader无法实现的其他事

- 使用方法：下载，引用，使用
- 配置插件可以去NPM上查看使用方法
- 安装和配置第三方插件，可拓展webpack的能力，使webpack用起来更方便
- 由于插件可携带参数/选项，必须在webpack配置中，向plugins属性传入new实例
- 根据你的webpack用法，这里有多种方式使用插件

### 常用的插件

#### webpack-dev-server

- 安装：npm i webpack-dev-server@3.11.2 -D
- 实时自动打包，自动刷新页面，修改源代码webpack会自动进行项目打包和构建
- 在内存中编译打包，不会有任何输出，类似于node.js的nodemon

##### 配置devServer
