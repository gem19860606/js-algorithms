function solution(arr) {
  var stack = [arr[0]];
  var stack_size = 1;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] >= stack[stack_size - 1]) {
      stack[stack_size++] = arr[i];
    } else {
      var last = stack[(stack_size--) - 1];
      while (stack_size > 0 && arr[i] < stack[stack_size - 1]) {
        stack_size--;
      }
      stack[stack_size++] = last;
    }
  }

  return stack_size;
}

console.log(solution([1, 2, 3, 4, 6, 2]));
