console.log("JavaScript file is linked correctly. Hooray.");
function squareNumber(number) {
  return number * number;
}
function applyDiscount(initialPrice, discountPercentage) {
  const discountAmount = (initialPrice * discountPercentage) / 100;
  const finalPrice = initialPrice - discountAmount;
  return finalPrice;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}
function getStringLength(inputString) {
  return inputString.length;
}
console.log(squareNumber(4));
console.log(applyDiscount(1000, 10));
console.log(getRandomNumber());
console.log(getStringLength("Hello, World!"));
const currencies = [
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.6742",
    diffFormated: "0.0202",
    rate: 6.6742,
    name: "სომხური დრამი",
    diff: 0.0202,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.8673",
    diffFormated: "0.0131",
    rate: 2.8673,
    name: "ევრო",
    diff: -0.0131,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "GBP",
    quantity: 1,
    rateFormated: "3.3111",
    diffFormated: "0.0046",
    rate: 3.3111,
    name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
    diff: -0.0046,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "TRY",
    quantity: 1,
    rateFormated: "0.0957",
    diffFormated: "0.0003",
    rate: 0.0957,
    name: "თურქული ლირა",
    diff: 0.0003,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "USD",
    quantity: 1,
    rateFormated: "2.5771",
    diffFormated: "0.0078",
    rate: 2.5771,
    name: "აშშ დოლარი",
    diff: 0.0078,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
];
function findCurrencyWithSmallestRate(currencies) {
  let smallestRateCurrency = currencies[3];

  for (let i = 1; i < currencies.length; i++) {
    if (currencies[i].rate < smallestRateCurrency.rate) {
      smallestRateCurrency = currencies[i];
    }
  }
  return smallestRateCurrency;
}
const currency = [];
const currencyWithSmallestRate = findCurrencyWithSmallestRate(currencies);
console.log(currencyWithSmallestRate);
