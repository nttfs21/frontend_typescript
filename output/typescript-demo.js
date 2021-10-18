let a = 10;
let str = 'axz';
let isNeeded = true;
let b = undefined;
let c = null;
console.log(a, str, isNeeded, b, c);
let arr = ['abc', 'def', 'xyz'];
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
console.log('\n');
for (let index in arr) {
    console.log(arr[index]);
}
console.log('\n');
for (let element of arr) {
    console.log(element);
}
console.log('\n');
arr.forEach(elem => {
    console.log(elem);
});
console.log(arr.indexOf('xyz'), '\n');
console.log(arr.slice(1), '\n');
console.log(arr.includes('xyz'), '\n');
console.log(arr.join(), '\n');
console.log(arr, '\n');
arr.splice(1);
console.log(arr);
//# sourceMappingURL=typescript-demo.js.map