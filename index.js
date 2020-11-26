// import { player } from "./data/player";
const currentRoomElement = document.getElementById("current-room");
const currentImage = document.getElementById("main-box");
// const health = {
//   goblin: 10,
//   golem: 20,
// };
const player = {
  health: 100,
  name: "default player",
  diceSides: 6,
};

const goblin = {
  // health: health.goblin,
  health: 10,
  name: "Spear goblin",
  diceSides: 3,
  dodgeSide: 17,
  description:
    "The goblin approaches menacingly, seems like he wants a taste of your sword!",
  image: "./images/goblin.jpeg",
};

const golem = {
  health: 20,
  name: "Buffed golem",
  diceSides: 4,
  dodgeSide: 18,
  description:
    "The golem suddenly turns to face you and slams the ground. The fight begins...",
  image: "./images/golem.jpeg",
};

const minotaur = {
  health: 50,
  name: "Scary minotaur",
  diceSides: 5,
  dodgeSide: 19,
  description:
    "The minotaur's roar echoes throughout the room. it's not going to be an easy fight.",
  image: "./images/minotaur.jpeg",
};

const ainz = {
  health: 70,
  name: "Lord Ainz Ooal Gown",
  diceSides: 6,
  description:
    "The Overlord approaches. You can feel his murderous aura overwhelming you. <br> ",
  image: "./images/overlord.jpg",
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
    description: `You are a <b>mercenary</b>. Your life hasn't been easy. You grew up alone, surviving by eating tavern leftovers right off the trash bin. You had to constantly fight for your life, and as such, grew stronger. You are now considered as one of the greatest warriors to have ever stepped foot in the <span class="location">kingdom of Alamur</span>. You’ve been hired by King Maverick to kill Lord Ainz Ooal Gown, the Master of this place.`,
    image: "./images/merc5.jpg",
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
      "You failed! You let down king Maverick, and the kingdom. Your memory will fade into darkness, and your name will remain a fainting echo in the everlasting eternity",
    image: "./images/gameover2.png",
  },
  hallway: {
    ennemy: goblin,
    description: `You push the door and a long corridor appears in front of you. There isn’t much light, you can barely see. You walk slowly, trying to look for traps. Suddenly, you hear laughters, but not the usual friendly banter you hear at the tavern. These laughters are evil.... <span class="ennemy">GOBLINS!</span> You draw your sword instinctively. You don’t have much time to react, what do you do?`,
    steps: [
      { display: "Fight", goTo: "Fight", onFinish: "kitchenLabo" },
      {
        display: "Try to sneak past the goblin",
        goTo: "kitchenLabo2",
      },
    ],
    image: "images/Hallway.jpg",
  },
  kitchenLabo: {
    ennemy: golem,
    description: `The goblin drowning in its own intestines, you proceed to climb the stairs at the end of corridor. You arrive at what seems to be a mix of a kitchen and a laboratory. An imposing <span class="ennemy">golem</span> is in the middle. He is facing the other way, and as a consequence hasn't noticed you...yet.`,
    steps: [
      { display: "Fight", goTo: "Fight", onFinish: "bedroom" },
      { display: "Try to sneak past the golem", goTo: "bedroom2" },
    ],
    image: "images/Laboratory.jpeg",
  },
  kitchenLabo2: {
    ennemy: golem,
    description: `You sneak past the goblin while he is staring at a fire and you proceed to climb the stairs at the end of corridor. You arrive at what seems to be a mix of a kitchen and a laboratory. An imposing <span class="ennemy">golem</span> is in the middle. He is facing the other way, and as a consequence hasn't noticed you...yet.`,
    steps: [
      { display: "Fight", goTo: "Fight", onFinish: "bedroom" },
      { display: "Try to sneak past the golem", goTo: "bedroom2" },
    ],
    image: "images/Laboratory.jpeg",
  },
  bedroom: {
    ennemy: minotaur,
    description: `The golem dead, you proceed through the only door of the room. A giant bed, a crystal ball to stay up to date on events around the world ... this must be <span class="ennemy">Lord Ainz Ooal Gown</span>'s room. At the bed's foot you see a chest. You try to open it thinking there MUST be some great loot, you know, considering Ainz is the most powerful yatti yatta... As you approach the chest, a light starts emitting from it, totally blinding you. When you can finally open your eyes, a 5-feet tall <span class="ennemy">Minotaur</span> stands before you...`,
    steps: [
      { display: "Fight", goTo: "Fight", onFinish: "bossRoom" },
      { display: "Try to sneak past the minotaur", goTo: "bossroom2" },
    ],
    image: "./images/bedroom.jpg",
  },
  bedroom2: {
    ennemy: minotaur,
    description: `You proceed to carefully cross the room while sticking to the walls. You manage to reach the next room. A giant bed, a crystal ball to stay up to date on events around the world ... this must be <span class="ennemy">Lord Ainz Ooal Gown</span>'s room. At the bed's foot you see a chest. You try to open it thinking there MUST be some great loot, you know, considering Ainz is the most powerful yatti yatta... As you approach the chest, a light starts emitting from it, totally blinding you. When you can finally open your eyes, a 5-feet tall <span class="ennemy">Minotaur</span> stands before you...`,
    steps: [
      { display: "Fight", goTo: "Fight", onFinish: "bossRoom" },
      { display: "Try to sneak past the minotaur", goTo: "bossRoom2" },
    ],
    image: "./images/bedroom.jpg",
  },
  bossRoom: {
    ennemy: ainz,
    description: `The moment you deal the fatal blow to the beast, you’re teleported to a huge room. At the very end, you can see an imposing silhouette. Suddenly, you hear a voice in your head.<br>-<i>'Congratulations on making it this far, but this is where your adventure ends.'</i> <br>As you try to process what’s happening, <span class="ennemy">Lord AInz Ooal Gown</span> appears before you. There is no way out. You have to fight for your life.<br>You feel the <span class=\"item\">potion</span>'s effects. Good timing, as you will need all your strength to defeat the Overlord.`,
    steps: [{ display: "Continue", goTo: "Fight", onFinish: "end" }],
    image: "./images/throne.jpg",
  },
  bossRoom2: {
    ennemy: ainz,
    description: `You ran past the minotaur by going under him, and as you put your hand on the doorknob, you are teleported to a huge room. At the very end, you can see an imposing silhouette. Suddenly, you hear a voice in your head.<br>-<i>'Congratulations on making it this far, but this is where your adventure ends.'</i> <br>As you try to process what’s happening, <span class="ennemy">Lord AInz Ooal Gown</span> appears before you. There is no way out. You have to fight for your life. <br>You feel the <span class=\"item\">potion</span>'s effects. Good timing, as you will need all your strength to defeat the Overlord.`,
    steps: [{ display: "Fight", goTo: "Fight" }],
    image: "./images/throne.jpg",
  },
  end: {
    description: `After hours of battle, you finally manage to put the <span class="ennemy">Overlord</span> on his knees. He looks up to you as if he had been waiting for this moment his whole life. With a swift hit, you put an end to his reign of terror. Now all that's left to do is return to king Maverick to claim your price and glory.`,
    steps: [{ display: "Restart game", goTo: "start" }],
    image: "./images/gratz.jpg",
  },
};

