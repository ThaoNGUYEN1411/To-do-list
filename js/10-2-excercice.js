const input = document.querySelector("input");
const add = document.querySelector(".add");
const listTaches = document.querySelector(".list-taches");
const section = document.querySelector("section");

add.addEventListener("click", (e) => {
  if (input.value) {
    //creer HTML
    const div = document.createElement("div");
    const p = document.createElement("p");
    const divIcons = document.createElement("div");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const imgEdition = document.createElement("img");
    a1.href = "#";
    imgEdition.src = "img/edit.png";
    const imgRemove = document.createElement("img");
    a2.href = "#";
    imgRemove.src = "img/remove.png";
    //Ajouter les balise dans div
    a1.appendChild(imgEdition);
    a2.appendChild(imgRemove);
    divIcons.append(a1, a2);
    div.append(p, divIcons);

    //style CSS
    div.style.backgroundColor = "rgb(205 233 235)";
    div.style.width = "37vw";
    div.style.margin = "0 auto";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.marginBottom = "15px";
    p.style.display = "block";
    p.style.width = "80%";
    p.style.padding = "3px 10px";
    p.style.marginLeft = "10px";
    divIcons.style.padding = "0 10px";
    a1.style.padding = "0 10px";
    //fin style CSS

    p.innerText = input.value;
    section.appendChild(div);
    //declarer bouton validation
    const aValider = document.createElement("a");
    aValider.href = "#";
    const imgValider = document.createElement("img");
    imgValider.src = "img/check.png";
    aValider.appendChild(imgValider);

    a1.addEventListener("click", (e) => {
      p.style.background = "#58f47f";
      p.setAttribute("contenteditable", "true");
      divIcons.replaceChild(aValider, a1);
      //corriger submit
      aValider.addEventListener("click", (e) => {
        console.log(input);
        p.removeAttribute("contenteditable", "true");
        divIcons.replaceChild(a1, aValider);
        console.log(divIcons);
        p.style.background = "rgb(205 233 235)";
      });
    });

    //bouton suprimer
    a2.addEventListener("click", (e) => {
      div.remove();
    });
  } input.value = '';
});

