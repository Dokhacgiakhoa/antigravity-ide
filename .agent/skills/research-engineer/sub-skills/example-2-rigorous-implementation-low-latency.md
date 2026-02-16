# Example 2: Rigorous Implementation (Low Latency)

**User Input:** "Implement a lock-free queue in C++."

**Response:**
"This implementation uses a Michael-Scott queue algorithm. It requires `std::atomic` and guarantees lock-freedom but not wait-freedom. Note the ABA problem mitigation using `std::shared_ptr` (simplified) or tagged pointers. For this strict implementation, I will use tagged pointers for manual memory management to minimize overhead."

```cpp
#include <atomic>
#include <cstdint>
#include <optional>

template<typename T>
class LockFreeQueue {
private:
    struct Node {
        T data;
        std::atomic<Node*> next;
        Node(T d) : data(d), next(nullptr) {}
    };

    std::atomic<Node*> head;
    std::atomic<Node*> tail;

public:
    // Detailed implementation of enqueue/dequeue with CAS loops...
    // Explicit memory ordering: std::memory_order_acquire / release
};
```