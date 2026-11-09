function genererContenu() {
    // Boucle pour générer les éléments
    for (let i = 0; i < 5; i++) {
        
        // 1. Création de l'élément h2
        let monH2 = document.createElement("h2");
        monH2.textContent = "Titre par défaut " + i;

        // Ajout de l'attribut "monId"
        monH2.setAttribute("monId", "Id" + i);

        // 2. Création de l'élément <aside>
        let monAside = document.createElement("aside");
        monAside.textContent = "Plus de détails à propos de: " + i;

        // 3. Gestionnaire d'événement mousedown sur le h2
        monH2.addEventListener("mousedown", function (event) {
            console.log(event);
            console.log(event.target);
            let idAttribut = event.target.getAttribute("monId");
            console.log(idAttribut);

            if (event.target.style.backgroundColor === "gray") {
                event.target.style.backgroundColor = "white";
            } else {
                event.target.style.backgroundColor = "gray";
            }
        });

        // 4. Gestionnaires mouseenter et mouseleave sur le h2 pour le <aside>
        monH2.addEventListener("mouseenter", function (event) {
            monAside.classList.add("show");
        });

        monH2.addEventListener("mouseleave", function (event) {
            monAside.classList.remove("show");
        });

        // 5. Ajout des éléments dans le document (le h2, puis l'aside juste après)
        document.body.appendChild(monH2);
        document.body.appendChild(monAside);
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
  let bouton = document.getElementById("btnClass").value;
  let toutBouton = document.getElementsByTagName("button");
  for (let index = 0; index < toutBouton.length; index++) {
    toutBouton[index].className = bouton;
    
  }
}