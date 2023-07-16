let items = document.querySelector("#items")
//01 parantElement
// console.log(items.parentElement)
items.parentElement.style.background = "red"
items.parentElement.parentElement.style.background = "gray"

//02 lastchild  03 lastelementchild
// console.log(items.lastChild)
console.log(items.lastElementChild)
items.lastElementChild.style.background = "orange";
items.lastElementChild.innerText = "Hello 4"
items.lastElementChild.className = "list-group-item"

console.log(items.childNodes)
console.log(items.children[0])
items.children[1].style.background = "yellow"


//04 createchild
let list6 = document.createElement("li");
// console.log(list6)
console.log(list6)
list6.className = 'list-group-item'
list6.id = "list6"
list6.setAttribute('title',"item6")
list6.innerText = "Hello-6"
list6.style.background = "black"
list6.style.color = "white"
items.appendChild(list6)


//  05 and 06  firstElementchild - firstchild 
console.log(items.firstChild)
console.log(items.firstElementChild)
items.firstElementChild.textContent = "Hello 1"


// 07 08  nextsiblings nextElementSiblings
// console.log(items.nextSibling)
// console.log(items.nextElementSibling)
// 09 and 10 previoussiblings previousElementSiblings
console.log(items.previousElementSibling)
items.previousElementSibling.style.color = "blue"

//11 12 13 14 01 02
let newdiv = document.createElement('div')
console.log(newdiv);
newdiv.setAttribute("title","section")
let textnode = document.createTextNode("HEllo")
newdiv.appendChild(textnode)

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
console.log(container , h1)
container.insertBefore(newdiv,h1)
// container.appendChild(newdiv)

let newdiv2 = document.createElement('div')
console.log(newdiv2);
newdiv.setAttribute("title","section")
let textnode2 = document.createTextNode("HEllo")
newdiv2.appendChild(textnode2)

items.insertBefore(newdiv2 ,items.children[0] )