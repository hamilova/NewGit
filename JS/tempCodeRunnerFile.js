for(counter = 1; counter<=5; counter = counter +2)
{console.log('up and ' + counter)
console.log('down '+ counter)}

names = ['Michael', 'John', 'Anna', 'Nick', 'Lana','Eva'];
money = [10000, 40000, 5000, 3300, 60000, 3000];

salaryMoney = 0
for (let counter = 0; counter < names.length; counter++) {
    console.log(names[counter]+ ' got salary '+ money[counter]);
    salaryMoney = salaryMoney + money[counter]
    money[counter] = 0
    
} salaryMoney(0) 