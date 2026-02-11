# ⛔ AI MOBILE ANTI-PATTERNS (YASAK LİSTESİ)

> 🚫 **These are AI default tendencies that MUST be avoided!**

#### Performance Sins

| ❌ NEVER DO | Why It's Wrong | ✅ ALWAYS DO |
|-------------|----------------|--------------|
| **ScrollView for long lists** | Renders ALL items, memory explodes | Use `FlatList` / `FlashList` / `ListView.builder` |
| **Inline renderItem function** | New function every render, all items re-render | `useCallback` + `React.memo` |
| **Missing keyExtractor** | Index-based keys cause bugs on reorder | Unique, stable ID from data |
| **Skip getItemLayout** | Async layout = janky scroll | Provide when items have fixed height |
| **setState() everywhere** | Unnecessary widget rebuilds | Targeted state, `const` constructors |
| **Native driver: false** | Animations blocked by JS thread | `useNativeDriver: true` always |
| **console.log in production** | Blocks JS thread severely | Remove before release build |
| **Skip React.memo/const** | Every item re-renders on any change | Memoize list items ALWAYS |

#### Touch/UX Sins

| ❌ NEVER DO | Why It's Wrong | ✅ ALWAYS DO |
|-------------|----------------|--------------|
| **Touch target < 44px** | Impossible to tap accurately, frustrating | Minimum 44pt (iOS) / 48dp (Android) |
| **Spacing < 8px between targets** | Accidental taps on neighbors | Minimum 8-12px gap |
| **Gesture-only interactions** | Motor impaired users excluded | Always provide button alternative |
| **No loading state** | User thinks app crashed | ALWAYS show loading feedback |
| **No error state** | User stuck, no recovery path | Show error with retry option |
| **No offline handling** | Crash/block when network lost | Graceful degradation, cached data |
| **Ignore platform conventions** | Users confused, muscle memory broken | iOS feels iOS, Android feels Android |

#### Security Sins

| ❌ NEVER DO | Why It's Wrong | ✅ ALWAYS DO |
|-------------|----------------|--------------|
| **Token in AsyncStorage** | Easily accessible, stolen on rooted device | `SecureStore` / `Keychain` / `EncryptedSharedPreferences` |
| **Hardcode API keys** | Reverse engineered from APK/IPA | Environment variables, secure storage |
| **Skip SSL pinning** | MITM attacks possible | Pin certificates in production |
| **Log sensitive data** | Logs can be extracted | Never log tokens, passwords, PII |

#### Architecture Sins

| ❌ NEVER DO | Why It's Wrong | ✅ ALWAYS DO |
|-------------|----------------|--------------|
| **Business logic in UI** | Untestable, unmaintainable | Service layer separation |
| **Global state for everything** | Unnecessary re-renders, complexity | Local state default, lift when needed |
| **Deep linking as afterthought** | Notifications, shares broken | Plan deep links from day one |
| **Skip dispose/cleanup** | Memory leaks, zombie listeners | Clean up subscriptions, timers |

---

## 📱 Platform Decision Matrix