---
title: 'React JS 與 Google 的美好邂逅(1)'
date: '2024/2/26'
lastmod: '2024/2/26'
tags: [ 鐵人賽 , React]
draft: false
summary: '本篇將手把手的細心帶領讀者用Firebase使網頁可以使用Google登入或者可自己輸入帳密來進行登入操作'
images: ['https://i.ytimg.com/vi/Xuy2fuE2qAI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYh4v95b_yNlt7tj-1izUKsR6FoA']
authors: ['default']
layout: PostLayout
---
# React JS 與 Google 的美好邂逅(1)
### 本篇將手把手的細心帶領讀者用Firebase使網頁可以使用Google登入或者可自己輸入帳密來進行登入操作

* #### 為何我要寫這一篇文章？
  相信各位可以在網路上找到許多關於此類的文章，不管是中文或者是英文，但我們會發現ReactJS的技術一直在進步，而我們讀到的很多文章是使用ReactJS拋棄的Hook，像是UseHistory、Switch和firebase導入的東西，因此我將會做一篇於**2024年ReactJS串接Firebase登入的Side Project**，減少大家可以不用一直爬文去找問題了。





#### 本為自己學己學習串接筆記在學習此技術前建議先有以下知識：
>- [ ] 熟悉基本的HTML、CSS、JS 的語法
>- [ ] 對於ES6有一定的認識
>- [ ] ReactJS的基本hook使用和時機
>- [ ] ReactJS的組件生命週期和Class Component的認識
>- [ ] 了解登入的運作原理比如TOKEN的機制、COOKIE和SESSION的運作及它們可能存有的風險



#### 在本篇可以學到以下知識：
>* TailwindCSS的串接和使用
>* Firebase的串接和介面設定
>* 學習Google中Firebase的物件及運用




---
## 前置作業
* #### 這邊開始之前需要先安裝[Nodejs](https://nodejs.org/en)和[VsCode](https://code.visualstudio.com/)才能運行



### 建立資料夾

1. 建立名為**MyProject**資料夾，裡面再建名為**src**和**public**的資料夾

```               
    MyProject_____
                 |____public
                 |____src
```

![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/Bkk4iWt8R.png)



2. 用**VScode**開啟**MyProject**資料夾，然後按下"Ctrl"鍵 + "J"鍵打開終端機並輸入
```NodeJS=
npm init -y
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/B1k83Zt8C.png)



3. 會發現自動新增一個**package.json**檔案，然後繼續輸入
```NodeJS=
npm i react react-scripts react-dom 
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/HyVxyGY8R.png)



4. 接者在**public**資料夾中建立**index.html**檔以及在**src**資料夾中建立**index.js**和**app.js**檔
```               
    MyProject_____
                 |____node_modules____...
                 |
                 |____public____index.html
                 |
                 |____src______
                 |            |____index.js
                 |            |____app.js
                 |
                 |____package-lock.json
                 |____package.json
                 
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/r1I5NXFLR.png)



> 本小節前置作業建立資料夾已經結束，若以上都有順利成功會長以上這樣
>下一篇我們將會進入到程式碼的初始化部分


## 傳送門
##### 下一篇門口：[React JS 與 Google 的美好邂逅(2)](https://hackmd.io/@Np_R141-RIuHzoG12l9ksA/SyctfzFUC)





















