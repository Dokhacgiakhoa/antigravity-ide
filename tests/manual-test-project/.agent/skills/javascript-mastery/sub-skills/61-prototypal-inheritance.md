# 6.1 Prototypal Inheritance

```javascript
// Prototype chain
const animal = {
  speak() {
    console.log("Some sound");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.speak(); // "Some sound" (inherited)
dog.bark(); // "Woof!" (own method)

// ES6 Classes (syntactic sugar)
class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```