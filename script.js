function calculateScore() {
    const freeThrows = parseInt(document.getElementById("freeThrows").value);
    const midRange = parseInt(document.getElementById("midRange").value);
    const threePointers = parseInt(document.getElementById("threePointers").value);
    


    
    const totalScore =totalBasketballScore(freeThrows,midRange,threePointers)
    
    //Validation for function score
    if (isNaN(totalScore)) {
     document.getElementById('score').innerHTML ="All entries should be fucking numbers.";   
    }else{
        document.getElementById('score').innerHTML = `Total: ${totalScore}`;
    }
}
