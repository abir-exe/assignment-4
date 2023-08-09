let array = [10, 20, 30, 40];
function canPay(array, number) {


    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    if (sum >= number) {
        return true;
    } 
    else if (array.length === 0) {
        return 'you are poor';
    } 
    else {
        return false;
    }
}
console.log(canPay(array, 100));