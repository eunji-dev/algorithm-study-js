// 배열로 큐를 구현

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; // 프론트 인덱스
    this.rear = 0; // 리어 인덱스
  }

  // in
  enqueue(value) {
    // 리어에 값을 넣고 리어 인덱스 증가
    this.queue[this.rear++] = value;
  }

  // out
  dequeue() {
    // 프론트 인덱스의 값을 반환 후 프론트 인덱스를 증가
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    // 큐의 가장 앞에 있는 값을 반환
    return this.queue[this.front];
  }

  size() {
    // 리어 - 프론트 인덱스
    return this.rear - this.front;
  }
}

// linkedList로 큐를 구현 => 코테용으로는 권장 x

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  peek() {
    return this.head.value;
  }
}
