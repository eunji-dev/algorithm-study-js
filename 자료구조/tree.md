# Tree

방향 그래프의 일종<br>
정점을 가리키는 간선이 하나밖에 없는 구조

`루트` - 가장 상위의 정점<br>
`노드` - 각 정점<br>
`리프노드` - 더이상 자식이 없는 정점<br>
`레벨` - 루트로부터의 깊이<br>
`차수` - 한 정점에서 뻗어나가는 간선의 수

ex) 조직도, 디렉토리 구조

<br>

## 트리의 특징

- 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다.
- 정점이 n개인 트리는 반드시 n-1개의 간선을 가진다.
- 루트에서 특정 정점으로 가는 경로는 반드시 하나만 존재.

<br>

# 이진트리

각 정점이 최대 2개의 자식을 가지는 트리

`완전 이진트리` - 마지막 레벨을 제외한 모든 정점이 채워진 트리<br>
`포화 이진트리` - 마지막 레벨도 모두 채워진 트리<br>
`편향트리` - 한 방향으로만 정점이 이어지는 트리

정점이 n개의 트리는 최악의 경우 높이가 `N`<br>
정점이 n개인 포화/완전이진트리의 높이는 `logN` 이다.<br>
높이가 h인 포화 이진트리는 `2ʰ - 1개`의 정점을 가진다.<br>
`이진 탐색 트리` `힙` `AVL 트리` `레드 블랙 트리` 에 응용됨

<br>

---

<br>

# 배열로 이진트리 구현방법

왼쪽 정점 = `index * 2`<br>
오른쪽 정점 = `index * 2 + 1`<br>
부모 정점 = `floor(index / 2)`<br>
<br>

```
   9
 3  8
2 5  7
   4
```

<br>

```javascript
const tree = [
  undefined,
  // 1
  9,
  // 1*2, 1*2+1
  3,8,
  // 2*2, 2*2+1, 3*2, 3*2+1
  2,5,undefined,7
  // 4*2, 4*2+1, 5*2, 5*2+1
  undefined,undefined,undefined,4
]
```

<br>

# 연결 리스트로 이진트리 구현방법

기존 연결리스트의 노드에 next 대신 left/right를 넣어줌<br>
계속 left와 right에 값을 연결시켜준다.

<br>

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // level order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
```
