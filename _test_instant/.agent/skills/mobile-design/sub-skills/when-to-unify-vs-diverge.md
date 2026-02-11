# When to Unify vs Diverge

```
                    UNIFY (same on both)          DIVERGE (platform-specific)
                    ───────────────────           ──────────────────────────
Business Logic      ✅ Always                     -
Data Layer          ✅ Always                     -
Core Features       ✅ Always                     -
                    
Navigation          -                             ✅ iOS: edge swipe, Android: back button
Gestures            -                             ✅ Platform-native feel
Icons               -                             ✅ SF Symbols vs Material Icons
Date Pickers        -                             ✅ Native pickers feel right
Modals/Sheets       -                             ✅ iOS: bottom sheet vs Android: dialog
Typography          -                             ✅ SF Pro vs Roboto (or custom)
Error Dialogs       -                             ✅ Platform conventions for alerts
```