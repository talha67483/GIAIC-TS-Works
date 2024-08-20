// class Mobile {
//     Model: string
//     memory: number
//     Processor: string
//     camera: number


//     constructor(M: string, m: number, P: string, C: number) {
//         this.Model = M
//         this.camera = C
//         this.Processor = P
//         this.memory = m


//     }

//     infoMobile() {
//         console.log(this.Model, this.memory, this.Processor, this.camera);



//     }

//     getInformation() {
//         console.log(this.Model, this.memory, this.Processor, this.camera);



//     }


// }


// const Samsung: Mobile = new Mobile(" S21 Ultra ", 16, " Snapdragon 888", 140)
// const OPPO: Mobile = new Mobile(" OPPO A1k", 3, " octa core ", 8)

// Samsung.infoMobile();

// OPPO.getInformation()



// class Animal1 {
//     Name :  String
//     Breed : string 
//     color: string
//     population: number


//     constructor(N: string, B : string , C : string , P: number ){
//         this.Name = N
//         this.Breed = B
//         this.color = C
//         this.population = P


//     }

//     infoAbout()
// {
//     console.log(this.Name,this.Breed, this.color,this.population);

// }}

// let Dog : Animal1 = new Animal1(" jack"," Husk ", " black ",1000)
// Dog.infoAbout();



// function arithimaticFunc(num1:number ,num2:number){
//     console.log(`add two number = ${ num1+num2}`);
//     console.log(`subtract two number = ${ num1-num2}`);
//     console.log(`Multiply two number = ${ num1*num2}`);
//     console.log(`Divide two number = ${ num1/num2}`);


// }
// arithimaticFunc(5,4)

function fahrenheitTemp(calcius: number) {

    console.log(`today temperature is =  ${9 * calcius / 5 + 32}`);

}
fahrenheitTemp(30)

function kelvinTemp(celcius:number){
    console.log(`temperature in Kelvin is =  ${celcius+273}`);
}

kelvinTemp(27)

function celciusTemp(fahrenhiet:number){
    console.log(`today temperature is = ${5/9*(fahrenhiet-32)}`);
    

}
celciusTemp(99);