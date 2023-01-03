var prices = [1, 2];
var maxProfit = function (prices) {
    var arrOfDiff = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j <= prices.length - 1; j++) {
            if ((prices[j] - prices[i]) > 0) {
                let diff = prices[j] - prices[i];
                arrOfDiff.push(diff);
            }
        }
    }
    if (arrOfDiff.length > 0) {
        return Math.max(...arrOfDiff)
    } else {
        return 0;
    };
}

console.log(maxProfit(prices));