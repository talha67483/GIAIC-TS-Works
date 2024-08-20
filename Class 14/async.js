"use strict";
// let sirZiaPromise = new Promise(
//     function ( resolve , reject ){
//         reject(" failed  ")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//     }
// )
// sirZiaPromise.then(function(response){
//     console.log(response);
// }).catch(function(response ){
//     console.log(response);
// })
let myPromise = new Promise((resolve, reject) => {
    let paiseDung = true;
    if (paiseDung) {
        console.log("de dunga");
    }
    else {
        console.log(" nahi dunga ");
    }
});
function yourPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield myPromise;
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
yourPromise();
