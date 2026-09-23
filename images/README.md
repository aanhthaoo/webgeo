# HƯỚNG DẪN HÌNH ẢNH DỰ ÁN (IMAGE ASSETS GUIDE)

Thư mục này dùng để lưu trữ toàn bộ hình ảnh của website. Dưới đây là danh sách tên tệp chuẩn, kích thước khuyến nghị và từ khóa tìm kiếm trên Google Images / Pinterest / Freepik / Unsplash:

---

### 1. ẢNH BANNER CHÍNH & MẠNG XÃ HỘI
- **Tên tệp:** `hero-banner.jpg` (hoặc `.webp`)
  - **Vị trí:** Phần đầu trang (Hero Section) hoặc ảnh nền giới thiệu.
  - **Tỉ lệ khuyến nghị:** 16:9 (1200 x 675 px hoặc 1920 x 1080 px).
  - **Nội dung:** Xe máy điện thông minh di chuyển trên đại lộ đô thị hiện đại ban đêm hoặc hoàng hôn, ánh sáng đèn LED công nghệ xanh lá / xanh ngọc.
  - **Từ khóa tìm kiếm:** `smart electric scooter city modern road night neon`, `xe máy điện thông minh đô thị`.

- **Tên tệp:** `og-image.jpg`
  - **Vị trí:** Ảnh đại diện khi chia sẻ link lên Facebook, Zalo, Telegram (Open Graph Tag).
  - **Tỉ lệ khuyến nghị:** 1200 x 630 px.
  - **Nội dung:** Ảnh tổng hợp các mẫu xe điện kèm dòng chữ "Cẩm nang Xe máy điện 2026".

---

### 2. ẢNH 3 DÒNG XE SO SÁNH (MỤC BẢNG SO SÁNH & SẢN PHẨM)
- **Tên tệp:** `vinfast-feliz-s.jpg`
  - **Tỉ lệ:** 4:3 hoặc 16:9 (khoảng 800 x 600 px).
  - **Nội dung:** Mẫu xe VinFast Feliz S (màu xám, trắng hoặc xanh rêu), góc chụp 3/4 trước hoặc ngang thân xe nền sạch.
  - **Từ khóa:** `VinFast Feliz S chính hãng`, `xe máy điện VinFast Feliz S`.

- **Tên tệp:** `datbike-quantum-s1.jpg`
  - **Tỉ lệ:** 4:3 hoặc 16:9 (khoảng 800 x 600 px).
  - **Nội dung:** Mẫu xe Dat Bike Quantum S1 dáng thể thao, góc chụp khỏe khoắn.
  - **Từ khóa:** `Dat Bike Quantum S1`, `Dat Bike Quantum 2025 2026`.

- **Tên tệp:** `yadea-voltguard.jpg`
  - **Tỉ lệ:** 4:3 hoặc 16:9 (khoảng 800 x 600 px).
  - **Nội dung:** Mẫu xe Yadea Voltguard phong cách scooter đô thị thanh lịch.
  - **Từ khóa:** `Yadea Voltguard`, `xe máy điện Yadea Voltguard`.

---

### 3. ẢNH MINH HỌA 3 CÔNG NGHỆ HẠT NHÂN (PHẦN 1)
- **Tên tệp:** `tech-pin-lfp.jpg`
  - **Nội dung:** Cấu tạo khối pin LFP, các cell pin lăng trụ Prismatic hoặc đồ họa giải phẫu pin xe điện.
  - **Từ khóa:** `LFP battery pack cell cutaway`, `Lithium Iron Phosphate battery pack`.

- **Tên tệp:** `tech-ip67-waterproof.jpg`
  - **Nội dung:** Thử nghiệm xe điện chạy qua vùng nước ngập ngập nửa bánh xe hoặc chuẩn kháng nước IP67.
  - **Từ khóa:** `electric scooter waterproof test IP67`, `xe máy điện lội nước ngập`.

- **Tên tệp:** `tech-smart-app.jpg`
  - **Nội dung:** Giao diện điện thoại thông minh kết nối App theo dõi vị trí GPS, lượng pin xe máy điện.
  - **Từ khóa:** `smart scooter mobile app dashboard telemetry`, `ứng dụng định vị xe máy điện`.

---

### ĐƯỜNG DẪN TRUY XUẤT TRONG FILE HTML:
Do các tệp HTML nằm trong thư mục `public/`, đường dẫn ảnh từ `public/index.html` sẽ là:
```html
<img src="../images/vinfast-feliz-s.jpg" alt="VinFast Feliz S pin LFP" class="rounded-xl object-cover w-full h-48">
```
*(Nếu chuyển ảnh vào trực tiếp `public/images/`, đường dẫn sẽ là `images/ten-anh.jpg`)*
