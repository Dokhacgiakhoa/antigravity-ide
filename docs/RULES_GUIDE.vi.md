# 📜 Hướng Dẫn Sử Dụng "Luật Hệ Thống" (Rules System)

> **Cơ chế hoạt động**: Antigravity sử dụng cơ chế **Hybrid Trigger** (Kết hợp Tự động & Gọi tên) để đảm bảo code vừa nhanh vừa chuẩn.

---

## 0. Phân Loại Quy Mô Dự Án (Project Scale)

Từ phiên bản **v3.5.71**, mức độ nghiêm ngặt của Luật (Rules) được tự động cấu hình dựa trên quy mô dự án bạn chọn lúc cài đặt:

| Quy Mô (Scale) | Chế độ Luật (Rule Mode) | Đặc điểm | Phù hợp với |
| :--- | :--- | :--- | :--- |
| **👤 Cá nhân** | **Flexible** (Linh hoạt) | Tự do sáng tạo. Ít cảnh báo. Tối ưu tốc độ dev. | Portfolio, Blog, Test Project. |
| **👥 Team** | **Balanced** (Cân bằng) | Cảnh báo khi sửa file gốc. Bắt buộc test cơ bản. | Startup, SME, MVP. |
| **🏢 Enterprise** | **Strict** (Nghiêm ngặt) | Quy trình Audit/Security chặt chẽ. Cấm sửa core nếu không có Plan. | Fintech, Y tế, Hệ thống lớn. |

---

## 1. Phân Loại Rules

### 🤖 Nhóm Tự Động (Auto-Active)
*Luôn chạy ngầm, bạn không cần gọi.*

| Rule | Kích hoạt khi | Chức năng |
| :--- | :--- | :--- |
| **`security`** | **Luôn luôn** | Chặn hardcode API Key, SQL Injection, XSS. |
| **`frontend`** | File `.js`, `.css`, `.tsx` | Chuẩn hóa UI, Spacing, Responsive. |
| **`backend`** | File `.py`, `.go`, `.sql` | Chuẩn Clean Architecture, API Response. |
| **`gemini`** | **Luôn luôn** | Cấu hình lõi, tính cách Agent. |

### 🛠️ Nhóm Theo Yêu Cầu (On-Demand / @Tags)
*Chỉ chạy khi có ngữ cảnh phù hợp hoặc được bạn gọi đích danh.*

| Tag Gọi | Tên Rule | Chức năng |
| :--- | :--- | :--- |
| **`@biz`** | `business` | Kiểm tra logic nghiệp vụ, tính tiền, quyền hạn. |
| **`@legal`** | `compliance` | Rà soát GDPR, bảo mật dữ liệu, Logging chuẩn. |
| **`@arch`** | `architecture-review` | Đánh giá khả năng chịu tải, HA, Microservices. |
| **`@debug`** | `debug` | Kích hoạt quy trình 4 bước: Điều tra -> Test -> Sửa -> Báo cáo. |

---

## 2. Cách Sử Dụng Semantic Tags (@)

Bạn có thể dùng ký tự `@` trong lệnh chat để **ép buộc** Agent tập trung vào một khía cạnh cụ thể.

### Ví dụ thực tế:

**1. Khi Review Logic Tính Tiền:**
> "Agent, hãy `@biz` check lại hàm tính thuế này xem có bị lỗi làm tròn số (Float) không?"
*(Agent sẽ lôi `rules/business.md` ra để soi kỹ vấn đề Decimal vs Float)*

**2. Khi Audit Bảo Mật Dữ Liệu:**
> "Code này `@legal` có vi phạm quy tắc log email người dùng không?"
*(Agent sẽ đối chiếu với `rules/compliance.md` về PII masking)*

**3. Khi Sửa Lỗi Khó:**
> "Hệ thống đang bị lỗi 500, `@debug` điều tra giúp tôi."
*(Agent kích hoạt chế độ Sherlock Holmes)*

**4. Khi Thiết Kế Hệ Thống Lớn:**
> "Tôi muốn xây dựng module Payment, `@arch` tư vấn giải pháp chịu tải cao."
*(Agent dùng `rules/architecture-review.md` để tư vấn Redis/Queue)*

---

## 3. Tại sao cần chia ra như vậy?

*   Nếu nạp **tất cả** luật cùng lúc: Agent sẽ bị "quá tải" (Cognitive Overload), dẫn đến xử lý chậm và hay quên các chi tiết nhỏ.
*   Cơ chế **@Tags** giúp bạn điều hướng sự tập trung của Agent vào đúng chỗ cần thiết nhất tại thời điểm đó.

> **Mẹo**: Hãy coi các Rule này là các "Cố vấn chuyên môn". Khi cần ai, hãy gọi tên người đó!
