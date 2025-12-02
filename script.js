// Data
const data = [
    { name: "Joel Embiid", team: "Philadelphia 76ers", points: 33, rebounds: 10.8, assists: 5.7 },
    { name: "Jalen Brunson", team: "New York Knicks", points: 32.4, rebounds: 3.3, assists: 7.5 },
    { name: "Shai Gilgeous-Alexander", team: "Oklahoma City Thunder", points: 30.2, rebounds: 7.2, assists: 6.4 },
    { name: "Tyrese Maxey", team: "Philadelphia 76ers", points: 29.8, rebounds: 5.2, assists: 6.8 },
    { name: "Donovan Mitchell", team: "Cleveland Cavaliers", points: 29.6, rebounds: 5.4, assists: 4.7 },
    { name: "LeBron James", team: "Los Angeles Lakers", points: 27.8, rebounds: 6.8, assists: 8.8 },
    { name: "Stephen Curry", team: "Golden State Warriors", points: 30.1, rebounds: 5.3, assists: 6.9 },
    { name: "Kevin Durant", team: "Phoenix Suns", points: 26.8, rebounds: 6.5, assists: 3.3 }
    // يمكن إضافة باقي اللاعبين بنفس الطريقة
];

// DOM elements
const tableBody = document.getElementById("player-rows");
const searchInput = document.getElementById("search");
const teamFilter = document.getElementById("team-filter");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Populate team filter
const teams = [...new Set(data.map(player => player.team))];
teams.forEach(team => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamFilter.appendChild(option);
});

// Display players
function displayPlayers(players) {
    tableBody.innerHTML = "";
    players.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.points}</td>
            <td>${player.rebounds}</td>
            <td>${player.assists}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial display
displayPlayers(data);

// Search event
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = data.filter(player => player.name.toLowerCase().includes(query));
    displayPlayers(filtered);
});

// Filter event
teamFilter.addEventListener("change", () => {
    const selected = teamFilter.value;
    const filtered = selected === "all" ? data : data.filter(player => player.team === selected);
    displayPlayers(filtered);
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
