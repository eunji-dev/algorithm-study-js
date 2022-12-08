// 배열로 스택 구현
const stack = [];

// push
stack.push(1);
stack.push(2);
stack.push(3);

// pop
stack.pop();

// get top
console.log(stack[stack.lenght - 1]);

// linkedList로 스택 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}
