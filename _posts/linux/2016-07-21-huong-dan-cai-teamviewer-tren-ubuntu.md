---
layout: post
title:  "Hướng dẫn cài Teamviewer trên Ubuntu 16.04, Ubuntu 15.10, Ubuntu 15.04 và Ubuntu 14.04 LTS"
date:   2016-07-21
categories: [Linux]
tags: [cài đặt, teamviewer]
permalink: /linux/huong-dan-cai-teamviewer-tren-ubuntu/
---


**Trước hết Teamviewer là gì? Theo định nghĩa trên trang chủ [https://www.teamviewer.com](//www.teamviewer.com) thì Teamviewer là:**

> Phần mềm hỗ trợ từ xa, truy cập từ xa và họp trực tuyến mà cả thế giới tin cậy – 1 tỷ cài đặt và 20+ triệu thiết bị trực tuyến mọi lúc.

**Bản Teamviewer 11 (phiên bản mới nhất khi mình viết bài này) được đưa ra với một loạt cải tiến, tối ưu (các bạn có thể tìm đọc thêm trên trang chủ). Sau đây mình sẽ hướng dẫn ngắn gọn cách cài đặt Teamviewer trên hệ điều hành Ubuntu và các hệ điều hành dựa trên Ubuntu như Linux Mint, Elementary OS, Pinguy OS, Peppermint…**

Cách mình hướng dẫn sử dụng dòng lệnh Terminal . Bạn có thể search *Terminal* trong hộp thoại tìm kiếm chương trình hoặc ấn tổ hợp phím Ctrl + Alt + t để mở Terminal nhé.

[Của sổ Terminal trên Ubuntu](/files/linux/teamviewer/Terminal.png)

Gõ lần lượt các đoạn code sau (ấn *Enter* sau mỗi dòng):

**Ubuntu 32bit**

~~~sh
sudo apt-get update
sudo apt-get install gdebi
wget http://download.teamviewer.com/download/teamviewer_i386.deb
sudo gdebi teamviewer_i386.deb
~~~

**Ubuntu 64bit**

~~~sh
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install gdebi
wget http://download.teamviewer.com/download/teamviewer_i386.deb
sudo gdebi teamviewer_i386.deb
~~~

Sau khi cài đặt bạn có thể khởi động Teamviewer từ Menu các chương trình hoặc qua lệnh *teamviewer* trong cửa sổ Terminal.

~~~sh
teamviewer
~~~