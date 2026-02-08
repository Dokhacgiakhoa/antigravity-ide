# Hướng dẫn Chiến dịch (Operational Flow) 📘

> **Lời mở đầu**: Làm phần mềm là một **cuộc hội thoại dài** giữa Sếp (User) và Nhân viên (AI). Tài liệu này không nói lý thuyết, nó cung cấp **Biên bản hội thoại mẫu (Transcripts)** của 5 dự án thực tế để bạn copy-paste và học cách "ra lệnh" chuẩn chỉ.

---

## 🛡️ Cơ chế Bảo vệ & Tự học (The Watchdog v4.0.8)

Dự án v4.0.8 tích hợp sẵn hệ thống giám sát cấp cao:
- **Chống Treo & Lặp**: Agent tự ngắt các tác vụ bị kẹt và báo cáo cho User.
- **Học Từ Sai Lầm**: Mọi lỗi (Test fail, Agent hiểu sai) đều được ghi vào `ERRORS.md` để rút kinh nghiệm cho lần sau.
- **Kỷ Luật PDCA**: Mọi task đều đi qua chu kỳ Lập kế hoạch -> Thực thi -> Kiểm tra -> Cải tiến.

---

## 🎯 Case Study 1: Sàn Thương mại Điện tử (Web Fullstack) 🛒
**Độ khó**: Cao | **Thời gian**: 2 tuần quy đổi | **Trọng tâm**: Database, API, State Management.

### Giai đoạn 1: Khởi động & Móng nhà (10%)
> **Sếp**: `/create` (chọn SME, Industry F&B)
>
> **Sếp**: `/plan`
> **Prompt**: "Anh muốn làm một trang bán giày Sneaker. Cần có trang chủ, trang chi tiết, giỏ hàng, và Admin Dashboard. Phân tích giúp anh cần những bảng (Table) nào trong Database?"
>
> **Sếp**: *Duyệt plan xong* -> "Ok, chốt plan. Tạo cấu trúc thư mục đi."

### Giai đoạn 2: Xây dựng Backend & Database (30%)
> **Sếp**: "Bây giờ thiết kế Schema Database nhé. Dùng PostgreSQL."
> **Context**: `@database-architect`
> **Prompt**: "Tạo file `schema.sql`. Cần bảng `Users`, `Products` (có size, color), `Orders`, `OrderItems`. Nhớ thêm Index vào cột `price` để sau này lọc cho nhanh."
>
> **Sếp**: "Giờ viết API đăng ký/đăng nhập."
> **Context**: `@backend` `@security`
> **Prompt**: "Tạo API POST `/auth/register`. Validate email kỹ vào. Password phải hash bằng Bcrypt. Trả về JWT Token nhé."
>
> **Sếp**: *Test thử thấy lỗi* -> `/debug`
> **Prompt**: "Nãy anh gửi request Login mà nó báo lỗi 500. Log đây: `Cannot read property 'hash' of undefined`. Fix gấp."
> **Context**: `@debug`

### Giai đoạn 3: Xây dựng Frontend (40%)
> **Sếp**: "Quay sang làm giao diện. Dùng Next.js."
> **Context**: `@frontend` `@ui-ux-pro-max`
> **Prompt**: "Tạo Component `ProductCard`. Yêu cầu: Ảnh to, tên đậm, giá tiền màu đỏ. Khi hover vào thì thẻ nổi lên (elevation) và đổ bóng."
>
> **Sếp**: "Làm trang Giỏ hàng (Cart)."
> **Context**: `@frontend`
> **Prompt**: "Tạo trang `/cart`. Sử dụng Zustand để quản lý state giỏ hàng. Cần hiển thị list sản phẩm, nút tăng giảm số lượng, và tổng tiền tạm tính."
>
> **Sếp**: "Xấu quá, chỉnh lại CSS đi."
> **Context**: `@ui-ux-pro-max`
> **Prompt**: "Cái nút 'Thanh toán' nhìn phèn quá. Đổi sang gradient màu cam-tím, bo tròn góc, thêm icon Shopping Bag vào."

### Giai đoạn 4: Tích hợp & Hoàn thiện (20%)
> **Sếp**: "Giờ ghép API vào Frontend."
> **Prompt**: "Ở trang Login, khi user bấm Submit thì gọi API `/auth/login`. Nếu thành công thì lưu token vào localStorage và chuyển hướng về trang chủ."
>
> **Sếp**: "Check lại hiệu năng xem sao."
> **Context**: `@performance`
> **Prompt**: "Chạy Lighthouse audit trang chủ xem điểm số thế nào. Tối ưu ảnh và lazy load mấy cái component nặng giúp anh."

---

## 🎯 Case Study 2: Game Mobile "Flappy Clone" (Indie Game) 🎮
**Độ khó**: Trung bình | **Trọng tâm**: Logic, Physics, Performance.

### Giai đoạn 1: Logic cốt lõi
> **Sếp**: `/create` (chọn Mobile & Game)
>
> **Sếp**: "Viết logic trọng lực cho con chim."
> **Context**: `@game-development`
> **Prompt**: "Tạo class `Bird`. Có hàm `update()`. Mỗi khung hình thì `y` tăng dần (rơi xuống). Khi gọi `flap()` thì `velocity` nảy lên. Tinh chỉnh số liệu sao cho cảm giác giống Flappy Bird thật."

### Giai đoạn 2: Gameplay loop
> **Sếp**: "Làm chướng ngại vật (Pipe)."
> **Prompt**: "Tạo class `PipeManager`. Cứ 2 giây sinh ra một cặp ống (trên/dưới). Ống di chuyển từ phải sang trái. Nếu chim va chạm (collision) với ống thì Game Over."

