class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 포인터
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      // 첫 노드일경우
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 값이 존재하는 경우
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next; // 삽입 하려는 노드의 포인터를 이전 노드의 포인터값으로 변경
    node.next = newNode; // 이전 노드의 포인터를 삽입한 노드와 연결
  }

  // 값을 찾은 후 삭제하는 로직
  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let prevNode = this.head;
      while (prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (prevNode.next !== null) {
        // 이전 노드를 찾은 경우
        prevNode.next = prevNode.next.next; // 중간 노드와 연결을 못함 => 자동으로 삭제
      }
    }
  }
}
