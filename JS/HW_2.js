/* let age_1 = 17
let age_2 = 18
let age_3 = 60
function checkAge(age) {
    
if (age < age_2) {console.log("You don't have access cause your age is" + age_1+ ". It is less then " + age_2+ "")
    
}
 else if (age >= age_2 && age < age_3 ) {console.log("Welcome!")
    
}
 else if (age > age_3) {console.log("Keep calm and look Culture channel")
    
} else {console.log("Technical work")}}
checkAge(17)
checkAge(18)
checkAge(61) */ 

/* const age_1 = 17
const age_2 = 18
const age_3 = 60

const checkAge = function(age){
     age = Number(age)
     console.log(age)
 if(age && !isNaN(age)) { //age zdes' ctobi proverit' pustuy stroku(zapolneno li znachenie); !isNaN pokazivaet chto otvet doljen bit True, t.k.NaN vsegda False(proveriaem chto budet NE False)
    
    if (age < age_2)  {
        console.log("You don't have access cause your age is" + age + ". It is less then " + age_2 + "") 
}   else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
}   else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")}}
        else console.log('Not an integer value')}
checkAge(17) 
checkAge(18) 
checkAge(60) 
checkAge(61) 
checkAge('0') 
checkAge('aaa')
checkAge('20')
checkAge('')


 */



/* const age_2 = 18
const age_3 = 60

const checkAge = function(age){
    age = Number(age)
    console.log(age)
if(age && !isNaN(age)) { //age zdes' ctobi proverit' pustuy stroku(zapolneno li znachenie); !isNaN pokazivaet chto otvet doljen bit True, t.k.NaN vsegda False(proveriaem chto budet NE False)
   
   if (age < age_2)  {
       alert("You don't have access cause your age is" + age + ". It is less then " + age_2 + "") 
}   else if (age >= age_2 && age < age_3) {
    alert("Welcome!")
}   else if (age > age_3) {
    alert("Keep calm and look Culture channel")
   } else {
    alert("Technical work")}}
       else alert('Not an integer value')}

 let a = prompt('enter your age')      

checkAge(a)  */


const age_2 = 18
const age_3 = 60
const div = document.getElementById('d')
const checkAge = function(...age){
    age.forEach(el => {
        if(el && !isNaN(el)) { //age zdes' ctobi proverit' pustuy stroku(zapolneno li znachenie); !isNaN pokazivaet chto otvet doljen bit True, t.k.NaN vsegda False(proveriaem chto budet NE False)
   
            if (el < age_2)  {
             div.innerHTML+=el + ("You don't have access cause your age is" + el + ". It is less then " + age_2 + "" + '<br/>') 
         }   else if (el >= age_2 && el <= age_3 ) {
            div.innerHTML+=el + ("Welcome!"+'<br/>')
         }   else if (el > age_3) {
            div.innerHTML+=el + ("Keep calm and look Culture channel"+'<br/>')
            } else {
                div.innerHTML+=el + ("Technical work"+ '<br/>')}}
                else div.innerHTML+=el + ('Not an integer value'+'<br/>')
    })}
checkAge(17,18,60,61,'','20','0','fff')