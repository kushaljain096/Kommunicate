const reverseNumber = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

console.log(reverseNumber(123456))
console.log(reverseNumber(-21.54))
console.log(reverseNumber(678000))
console.log(reverseNumber(123.45))
