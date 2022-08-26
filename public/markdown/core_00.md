<h1 align="center">核心基础介绍</h1>

<p align="center">
  暂未编写
</p>

# 认识互联网（基本原理）

::: tip
该内容面向零基础入门的同学，仅做基础认知和简单说明，详细内容后续会深入讲解 ！
:::

## 1、在本地开发，在服务器共享

::: tip
程序开发人员 -> 在本地开发（html，css，js）-> 上传到服务器（共享）-> 所有用户即可访问
:::
![在本地开发，在服务器共享](/assets/images/core/00/01.png)

## 2、关于 HTTP 协议

::: tip
HTTP 协议 （HyperText Transfer Protocol）超文本传输协议，是互联网数据传输的常见协议
一次 HTTP 事物由 "HTTP 请求" 和 "HTTP 响应" 构成
网址前的 http:// 就表示用 http 协议请求页面
:::
### HTTP 请求
![HTTP 请求](/assets/images/core/00/02.png)

### HTTP 响应

::: tip
用户发送 HTTP 请求给服务器 -> 服务器识别发来的 HTTP 请求 -> 返回给用户端 a.html 文件，一来一回用户就能看到当前的网页了，返回的这个过程就叫做 HTTP 响应
:::
![HTTP 响应](/assets/images/core/00/03.png)

这里，先简单了解下 HTTP 协议

## 3、前后端请求交互基本流程

::: tip
① 用户发送 HTTP 请求
② 在服务器上：Java，PHP，Python，NodeJS 等程序运行时执行数据库“增删查改” 等业务，他们就是后端语言
③ 服务器返回 HTTP 响应
④ 在浏览器中，HTML、CSS 和 JS 程序将运行， 执行页面结构渲染、美化、交互效果等业务，他们就是前端语言
:::
![前后端请求交互基本流程](/assets/images/core/00/04.png)