# 🎨 Tuyên Ngôn Thiết Kế (Design Manifesto)

> *"Giao diện không chỉ là vỏ bọc, nó là linh hồn của sản phẩm."*

Tài liệu này không phải là hướng dẫn sử dụng công cụ. Đây là tập hợp những **Nguyên tắc Cốt lõi (Core Principles)** mà dự án Google Antigravity cam kết tuân thủ để đạt chuẩn "High-Craft" & "Premium".

---

## I. Triết Lý Cốt Lõi (The Philosophy)

### 1. Hệ Thống Đi Trước (System First)
Chúng tôi không thiết kế từng trang rời rạc. Chúng tôi xây dựng một **Hệ sinh thái**.
- Mọi màu sắc, khoảng cách, font chữ đều phải xuất phát từ `design-system/MASTER.md`.
- Sự nhất quán (Consistency) > Sự sáng tạo tùy tiện.

### 2. Sự Chủ Đích (Intentionality)
Mọi pixel đều có lý do để tồn tại.
- Không dùng placeholder vô nghĩa.
- Không dùng icon emoji rẻ tiền (🚫 🎨). Dùng SVG/Vector cao cấp (Heroicons, Lucide).
- Animation phải có ý nghĩa (phản hồi xúc giác), không phải để trang trí.

### 3. Vẻ Đẹp Của Cấu Trúc (Structural Beauty)
- **Hierarchy**: Tiêu đề chính (`H1`) phải kiêu hãnh. Nội dung phụ (`text-muted`) phải khiêm nhường.
- **Whitespace**: Khoảng trắng là yếu tố sang trọng nhất. Đừng sợ khoảng trắng.

---

## II. Tiêu Chuẩn "High-Craft" (The Standard)

Để được coi là "Hoàn thiện", một giao diện phải vượt qua các bài kiểm tra sau:

### 1. Bài Test "Xúc Giác" (The Tactile Test)
- [ ] **Cursor**: Mọi thứ click được phải có `cursor-pointer`.
- [ ] **Hover**: Khi lướt chuột qua, vật thể phải "thở" (đổi màu nhẹ, nâng lên, đổ bóng).
- [ ] **Timing**: Chuyển động phải mượt (150-300ms). Không giật cục, không rề rà.

### 2. Bài Test "Ánh Sáng" (The Lighting Test)
- [ ] **Dark Mode**: Không phải là nền đen, mà là sự xếp chồng của các lớp xám (Deep Gray layers).
- [ ] **Glassmorphism**: Hiệu ứng kính phải rõ ràng trên nền sáng (`bg-white/80`), không tàng hình.
- [ ] **Contrast**: Chữ phải đọc được trong mọi điều kiện ánh sáng.

### 3. Bài Test "Chuyên Nghiệp" (The Professional Test)
- [ ] **Icons**: Đồng bộ kích thước (thường là 24x24).
- [ ] **Typography**: Dùng font chữ hiện đại (Inter, Geist, Outfit). Không dùng font mặc định `Times New Roman`.
- [ ] **Mobile**: Không bao giờ được phép cuộn ngang (Horizontal Scroll) ngoài ý muốn.

---

## III. Quy Trình Hiện Thực Hóa (The Process)

Khi bắt đầu một màn hình mới, chúng tôi tư duy theo trình tự:

1.  **Định Hình (Shape)**: Xác định loại sản phẩm (SaaS, E-commerce, Dashboard...).
2.  **Khung Sườn (Skeleton)**: Dựng layout với `html-tailwind` chuẩn chỉnh.
3.  **Chi Tiết (Soul)**: Thêm Micro-interactions, xử lý trạng thái Loading/Error.
4.  **Kiểm Tra (Audit)**: So sánh với các nguyên tắc trên.

---

## IV. Kỹ Thuật Thẩm Mỹ Nâng Cao (Advanced Aesthetics)

Để đạt đẳng cấp "Premium" thực sự, chúng tôi học hỏi từ những người giỏi nhất (Linear, Aceternity, Magic UI).

### 1. Hiệu Ứng "Linear" (The Subtle Glow)
> *Học từ Linear.app*
- **Border**: Không dùng border đơn sắc. Dùng `border-white/10` kết hợp với `bg-gradient-to-b` nhẹ.
- **Micro-Glow**: Các nút bấm hoặc card khi hover phải có hiệu ứng phát sáng nhẹ từ viền (Subtle Border Glow).

### 2. Chuyển Động "Magic" (The Bento Motion)
> *Học từ Magic UI / Bento Grids*
- **Layout**: Sử dụng Bento Grid (Lưới hợp cơm) để tổ chức thông tin.
- **Motion**:
    - Dùng `Marquee` (chữ chạy) cho danh sách đối tác/logo.
    - Dùng `Typing Effect` cho các câu slogan chính.
    - Số liệu (Numbers) phải tự động nhảy (Count up) khi lướt tới.

### 3. Chiều Sâu "Aceternity" (The Cinematic Depth)
> *Học từ Aceternity UI*
- **Background**: Không dùng nền phẳng. Dùng `Grid Background`, `Spotlight` hoặc `Aurora` (Cực quang) để tạo chiều sâu vô tận.
- **Lighting**: Giả lập nguồn sáng chiếu vào card (Spotlight Card) để tạo cảm giác vật lý 3D.

---

*Được tổng hợp và đúc kết từ tri thức của UI/UX Pro Max.*
*Viết lại bởi: Dokhacgiakhoa's Agent.*
