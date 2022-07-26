function calculateDaysBetweenDates(begin, end) {
  const start = new Date(begin);
  const endDate = new Date(end);
  const diff = endDate.getTime() - start.getTime();
  return diff / (1000 * 60 * 60 * 24);
}

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// handle arrow key buttons click
function handleArrowKey(e) {
  const key = e.key;
  if (key === "ArrowLeft") {
    console.log("left");
  } else if (key === "ArrowRight") {
    console.log("right");
  } else if (key === "ArrowUp") {
    console.log("up");
  } else if (key === "ArrowDown") {
    console.log("down");
  }
}
// 股票交易
function stockTrade(arr) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sum += arr[i];
      result.push(sum);
    } else {
      sum += arr[i];
      sum -= arr[i - 1];
      result.push(sum);
    }
  }
  return result;
}