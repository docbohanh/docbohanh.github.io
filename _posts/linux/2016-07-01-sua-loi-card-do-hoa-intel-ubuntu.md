---
layout: post
title:  "Sửa lỗi driver đồ hoạ intel cho các máy cài Ubuntu 14.04, Ubuntu 14.10 trở về sau"
date:   2016-07-01
categories: [Linux]
tags: [sửa lỗi, driver, đồ họa]
permalink: /linux/sua-loi-card-intel-ubuntu-os-2016-07/
---


Gần đâu một người bạn có nhờ tôi fix lỗi màn hình sau khi cài đặt Ubuntu vào máy pc, laptop cũ chạy chip Intel. Vấn đề của cậu ta là sau khi bật máy một thời gian thì màn hình trở thành thế này.

![Lỗi intel graphic ubuntu](/files/linux/intel-gp-error/intel-graphic-error.jpg)

![Lỗi intel graphic ubuntu](/files/linux/intel-gp-error/intel-graphic-error2.jpg)

Tôi  thấy lỗi này hồi trước tôi cũng gặp phải khi update lên Ubuntu 14.10. Tôi cũng đã thử cài lại Ubuntu 15.10 và 16.04 cho kết quả tương tự. Tất nhiên sau đó tôi đã tìm hiểu và biết được lỗi này gây ra bởi driver card đồ họa intel (driver mới dùng gia tốc SNA thay vì UXA cũ làm tăng đáng kể hiệu suất trên các card đồ họa mới nhưng lại gây một số lỗi trên các card đồ họa cũ).

Để giải quyết vấn đề này, ta có thể cấu hình cho driver của intel sử dụng phương thức gia tốc cũ là UXA. Cách làm như sau:

- Mở **Terminal** (có thể dùng phím tắt Ctrl + Alt + t):

![Cửa sổ Terminal trên Ubuntu](/files/linux/intel-gp-error/Terminal.png)

- Bạn có thể lệnh sau để kiểm tra SNA có kích hoạt không:

~~~sh
cat /var/log/Xorg.0.log | grep SNA
~~~

- Tiếp đó bạn tạo thư mục `/usr/share/X11/xorg.conf.d/` (nếu thư mục chưa tồn tại) và di chuyển vào đó bằng cách gõ:

~~~sh
mkdir /usr/share/X11/xorg.conf.d
cd /usr/share/X11/xorg.conf.d
~~~

- Tạo file có tên 20-intel.conf:

~~~sh
sudo nano 20-intel.conf
~~~

- Copy nội dung sau vào file đó (ấn Chuột phải chọn Paste vì không dùng được phím tắt Ctrl + V), ấn Ctrl + X, xác nhận Y, và ấn Enter 2 lần để lưu file.

~~~
Section "Device"
Identifier "Intel Graphics"
Driver "intel"
Option "AccelMethod" "uxa"
EndSection
~~~

![nano-fix-intel-graphic-error](/files/linux/intel-gp-error/nano-fix-intel-graphic-error.png)

- Sau khi thiết lập cấu hình thành công, bạn cần khởi động lại máy tính. Kiểm tra lại xem SNA còn được thiết lập không:

~~~sh
cat /var/log/Xorg.0.log | grep SNA
~~~

Chúc bạn thành công!