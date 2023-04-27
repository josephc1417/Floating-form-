const totalBasketballScore = (freeThrows,midRange,threePointers) => {
    //** Data Validation */
if(
       typeof freeThrows !== 'number' ||
       typeof midRange !== 'number' ||
       typeof threePointers !== 'number'
){
    console.log("All entries need to be the correct data type")
   return;
}

 

 let totalScore = freeThrows + midRange*2 + threePointers*3;
 return totalScore;
}