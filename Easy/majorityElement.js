/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// Define the majorityElement function that takes an array of numbers as input
majorityElement = (nums) => {
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Initialize a counter to keep track of the occurrences of the current element
        let count = 0;
        // Loop through the array again to count occurrences of the current element
        for (let j = 0; j < nums.length; j++) {
            // If the current element matches the element at index j, increment the count
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        // If the count of the current element is greater than half the length of the array, return the element
        if (count > nums.length / 2) {
            return nums[i];
        }
    }
    // If no majority element is found, the function implicitly returns undefined
}