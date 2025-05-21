---
title: ' Kali Linux 永久更改網卡 IP 與子網設定'
date: '2024/1/15'   
lastmod: '2024/1/15'
tags: [ kali , 網路 ] 
draft: false
summary: '本篇將說明如何在 Kali Linux 中透過編輯 `/etc/network/interfaces` 檔案，永久設定靜態 IP、子網遮罩、預設閘道與 DNS。'
images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ks-mHt4ZuYAi53cxnwhStGy0wZQpz_XNuA&s']
authors: ['default']
layout: PostLayout
---
# Kali Linux 永久更改網卡 IP 與子網設定

本篇將說明如何在 Kali Linux 中透過編輯 `/etc/network/interfaces` 檔案，永久設定靜態 IP、子網遮罩、預設閘道與 DNS。

## 📌 適用對象

- 想在 Kali 中使用 **靜態 IP**
- 使用傳統方式設定網卡（**不透過 NetworkManager**）

##  📝 步驟一：編輯網路設定檔

1. 打開**終端機**後輸入以下指令來開啟設定檔：
```
sudo nano /etc/network/interfaces
```

2. 將以下設定加入（假設你的網卡名稱是 eth0，IP 設為 192.168.0.100/24，閘道為 192.168.0.1）：

```
auto eth0
iface eth0 inet static
    address 192.168.0.100
    netmask 255.255.255.0
    gateway 192.168.0.1
    dns-nameservers 8.8.8.8
```

## 🔁 步驟二：重開機 kali 即可完成

 重開機後開啟終端機並輸入：
```
ifconfig
```
可以發現 IP 已變成**192.168.0.100**，代表成功

## 🧪 還原設定：

若你想還原為 自動取得 IP（DHCP），請依下列步驟操作：

1. 使用[**步驟一**](#📝-步驟一：編輯網路設定檔) 並修改網路設定檔為以下格式：
```
uto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp
```

2. 接者使用[**步驟二**](#🔁-步驟二：重開機-kali-即可完成) 的操作及可完成復原
