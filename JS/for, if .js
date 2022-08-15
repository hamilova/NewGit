//console.log(false||true||false) //dve vertik linii oznachaut ili.v ili vsegda viberaetsia true
//console.log(true && false && true) //dve ampersanti oznachaut i. v i vsegda viberaetsia false
//console.log(true && false || true) //snachala vipolniaetsia ili, potom i
//console.log(true && false || true && false) //snachala vipolniatsia i, a potom ili


//if(false||true && false){
  //  console.log('i')
//} else {
 //   console.log('2')
//}

let DogShow =true
let age = 19
let money = 1600
let dog = false

//if(age >=18 && money == 1000 && dog){          //esli odno iz uslovii false, to kod dalshe ne poidet
 //   console.log('Get ticket')}
//    else if(age<18){
//        console.log('Early')}
//        else if(money<1000){
//            console.log('Keep calm and work hard')}
//            else if(!dog){
//                console.log('get cat')
  //          }
            
if(age >=18 && money == 1000 && dog){          //tot je kod, tolko budut vipolneni vse usloviya
console.log('Get ticket')}
else{
    if(age<18){
    console.log('Early')}
if(money<1000){
    console.log('Keep calm and work hard')}
    if(!dog){
    console.log('get cat') } }        
    
    
//switch (DogShow)    {
 //   case age >= 18:
  //  console.log('Time to win')
   // break;
  //  case money>=1000:
   //     console.log('Rich')
      //  break;
//}

 count = 0
 /*while (count < 10){
      console.log(count,"Win!!!" )
     if(count % 2 == 0) {     //% oznachaet ostatok posle deleniya na ...
     console.log(count, 'Even')  // chetnie chisla
    }
     count ++
} */


/* 
for (let i = 0; i < 10; i++) {
  console.log(i,"Win!")
  
}
 */

mm = [1,2,3,6,12,23,45]
for (let i = 0; i < 10; i++) {
 console.log(mm[i], "win!!!")
  
}