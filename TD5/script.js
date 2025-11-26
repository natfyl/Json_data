const flexConteneur = document.getElementById("conteneur_flex");

// Donnees de secours pour le chargement en file:// (sans serveur local)
const fallbackSites = [
  { nom: "Deezer", url: "https://www.deezer.com/fr/", url_image: "Images/Deezer.png" },
  { nom: "Netflix", url: "https://www.netflix.com/", url_image: "Images/Netflix.png" },
  { nom: "Apple", url: "https://www.apple.com/fr/", url_image: "Images/Apple.png" },
  { nom: "UHA", url: "https://e-services.uha.fr/fr/index.html", url_image: "Images/UHA.png" },
  { nom: "CodePen", url: "https://codepen.io/", url_image: "Images/CodePen.png" },
  { nom: "ImgBB", url: "https://imgbb.com/", url_image: "Images/ImgBB.png" },
  { nom: "Gmap", url: "https://www.google.com/maps/", url_image: "Images/Gmap.png" },
  { nom: "Wiki", url: "https://fr.wikipedia.org/wiki/Wiki", url_image: "Images/Wiki.png" },
];

function renderSites(liste_site) {
  liste_site.forEach((site) => {
    const flexItem = document.createElement("figure");
    flexItem.classList.add("f_item");
    flexItem.innerHTML = `
    <a href="${site.url}" class="info_bulle">
      <img src="${site.url_image}" alt="${site.nom}">
      <span class="ib_text">${site.nom}</span>
    </a>`;
    flexConteneur.appendChild(flexItem);
  });
}

fetch("data_page_accueil.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  })
  .then((liste_site) => renderSites(liste_site))
  .catch((err) => {
    console.warn("Impossible de charger les donnees JSON, usage du fallback local.", err);
    renderSites(fallbackSites);
  });