### Giai đoạn 3: Polish (Đánh bóng)
> **Sếp**: "Thêm âm thanh vào."
> **Prompt**: "Khi chim bay thì phát `sfx_wing.mp3`. Khi chết phát `sfx_hit.mp3`."
>
> **Sếp**: `/debug` (Game bị giật)
> **Context**: `@performance`
> **Prompt**: "Anh thấy chơi lâu thì game bị lag. Nghi là do tạo object nhiều quá mà không xóa. Check xem có memory leak ở chỗ `PipeManager` không?"

---

## 🎯 Case Study 3: Hệ thống Tài chính (Fintech Enterprise) 🏦
**Độ khó**: Cực khó | **Trọng tâm**: Bảo mật, Audit, Compliance.

### Giai đoạn 1: Hardening (Gia cố)
> **Sếp**: `/create` (chọn Enterprise, Finance)
>
> **Sếp**: "Thiết kế kiến trúc bảo mật."
> **Context**: `@security-auditor`
> **Prompt**: "Review file `server.js`. Đảm bảo mình đã setup Helmet, Rate Limiting, và CORS chặt chẽ. Không cho phép IP lạ gọi Admin API."

### Giai đoạn 2: Nghiệp vụ nhạy cảm
> **Sếp**: "Viết hàm chuyển tiền."
> **Context**: `@backend` `@database-architect`
> **Prompt**: "Viết function `transferMoney`. BẮT BUỘC dùng Database Transaction. Tiền trừ bên A và cộng bên B phải xảy ra đồng thời. Nếu lỗi phải Rollback ngay. Log lại mọi thao tác vào bảng Audit."

### Giai đoạn 3: Rà soát (Audit)
> **Sếp**: `/audit`
> **Context**: `@compliance`
> **Prompt**: "Quét toàn bộ code xem có chỗ nào log nhầm thông tin nhạy cảm (Số thẻ, SĐT) ra console không? Dự án này phải tuân thủ PCI-DSS."

---

## 🎯 Case Study 4: Blog Cá nhân (Personal Brand) ✍️
**Độ khó**: Dễ | **Trọng tâm**: SEO, Tốc độ, Nội dung.

> **Sếp**: `/create` (Personal)
>
> **Sếp**: "Viết trang Home giới thiệu bản thân."
> **Context**: `@seo-expert-kit`
> **Prompt**: "Viết nội dung giới thiệu anh là Kỹ sư AI 5 năm kinh nghiệm. Nhúng thêm mấy từ khóa như 'AI Consultant', 'Machine Learning' để dễ lên Top Google."
>
> **Sếp**: "Thêm tính năng Dark Mode."
> **Context**: `@frontend`
> **Prompt**: "Thêm nút chuyển đổi Sáng/Tối ở góc phải. Lưu setting vào máy người dùng."
>
> **Sếp**: `/deploy` -> "Đẩy lên Vercel giúp anh."

---

## 🎯 Case Study 5: Tool Xử lý Data (Python AI Lab) 🐍
**Độ khó**: Chuyên sâu | **Trọng tâm**: Python, Data, Charts.

> **Sếp**: `/create` (chọn Advanced - Python)
> **Sếp**: *Thấy cảnh báo thiếu Python* -> "Ok, copy lệnh cài Python chạy terminal cái đã."
>
> **Sếp**: "Viết script đọc file Excel."
> **Context**: `@data-engineer`
> **Prompt**: "Dùng thư viện `pandas` đọc file `sales.xlsx`. Làm sạch dữ liệu: Xóa các dòng trống, điền giá trị 0 vào ô thiếu tiền."
>
> **Sếp**: "Vẽ biểu đồ."
> **Context**: `@ai-engineer`
> **Prompt**: "Dùng `matplotlib` vẽ biểu đồ đường doanh thu theo tháng. Xuất ra file `chart.png`."

---

## 📝 Tổng kết các "Câu thần chú" (Prompt Patterns)

1.  **Mô hình "Vai trò - Nhiệm vụ - Tiêu chuẩn"**:
    *   *Sai*: "Viết code login đi." (Sơ sài)
    *   *Đúng*: "Đóng vai `@security`, viết API Login (`Nhiệm vụ`), yêu cầu hash password và chặn Brute Force (`Tiêu chuẩn`)."

2.  **Mô hình "Debug dựa trên bằng chứng"**:
    *   *Sai*: "Code lỗi rồi, sửa đi." (AI không biết lỗi gì)
    *   *Đúng*: "Gọi `/debug`. Anh nhận được lỗi `Error: connection refused` ở dòng 50 file `db.js`. Phân tích xem do config sai port hay do DB chưa bật?"

3.  **Mô hình "Tinh chỉnh từng bước" (Iterative)**:
    *   Vòng 1: "Tạo giao diện cơ bản trước."
    *   Vòng 2: "Thêm CSS cho đẹp."
    *   Vòng 3: "Tối ưu code cho gọn."
    *   *(Đừng bắt AI làm hoàn hảo ngay từ lệnh đầu tiên)*.

4.  **Mô hình "Bảo trì Thần tốc"**:
    *   Khi thấy Agent chạy chệch hướng hoặc Rules bị cũ: "Chạy `npx antigravity-ide` để **Repair & Sync** toàn bộ hệ thống ngay lập tức."

---
*Cẩm nang này sẽ được cập nhật liên tục theo các phiên bản mới của Antigravity IDE.*
