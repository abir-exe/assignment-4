let changeArray = [];
function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    } 
    else if (changeArray.length === 0) {
        return 'Sorry, you do not have enough money';
    } 
    else {
        return false;
    }
}
console.log(canPay(changeArray, 50));


// problem 5 complete ----------- no need to change anything