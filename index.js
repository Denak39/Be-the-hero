const game = {
  start: {
    steps: ["goblin", "kitchenLabo", "start"],
    description:
      "Here you are, in front of the dungeon’s door. You’ve been hired by King Maverick to kill Lord Ainz Ooal Gown, the Master of this place. No easy task, considering he is the mightiest creature of this world. You think to yourself there must be an easier way to make money...",
  },
  goblin: {
    health: 10,
    damage: 1,
  },
  kitchenLabo: {
    steps: ["golem", "bedroom", "start"],
  },
  golem: {
    health: 20,
    damage: 2,
  },
  bedroom: {
    steps: ["minautor", "bossRoom", "start"],
  },
  minotaur: {
    health: 50,
    damage: 2,
  },
  end: {
    steps: ["boss", "start"],
  },
  boss: {
    health: 75,
    damage: 3,
  },
};

game["kitchenLabo"].steps[1];

console.log(game);
