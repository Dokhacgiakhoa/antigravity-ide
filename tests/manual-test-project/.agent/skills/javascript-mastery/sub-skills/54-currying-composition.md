# 5.4 Currying & Composition

```javascript
// Currying: transform f(a, b, c) into f(a)(b)(c)
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
};

const add = curry((a, b, c) => a + b + c);
add(1)(2)(3); // 6
add(1, 2)(3); // 6
add(1)(2, 3); // 6

// Composition: combine functions
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const addOne = (x) => x + 1;
const double = (x) => x * 2;

const addThenDouble = compose(double, addOne);
addThenDouble(5); // 12 = (5 + 1) * 2

const doubleThenAdd = pipe(double, addOne);
doubleThenAdd(5); // 11 = (5 * 2) + 1
```

---

## 6. Objects & Prototypes