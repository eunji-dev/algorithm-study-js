// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  const zero = binary.slice(binary.indexOf("1") + 1, binary.lastIndexOf("1"));
  let max = 0;
  let count = 0;

  for (let i = 0; i < zero.length; i++) {
    if (zero[i] == "1") {
      if (max < count) {
        max = count;
        count = 0;
      }
    } else {
      count++;
    }
    console.log("cout", count);
  }
  if (max < count) {
    max = count;
  }
  return max;
}

// 80%
// error case 561892,74901729, 1376796946
