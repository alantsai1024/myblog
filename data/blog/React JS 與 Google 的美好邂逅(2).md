---
title: 'React JS 與 Google 的美好邂逅(2)'
date: '2024/2/27'
lastmod: '2024/2/27'
tags: [ 鐵人賽 , React]
draft: false
summary: '本篇將手把手的細心帶領讀者用Firebase使網頁可以使用Google登入或者可自己輸入帳密來進行登入操作'
images: ['https://i.ytimg.com/vi/Xuy2fuE2qAI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYh4v95b_yNlt7tj-1izUKsR6FoA']
authors: ['default']
layout: PostLayout
---
# React JS 與 Google 的美好邂逅(2)

### 本篇將手把手的細心帶領讀者用Firebase使網頁可以使用Google登入或者可自己輸入帳密來進行登入操作

* #### 本小節我們將學到什麼？
  相信各位已在[第一小節](h[ttps://](https://hackmd.io/@Np_R141-RIuHzoG12l9ksA/r1-caltIR))中已經安裝好環境並建立完資料夾了，本小節中我們將會帶領大家開始進入程式碼的部分，並**初始化運行我們的ReactJS**的應用程序，此外還會介紹如何**安裝**VsCode及Chrome瀏覽器中**ReactJs開發的相關擴充插件**，讓大家在開發時能更輕鬆、具體了解原理的運作情形。

## 安裝擴充插件
### Chrome瀏覽器
#### 在[Chrome線上應用程式商店](https://chromewebstore.google.com/?hl=zh-TW)中搜尋React可以看到許多的React的開發輔助插件，本篇將使用[此插件](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=zh-TW)來輔助
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/S1NfYmF8C.png)



### VsCode插件
* **JS JSX Snippets** 
裡面有很多的快速鍵使我們可以**快速的建立React組件**，比如輸入**rfc**，可產生出與文件名相同的React物件
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/HyoDqXKLR.png)


* **Auto Rename Tag**
我們在更改React裡的標籤時可以只改前面的，後面會自動更改，無須手動更改
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/SJUWi7tI0.png)


---

## 開始寫程式

### 修改運行方式
1. 找到**package.json**中的**scripts**，他是我們執行npm命令的地方，然後將裡面的內容改成
```json=
將 "test": "echo \"Error: no test specified\" && exit 1"

替換成： "start": "react-scripts start" 
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/r1jThfFU0.png)


2. 之後在我們對ReactJS初始化完成後就可以**使用此命令去運行程序**了。(現在還未初始化)
```NodeJS=
npm start
```


### 初始化應用程序
1. 現在要開啟**index.html**開始編譯，建立ReacrJS掛載的通道，我們在程式碼中添加
```HTML=
<div id="root"></div>
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/rJF1eXKI0.png)


2. 接著我們開啟**index.js**開始編譯，串接root這個DOM
```TypeScript=
//新版React使用的方法
import ReactDOM from 'react-dom/client';

//導入App組件(我們此時還未定義組件，等等會寫)
import App from './app.js'

//建立虛擬DOM在root上
const root = ReactDOM.createRoot(document.getElementById('root'));

//root渲染App的組件
root.render(<App />);
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/HkOES7Y8A.png)


3. 然後我們還需要到**app.js**中編譯我們定義的App的組件，然後寫
```TypeScript=
//導入react
import React from 'react';

//複習：ES6允許我們使用箭頭函式，return()裡最外層只能有一個div
const App = () => {
    return (
        <div>
            這是我的React 程式
        </div>
    );
}

//導出此組件
export default App;
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/ByWoM7Y8A.png)


4. 最後我們到終端機輸入以下指令，即可看到運行
```NodeJS=
npm start
```
![螢幕擷取畫面 2024-06-26 112916](https://hackmd.io/_uploads/HJktHQKIR.png)



> 本小節ReactJS程序初始化已經完成，若以上都有順利成功會長以上這樣
>下一篇我們將會進入到Firebase的介面操作設定來為後來的程式串接


## 傳送門
*  上一篇門口：[React JS 與 Google 的美好邂逅(1)](https://hackmd.io/@Np_R141-RIuHzoG12l9ksA/r1-caltIR)
*  下一篇門口：[React JS 與 Google 的美好邂逅(3)](https://)








