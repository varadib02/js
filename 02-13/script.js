// Js programozás
// Dom: html strukturált megjelenitése
//embereknek szol nem a számitogepnek
//html tageket azok tartalmát tulajdonságait és relácios jeleket tartalmaz

//a bongeszo betoltesekor betolti a documentet

var doc = document;

//document tukajdonságai
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

console.log(element);