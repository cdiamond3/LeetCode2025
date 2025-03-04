/**
 * Calculates the maximum profit that can be achieved from a list of stock prices.
 * 
 * @param {number[]} prices - An array of stock prices where prices[i] is the price of a given stock on the ith day.
 * @returns {number} The maximum profit that can be achieved. If no profit is possible, returns 0.
 * 
*/
var maxProfit = function(prices) {
    // 1. If the length of the prices array is less than 2, return 0 because no transaction can be made.
    if (prices.length < 2) {
        return 0;
    }
    
    //2. Initialize the variable `buy` to the first price in the array.
    let buy = prices[0];
    //3. Initialize the variable `profit` to 0.
    let profit = 0;
    
    //4. Iterate through the prices array starting from the second element:
    for (let i = 1; i < prices.length; i++) {
        //The function works as follows:
        if (prices[i] < buy) {
            // If the current price is less than `buy`, update `buy` to the current price.
            buy = prices[i];
        } else {
            //- Otherwise, calculate the potential profit by subtracting `buy` from the current price and update `profit` if this potential profit is greater than the current `profit`. 
            profit = Math.max(profit, prices[i] - buy);
        }
    }
    
    //5. Return the maximum profit found.
    return profit;
};