function isNumberInArray(arr, num) {
  return arr.includes(num);
}

export function exists(arr, num) {
  if (isNumberInArray(arr, num)) {
    return true;
  } else {
    return false;
  }
}
