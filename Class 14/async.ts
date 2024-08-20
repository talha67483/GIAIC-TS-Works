// let sirZiaPromise = new Promise(
//     function ( resolve , reject ){
//         reject(" failed  ")

//     }
// )




// sirZiaPromise.then(function(response){
//     console.log(response);
    
// }).catch(function(response ){
//     console.log(response);
    

// })


let myPromise = new Promise((resolve, reject) => {
    let paiseDung = true 
    if(paiseDung ){
        console.log("de dunga" );

        
    }
    else{
        console.log(" nahi dunga ");
        
    }
    
    
})

async function yourPromise  () {
    try {
        let response =  await myPromise
        console.log(response);
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
yourPromise()