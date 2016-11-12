---
layout: post
title:  "Thay đổi độ phân giải màn hình Raspberry Pi"
date:   2016-09-30
categories: [Linux]
tags: [Raspberry Pi, Raspbian]
permalink: /blog/thay-doi-do-phan-giai-man-hinh-raspi/
bigimg: "/files/linux/raspi-resolution/raspi-resolution.png"
share-img: "https://vietanhdev.com/files/linux/raspi-resolution/raspi-resolution.png"
---

## Vấn đề

Khi cài đặt các phiên bản hệ điều hành dựa trên Linux, tôi nhận thấy nhiều hệ điều hành đôi lúc không nhận được độ phân giải thật của màn hình máy tính, dẫn đến việc hiển thị màn hình với độ phân giải thấp hơn mức bình thường, khiến các đối tượng trên màn hình bị mờ, nhìn rất xấu.

Trên với các hệ điều hành Fedora, Ubuntu... cài trên máy tính thông thường ta có thể thêm các cấu hình độ phân giải cho màn hình một cách thủ công qua hướng dẫn của link bên dưới:

[http://askubuntu.com/questions/330293/how-do-i-set-a-monitor-resolution-that-is-not-available-in-the-display-settings](http://askubuntu.com/questions/330293/how-do-i-set-a-monitor-resolution-that-is-not-available-in-the-display-settings)

Tuy nhiên, khi thực hiện hướng dẫn như trên với Raspberry Pi - RasPi (ở đây tôi sử dụng Raspbian jessie), bạn sẽ không tìm thấy tệp tin `/etc/X11/xorg.conf`. Bạn sẽ có một cách khác để đặt lại độ phân giải cho màn hình.

## Thay đổi độ phân giải màn hình cho Raspberry Pi sử dụng tệp cấu hình config.txt

Vì không có BIOS, các thiết lập cấu hình ở Raspberry Pi được lưu trữ trong tệp `config.txt` lưu tại đường dẫn `/boot/config.txt`.

Bạn có thể chỉnh sửa tệp này bằng cách lắp thẻ nhớ của Pi sang một máy tính khác (sử dụng hệ điều hành Linux, OS X) để chỉnh sửa tệp cấu hình `config.txt` bằng bất kì trình chỉnh sửa văn bản nào. Cách này có thể dùng trong trường hợp bạn không thể truy cập chỉnh sửa tệp cấu hình trực tiếp trên RasPi). **Chú ý**: với máy tính Windows bạn có thể sẽ không nhìn thấy các phân vùng của hệ điều hành cài trên RasPi.

**Chỉnh sửa tệp `config.txt` ngay trên RasPi:**

- Đăng nhập RasPi

- Mở terminal và gõ lệnh sau để mở tệp `config.txt` bằng nano: 

~~~sh
sudo nano /boot/config.txt
~~~

