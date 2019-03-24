// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let minCoins = {}:
    // Откидываем сдачу больше 10000

        if (currency > 10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }

    // Из суммы сдачи высчитываем колличество 50(H) и остаток сдачи
        if (currency >= 50) {
            minCoins.H = Math.floor(currency / 50);
            currency = currency - (minCoins.H * 50);
         }

    // Из остатка высчитываем колличество 25(Q).... и т.д.
        if (currency >= 25) {
            minCoins.Q = Math.floor(currency / 25);
             currency = currency - (minCoins.Q * 25);
         }

         if (currency >= 10) {
            minCoins.D = Math.floor(currency / 10);
             currency = currency - (minCoins.D * 10);
         }

        if (currency >= 5) {
            minCoins.N = Math.floor(currency / 5);
             currency = currency - (minCoins.N * 5);
         }

        if (currency > 0) {
            minCoins.P = currency;
         }

         return minCoins;
}
