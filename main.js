function createGame(player, hour, player2) {
    return `
    <li>
                        <img src="./Assets/icon-${player}.svg" alt="${player}"><strong>${hour}</strong>
                        <img src="./Assets/icon-${player2}.svg" alt="${player2}">
                    </li>
    `
}
function createCard(date,day,games) {
    return`
            <div class="scard">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
    `
}

document.querySelector("#cards").innerHTML=       
            createCard('24/11','Quinta',createGame('brasil','16:00','serbia')) +
            createCard('28/11','Segunda',createGame('brasil','13:00','camaroes'))+
            createCard('02/12','Sexta',createGame('brasil','16:00','suiça'))
        

