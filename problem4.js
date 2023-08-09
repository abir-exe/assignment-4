const address1 = {street: 10, house: "15A", society: "Earth Perfect"};
const address2 = {street: 10, society: "Earth Perfect"};
const address3 = {street: 10};
function findAddress(obj) {
    const defaultPlaceholder = '__';

    const property1 = obj.street || defaultPlaceholder;
    const property2 = obj.house || defaultPlaceholder;
    const property3 = obj.society || defaultPlaceholder;

    let address = property1 + "," + property2 + "," + property3;
    return address;
}

console.log(findAddress(address1));
console.log(findAddress(address2)); 
console.log(findAddress(address3));
