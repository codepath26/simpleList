let  lastChild = document.querySelector(".list-group-item:last-child")
let  firstChild = document.querySelector(".list-group-item:first-child")
let  thirdChild = document.querySelector(".list-group-item:nth-child(3)")
let all = document.querySelectorAll(".list-group-item")
all.forEach((item)=>{

  item.style.fontWeight ="bold"
})
lastChild.style.color = "green"
thirdChild.style.background = "green"
firstChild.style.color = "red"

