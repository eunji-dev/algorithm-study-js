# Triee

문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 비선형 자료구조

<br>

## Trie의 특징

- 검색어 자동완성, 사전 찾기등에 응용
- 문자열을 탐색할 때 단순 비교보다 효울적으로 찾을 수 있음
- L이 문자열의 길이일 때 탐색, 삽입은 O(L)만큼 걸림
- 각 정점이 자식에 대한 링크를 전부 가지고 있기 때문에 저장공간을 더 많이 사용함

<br>

## Trie의 구조

- 루트는 비어있는 공백
- 각 간선은 추가될 문자를 키로 가지고 있음
- 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가짐
- 해시 테이블과 연결리스트로 구현 가능

<br>

## Trie 구현하기

```javascript
class Node {
  construcor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node(); // 루트로 빈 노드 생성
  }

  insert(string) {
    // 루트부터 탐색
    let currentNode = this.root;

    // 문자열을 앞에서부터 하나씩잘라서 순회
    for (const char of string) {
      // 현재 노드에서 자른 문자열을 간선으로 가지고 있지 않을 경우
      // 새롭게 노드를 추가
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      // 다음 정점으로 이동
      currentNode = currnetNode.children.get(char);
    }
    // 루프 반복하면 문자열을 모두 요소로 추가할 수 있음
  }

  // 문자열이 존재하는지 체크
  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('can');
console.log(tri.has('cat')); // true
console.log(tri.has('can')); // true
console.log(tri.has('cap')); // false
```
