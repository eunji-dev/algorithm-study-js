// 배열로 환형 큐를 구현

class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize; // maxSize를 받아 큐의 크기를 제한
    this.queue = [];
    this.front = 0; // 프론트 인덱스
    this.rear = 0; // 리어 인덱스
    this.size = 0;
  }

  // in
  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is full');
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize; // 최대 크기로 나머지 연산
    this.size += 1;
  }

  // out
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}
