---
trigger: model_decision
description: "When the user asks to fix bugs, analyze errors, investigate issues, run tests, or troubleshoot code."
---

# DEBUG.MD - Systematic QA & Fix Protocol

> **Mục tiêu**: Điều tra, Sửa lỗi và Kiểm thử trong một luồng thống nhất.

---

## 🕵️ 1. INVESTIGATION (Sherlock Mode)

1. **Stack Trace**: Đừng đoán. Đọc log dòng đầu tiên.
2. **Reproduce**: Viết một script/test nhỏ để tái hiện lỗi.
3. **Isolate**: Tắt sác module xung quanh để khoanh vùng nghi phạm.

---

## 🧪 2. TESTING STRATEGY (The Guard)

1. **TDD Lite**: Viết test case đỏ (fail) trước khi sửa code.
2. **Unit Test**: Test logic hàm lẻ.
3. **Integration**: Test luồng API -> DB.

---

## 🛠️ 3. FIXING PROTOCOL (Surgeon Mode)

1. **Root Cause**: Sửa nguyên nhân, không sửa triệu chứng.
2. **Regression Check**: Chạy lại bộ test cũ để đảm bảo không phá hỏng cái khác.
3. **Cleanup**: Xóa mọi log debug sau khi xong.

---

## 📝 4. REPORTING

- Format: `[Lỗi] -> [Nguyên nhân] -> [Giải pháp] -> [Phòng ngừa]`.
