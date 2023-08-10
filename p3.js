function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return 'Invalid Input';
    }

    if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }

    if (arr[0] === arr[1]) {
        return 'equal';
    }

    
    
}
let arra = [22,122];
console.log(sortMaker(arra));