var menuTheme = new Audio();

menuTheme.src = "./Sound/Skyrim.mp3";
menuTheme.volume = 0.2;
menuTheme.play();

let currentStep;
let game;
let afterFight;

console.log(scenario.start);

function startGame() {
  currentStep = "start";
  game = scenario[currentStep];
}

function drawStep() {
  currentImage.style.backgroundImage = "url(./" + game.image + ")";
  if (currentStep !== "start") {
    updatePLayerHealth();
  } else {
    const hp = document.getElementById("health-bar");
    hp.innerHTML = "";
  }
  currentRoomElement.innerHTML = "";
  currentRoomElement.innerHTML += "<p>" + game.description + "</p>";
  game.steps.forEach((step) => {
    currentRoomElement.innerHTML += `<button name= ${step.goTo}>${step.display}</button>`;
  });
  const buttons = currentRoomElement.querySelectorAll("button");
  buttons.forEach(
    (button) =>
      (button.onclick = function (event) {
        const isSneakbtn = event.target.innerText.includes("Try to sneak past");
        if (event.target.name === "Fight") {
          fight(game.ennemy);
        } else if (event.target.name === "start") {
          player.health = 100;
          goblin.health = 10;
          golem.health = 20;
          minotaur.health = 50;
          ainz.health = 70;
          changeRoom(event.target.name);
        } else if (isSneakbtn) {
          if (dodgeGoblin(game.ennemy.dodgeSide)) {
            changeRoom(event.target.name);
          } else {
            fight(game.ennemy);
          }
        } else {
          changeRoom(event.target.name);
        }
      })
  );
}

