function forditas(szavak,forditott){
    for(let i = szavak.lenght-1;i>=0;i--){
        forditott+=szavak[i];
    }
    return forditott;
}

var szavak = ['Répa','Retek','Mogyoró'];
var forditott=[];
console.log(szavak);
console.log(forditas(szavak,forditott));