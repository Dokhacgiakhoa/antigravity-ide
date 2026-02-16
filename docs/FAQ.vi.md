# ❓ Câu Hỏi Thường Gặp (FAQ)

## Chung (General)

### Q: AntiGravity IDE có phải là một phần mềm cài đặt vào máy không?
**A**: Không hẳn. Nó hoạt động như một lớp bổ trợ (layer) thông minh chạy trên nền Node.js. Bạn có thể gọi nó bất cứ lúc nào qua `npx` mà không cần cài đặt nặng nề như Visual Studio hay Android Studio.

### Q: Tôi có thể dùng nó với dự án có sẵn không (Brownfield Project)?
**A**: **Có!** Hãy cd vào thư mục dự án của bạn và chạy `npx antigravity-ide`. Nó sẽ tự động phát hiện dự án và chỉ thêm bộ não `.agent/` vào mà không làm hỏng code cũ của bạn.

### Q: Nó có miễn phí không?
**A**: Mã nguồn AntiGravity là **Open Source**. Tuy nhiên, để AI hoạt động thông minh, bạn cần API Key của các mô hình LLM (như Gemini, GPT-4, Claude) - phần này có thể tốn phí tùy nhà cung cấp.

---

## Kỹ thuật (Technical)

### Q: Tại sao lại cần Python?
**A**: Chế độ "Advanced" sử dụng các thư viện Data Science và AI mạnh mẽ (như Pandas, Scikit-learn) chỉ có trên Python. Tuy nhiên, nếu bạn chỉ làm Web/App cơ bản (Standard Mode), bạn **KHÔNG** cần Python.

### Q: 600+ Chiến thuật (AI Patterns) là gì?
**A**: Đó không phải là 600 file, mà là tổng hợp các mẫu thiết kế (Design Patterns), Checklist kiểm thử, và Quy tắc bảo mật nằm *bên trong* 72 bộ Master Skills. Ví dụ: Skill "Mobile Design" chứa hơn 50 patterns về UX, Performance và Security cho iOS/Android.

### Q: File `GEMINI.md` là gì?
**A**: Đó là "CMND/CCCD" của AI Agent. Nó chứa danh tính, nhiệm vụ và các quy tắc ứng xử. AI sẽ đọc file này đầu tiên để biết "mình là ai".

### Q: Tôi lỡ tay ghi đè file cấu hình, có lấy lại được không?
**A**: Nếu chưa commit git -> Rất tiếc là không. Nếu đã dùng cờ `--force`, file cũ đã bị xóa vĩnh viễn. Hãy tập thói quen dùng Git!

---

## Vận hành (Operations)

### Q: Làm sao để Agent biết tôi vừa sửa code?
**A**: Agent hiện đại (như trong Cursor/Windsurf) thường tự đọc context. Nếu dùng CLI truyền thống, bạn cần nhắc Agent đọc lại file: "Đọc lại file X giúp tôi".

### Q: Tôi muốn tạo Agent riêng chuyên về Game thì làm sao?
**A**: Khi chạy `init`, ở bước chọn **Project Scale**, hãy chọn **Creative**. Sau đó chọn **AI Agent**. Hệ thống sẽ load bộ Skill `game-development` vào cho bạn.

---

## Đóng góp (Contribution)

### Q: Tôi muốn thêm Skill mới cho cộng đồng?
**A**: Tuyệt vời! Hãy Fork repo trên GitHub, tạo folder skill mới trong `sdk/skills/` và gửi Pull Request. Xem thêm [CONTRIBUTING.vi.md](./CONTRIBUTING.vi.md).
