let sirZiapromis = new Promise (function( resolve,  reject ){
    let paise = true 
    if( paise){
        console.log(" OK Paise de dunga ");
        // resolve(" OK Paise de dunga ");

        
    }
    else{
        console.log(" nahi dunga ");
        
    }

})

async function myPomise (){
    try{
        let response = await sirZiapromis
        // console.log(response);

        
    }
    catch(error){
        console.log(error);
        

    }
}

// myPomise()