let life = 3;
let score = 0;

const soundtrack = new Audio("audio/soundtrack.mp3");
soundtrack.volume = "0.3";
soundtrack.play();

const islands = document.getElementById("islands");

function gameInstructions() {
    alert("🌴🌴Welcome to Tresure Island🌴🌴\n\nExplore Islands, Find Tresures And Avoid Pirates\n\n⏵Every Tresure Gives 100p\n⏵Each pirate will cost a life\n⏵You Start With 3 Lives\n\nPlayer life: 💚 💚 💚 ");
}


function pirateEncounter1() {
    alert("Oh no! You've encountered a pirate and lost a life. Be careful!\nPlayer life: 💚 💚 🖤")
}

function pirateEncounter2() {
    alert("Oh no! You've encountered a pirate and lost a life. Be careful!\nPlayer life: 💚 🖤 🖤")
}

function pirateEncounter3() {
    window.location.href = "index.html";
    alert(`💀 🕱  GAME OVER  🕱 💀\nYou've lost all your lives. Better luck next time!\nPlayer life: 🖤 🖤 🖤\n\nTotal earned points: ${score}`);

}
function startGame() {
    window.location.href = "spelet.html";
    gameInstructions();
}



function changeOpacity(card) {
    let result = rollDice();

    let invisibleImage1 = card.querySelector(".invisibleimage1");
    let invisibleImage2 = card.querySelector(".invisibleimage2");

    let moneySound = new Audio("audio/money.mp3");
    let pirateSound = new Audio("audio/pirate.wav");

    if (result < 75) {
        invisibleImage1.style.opacity = '1.0';
        moneySound.play();
        score += 100;

    } 
    else {
        invisibleImage2.style.opacity = '1.0';
        pirateSound.play();
        life--;
        if (life === 2) {
            setTimeout(function() {
                pirateEncounter1();
            }, 1000); 
        }
        
        if (life === 1) {
            setTimeout(function() {
                pirateEncounter2();
            }, 1000); 
        }
        
        if (life === 0) {
            setTimeout(function() {
                pirateEncounter3();
            }, 1000); 
        }
        
    }
}


function rollDice() {
    return Math.floor(Math.random() * 100) + 1;
}


let islandsData =
    [
        { 'visibleimage': 'images/1.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Tivoli Island' },
        { 'visibleimage': 'images/2.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Ants Island' },
        { 'visibleimage': 'images/3.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Camping Island' },
        { 'visibleimage': 'images/4.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Crab Island' },
        { 'visibleimage': 'images/5.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Circus Island' },
        { 'visibleimage': 'images/6.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Crocodile Island' },
        { 'visibleimage': 'images/7.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Dinosaur Island' },
        { 'visibleimage': 'images/8.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Fruty Island' },
        { 'visibleimage': 'images/9.png', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Hunted Island' },
        { 'visibleimage': 'images/10.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'IceCream Island' },
        { 'visibleimage': 'images/11.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Mermaid Island' },
        { 'visibleimage': 'images/12.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Monkey Island' },
        { 'visibleimage': 'images/13.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Mushroom Island' },
        { 'visibleimage': 'images/14.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'NorthPole Island' },
        { 'visibleimage': 'images/15.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Parrot Island' },
        { 'visibleimage': 'images/16.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Pineapple Island' },
        { 'visibleimage': 'images/17.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Pirat Island' },
        { 'visibleimage': 'images/18.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Princess Island' },
        { 'visibleimage': 'images/19.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Pumpkin Island' },
        { 'visibleimage': 'images/20.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'SantaClaus Island' },
        { 'visibleimage': 'images/21.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Shark Island' },
        { 'visibleimage': 'images/22.png', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'SuperMario Island' },
        { 'visibleimage': 'images/23.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Donut Island' },
        { 'visibleimage': 'images/24.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Turtle Island' },
        { 'visibleimage': 'images/25.jpg', 'invisibleimage1': 'images/giphy.gif', 'invisibleimage2': 'images/pirate.gif', 'islandname': 'Fishy Island' },

    ]

islandsData.map(function (islandData) {
    console.log(islandData);

    let card = document.createElement("div")
    card.setAttribute("class", "card")
    let visibleImage = document.createElement("img")
    visibleImage.src = islandData.visibleimage;
    visibleImage.setAttribute("class", "visibleimage")

    let invisibleImage1 = document.createElement("img")
    invisibleImage1.src = islandData.invisibleimage1;
    invisibleImage1.setAttribute("id", "invisibleimage1")
    invisibleImage1.setAttribute("class", "invisibleimage1")

    let invisibleImage2 = document.createElement("img")
    invisibleImage2.src = islandData.invisibleimage2;
    invisibleImage2.setAttribute("id", "invisibleimage2")
    invisibleImage2.setAttribute("class", "invisibleimage2")

    let title = document.createElement("h3")
    title.innerHTML = islandData.islandname;

    let digButton = document.createElement("input")
    digButton.setAttribute("type", "button")
    digButton.setAttribute("value", "Search For Tresure")
    digButton.setAttribute("onclick", "changeOpacity(this.parentNode)")
    digButton.setAttribute("class", "btn")


    card.appendChild(visibleImage)
    card.appendChild(invisibleImage1)
    card.appendChild(invisibleImage2)
    card.appendChild(title)
    card.appendChild(digButton)

    islands.appendChild(card)

})
