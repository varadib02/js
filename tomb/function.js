var firstname="Kovács";
var lastname="Péter";

//összefüzés
var fullname=firstname+" "+lastname;
//alt gr + 7
var fullname2=`A teljes név: ${firstname} ${lastname}`;

var fullnameprint = function(){
    console.log(fullname2)
}

fullnameprint();



function returnfname(){
    var name=`A teljes név: ${firstname} ${lastname}`;
    return name;
}
console.log(returnfname())



function be(firstname,lastname){
    console.log(`A teljes név: ${firstname} ${lastname}`)
}

be("Károly","Róbert");


function thistest(firstname){
    console.log(firstname);
    console.log(this.firstname);
    function beslothistest(firstname){
        console.log("Belső"+firstname);
        console.log("Belső"+this.firstname);
    }
    beslothistest("Gizi");
}
thistest("Sanyi");

//object 


var fname="Kiss";
var lname="Margit";
var user ={
    fname:"toth",
    lname:"gizi",
    fullnameobj: function(){
        return fname + " " + lname;
    },
    fullnameobj2: function(){
        return usere.fname + " " + user.lname;
    },
    fullnameobj3: function(){
        return this.fname + " " + this.lname;
    }
}
user.addres="Kaposvár";
console.log(user);
console.log(user.fullnameobj());

console.log(this);