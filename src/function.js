function expensiveOperation(num) {
  console.log("expensiveOperation called");
  let i = 0;
  const result = Array(num).fill(0);
  while (i < 1000000000) {
    result[i % num] += i;
    i++;
  }
  return result;
}

export default expensiveOperation;
