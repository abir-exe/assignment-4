const address1 = {street: 10, house: "15A", society: "Earth Perfect"};
const address2 = {street: 10, society: "Earth Perfect"};
const address3 = {street: 10};
function findAddress(obj) {
    const missingInfo = '__';

    const property1 = obj.street || missingInfo;
    const property2 = obj.house || missingInfo;
    const property3 = obj.society || missingInfo;

    let address = property1 + "," + property2 + "," + property3;
    return address;
}

console.log(findAddress(address1));
console.log(findAddress(address2)); 
console.log(findAddress(address3));


// problem 4 is complete ----------------- no need to change anything