// Ajoute des pronostics
const pronostics = [
    "Barcelone vs Inter : 2-1",
    "Real Madrid vs Manchester City : 3-2",
    "PSG vs Bayern Munich : 1-2"
];

const pronosticsList = document.getElementById("pronostics-list");
pronostics.forEach(prono => {
    let li = document.createElement("li");
    li.textContent = prono;
    pronosticsList.appendChild(li);
});

// Ajoute des résultats
const resultats = [
    "Barcelone 2-1 Inter",
    "Real Madrid 3-2 Manchester City",
    "PSG 1-2 Bayern Munich"
];

const resultatsList = document.getElementById("resultats-list");
resultats.forEach(resultat => {
    let li = document.createElement("li");
    li.textContent = resultat;
    resultatsList.appendChild(li);
});

// Ajoute un graphique
const ctx = document.getElementById("stats-chart").getContext("2d");
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Barcelone", "Inter", "Real Madrid", "Manchester City", "PSG", "Bayern Munich"],
        datasets: [{
            label: 'Buts marqués',
            data: [2, 1, 3, 2, 1, 2],
            backgroundColor: '#f4f4f4',
            borderColor: '#f4f4f4',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
