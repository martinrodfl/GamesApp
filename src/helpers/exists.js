function isNumberInArray(arr, num) {
  return arr.includes(num);
}

export function exists(arr, num) {
  if (isNumberInArray(arr, num)) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);

    return false;
  }
}
