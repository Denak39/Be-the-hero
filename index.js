const currentRoomElement = document.getElementById("current-room");
const currentImage = document.getElementById("main-box");

const player = {
  health: 100,
  name: "default player",
  diceSides: 6,
};

const goblin = {
  health: 10,
  name: "spear goblin",
  diceSides: 3,
  description:
    "The goblin approaches menacingly, seems like he wants a taste of your sword!",
  image: "./images/goblin.jpeg",
};

const golem = {
  health: 20,
  name: "buffed golem",
  diceSides: 4,
};

const minotaur = {
  health: 50,
  name: "scary minotaur",
  diceSides: 5,
};

const ainz = {
  health: 75,
  name: "Lord Ainz Ooal Gown",
  diceSides: 6,
};

const items = {
  potion: {
    health: 15,
    amount: 0,
  },
};

let scenario = {
  start: {
    steps: [{ display: "Start game", goTo: "dungeonDoor" }],
    description:
      "You are a mercenary. Your life hasn't been easy. You grew up alone, surviving by eating tavern leftovers right off the trash bin. You had to constantly fight for your life, and as such, grew stronger. You are now considered as one of the greatest warriors to have ever stepped foot in the kingdom of Alamur. You’ve been hired by King Maverick to kill Lord Ainz Ooal Gown, the Master of this place.",
    image: "./images/merc2.jpg",
  },
  dungeonDoor: {
    steps: [
      { display: "Enter anyway!", goTo: "hallway" },
      { display: "Chicken out...", goTo: "gameover" },
    ],
    description:
      "Here you are, in front of the dungeon’s door. No easy task, considering he is the mightiest creature of this world. You think to yourself there must be an easier way to make money...",
    image: "images/dungeon-door.jpeg",
  },
  gameover: {
    steps: [{ display: "Restart game", goTo: "start" }],
    description:
      "you died! You let down king Maverick, and the kingdom. Your memory will fade into darkness, and your name will remain a fainting echo in the everlasting eternity",
    image: "./images/gameover.png",
  },
  hallway: {
    ennemy: goblin,
    description:
      "You push the door and a long corridor appears in front of you. There isn’t much light, you can barely see. You walk slowly, trying to look for traps. Suddenly, you hear laughters, but not the usual friendly banter you hear at the tavern. These laughters are evil.... GOBLINS! You draw your sword instinctively. You don’t have much time to react, what do you do?",
    steps: [
      { display: "Fight", goTo: "Fight" },
      { display: "Try to sneak past the goblin", goTo: "kitchenLabo2" },
    ],
    image: "images/Hallway.jpg",
  },
  kitchenLabo: {
    ennemy: golem,
    description:
      "The goblin drowning in its own intestines, you proceed to climb the stairs at the end of corridor. You arrive at what seems to be a mix of a kitchen and a laboratory. An imposing golem is in the middle. He is facing the other way, and as a consequence hasn't noticed you...yet.",
    steps: [
      { display: "Fight", goTo: "Fight" },
      { display: "Try to sneak past the golem", goTo: "bedroom2" },
    ],
    image: "images/Laboratory.jpg",
  },
  kitchenLabo2: {
    ennemy: golem,
    description:
      "You sneak past the goblin while he is staring at a fire and you proceed to climb the stairs at the end of corridor. You arrive at what seems to be a mix of a kitchen and a laboratory. An imposing golem is in the middle. He is facing the other way, and as a consequence hasn't noticed you...yet.",
    steps: [
      { display: "Fight", goTo: "Fight" },
      { display: "Try to sneak past the golem", goTo: "bedroom2" },
    ],
    image: "images/Laboratory.jpg",
  },
  bedroom: {
    ennemy: minotaur,
    description:
      "The weird golem scientist dead, you proceed through the only door of the room. A giant bed, a crystal ball to stay up to date on events around the world ... this must be Lord Ainz Ooal Gown's room. At the bed's foot you see a chest. You try to open it thinking there MUST be some great loot, you know, considering Ainz is the most powerful yatti yatta... As you approach the chest, a light starts emitting from it, totally blinding you. When you can finally open your eyes, a freakin Minotaur stands before you...",
    steps: [
      { display: "Fight", goTo: "Fight" },
      { display: "Try to sneak past the minotaur", goTo: "bossroom2" },
    ],
    image: "",
  },
  bedroom2: {
    ennemy: minotaur,
    description:
      "You proceed to carefully cross the room while sticking to the walls. You manage to reach the next room. A giant bed, a crystal ball to stay up to date on events around the world ... this must be Lord Ainz Ooal Gown's room. At the bed's foot you see a chest. You try to open it thinking there MUST be some great loot, you know, considering Ainz is the most powerful yatti yatta... As you approach the chest, a light starts emitting from it, totally blinding you. When you can finally open your eyes, a freakin Minotaur stands before you...",
    steps: [
      { display: "Fight", goTo: "Fight" },
      { display: "Try to sneak past the minotaur", goTo: "bossroom2" },
    ],
    image: "",
  },
  bossRoom: {
    ennemy: ainz,
    description:
      "Right after defeating the minotaur, you’re teleported to a huge room. At the very end, you can see an imposing silhouette. Suddenly, you hear a voice in your head. -'Congratulations on making it this far, but this is where your adventure ends.' As you try to process what’s happening, Lord AInz Ooal Gown appears before you. There is no way out. You have to fight for your life.",
    steps: ["ainz", "gameover", "end"],
  },
  bossRoom2: {
    ennemy: ainz,
    description:
      "Right after defeating the minotaur, you’re teleported to a huge room. At the very end, you can see an imposing silhouette. Suddenly, you hear a voice in your head. -'Congratulations on making it this far, but this is where your adventure ends.' As you try to process what’s happening, Lord AInz Ooal Gown appears before you. There is no way out. You have to fight for your life.",
    steps: [{ display: "Fight", goTo: "Fight" }],
    image: "",
  },
  end: {
    steps: [],
  },
};

