let vas;

vas = document; // the whole html document
vas = document.all;// gets the entire html collection
vas = document.all[1]; //You can use the index to get the collection of interest, e.g. heady or body
vas = document.all.length; // You can access properties like length... the length of the html document
vas = document.body; // you can access a tag
vas = document.head;
vas = document.domain; //You can access the domain
vas = document.doctype;
vas = document.URL;
vas = document.characterSet;
vas = document.contentType;

// YOU CAN SELECT THINGS WITHOUT USING SELECTORS *** THIS IS NOT RECOMMENDED
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];
val = document.images;// YOU CAN GET IMAGES

val = document.scripts;
val = document.scripts[2].getAttribute('src');// YOU CAN GET ATTRIBUTES

let scripts = document.scripts;

let scriptsArr = Array.from(scripts); // YOU CAN TURN THEM INTO AN ARRAY SO THAT YOU CAN DO forEach. 

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});
console.log(vas); 
console.log(val)