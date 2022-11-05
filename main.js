function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/${player1}.svg" alt="Bandeira do ${player2}">
        <strong>${hour}</strong>
        <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}">
    </li>  
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
    createCard('24/11', 'quinta', 
    createGame("suica", "07:00", "camaroon") +
    createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")
    ) +
    createCard('28/11', 'segunda', 
    createGame("corea", "10:00", "ghana") +
    createGame("brazil", "13:00", "suica") +
    createGame("portugal", "16:00", "uruguay")
    ) +
    createCard('02/12', 'sexta', 
    createGame("brazil", "16:00", "camaroon")) 
    


