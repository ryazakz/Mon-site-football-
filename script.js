function ajouterPronostic() {
    const input = document.getElementById("new-pronostic");
    const pronostic = input.value.trim();
    
    if (pronostic !== "") {
        const ul = document.getElementById("pronostics-list");
        const li = document.createElement("li");
        li.textContent = pronostic;
        ul.appendChild(li);
        input.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pronostics = ["Barcelone vs Inter Milan - 2-1", "Real Madrid vs Manchester City - 1-3"];
    const resultats = ["Barcelone vs Inter Milan - 2-1", "Real Madrid vs Manchester City - 2-2"];

    pronostics.forEach(pronostic => {
        const ul = document.getElementById("pronostics-list");
        const li = document.createElement("li");
        li.textContent = pronostic;
        ul.appendChild(li);
    });

    resultats.forEach(resultat => {
        const ul = document.getElementById("resultats-list");
        const li = document.createElement("li");
        li.textContent = resultat;
        ul.appendChild(li);
    });
});
