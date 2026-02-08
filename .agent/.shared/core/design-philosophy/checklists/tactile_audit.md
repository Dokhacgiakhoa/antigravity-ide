# ✅ Tactile Audit Checklist (Xúc Giác)

> check_type: manual_audit
> priority: high

Use this checklist to verify the "feel" of the interface.

## 1. Cursor & Interaction
- [ ] **Cursor Pointer**: Are all clickable elements (Buttons, Cards, Links) showing `cursor: pointer`?
- [ ] **No Dead Links**: Do all buttons have a feedback action (even if just a console log)?
- [ ] **Hit Area**: Are mobile touch targets at least 44x44px?

## 2. Hover Physics
- [ ] **Existence**: Does hovering change the state (bg-color, interact, scale)?
- [ ] **Subtlety**: Is the change subtle? (Avoid 0 -> 100 opacity jumps).
- [ ] **Border Glow**: (If Premium) Does the border glow slightly on hover?

## 3. Motion Timing
- [ ] **Duration**: Are transitions between 150ms and 300ms?
- [ ] **Easing**: Is `ease-out` used for entering elements?
- [ ] **No Jauk**: Are there any layout shifts during hover?
