// Js programozás
// Dom: html strukturált megjelenitése
//embereknek szol nem a számitogepnek
//html tageket azok tartalmát tulajdonságait és relácios jeleket tartalmaz

//a bongeszo betoltesekor betolti a documentet

var doc = document;

//document tulajdonságai
doc = document.all;
doc = document.all.length;
doc = document[17];
//lehet document ,head,doctype,domaint,charcterSet
doc = document.URL;
doc = document.forms;

console.log(doc);

//Dom szelektor metudosok ,egyszerűbb ,egyértelműbb kiválasztásért

var element;
element=document.getElementsByTagName('h1');
element=document.getElementsByTagName('input-form');
element=document.getElementsByTagName('list-group-item');

//css szelektor szerint

element= document.querySelector('#input-form');
element= document.querySelector('.p-3');

element= document.querySelectorAll('.p-3');
element= document.querySelectorAll('ul li');
element= document.querySelectorAll('li:nth-child(odd)');

//DOM elemek modosítása
//tartalom modositasa

element = document.getElementById('list-title');

//csak a szoveget ,ahogy begjelene

element.innerHTML="Hello <br> Lista!";
element.innerHTML="Hello <br> Lista!";

console.log(document.getElementById('list-wrapper').innerText);

//elem tulajdonságok megtekintése ,modositása
//attributes

element=document.querySelector("li:first-child");

console.log(element.id);

element.id='First-list-item';

console.log(element.id);

element.className ="p-3";

console.log(element.style);
element.style.color="red";
element.style.margin="100px 50px 0 0";
element.style.display="none";

//tobb elem stylusának változtatása

var listItems = document.querySelectorAll('li');
    //listItesms.style.color = "red";

    for(let index=0; index < listItems.length;index++){
        listItems[index].style.color="red";
    }

element=document.getElementsByTagName('ul')[0];

//gyermek elemek elválasztása

var child = element.childNodes;

child = element.childNodes[1].childNodes;

child=element.children;

child=element.children[2].innerHTML;


//amig van további elem adiglehet tovább fűzögetni

child = element.firstChild;//node
child = element.firstElementChild;//element

console.log(child);
    
/*
    //dom elemek cseréje törlése

    //csere
    //uj elem letrehozzasa

    var newElement=document.createElement("li");
    newElement.className="list-group-item";
    newElement.setAttribute("title","newListItem");

    newElement.appendChild(document.createTextNode("uj lista header"));
*/

