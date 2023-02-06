
/*  Önállóan átnézendő anyagok a W3Schoolson:
    https://www.w3schools.com/js/default.asp
    JS Tutorial a JS HOME-tól a JS Const-ig
    Amit ezek közül nem vettünk órán azokat is olvassátok el. 

    kivéve: - events
            - errors
            - strict mode
    
*/

/*
A feladatokhoz tanács:
a feladatok megoldásához szükséges változókat hozzátok letre, olyant és annyit, amennyit jónak láttok.
Ha úgy gondoljátok, a megoldásokat szétbonthatjátok kisebb függvényekre és azokat a függvényeket hívjátok
meg a ciklusokon/másik függvényeken belül.
*/


/*  FELADATOK
1 - írj egy függvényt, ami kiszámítja egy háromszög területét. 
    két bemenő paramétere legyen, alap és magasság
    A függvény adja vissza a háromszög területét mértékegység nélkül
    Kezeld le azokat az eseteket is, amikor nem számok lettek a bemenő paraméterek
    https://www.w3schools.com/jsref/jsref_parseint.asp

*/


var a=10;
var m=8;
var t;
function szog3(a,m,t){
    if(parseInt(a)){
        if(parent(m)){
            t=a*m/2;
        }
    }
}
console.log(szog3(a,m,t));

/*
2 - hozz létre egy tömböt ezekkel az értékekkel: [9, 9, 2, 3, 4]
    írj egy ciklust, ami visszaad egy tömböt, amiben az eredeti tömbnek az értékei
    emelkedő sorrendben vannak.
    Aztán írj egy másikat, ami egy olyan tömbböt ad vissza, ahol az eredeti tömb
    elemei fordított sorrendben szerepelnek
    Ne az array.sort() és array.reverse() metódust használd, hanem saját ciklust írj!
    https://www.w3schools.com/jsref/jsref_sort.asp
    https://www.w3schools.com/jsref/jsref_reverse.asp
*/

function novekvo(rendezett){
    for (let i = rendezett.lenght;i>0;i--){
        for (let j = 0;j<i;j++){
            if(rendezett[j]>rendezett[i]){
                var csere = rendezett[j];
                rendezett[j]=rendezett[i];
                rendezett[i]=csere; 
            }
        }
    }
    console.log(rendezett);
    return rendezett;
}

function swap(tomb,forditott){
    for(let i = tomb.lenght-1;i>=0;i--)
    {
        forditott+=tomb[i];
    }
    return forditott;
}

var tomb = [9, 9, 2, 3, 4];
var rendezett=[];
function masolat(x){
    for (let i=0;i<tomb.length;i++){
        x[i]=tomb[i];
    }
}
masolat(rendezett)
novekvo(rendezett);

var forditott=[];
console.log(swap(tomb,forditott));

/*
3 - FizzBuzz: hozz létre egy függvényt, ami 1-100-ig kiírja a számokat a konzolba
    ha egy szám 3-al osztható, akkor a szám helyett írja azt, hogy fizz
    ha egy szám 5-tel osztható, akkor a szám helyett írja azt, hogy buzz
    ha egy szám 3-mal és 5-tel is osztható, akkor írja azt, hogy fizzbuzz
*/

var max = 100;

function szamok(max){
    for(let i=0;i<max;i++){
        if(i%3==0){
            console.log("fizz");
        }if(i%5==0){
            console.log("buzz");
        }if(i%3==0 && i%5==0){
            console.log("fizzbuzz");
        }
        else{
            console.log(i);
        }
    }
}

console.log(szamok(max));

/*EXTRAAAAAA
    var data = [
    {username: "Tibi82", password: "t82"},
    {username: "BigBoy", password: "boy1"},
    {username: "user", password: "password"},
    {username: "KovacsIstvan", password: "kistvan"}
]

    var userName = prompt("Add meg a felhasználóneved");
    var userPass = prompt("Add meg a jelszavad");

    Készíts egy ciklust, ami bekér egy felhasználónevet és jelszót, s összehasonlítja a fenti data tömb
    elemeivel.

    Ha a van olyan username, amit a felhasználó beadott, és egyezik hozzá a jelszó is, akkor írja ki valahogy, 
    hogy sikerült belépni
    Ha van ilyen username, de a jelszó nem egyezik, akkor írja ki, hogy helytelen a jelszó,
    ha pedig nincs ilyen username, akkor írja ki azt, hogy nincs ilyen felhasználó
*/

