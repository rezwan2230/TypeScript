//todo-> Exploring static and dynamic

class Counter {
  static count: number = 0;
  // static  increment() {
  increment() {
    return (Counter.count = Counter.count + 1);
  }
  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const instance1 = new Counter();
console.log(instance1.increment());

const instance2 = new Counter();
console.log(instance2.increment());

Counter.count++;
console.log(Counter.count);

// Counter.increment()
// Counter.increment()
// Counter.increment()
// console.log(Counter.count);
