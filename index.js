function hasTargetSum(array, target) {
  
  for (let x=0; x<array.length; x++){

    for (let y=x+1; y<array.length; y++){
     
        if(target===array[x]+array[y]){
        return true;
       }
    }
  }
  return false;

}

/* 
  Big 0 time complexity is n to the power of n-1 ....  O(nⁿ⁻¹)

*/

/* 
 iterate over array with nested for loop
   within inner loop iterate over array again (excluding same number)
   check if sum of values equivalent to target
      if equivalent return true
      else return false
*/

/*
  The solution involves iterating over the array with a nested for loop.
  The inner loop does not iterate with the same starting number as the outer loop.
  Because of this every number will be added to every other number without being compared twice.
  For example if 3 and 5 are unique numbers in the array and 3 is indexed prior to 5.
  3 will be added to 5 but subsequently 5 will not be added to 3 as that would be redundant work.
  This saves on time and space complexity.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");  // my test
  console.log("=>", hasTargetSum([1, 8, 50, 4, 11, 7], 99));

  console.log("");

  console.log("Expecting: true");  // my test
  console.log("=>", hasTargetSum([3, 33, 0, -5, 7], 28));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
