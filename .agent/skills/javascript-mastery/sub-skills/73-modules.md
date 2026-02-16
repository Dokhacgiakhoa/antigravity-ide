# 7.3 Modules

```javascript
// Named exports
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

// Default export
export default class Calculator {}

// Importing
import Calculator, { PI, square } from "./math.js";
import * as math from "./math.js";

// Dynamic import
const module = await import("./dynamic.js");
```