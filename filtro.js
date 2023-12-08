// se modificaron las declaraciones de variables de var a let y se agregaron muchos ;
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

let li = document.getElementById("lista-de-productos"); // se modifica por element by id
let $i = document.querySelector('input');

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("li"); // d debe crear un elemento li y no un div para que se pueda usar el metodo appendChild
  d.classList.add("producto");

  let ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  let imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);


  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d); // se coloca li dentro del for

}

// se eliminar display products


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("li");
    d.classList.add("producto");
  
    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  