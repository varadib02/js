
var a = 10;
let b =20;
const c = 3; 

a=1;
b=2;
c=30;

console.log(`${a} ${b} ${c}`);


//block scope - local scope
{
    console.log("globális változok blokk scopból: "+a+" "+b+" "+c)
    var a ="block var";
    let e ="block let";
    let f ="block const";

    console.log("block váltózok scopból",a,e,f);

}
console.log(a);
//csak a var típus futtle a blockon kívül is a let és const nem

//az if is blocknak számít
if(true){
    var g ="block var";
    let h ="block let";
    let i ="block const";
}


function scope(){
    var j ="block var";
    let k ="block let";
    let l ="block const";
}

scope();