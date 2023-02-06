//alert("Külső js");

var number = 8;
var string= "Sanyi";
var bool = true;
var semmi1=null;
var semmi2;
//console.log(semmi2);

//összetett változók

var obj = {
    firstName:"Kovács",
    lastName: "Sándor",
    age: 34
}
//console.log(obj.firstName);
var fuggv = function(){
    return "hello";
}
//console.log(fuggv());
var tomb = [1,2,3,4]
var tomb2 = [[1,2,3],[1,2,3]]

//primitív és összetett váltózók különbsége

var num1=7;
var num2=num1;

//console.log("num 1 eredeti értéke ="+num2)
//console.log("num 2 eredeti értéke ="+num2)
num1=5;
//console.log("num 1 új értéke ="+num2)
//console.log("num 2 új értéke ="+num2)
//a num 2 nemváltozik meg
var object1 = {
    number: 32
}
var object2= object1;
//megválzozik az eredeti érték is 
object2=20;