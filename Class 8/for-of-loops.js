// basic syntax of for of loops
// for( variable of itrable){
// console.log(vriable)
// }
// let str = 'javascript';
// for(let val of str){
//     console.log(val);
// }
var str = ["BMW", "VOLVO", "Mercedes", "ferrari"];
str.push("seddan");
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var val = str_1[_i];
    console.log("val = ", val);
}
