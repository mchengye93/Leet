/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional
 elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

//Time complexity is N, space complexity 1;
var maxProfit = function(prices) {
    let minPrice = Infinity;
    var maxProfit = 0;
    for (var i = 0; i < prices.length; i++) {
       if (prices[i] < minPrice) {
           minPrice = prices[i];
       } else {
           let profit = prices[i] - minPrice;
           if (profit > maxProfit) {
               maxProfit = profit;
           }
       }
        
    }
    return maxProfit;
};

//Time complexity N^2, Space complexity 1;
/**
 * @param {number[]} prices
 * @return {number}
 
var maxProfit = function(prices) {
    var maxProfit = 0;
    for (var i = 0; i < prices.length-1; i++) {
        let buy = prices[i];
        for (var x = i +1; x < prices.length; x++){
            let sell = prices[x];
            let profit = sell-buy;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
*/ 