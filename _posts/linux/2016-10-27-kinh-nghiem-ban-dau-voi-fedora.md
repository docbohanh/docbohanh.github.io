---
layout: post
title:  "Kinh nghiệm ban đầu với Fedora Linux"
date:   2016-10-27
categories: [Linux]
tags: [Fedora, Kinh nghiệm sử dụng]
permalink: /linux/kinh-nghiem-ban-dau-su-dung-fedora/
bigimg: "/files/linux/fedora-linux/fedora-desktop.png"
share-img: "https://vietanhdev.com/files/linux/fedora-linux/fedora-desktop.png"
---

## Giới thiệu Fedora Linux

Cũng lâu rồi tôi không viết bài trên blog của mình. Hôm nay nhân dịp cài đặt và dùng thử hệ điều hành Fedora Linux (bản Workstation 24), tôi muốn viết một bài chia sẻ cho mọi người những kinh nghiệm đầu tiên về việc sử dụng Fedora.

Trước hết, tôi xin phép so sánh Fedora với một bản phân phối linux hết sức nổi tiếng - Ubuntu. Tôi đã từng sử dụng Ubuntu cho máy tính của mình trong một thời gian dài và hết sức yêu thích nó vì sự tự do, thoải mái, và những trải nghiệm người dùng tinh tế.

Fedora cũng là hệ điều hành nguồn mở dựa trên nhân linux, nó cũng miễn phí và đem lại cảm giác tự do, thoải mái như trên Ubuntu vậy. Thế đâu là sự khá biệt giữa chúng? Ubuntu được phát triển tập trung trở thành một hệ điều hành ổn định, dễ dùng để có thể thay thế Windows. Còn ở Fedora, ta tìm thấy một hệ điều hành luôn được tích hợp những chức năng, công nghệ mới nhất của thế giới nguồn mở. Fedora là phiên bản cộng đồng của Red Hat, một bản phân phối Linux thương mại khá nổi tiếng sử dụng cho máy chủ. Các tính năng mới nhất luôn được đưa vào Fedora, kiểm soát ổn định một thời gian trước khi trau chuốt và đưa vào phiên bản thương mại Red Hat.

Với sự trưởng thành của mình, Fedora dần đạt được sự ổn định, tinh tế và trở thành một trong những bản phân phối Linux hàng đầu. Trải nghiệm, sử dụng Fedora sẽ trang bị cho chúng ta nhiều kiến thức về linux, về những công nghệ nguồn mở mới nhất.

## Cài đặt Fedora

Tôi thực hiện cài đặt Fedora từ USB lên ổ cứng định dạng MBR - ext4. Phân vùng cài đặt của tôi như sau:

![Phân vùng để cài đặt Fedora](/files/linux/fedora-linux/gparted-vietanhdev.png)

Vì Linux là hệ điều hành tôi sử dụng thường xuyên ở trường nên tôi để ổ cài đặt 100GB. Phân vùng SWAP 4GB cho máy tính ram 8GB. Thực ra phân vùng cài đặt Fedora, và SWAP như vậy là hơi nhiều nếu bạn có ít phần mềm. Sau khi cài đặt Fedora và vài phần mềm cơ bản, dung lượng phân vùng được sử dụng chưa tới 10GB. Tuy nhiên, nếu máy bạn dư dả ổ cứng tại sao bạn không để ổ cài đặt hệ điều hành lớn hơn 1 chút chứ?

Bạn có thể tải Fedora Workstation về từ địa chỉ [https://getfedora.org/en/workstation/download/](https://getfedora.org/en/workstation/download/
)

