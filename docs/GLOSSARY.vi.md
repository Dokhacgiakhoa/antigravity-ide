# Từ điển Thuật ngữ Antigravity (Glossary) 📖

Tài liệu này giải thích các từ ngữ chuyên môn được sử dụng trong hệ thống Antigravity.

---

## 🏗️ Cốt lõi (Core Concepts)

### 1. Antigravity IDE
Không phải là một phần mềm IDE mới (như VS Code), mà là một **Hệ điều hành AI** chạy *bên trong* VS Code/Cursor. Nó biến trình biên tập mã bình thường thành một cỗ máy pair-programming thông minh.

### 2. Orchestrator (Người điều phối)
Là vai trò chính của AI khi bạn sử dụng Antigravity. Thay vì chỉ là một "thợ code" (Coder), AI đóng vai trò là "Nhạc trưởng" (Orchestrator), biết cách gọi đúng chuyên gia (Skill) cho từng việc.

### 3. Agent (Tác nhân)
Là một nhân cách AI cụ thể được tạo ra cho dự án của bạn.
*   Ví dụ: Trong dự án Game, Agent là "Game Designer". Trong dự án Bank, Agent là "Security Expert".

---

## ⚙️ Cơ chế Vận hành (Mechanisms)

### 4. Context Injection (Cấy ngữ cảnh)
Kỹ thuật tự động nạp thông tin vào "não" của AI ngay khi bắt đầu phiên làm việc.
*   **Ví dụ**: Khi bạn mở dự án, AI tự động biết "Đây là dự án Tài chính, dùng PostgreSQL, yêu cầu bảo mật cao" mà không cần bạn nhắc lại.

### 5. Context Integrity (Toàn vẹn ngữ cảnh)
Cơ chế "chống lú" cho AI. Trước khi thực hiện lệnh quan trọng, AI tự kiểm tra lại xem mình có đang tuân thủ đúng luật (`@rule`) và đóng đúng vai (`Identity`) không.

### 6. Socratic Gate (Cổng Socratic)
Bộ lọc thông minh: "Không làm nếu chưa hiểu". Nếu bạn đưa ra yêu cầu mơ hồ, AI sẽ chặn lại và đặt câu hỏi ngược (Phương pháp Socratic) thay vì đoán mò và làm sai.

---

## 🧩 Thành phần (Components)

### 7. Workflow (`/`) - Luồng công việc
Là một chuỗi các bước đã được định nghĩa sẵn để hoàn thành một mục tiêu lớn.
*   **Ký hiệu**: Bắt đầu bằng dấu gạch chéo `/`.
*   **Ví dụ**: `/create` (Tạo dự án), `/deploy` (Triển khai), `/debug` (Sửa lỗi).

### 8. Rule (`@`) - Luật lệ / Ngữ cảnh
Là tập hợp các quy tắc chuyên môn cho một lĩnh vực cụ thể.
*   **Ký hiệu**: Thường được gọi bằng `@` (tuy nhiên trong chat có thể gõ tên thường).
*   **Ví dụ**: `@backend` (Luật viết API), `@security` (Luật bảo mật), `@frontend` (Luật giao diện).

### 9. Skill (Kỹ năng)
Là các gói kiến thức chuyên sâu. Antigravity có 550+ skills (Python, React, AWS...). Khi cần làm gì, AI sẽ "tải" skill đó về để dùng.

### 10. Shared Module (Module chia sẻ)
Là các thư viện chuẩn (Standard Library) nằm trong folder `.agent/.shared`. Đây là tài sản chung của mọi dự án, chứa các best practice ( ví dụ: chuẩn API, chuẩn Database) để đảm bảo dự án nào cũng có chất lượng cao như nhau.

---

## 🎭 Vai trò ảo (Virtual Roles)

Trong chế độ đa tác nhân (Multi-Agent), AI sẽ tự phân thân thành:

*   **DB Agent**: Chuyên lo Database, SQL, Migration.
*   **BE Agent**: Chuyên lo API, Logic server, Bảo mật.
*   **FE Agent**: Chuyên lo Giao diện, CSS, Animation.
*   **DevOps Agent**: Chuyên lo Server, Docker, CI/CD.

---

## 🎚️ Chế độ (Modes)

### 11. Standard Mode (Cơ bản)
Chế độ chạy nhẹ nhàng, tối ưu cho Node.js/Web. Phù hợp cho máy cấu hình yếu hoặc dự án đơn giản.

### 12. Advanced Mode (Nâng cao)
Chế độ "bung lụa", kích hoạt Python để chạy các thuật toán AI phức tạp, xử lý dữ liệu lớn. Yêu cầu máy cài Python 3.13+.

### 13. Enterprise Tier (Hạng Doanh nghiệp)
Cấp độ dự án cao nhất. Tự động kích hoạt các luật về Compliance (Tuân thủ), Audit (Kiểm toán) và Security (Bảo mật) nghiêm ngặt nhất.
