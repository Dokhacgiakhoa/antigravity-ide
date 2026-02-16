# 🐛 Testing Error Logging System

Đây là file test để kiểm tra xem hệ thống Error Logging có hoạt động tốt không.

## Test Case 1: Syntax Error

```javascript
// Missing closing bracket
function testFunction() {
    console.log("Hello World"
```

**Expected**: Agent phải phát hiện lỗi thiếu dấu ngoặc và ghi vào `ERRORS.md`.

---

## Test Case 2: Logic Error

```python
def calculate_discount(price, discount_percent):
    # Bug: Không kiểm tra discount_percent > 100
    return price - (price * discount_percent / 100)

# Gọi với discount 150% -> kết quả âm (sai logic)
final_price = calculate_discount(100, 150)
```

**Expected**: Agent phải phát hiện logic lỗi và đề xuất validation.

---

## Test Case 3: Integration Error

```javascript
// Import module không tồn tại
import { NonExistentComponent } from 'react-nonexistent';
```

**Expected**: Agent ghi lỗi "Module not found" vào ERRORS.md.

---

**Hướng dẫn test**:
1. Mở file này và yêu cầu Agent fix từng test case
2. Kiểm tra xem `ERRORS.md` có được cập nhật không
3. Verify format có đúng chuẩn không
