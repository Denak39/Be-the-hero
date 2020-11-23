let game = {
  start: {
    steps: ["dungeonDoor"],
    description:
      "Here you are, in front of the dungeon’s door. You’ve been hired by King Maverick to kill Lord Ainz Ooal Gown, the Master of this place. No easy task, considering he is the mightiest creature of this world. You think to yourself there must be an easier way to make money...",
  },
  player: {
    health: 100,
  },
  hallway: {
    steps: ["goblin", "kitchenLabo", "start"],
  },
  goblin: {
    health: 10,
  },
  kitchenLabo: {
    steps: ["golem", "bedroom", "start"],
  },
  golem: {
    health: 20,
  },
  bedroom: {
    steps: ["minautor", "bossRoom", "start"],
  },
  minotaur: {
    health: 50,
  },
  end: {
    steps: ["finalBoss", "start"],
  },
  finalBoss: {
    health: 75,
  },
  potion: {
    health: 15,
    amount: 0,
  },
};

game["kitchenLabo"].steps[1];

console.log(game);

function rollDicePlayer() {
  return 1 + Math.floor(Math.random() * 6);
}
function rollDiceGoblin() {
  return 1 + Math.floor(Math.random() * 3);
}
function rollDiceGolem() {
  return 1 + Math.floor(Math.random() * 4);
}
function rollDiceMinotaur() {
  return 1 + Math.floor(Math.random() * 5);
}
function rollDiceFinalBoss() {
  return 1 + Math.floor(Math.random() * 6);
}
function dodge() {
  return 1 + Math.floor(Math.random() * 20);
}
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
  if (game.goblin.health <= 0) {
    console.log("it's dead");
  } else {
    game.goblin.health -= parseFloat(rollDicePlayer());
    if (game.goblin.health <= 0) {
      game.potion.amount += 1;
      leaveRoom.innerHTML = button;
    } else {
      game.player.health -= parseFloat(rollDiceGoblin());
      if (game.player.health <= 0) {
        Swal.fire('<button href="die.html">Game Over</button>');
      }
    }
  }
  console.log(game.goblin.health);
  console.log(game.potion.amount);
}

function drinkPotion() {
  if (game.potion.amount > 0) {
    game.player.health += game.potion.health;
    game.potion.amount -= 1;
  }
  console.log(game.potion.amount);
  console.log(game.player.health);
}

function changeRoom() {
  let boss = ["game.goblin", "game.minotaur", "game.finalBoss", "game.golem"];
  if (boss.health <= 0) {
    return changeRoom;
  } else {
    return rollDice;
  }
}
