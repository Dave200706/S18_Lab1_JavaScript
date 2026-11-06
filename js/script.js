function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  
  let demo = document.getElementById("demo"); //demo c'est la partie du milieu, on prend le texte du milieu et on enléve le texte
  demo.innerHTML=""; //innerHTML ca veut dire qu'on remplace le texte par "". 


  let qty = document.getElementById("qty").value; //Tu cherche le id qty dna ce cas c'est le nombre
  let titre = document.getElementById("titre").value; //tu crée la valeur titre pour chercher l'id de titre dans ce cas c'est titre.
  let contenu = document.getElementById("contenu").value; //tu crée le let contenu et tu cherche l'id de "contenu"

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
  let couleur = document.getElementById("couleur").value; //il faut chercher la partie couleur. 
  let paragraphe = document.getElementById("demo").getElementsByTagName("p"); //Ensuite appeler la partie p.
  for(let i=0; i<paragraphe.length;i++){//faire un foreacj pour que les p peuvent changer de couleur
    paragraphe[i].style.color = couleur;//nomer la couleur pour la changer
  }
  

}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  
}