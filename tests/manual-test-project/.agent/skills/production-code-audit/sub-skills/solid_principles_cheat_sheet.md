# 🏁 SOLID Principles Cheat Sheet

Bộ quy tắc vàng cho kiến trúc phần mềm Enterprise.

### 🧩 1. Single Responsibility (S)
- Một Class/Function chỉ nên làm một việc duy nhất. Nếu bạn giải thích chức năng của nó mà có chữ "Và" (And), tức là nó đang làm quá nhiều việc.

### 🔓 2. Open/Closed (O)
- Mở rộng để thêm tính năng, đóng lại để sửa đổi code cũ. Dùng Interface/Abstract Class thay vì sửa code lõi.

### 🔄 3. Liskov Substitution (L)
- Lớp con phải có khả năng thay thế hoàn toàn cho lớp cha mà không làm hỏng chương trình.

### 🍱 4. Interface Segregation (I)
- Đừng bắt Client phải implement những phương thức mà họ không dùng đến. Chia nhỏ Interface.

### 🔌 5. Dependency Inversion (D)
- Code vào Interface, không code vào Implementation. Cấp cao không phụ thuộc cấp thấp, cả hai phụ thuộc vào sự trừu tượng.
