var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i
        } 
        else if(target > nums[i - 1] && target < nums[i + 1]) {
            return i
        } 
    }
};