function generateArray(n) {
  let array = [];

  for (let i = 0; i < n; i++) {
    let obj = {
      val1: randomString(),
      val2: randomFloatNumber(2),
      val3: randomFloatNumber(4),
      val4: randomInt(),
      val5: randomInt(),
      val6: randomImgPath(),
      val7: randomString(),
      val8: randomElementOfArray(),
    };
    array.push(obj);
  }
  return array;
}

function randomString() {
  let result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function randomFloatNumber(decimals) {
  let min = 0;
  let max = 100;
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

function randomInt() {
  let min = 0;
  let max = 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomImgPath() {
  let src = 'https://source.unsplash.com/random/50x50?sig=' + randomInt();
  return src;
}

function randomElementOfArray() {
  const array = ['str1', 'str2', 'str3', 'str4', 'str5'];
  let elem = array[Math.floor(Math.random() * array.length)];
  return elem;
}
