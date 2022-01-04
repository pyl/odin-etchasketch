let width = 64
let height = 64


const totalWidth = 900
const totalHeight = 900

function color() {
  this.style.backgroundColor = "black"
}



clr = document.querySelector(".clear")
clr.addEventListener("click", clear)

function clear() {
  let size = prompt("How many pixels per side?")
  width = size;
  height = size;
  let lst = document.querySelectorAll("div")
  lst.forEach((nde) => {
    nde.remove();
  })
  createCanvas()
}

function createCanvas() {
  body = document.querySelector("body")
  for (let i = 0; i < height; i++) {
    let rowdiv = document.createElement("div")
    rowdiv.style.margin = "0px"
    rowdiv.style.padding = "0px"
    rowdiv.style.height = (totalHeight / height).toString() + "px"
    for (let j = 0; j < width; j++) {
      let newbox = document.createElement("div")
      newbox.style.boxSizing = "border-box"
      newbox.setAttribute("class", "pixel")
      newbox.style.display = "inline-block"
      newbox.style.margin = "0px"
      newbox.addEventListener("mouseover", color)
      newbox.style.width = (totalWidth / width).toString() + "px"
      newbox.style.height = (totalHeight / height).toString() + "px"
      rowdiv.appendChild(newbox)
    }
    body.appendChild(rowdiv)
  }
}

createCanvas()