Việc ghi ra USB đề thực hiện cài đặt bạn có thể dùng [YUMI – Multiboot USB Creator](http://www.pendrivelinux.com/yumi-multiboot-usb-creator/). Ngoài Fedora, YUMI còn hỗ trợ ghi nhiều bản phân phối Linux, phần mềm khác ra USB bao gồm cả Windows, Antivirus, đĩa cứu hộ. Đặc biệt bạn có thể tạo một USB chứa nhiều bản cài đặt bên trong.

**Một số giao diện của bản Fedora 24 tôi đang dùng:**

- Màn hình đăng nhập:

![Màn hình đăng nhập Fedora](/files/linux/fedora-linux/fedora-login.png)

- Desktop:

![Desktop Fedora](/files/linux/fedora-linux/fedora-desktop.png)

- Màn hình cửa sổ - ứng dụng (di chuột về góc trên bên trái màn hình hoặc ấn Alt + F1):

![Cửa sổ - Ứng dụng](/files/linux/fedora-linux/taskview-fedora.png)

![Cửa sổ - Ứng dụng](/files/linux/fedora-linux/taskview2-fedora.png)


## Những việc nên làm sau khi cài đặt Fedora:

### Thiết lập thao tác chạm để click cho Touchpad nếu bạn dùng laptop

Thông thường khi tôi dùng Ubuntu, mặc định thao tác chạm một ngón tay vào Touchpad tương đương với click chuột. Tuy nhiên trên Fedora mặc định tắt thiết lập đó, tức là bạn phải bấm vào khu vực nút chuột để thực hiện click.

Để chuyển sang chế độ "Tap to Click", bạn vào **Settings** (ấn bật Menu góc phải trên màn hình > Chọn biểu tượng Cờ lê tô vít)

![Mở Setting - Fedora](/files/linux/fedora-linux/fedora-opensetting.png)

Tiếp theo chọn **Mouse & Touchpad** và bật thiết lập **Tap to Click** lên. Ở đây chúng ta cũng tìm thấy nhiều thiết lập khác cho chuột và Touchpad.

### Bật bộ gõ tiếng Việt

Fedora có sẵn bộ gõ Tiếng Việt. Ta có thể bật nó bằng cái vào **Settings > Region & Language > Nhấp dấu + để thêm bộ gõ > Tìm đến Vietnamese > Chọn kiểu bộ gõ tiếng Việt bạn sử dụng**. Tôi dùng kiểu gõ telex (gõ s,f,j,x,r cho các dấu câu) nên tôi chọn **Vietnamese (telex (m17n))**. Bạn có thể chuyển qua lại giữa các bộ gõ qua menu hệ thống góc trên bên phải nhé.


![Gõ tiếng Việt Fedora](/files/linux/fedora-linux/fedora-go-tieng-viet.png)

### Thiết lập một số phím tắt

#### Mở terminal

Nếu bạn đã quen dùng Ubuntu và một số bản Linux khác, bạn sẽ quen với cách ấn Ctrl + Alt + t để mở terminal (cửa sổ dòng lệnh). Trên Fedora mặc định không có phím tắt này.

Để cài đặt nó ta vào **Settings > Keyboard > Custom shortcuts > Nhấp dấu + để thêm phím tắt**. Nhập **Name** là `Terminal` và **Command** là `gnome-terminal`.

Ta đã thấy xuất hiện phím tắt Terminal nhưng trạng thái Disabled. Nhấp vào Disabled và ấn Ctrl + Alt + t để gán phím tắt cho nó.

![Gán phím tắt Terminal](/files/linux/fedora-linux/shortcut-key-terminal.png)

#### Một số thiết lập phím tắt hữu ích khác

**Chuyển kiểu gõ:** Thiết lập phím tắt chuyển đổi giữa bộ gõ Tiếng Việt và Tiếng Anh: **Settings > Keyboard > Switch to next input source** và gán phím tắt vd Ctrl + Space.

**Ẩn tất cả cửa sổ:** **Settings > Keyboard > Navigation > Hide all normal windows**. Tôi thường gán phím **Win + d** cho việc này.

## Cài đặt các phần mềm

### Sử dụng kho Software của Fedora

Trên linux, phần mềm được quản lí theo các gói (packages). Ở Fedora, bạn có thể sử dụng phần mềm **Software** để cài đặt các gói.
 
Mở **Software** ở màn hình ứng dụng (đưa chuột lên góc trên bên trái màn hình).

![Software - Fedora](/files/linux/fedora-linux/open-software.png)

Bạn có thể tìm thấy khá nhiều phần mềm hữu ích tại đây như Chromiun, Thunderbird, GIMP, Audacity... Tuy nhiên lượng phần mềm chưa được đưa lên đây vẫn còn rất nhiều. Do vậy, mọi người nên học sử dụng trình quản lí gói qua dòng lệnh như dnf để có thể thực hiện tốt việc cài đặt và quản lí các phần mềm trên kho của Fedora.

### Sử dụng trình quản lí gói dnf

Từ phiên bản Fedora 22, Fedora đã chuyển sang sử dụng trình quản lí gói phần mềm dnf thay cho yum như trước đây. Chúng ta sẽ có một trình quản lí gói mạnh mẽ và thông minh hơn, tuy nhiên cách sử dụng cũng tương tự như yum. Bạn có thể sử dụng một số lệnh quản lí gói cơ bản từ Terminal để cài đặt các phần mềm cần thiết như sau:

- Cập nhật danh sách các gói (phần mềm)

~~~sh
sudo dnf check-update
~~~

- Nâng cấp các gói đã cài đặt

~~~sh
sudo dnf upgrade
~~~

- Tìm kiếm các gói mới
   
..+ Tìm theo tên

~~~sh
sudo dnf search <tên gói>
~~~
..+ Tìm theo tên và mô tả

~~~sh
sudo dnf search all <tên gói>
~~~

- Xem thông tin về một gói

~~~sh
sudo dnf info <tên gói>
~~~

- Xem danh sách các thành phần phụ thuộc

~~~sh
sudo dnf repoquery --requires package
~~~

- Cài đặt gói phần mềm

~~~sh
sudo dnf install <tên gói 1> <tên gói 2> ...
~~~

hoặc sử dụng lệnh này để tự động xác nhận "yes" khi dnf xác nhận về gói phần mềm

~~~sh
sudo dnf install -y <tên gói>
~~~

- Cài đặt gói từ local

~~~sh
sudo dnf install <tên gói>.rpm
~~~

- Gỡ gói đã cài

~~~sh
sudo dnf erase <tên gói>
~~~

- Bạn có thể xem thêm hướng dẫn sử dụng dnf bằng cách gõ

~~~sh
man dnf
~~~

### Nâng cấp Fedora

Sau khi cài đặt Fedora, bạn nên nâng cấp hệ thống bằng lệnh:

~~~sh
sudo dnf update
~~~

Việc nâng cấp này sẽ mất một thời gian, tùy thuộc vào tốc độ internet của bạn.

### Kích hoạt kho phần mềm Fusion RPM

Kho phần mềm mặc định của Fedora đã có rất nhiều phần mềm cho nhu cầu sử dụng bình thường, tuy nhiên bạn có thể thêm kho phần mềm Fusion RPM để mở rộng hơn nữa số gói phần mềm chúng ta có thể cài đặt bằng lệnh dnf. Thực hiện trên Fedora 24 như sau:

- Thêm kho phần mềm nguồn mở miễn phí

~~~sh
sudo dnf install --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-24.noarch.rpm
~~~

- Thêm kho phần mềm nonfree độc quyền

~~~sh
sudo dnf install --nogpgcheck http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-24.noarch.rpm
~~~


Trên đây là một số kinh nghiệm tôi thu được khi bắt đầu sử dụng Fedora. Hãy cùng chia sẻ kinh nghiệm các bạn từng có với Fedora nhé!








