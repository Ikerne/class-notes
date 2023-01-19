console.log("DOM Manipulation Intro Class:");
// DOM MANIPULATION - Se trabaja con el master (02)

// En el desarrollo de sitios web, DOM son las siglas de Document Object Model. Se trata de una interfaz de programación que nos permite crear, modificar o eliminar elementos de un documento web. La manipulación del DOM es cuando se utiliza JavaScript para añadir, eliminar y modificar elementos de un sitio web. Es muy común en el desarrollo web

// ¿Qué es el DOM?
// El DOM significa Document Object Model (Modelo de Objetos del Documento). Puede entenderse simplemente como un árbol de nodos creado por el navegador. Cada uno de estos nodos tiene sus propias propiedades y métodos que pueden ser manipulados usando JavaScript.

// La capacidad de manipular el DOM es una de las habilidades más únicas y útiles de JavaScript.

// La imagen siguiente ofrece una representación visual del aspecto del árbol DOM.

// Window Object
//
console.log(window);

// El Documento
// La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).
// El árbol DOM incluye elementos como <body> y <table>, entre muchos otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.
console.log(document);
console.log(document.title);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);

// Cómo seleccionar elementos en el DOM
// Para poder manipular un elemento en el DOM, tienes que seleccionar ese elemento en particular. Por suerte para nosotros tenemos 4 formas principales de seleccionar elementos.

//Una vez que hayas seleccionado un elemento, puede añadir estilos al elemento, manipular sus atributos y recorrer los elementos padre e hijo.

// 1. getElementById Method
// // La forma más común de acceder a un elemento HTML es utilizar el id del elemento.
//El id distingue entre mayúsculas y minúsculas. Por ejemplo, el "dom-manipulation" y el "Dom-manipulation" son ids totalmente diferentes.
console.log(document.getElementById("wutang"));

// 2. getElementsByClassName() Method
// Este método devuelve una colección de todos los elementos del documento con el nombre de clase especificado.
// Por ejemplo, nuestra página HTML de abajo contiene 5 elementos con class="wuTang".
console.log(document.getElementsByClassName("wuTang"));
console.log(document.getElementsByClassName("wuTang")[3]);

// 3. getElementsByTagName() Method
// Este método acepta un nombre de etiqueta y devuelve todos los elementos del nombre de etiqueta especificado en el orden en que aparecen en el documento.
console.log(document.getElementsByTagName("h5"));
console.log(document.getElementsByTagName("h5")[4]);

// 4. querySelector() Method
// Devuelve el primer valor que coincida con el selector que se le da. Este método puede aceptar todos los selectores de estilo CSS, lo que le permite seleccionar por etiqueta, clase o ID.
console.log(document.querySelector("#query-selector"));
console.log(document.querySelector(".hipHop"));
console.log(document.querySelector(".myLove"));
console.log(document.querySelector("h5"));
console.log(document.querySelector("#query-selector .hipHop .myLove"));
console.log(document.querySelector("#query-selector .myLove"));

// 5.querySelectorAll() Method
// Funciona de forma similar a la anterior, que devuelve una colección de listas de nodos con todos los elementos coincidentes.
console.log(document.querySelectorAll(".wuTang"));

// --------------------------------------------

// Cómo recorrer el documento
// A estas alturas estarás de acuerdo conmigo en que todo en un documento HTML es un nodo.
// También el texto dentro de los elementos HTML son nodos de texto.

// Con el DOM de HTML, puedes navegar por el árbol de nodos y acceder a los nodos en el árbol usando las relaciones de nodos de las que hablamos antes (padre, hijo(s), hermano(s), etc.).

// Se pueden crear nuevos nodos, y todos los nodos pueden ser modificados o eliminados.

// Un pequeño repaso
// Cada nodo tiene exactamente un padre, excepto el nodo superior (que no tiene padre).
// Un nodo puede tener más de un hijo.
// Los hermanos son nodos con el mismo padre.
// En esta sección, vamos a ver cómo obtener el elemento padre, los hermanos de un elemento y los hijos de un elemento. Utilizaré las siguientes propiedades de nodo para lograr estas cosas:

// - parentNode
// - childrenNodes
// - firstElementChild
// - lastElementChild
// - nextElementSibling
// - previousElementSibling

// Last Element Child
console.log(document.querySelector("#traverse-document").lastElementChild);

// First Element Child
console.log(document.querySelector("#traverse-document").firstElementChild);

// Children
console.log(document.querySelector("#traverse-document").children);
console.log(document.querySelector("#traverse-document").children[4]);

// parentNode
console.log(document.querySelector("#second-child").parentNode);

// parentElement
console.log(document.querySelector("#second-child").parentElement);

// nextElementSibling
console.log(document.querySelector("#traverse-document").nextElementSibling);

// previousElementSibling
console.log(
  document.querySelector("#traverse-document").previousElementSibling
);



//como crear elementos

const createElement =document.createElement("div");
console.log(createElement);

console.log(document.querySelector("#firstchild"));

//Establecer texto mediante keys de innerHTML i innerTEXT

createElement.innerHTML ="texto agregado con innerHTML";
createElement.innerText ="texto agregado con inner Text"; // si tenemos ambois innerHTML y inner TEXT la conola solo toma el innerText

console.log(createElement);


// /como anexar elemento creado en js al doc HTML 
// 

//v1 - 1 sólo selector

let parentElement = document
    .querySelector("#traverse-document") // transverse-document es el parent div y mi nuevo elemento se va a poner hasta abajo de este

    .appendChild(createElement);

// v2 - añadir clases

createElement.className = "ejemplo1";
console.log(createElement);


// Excercise 1 - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>



//create div
let classExcerciseOneDiv = document.createElement("div");
//add id to my div
classExcerciseOneDiv.id = "insert-p"

// add div under fito element
let coolSibling = document
.querySelector("#i-am-a-cool-sibling")
.appendChild(classExcerciseOneDiv);
console.log(classExcerciseOneDiv);


//create p
let classExcerciseOneP = document.createElement("p");
console.log(classExcerciseOneP);
classExcerciseOneP.innerHTML ="texto agregado con innerHTML dentro de la p";

//add p under my new div

document.querySelector("#insert-p").appendChild(classExcerciseOneP)


console.log(classExcerciseOneDiv);
// classExcerciseOne.idName =  "insert-p"
// console.log(classExerciseOneDiv);


// Excercise 2 - Crea un <div id="nested"></div> desde código 
let excerciseTwo = document.createElement("div");
excerciseTwo.id = "nested"
excerciseTwo.innerHTML = "este es el nested"

document.querySelector("body").appendChild(excerciseTwo)
console.log(excerciseTwo);
