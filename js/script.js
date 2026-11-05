function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  
  let demo = document.getElementById("demo");
  demo.innerHTML="";

  

  let qty = document.getElementById("qty").value;
  let titre = document.getElementById("titre").value;
  let contenu = document.getElementById("contenu").value;

  for (let index = 0; index < qty; index++) {
    let h = document.createElement("h2");
    h.textContent = titre + " " + index;
    demo.appendChild(h);

    let p = document.createElement("p");
    p.textContent = contenu + " " + index;
    demo.appendChild(p);  
  }






}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let demo = document.getElementById("demo")
  let elements = demo.getElementById("couleur");

  elements.style.color= "red";
  elements.style.backgroundColor = "blue";
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}