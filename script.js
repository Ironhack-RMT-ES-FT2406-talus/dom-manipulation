console.log("aprendiendo sobre el DOM")

// desde JS nosotros podemos acceder a todo el DOM

console.log(document)

// 1. web scrapping (busquedas de información en una pagina web)

// querySelector => metodo que me permite buscar algo especifico dentro del DOM. Siempre nos devuelve el PRIMER elemento que consiga con esa caracteristica.

let h1Node = document.querySelector("h1")
console.log(h1Node) // esto es un nodo del DOM

console.log(h1Node.innerText) // .todo el contenido texto dentro de este nodo


console.log( document.querySelector("h1").innerText )

let h1AnidadoNode = document.querySelector("#main-section h1") // busqueda anidada como en CSS
console.log(h1AnidadoNode)

let otroH1Node = document.querySelector("#second-title") // busqueda por id
console.log(otroH1Node)

console.log(otroH1Node.innerText) // solo el texto (string)
console.log(otroH1Node.innerHTML) // un string que representa el texto y las etiquetas internas
console.log(otroH1Node.id) // el id
console.log(otroH1Node.className) // todas las clases

// querySelectorAll => busca TODOS los elementos que cumplen una condicion

let parrafoNodeList = document.querySelectorAll(".some-text")
console.log(parrafoNodeList)

// una lista de nodos parece un array, pero no es un array
// - podemos usar cosas como index, posición, bucles for y forEach
// - no podemos usar slice, filter, map, reduce, push, pop, etc....


parrafoNodeList.forEach((eachParrafoNode) => {
  console.log(eachParrafoNode.innerText)
})
// tambien se puede usar for loop

const cardsNodeList = document.querySelectorAll(".card")
cardsNodeList.forEach((eachCardNode) => {
  console.log(eachCardNode)

  // quiero imprimir el texto del h3 dentro de la carta
  // quiero imprimir el texto del hp dentro de la carta

  // busquedas anidadas
  // const h3Node = document.querySelector("h3")
  const h3Node = eachCardNode.querySelector("h3")
  console.log(h3Node.innerText)

  // querySelector y querySelectorAll los usamos comunmente sobre todo el documento PERO lo podemos usar para hacer busquedas especificas dentro de una sección (un Nodo)

})


// querySelector y querySelectorAll para hacer busquedas de nodos en mi DOM



// 2. Manipular el DOM

const thirdTitleNode = document.querySelector("#third-title")

console.log(thirdTitleNode) // esta es la referencia a ese elemento del DOM

console.log(thirdTitleNode.innerText)

// addEventListener => detectar acciones del usuario para que algo ocurra en ese momento

thirdTitleNode.addEventListener("mouseenter", () => {
  thirdTitleNode.innerText = "Cambiando el DOM";
  h1Node.innerText = "Magia!"
})

let incButton = document.querySelector("#increment")
incButton.addEventListener("click", () => {
  const spanNode = document.querySelector("#count h2 span")
  spanNode.innerText++
  console.log("clickando boton")
})


const removeBtnNode = document.querySelector("#delete-btn")
removeBtnNode.addEventListener("click", () => {

  const spanNode = document.querySelector("#count h2 span")
  spanNode.innerText = 0

  // removeBtnNode.remove() // destruyelo (remuevelo del DOM)

  // // ejemplo de borrar toda la pagina
  // document.querySelector("#main-container").remove()
})

// funcionalidad para agregar elementos desde un formulario a la lista

const inputNode = document.querySelector("#add-form input")
const btnAddNode = document.querySelector("#add-form button")
const ulNode = document.querySelector("#add-form ul")


btnAddNode.addEventListener("click", () => {

  // 1. necesitamos el valor que escribe el usuario en el campo
  // en el caso de inputs no usamos innerText sino la propiedad value
  let valor = inputNode.value

  // 2. necesitamos crear un nuevo elemento de li
  const liNode = document.createElement("li")
  liNode.innerText = valor
  console.log(liNode)

  // 3. añadir el li creado a la ul
  ulNode.append(liNode)

})