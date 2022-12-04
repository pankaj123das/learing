// examin of document objects
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.body);
console.log(document.head); 
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/

// getElemetById

//console.log(document.getElementById("header-title"));
//const title = document.getElementById("header-title");
//const header = document.getElementById("main-header");
//console.log(title);
//console.log(header);
//title.textContent = 'hello';
//header.style.borderBottom = 'solid 3px #000';

// getElemetByClassName
// var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello';
//items[2].style.backgroundColor = 'green';
/*
for(var i = 0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
*/
// queryselector
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4xp #ccc';

//var input = document.querySelector('input');
//input.value = 'hello';

// queryselectorall
// var titles = document.querySelectorAll('.title');
// console.log(titles)

// getElemetByTagName

//var items = document.getElementsByTagName('li');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello';
//items[2].style.backgroundColor = 'green';

// traversing the DOM
var itemList = document.querySelector('#items');
// perentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

















