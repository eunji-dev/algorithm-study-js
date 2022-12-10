# Heap

이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제될 때 바로 정렬됨

<br>

## 우선순위 큐

FIFO인 큐와 달리<br>
`우선순위가 높은 요소`가 먼저 나가는 큐<br>
=> 자료구조가 아닌 개념

`우선순위 큐 !== 힙`

<br>

## Heap의 특징

- 우선순위가 높은 요소를 루트로 배치하고 항상 루트가 먼저 나감
- 루트가 가장 큰 값이 되는 최대힙, 루트가 가장 작은값인 최소 힙 (오름차순/내림차순)

<br>

## Heap 요소 추가 알고리즘

- 요소가 추가될 때 이진트리의 가장 마지막에 추가
- 부모 정점보다 우선순위가 높은지 비교
- 추가된 정점이 부모보다 우선순위가 높을경우 부모 정점과 순서를 바꿈
- 위의 과정을 반복하면 가장 우선순위가 높은 정점이 루트 정점이 됨
- 요소는 항상 이진 트리의 마지막에 추가가 되기 떄문에 힙은 항상 완전 이진트리임
- 완전 이진 트리의 높이는 logN이기 때문에 힙의 요소 추가 알고리즘은 `O(log N)`의 시간복잡도를 가짐

<br>

## Heap 요소 제거 알고리즘

- 요소 제거는 루트 정점만 가능함
- 루트 정점을 제거하면 가장 마지막 정점이 루트 정점으로 위치
- 루트로부터 점점 정점을 아래로 내려야 함
- 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꿈
- 두 자식 정점이 우선순위가 더 낮을 때 까지 반복
- 우선순위가 더 높은 정점이 루트 정점이 됨
- 완전 이진 트리의 높이는 logN이기 때문에 힙의 요소 제거 알고리즘은 `O(log N)`의 시간복잡도를 가짐

<br>

---

<br>

## 힙 구현하기

```javascript
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  // 요소 추가
  push(value) {
    this.heap.push(value); // 힙의 가장 마지막에 요소 추가
    let currentIndex = this.heap.length - 1;
    let parrentNode = Math.floor(currentIndex / 2);

    // 부모가 우선순위가 더 낮거나 루트가 아닐때 까지
    // 루프를 돌리며 부모와 자식의 순서를 바꿔줌
    while (parrentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currenIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 요소 제거
  pop() {
    const returnValue = this.heap[1]; // 루트 요소를 반환하기 위해 임시로 상수에 저장
    this.heap[1] = this.heap.pop(); // 루트 정점은 가장 마지막 정점으로 대체

    // 루트에서부터 아래로 내려가기 위한 인덱스
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 하위 정점들이 현재 정점보다 우선순위가 낮을경우 반복 종료
    while (
      this.heap[currenIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 왼쪽 정점보다 오른쪽 정점이 우선순위가 더 높을경우
      // 오른쪽 정점과 변경
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currenIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // 왼쪽 정점과 변경
        const temp = this.heap[currentIndex];
        this.heap[currenIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      // 바꾼 정점에서 왼쪽 정점의 위치와 오른쪽 정점의 위치를 다시 구함
      leftIndex = currentIndex * 2;
      rightIndex = currntIndex * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [null, 63, 54, 45, 27, 36]

// Heap state : [null, 63, 54, 45, 27, 36]
const array = [];
array.push(heap.pop()); // 63
array.push(heap.pop()); // 54
array.push(heap.pop()); // 45
array.push(heap.pop()); // 36
array.push(heap.pop()); // 27
console.log(array); // [63, 54, 45, 36, 27]
```

<br>
