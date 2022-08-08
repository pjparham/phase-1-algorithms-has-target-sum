function hasTargetSum(array, target) {
  for (i = 0; i < array.length; i++){
    if (array [i] > target){
      let difference = array[i] - target
      for (j = 0; j < array.length; j++){
        if(difference == array[j]){
          return true
          console.log(difference)
        }
        else{
          return false
          console.log(difference)
        }
      }
    }
    else{
      let difference = target - array[i]
      for (j = 0; j < array.length; j++){
        if(difference == array[j]){
          return true
          console.log(difference)
        }
        else{
          return false 
    }

   } 
    
  }
}
  // Write your algorithm here
  // for (let i in array) {
  //     console.log
  //   for (let j in array){
  //     if(array[i] + array[j] === target){
  //       return true
  //     }
  //     else{
  //       return false
  //     }
  //   }
  // }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
take in array and target
subtract element from target and check if array has matching number
if so return true

*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;
