function cubeNumber(number)  {
    if (typeof number !== 'number') {
        return 'Please enter a number';
    }
    let cube = number * number * number;
    return cube;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'This is not a string';
    }
    else {
        let doescontain = string1.includes(string2);
        return doescontain;
    }
}

function sortMaker(arr) {
    if (arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return 'Invalid Input';
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }
    else if (arr[0] === arr[1]) {
        return 'equal';
    }
    else if (arr[0]<arr[1]){
        temp = arr[0];
        arr[0]=arr[1];
        arr[1]=temp;
        return arr;
    }
    else{
        return arr;
    }
}

function findAddress(obj) {
    const missingInfo = '__';

    const property1 = obj.street || missingInfo;
    const property2 = obj.house || missingInfo;
    const property3 = obj.society || missingInfo;

    let address = property1 + "," + property2 + "," + property3;
    return address;
}

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