- Uncomment (Xóa dấu # ở đầu) các dòng có `hdmi_group` và `hdmi_mode` và thay đổi các giá trị của `hdmi_group` và `hdmi_mode` cho phù hợp với màn hình của bạn.

Các giá trị cho `hdmi_group` và `hdmi_mode` tương ứng với màn hình sử dụng (nguồn [http://elinux.org/RPiconfig](http://elinux.org/RPiconfig)):


**hdmi_group : Loại HDMI**


Không ghi rõ loại hoặc ghi giá trị 0 : sử dụng loại được lựa chọn trong edid (Extended Display Identification Data).

hdmi_group=1   CEA

hdmi_group=2   DMT

**hdmi_mode defines : Độ phân giải màn hình được sử dụng.**

Nếu bạn không tìm thấy độ phân giải màn hình của mình, hãy đọc thêm tại [link này](https://www.raspberrypi.org/forums/viewtopic.php?f=29&t=24679).

~~~
Các giá trị ứng với hdmi_group=1 (CEA)

hdmi_mode=1    VGA
hdmi_mode=2    480p   60 Hz
hdmi_mode=3    480p   60 Hz  H
hdmi_mode=4    720p   60 Hz
hdmi_mode=5    1080i  60 Hz
hdmi_mode=6    480i   60 Hz
hdmi_mode=7    480i   60 Hz  H
hdmi_mode=8    240p   60 Hz
hdmi_mode=9    240p   60 Hz  H
hdmi_mode=10   480i   60 Hz  4x
hdmi_mode=11   480i   60 Hz  4x H
hdmi_mode=12   240p   60 Hz  4x
hdmi_mode=13   240p   60 Hz  4x H
hdmi_mode=14   480p   60 Hz  2x
hdmi_mode=15   480p   60 Hz  2x H
hdmi_mode=16   1080p  60 Hz
hdmi_mode=17   576p   50 Hz
hdmi_mode=18   576p   50 Hz  H
hdmi_mode=19   720p   50 Hz
hdmi_mode=20   1080i  50 Hz
hdmi_mode=21   576i   50 Hz
hdmi_mode=22   576i   50 Hz  H
hdmi_mode=23   288p   50 Hz
hdmi_mode=24   288p   50 Hz  H
hdmi_mode=25   576i   50 Hz  4x
hdmi_mode=26   576i   50 Hz  4x H
hdmi_mode=27   288p   50 Hz  4x
hdmi_mode=28   288p   50 Hz  4x H
hdmi_mode=29   576p   50 Hz  2x
hdmi_mode=30   576p   50 Hz  2x H
hdmi_mode=31   1080p  50 Hz
hdmi_mode=32   1080p  24 Hz
hdmi_mode=33   1080p  25 Hz
hdmi_mode=34   1080p  30 Hz
hdmi_mode=35   480p   60 Hz  4x
hdmi_mode=36   480p   60 Hz  4xH
hdmi_mode=37   576p   50 Hz  4x
hdmi_mode=38   576p   50 Hz  4x H
hdmi_mode=39   1080i  50 Hz  reduced blanking
hdmi_mode=40   1080i 100 Hz
hdmi_mode=41   720p  100 Hz
hdmi_mode=42   576p  100 Hz
hdmi_mode=43   576p  100 Hz  H
hdmi_mode=44   576i  100 Hz  
hdmi_mode=45   576i  100 Hz  H
hdmi_mode=46   1080i 120 Hz  
hdmi_mode=47   720p  120 Hz  
hdmi_mode=48   480p  120 Hz  
hdmi_mode=49   480p  120 Hz  H
hdmi_mode=50   480i  120 Hz  
hdmi_mode=51   480i  120 Hz  H
hdmi_mode=52   576p  200 Hz  
hdmi_mode=53   576p  200 Hz  H
hdmi_mode=54   576i  200 Hz  
hdmi_mode=55   576i  200 Hz  H
hdmi_mode=56   480p  240 Hz  
hdmi_mode=57   480p  240 Hz  H
hdmi_mode=58   480i  240 Hz  
hdmi_mode=59   480i  240 Hz  H
H : Màn hình 16:9 (thay vì 4:3 như bình thường).
2x : các điểm ảnh được gấp đôi (với tần số cao hơn, các điểm ảnh được nhắc lại 2 lần).
4x : các điểm ảnh được gấp tư (với tần số cao hơn, các điểm ảnh được nhắc lại 4 lần).
~~~

~~~
Các giá trị ứng với hdmi_group=2 (DMT)
Chú ý: Theo http://www.raspberrypi.org/phpBB3/viewtopic.php?f=26&t=20155&p=195417&hilit=2560x1600#p195443 
có một sự giới hạn với các xung ảnh. Độ phân giải tối đa được hỗ trợ là 1920x1200 @60 Hz với các điểm trống được tối giản (Reduced blanking).

hdmi_mode=1    640x350    85 Hz
hdmi_mode=2    640x400    85 Hz
hdmi_mode=3    720x400    85 Hz
hdmi_mode=4    640x480    60 Hz
hdmi_mode=5    640x480    72 Hz
hdmi_mode=6    640x480    75 Hz
hdmi_mode=7    640x480    85 Hz
hdmi_mode=8    800x600    56 Hz
hdmi_mode=9    800x600    60 Hz
hdmi_mode=10   800x600    72 Hz
hdmi_mode=11   800x600    75 Hz
hdmi_mode=12   800x600    85 Hz
hdmi_mode=13   800x600   120 Hz
hdmi_mode=14   848x480    60 Hz
hdmi_mode=15   1024x768   43 Hz  DO NOT USE
hdmi_mode=16   1024x768   60 Hz
hdmi_mode=17   1024x768   70 Hz
hdmi_mode=18   1024x768   75 Hz
hdmi_mode=19   1024x768   85 Hz
hdmi_mode=20   1024x768  120 Hz
hdmi_mode=21   1152x864   75 Hz
hdmi_mode=22   1280x768          Reduced blanking
hdmi_mode=23   1280x768   60 Hz
hdmi_mode=24   1280x768   75 Hz
hdmi_mode=25   1280x768   85 Hz
hdmi_mode=26   1280x768  120 Hz  Reduced blanking
hdmi_mode=27   1280x800          Reduced blanking
hdmi_mode=28   1280x800   60 Hz  
hdmi_mode=29   1280x800   75 Hz  
hdmi_mode=30   1280x800   85 Hz  
hdmi_mode=31   1280x800  120 Hz  Reduced blanking
hdmi_mode=32   1280x960   60 Hz  
hdmi_mode=33   1280x960   85 Hz  
hdmi_mode=34   1280x960  120 Hz  Reduced blanking
hdmi_mode=35   1280x1024  60 Hz  
hdmi_mode=36   1280x1024  75 Hz  
hdmi_mode=37   1280x1024  85 Hz  
hdmi_mode=38   1280x1024 120 Hz  Reduced blanking
hdmi_mode=39   1360x768   60 Hz  
hdmi_mode=40   1360x768  120 Hz  Reduced blanking
hdmi_mode=41   1400x1050         Reduced blanking
hdmi_mode=42   1400x1050  60 Hz  
hdmi_mode=43   1400x1050  75 Hz  
hdmi_mode=44   1400x1050  85 Hz  
hdmi_mode=45   1400x1050 120 Hz  Reduced blanking
hdmi_mode=46   1440x900          Reduced blanking
hdmi_mode=47   1440x900   60 Hz  
hdmi_mode=48   1440x900   75 Hz  
hdmi_mode=49   1440x900   85 Hz  
hdmi_mode=50   1440x900  120 Hz  Reduced blanking
hdmi_mode=51   1600x1200  60 Hz  
hdmi_mode=52   1600x1200  65 Hz  
hdmi_mode=53   1600x1200  70 Hz  
hdmi_mode=54   1600x1200  75 Hz  
hdmi_mode=55   1600x1200  85 Hz  
hdmi_mode=56   1600x1200 120 Hz  Reduced blanking
hdmi_mode=57   1680x1050         Reduced blanking
hdmi_mode=58   1680x1050  60 Hz  
hdmi_mode=59   1680x1050  75 Hz  
hdmi_mode=60   1680x1050  85 Hz  
hdmi_mode=61   1680x1050 120 Hz  Reduced blanking
hdmi_mode=62   1792x1344  60 Hz  
hdmi_mode=63   1792x1344  75 Hz  
hdmi_mode=64   1792x1344 120 Hz  Reduced blanking
hdmi_mode=65   1856x1392  60 Hz  
hdmi_mode=66   1856x1392  75 Hz  
hdmi_mode=67   1856x1392 120 Hz  Reduced blanking
hdmi_mode=68   1920x1200         Reduced blanking
hdmi_mode=69   1920x1200  60 Hz  
hdmi_mode=70   1920x1200  75 Hz  
hdmi_mode=71   1920x1200  85 Hz  
hdmi_mode=72   1920x1200 120 Hz  Reduced blanking
hdmi_mode=73   1920x1440  60 Hz  
hdmi_mode=74   1920x1440  75 Hz  
hdmi_mode=75   1920x1440 120 Hz  Reduced blanking
hdmi_mode=76   2560x1600         Reduced blanking
hdmi_mode=77   2560x1600  60 Hz  
hdmi_mode=78   2560x1600  75 Hz  
hdmi_mode=79   2560x1600  85 Hz  
hdmi_mode=80   2560x1600 120 Hz  Reduced blanking
hdmi_mode=81   1366x768   60 Hz  
hdmi_mode=82   1080p      60 Hz  
hdmi_mode=83   1600x900          Reduced blanking
hdmi_mode=84   2048x1152         Reduced blanking
hdmi_mode=85   720p       60 Hz  
hdmi_mode=86   1366x768          Reduced blanking

~~~

- Lưu lại chỉnh sửa bằng các nhấn `Ctrl + x` `y`  `[enter]`

- Khởi động lại RasPi để các thay đổi có hiệu lực:

~~~sh
sudo reboot
~~~

Thêm: Ngoài ra, bạn có thể tìm thêm các thiết lập khác cho màn hình, cũng như thiết lập cho các thành phần khác của Raspberry Pi như bộ nhớ, camera, mạng và ép xung tại link: [http://elinux.org/RPiconfig](http://elinux.org/RPiconfig).


**Liên kết:**

- [http://elinux.org/R-Pi_configuration_file](http://elinux.org/R-Pi_configuration_file)

- [http://elinux.org/RPiconfig](http://elinux.org/RPiconfig)
