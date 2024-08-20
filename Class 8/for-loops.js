// basic syntax for loops
// for(initialization; condition; increment/decrement)
// Initialization means where the loop starts
// Condition is used to check if the loop should continue
// Increment/decrement is used to update the value of i;
// for( let  i = 1; i <= 10; i++){
//     let  tableNumber : number = 9;
//     console.log(tableNumber,"x",i,"=",tableNumber*i); 
// }
// for(let i = 1; i<=10; i++){
//     console.log(3,"x",i,"=",3*i);
// }
// let  dataLength :number = 34;
var arr1 = ["BMW ", "VolksWagan", "ferrari"];
var arr2 = [34, 44, 52, 53, 32];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var i = arr1_1[_i];
    console.log(i);
}
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
// console.log(arr1)
// console.log(arr2)
// let arr3 : Array<string> = [ "Lambhorghini", "Tesla","Volvo"]
// console.log(arr3)
// let arr4 : Array<number> = [ 43,42,12,45,21]
// console.log(arr4)