function attachLink(classname, fctn) {
  const buttons = currentRoomElement.getElementsByClassName(classname);
  for (const button of buttons) {
    button.onclick = function (event) {
      fctn();
    };
  }
}
// mettre à jour
function updateText(classname, text) {
  const buttons = currentRoomElement.getElementsByClassName(classname);
  for (const button of buttons) {
    button.innerHTML = text;
  }
}

function fight(ennemy) {
  if (game.ennemy.health > 0) {
    console.log(game.ennemy);
    currentRoomElement.innerHTML = "";
    currentRoomElement.innerHTML += "<p>" + ennemy.description + "</p>";
    currentImage.style.backgroundImage = "url(./" + game.ennemy.image + ")";
    console.log(game.ennemy.image);
    currentRoomElement.innerHTML += '<div class="fightResult"></div>';
    currentRoomElement.innerHTML +=
      '<button id="atkbtn" class="attackGoblin"><i class="fas fa-dice-six fa-4x"></i></button>';
    let atkbtn = document.getElementById("atkbtn");
    attachLink("attackGoblin", attackGoblin);
  }
}

function updatePLayerHealth() {
  const hp = document.getElementById("health-bar");
  let healthColor = "green";
  if (player.health < 70) {
    healthColor = "yellow";
  }
  if (player.health < 30) {
    healthColor = "red";
  }
  hp.innerHTML =
    '<span class="' +
    healthColor +
    '">' +
    player.health +
    " player hp left" +
    "</span>";
}

startGame();
drawStep(game);

function changeRoom(newStep) {
  game = scenario[newStep];
  currentStep = newStep;
  drawStep();
}

let fightbtns = document.getElementById("fight");
fightbtns.style.display = "none";

function rollDice(diceSides) {
  return 1 + Math.floor(Math.random() * diceSides);
}

const dodge = () => rollDice(20);

function dodgeGoblin(dodgeSide) {
  if (parseFloat(dodge()) > dodgeSide) {
    console.log("dodged");
    return true;
  } else {
    console.log("not dodged");
    return false;
  }
}

function attackGoblin() {
  const playerDice = parseFloat(rollDice(player.diceSides));
  const ennemyDice = parseFloat(rollDice(game.ennemy.diceSides));
  game.ennemy.health -= playerDice;
  player.health -= ennemyDice;
  updatePLayerHealth();
  // console.log(player.health);
  if (player.health <= 0) {
    currentRoomElement.innerHTML += `<button name="gameover" id="continuebtn">Continue</button>`;
    document.getElementById("continuebtn").onclick = function (event) {
      changeRoom(event.target.name);
    };
    atkbtn.style.display = "none";
  }
  let text = `You dealt ${playerDice} damage<br>
  ${game.ennemy.name} has ${game.ennemy.health} health remaining<br>
  You received ${ennemyDice} damage<br>`;
  if (game.ennemy.health <= 0) {
    text = "You defeated your opponent";
    items.potion.amount += 1;
    atkbtn.style.display = "none";
    if (game.ennemy == minotaur && minotaur.health <= 0) {
      drinkPotion();
      text =
        "You found a red <span class=\"item\">potion</span> on the corpse. You've been on enough adventures to know that this gives health back so you drink it. You drink it, but you don't feel anything. It might have some kind of delay.";
    }
    currentRoomElement.innerHTML += `<button name="${game.steps[0].onFinish}" id="continuebtn">Continue</button>`;
    document.getElementById("continuebtn").onclick = function (event) {
      changeRoom(event.target.name);
    };
  }
  updateText("fightResult", text);
}

// function continue() {
//   if (game.ennemy.health <= 0) {
//   }
// }

function drinkPotion() {
  if (items.potion.amount > 0) {
    player.health += items.potion.health;
    items.potion.amount -= 1;
  }
  console.log(items.potion.amount);
  console.log(player.health);
}
// CHECK WHY ITS NOT UPDATING
