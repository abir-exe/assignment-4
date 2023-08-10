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
let arra = [25,55];
console.log(sortMaker(arra));

// problem 3 is completed -------- no need to change anything
