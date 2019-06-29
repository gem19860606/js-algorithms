const decimalToString = (decVal) => {
  if (decVal < 10) {
    console.log(decVal);
    return 0;
  } else {
    decimalToString(parseInt(decVal / 10));
    console.log(decVal % 10);
  }
}

decimalToString(12345);
