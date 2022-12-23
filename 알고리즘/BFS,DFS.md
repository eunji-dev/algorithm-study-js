# BFS, DFS

## BFS : 너비 우선 탐색

그래프 탐색 알고리즘<br>
같은 깊이에 해당하는 정점부터 탐색<br>

- `queue`를 이용하여 구현 가능
- 시작 지점에서 가까운 정점부터 탐색
- V가 정점의 수, E가 간선의 수 일때 시간복잡도는 `O(V+E)`

<br>

## DFS : 깊이 우선 탐색

그래프 탐색 알고리즘으로 최대한 깊은 정점부터 탐색하는 알고리즘

- `stack`을 이용하여 구현 가능
- 시작 정점에서 깊은 것 부터 탐색
- V가 정점의 수, E가 간선의 수 일때 시간복잡도는 `O(V+E)`

<br>

## 가장 먼 노드 문제 풀이

<br>

### [배열을 이용한 BFS 구현]

<br>

```javascript
// 핵심 키워드 : '노드', '간선', '최단경로'
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []); // 그래프가 1번부터 n번까지라 편의상 0이 아닌 1번 인덱스부터 시작

  // 그래프 구현
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src); // 양방향 그래프이기 때문에
  }

  const distance = Array.from(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];

  while (queue.length > 0) {
    const src = queue.shift(); // shift는 O(n)이지만 요소가 적을 경우 자바스크립트 엔진에서 최적화 진행
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        // 가지 않은 영역은 0으로 초기화
        queue.push(dest); // 한번도 가지 않은 경우 큐에 추가
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}
```

<br>

### [큐를 이용한 BFS 구현]

<br>

```javascript
// 핵심 키워드 : '노드', '간선', '최단경로'
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []); // 그래프가 1번부터 n번까지라 편의상 0이 아닌 1번 인덱스부터 시작

  // 그래프 구현
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src); // 양방향 그래프이기 때문에
  }

  const distance = Array.from(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = new Queue();
  queue.enqueue(1);

  while (!queue.isEmpty()) {
    const src = queue.dequeue();

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        // 가지 않은 영역은 0으로 초기화
        queue.enqueue(dest); // 한번도 가지 않은 경우 큐에 추가
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}
```