var menuTheme = new Audio();

menuTheme.src = "./Sound/Skyrim.mp3";
menuTheme.volume = 0;
menuTheme.play();

let currentStep;
let game;

console.log(scenario.start);

function startGame() {
  currentStep = "start";
  game = scenario[currentStep];
}

function drawStep() {
  console.log("current game infos");
  console.log(game);

  currentImage.style.backgroundImage = "url(./" + game.image + ")";
  currentRoomElement.innerHTML = "";
  currentRoomElement.innerHTML += "<p>" + game.description + "</p>";
  game.steps.forEach((step) => {
    currentRoomElement.innerHTML += `<button name= ${step.goTo}>${step.display}</button>`;
    // bedr0om.style.display = "true";
  });
  const buttons = currentRoomElement.querySelectorAll("button");
  buttons.forEach(
    (button) =>
      (button.onclick = function (event) {
        if (event.target.name === "Fight") {
          fight(game.ennemy);
        } else changeRoom(event.target.name);
      })
  );
}

function fight(ennemy) {}

function setNextStep(next) {
  //console.log("current Step ?", currentStep);
  //console.log(game.description);
  if (game.ennemy) console.log(game.ennemy);
  currentStep = scenario[currentStep].steps[next];
  game = scenario[currentStep];
}

startGame();
drawStep(game);

// faire un for loop (i) avec 1/2/3 pr paramétrer mes nextsteps
function changeRoom(currentStep) {
  game = scenario[currentStep];
  drawStep();
  // for (let i = 0; i < 5; i++) {
  //   // Runs 5 times, with values of step 0 through 4.
  //   if (step === 1) {
  //     return setNextStep(1);
  //   } else if (step === 2) {
  //     return setNextStep(2);
  //   } else {
  //     return setNextStep(3);
  //   }
  // }
}
// if (currentStep === startGame(game) => setNextStep()
/*
setTimeout(() => {
  setNextStep(0);
  drawStep(game);
  setTimeout(() => {
    setNextStep(0);
    drawStep(game);
    setTimeout(() => {
      setNextStep(0);
      drawStep(game);
    }, 5000);
  }, 5000);
}, 5000);
*/
let bedr0om = document.getElementById("bedroom");
bedroom.style.display = "none";

function rollDice(diceSides) {
  return 1 + Math.floor(Math.random() * diceSides);
}

const dodge = () => rollDice(20);

function dodgeGoblin() {
  if (parseFloat(dodge()) > 16) {
    console.log("You dodged");
  } else {
    Swal.fire("You need to attack the goblin");
  }
}
function attackGoblin() {
  let leaveRoom = document.getElementById("goblinRoom");
  let button = '<button href="kitchenLab.html">Test</button>';
  if (goblin.health <= 0) {
    console.log("it's dead");
  } else {
    goblin.health -= parseFloat(rollDice(6));
    if (goblin.health <= 0) {
      potion.amount += 1;
      leaveRoom.innerHTML = button;
    } else {
      player.health -= parseFloat(rollDice(goblin.diceSides));
      if (player.health <= 0) {
        Swal.fire('<button href="die.html">Game Over</button>');
      }
    }
  }
  console.log(goblin.health);
  console.log(items.potion.amount);
}

function drinkPotion() {
  if (items.potion.amount > 0) {
    player.health += items.potion.health;
    items.potion.amount -= 1;
  }
  console.log(items.potion.amount);
  console.log(player.health);
}
