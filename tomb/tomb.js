
var tasks = [
    "Levinni a szemetett",
    "Megcsinálini a házit",
    "Vacsorát főzni"
]

console.log(tasks);
console.log(tasks)[0];

//tömb végén manipulálás
//hozzáadni
tasks.push("Felmosni");
console.log(tasks);

//elvenni
tasks.pop();
console.log(tasks);

//tömb elejének manipulálása
//hozzáad
tasks.unshift("Listát létre hozzni");
console.log(tasks);
//elveni
tasks.shift();
console.log(tasks);

//tömb belsejét mani...
//elveni index-től

tasks.slice(3,1);
console.log(tasks);

//beteni indexre
tasks.slice(2,0,"Futni");
console.log(tasks);

tasks[2]="Kiabálni";
tasks[10]="listát lezárni";
console.log(tasks);