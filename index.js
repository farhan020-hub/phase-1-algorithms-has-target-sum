function hasTargetSum(array, target) {
  // Create an empty set to store seen numbers
  const targetSum = new Set();

  // Iterate through the elements of the input array
  for (let i = 0; i < array.length; i++) {
    // Calculate the complement needed to reach the target
    const complement = target - array[i];

    // If the complement exists in the targetSum set, we found a pair
    if (targetSum.has(complement)) {
      return true;
    }

    // Otherwise, add the current element to the targetSum set
    targetSum.add(array[i]);
  }

  // If no such pair is found during the iteration, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here

  O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
 

This implementation uses a `Set` which keeps track of the complements of the elements in the array. 
It iterates through the array and  calculates the complement of each element with respect to the target, and checks if the complement has already been seen. 
If it has, then the function returns `true`. If the loop completes without finding a pair of elements that sum to the target, then the function returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
