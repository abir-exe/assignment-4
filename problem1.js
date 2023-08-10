function cubeNumber(number)  {
    if (typeof number !== 'number') {
        return 'Please enter a number';
    }
    let cube = number * number * number;
    return cube;
}
console.log(cubeNumber(4));

// problem 1 is done succesfully ----- no need to change anything