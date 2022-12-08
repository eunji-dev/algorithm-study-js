class Node {
  constructor(value) {
    this.value = value; // 값
    this.next = null; // 다음 노드를 가리키는 요소 (포인터)
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;

    // 값을 찾을때 까지 이동
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      // 리스트에 노드가 1개도 없을 경우
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 노드가 존재하는 경우
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 중간 위치에 삽입
  // node 다음에 newValue를 가진 노드를 삽입함
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next; // 삽입 하려는 노드의 포인터를 이전 노드의 포인터값으로 변경
    node.next = newNode; // 이전 노드의 포인터는 삽입한 노드를 가리키도록 변경

    if (newNode.next === null) {
      this.tail = newNode; // 삽입하려는 노드가 마지막일 경우 tail을 변경
    }
  }

  // 값을 찾은 후 삭제하는 로직
  remove(value) {
    let prevNode = this.head;

    if (prevNode.value === value) {
      // 첫번째 노드를 삭제할 경우
      this.head = this.head.next;
      return true;
    }

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      // 이전 노드를 찾은 경우
      prevNode.next = prevNode.next.next; // 중간 노드와 연결을 못함 => GC가 자동으로 삭제
      if (prevNode.next === null) {
        this.tail = prevNode;
      }
    }
  }
}
