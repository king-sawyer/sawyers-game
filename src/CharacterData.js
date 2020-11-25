export default {
  characters: [
    { id: "0", title: "---", ability: "", firstNight: "" },
    {
      id: "1",
      title: "Washerwoman",
      ability:
        "You start the game knowing that one of two players is a specific good character.",
      firstNight:
        "During the first night, the storyteller will wake you up and show you another character(ex. Soldier, Chef, Virgin). The storyteller will then point at two other players around the circle. One of these two players is the character shown to you.",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability might not give you accurate information. They have the ability to poison you so that you recieve false information.",
    },
    {
      id: "2",
      title: "Investigator",
      ability:
        "You start the game knowing one of two players that is on the evil team.",
      firstNight:
        "During the first night, the storyteller will wake you up and point to two other players. One of these two players is evil.",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability might not give you accurate information. They have the ability to poison you so that you recieve false information.",
    },
    {
      id: "3",
      title: "Chef",
      ability:
        "You start the game knowing if two evil players are sitting next to each other.",
      firstNight:
        "During the first night the storyteller will wake you up and tell you either yes or no. If they tell you yes that means that the imp and the minion are sitting next to each other. ",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability might not give you accurate information. They have the ability to poison you so that you recieve false information.",
    },
    {
      id: "4",
      title: "Empath",
      ability:
        "Each night you are told how many of your 2 alive neighbors are evil.",
      firstNight:
        "Every night the storyteller will wake you up and tell you 0, 1, or 2. This number shows how many of your alive neighbors are evil.",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability might not give you accurate information. They have the ability to poison you so that you recieve false information.",
    },
    {
      id: "5",
      title: "Soldier",
      ability: "You can not be killed by the demon.",
      firstNight: "You will never be woken up by the story teller.",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability might not save you. They have the ability to poison you so that you could be killed by the demon at night.",
    },
    {
      id: "6",
      title: "Virgin",
      ability:
        "The first time you are nominated for exucution, if the nominator is good, the nominator is executed immediately.",
      firstNight:
        "You will not be awoken at anypoint. You are allowed to nominate yourself to prove to everyone that you are good! Note: Your ability only works the first time you are nominated",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability will not instantly kill a good nominator. They have the ability to poison you so that your ability will not function properly.",
    },
    {
      id: "7",
      title: "Ravenkeeper",
      ability:
        "If you die at night(meaning the demon killed you) the story teller will wake you up. You may then pick a player and learn their identity.",
      firstNight: "You will only be awoken if you are killed during the night.",
      tidBit:
        "Watch out! If there is a poisoner in the game, your ability will not wake you up to learn another players role.",
    },
    {
      id: "8",
      title: "Poisoner",
      ability:
        "Each night choose a player. Their ability malfunctions for this round.",
      firstNight:
        "On the first night the story teller will wake you up and show you who the demon is. Your ability allows you to stop or modify others abilities. (ex. If you poison the soldier, they would then be allowed to be killed by the demon. If you poison the empath, they would not be told correctly how many of their neighbors evil. Whether that is more or less.)",
    },
    {
      id: "9",
      title: "The Spy",
      ability:
        "Each night you are awoken and are shown the roles of everyone in the game. You might register as good or bad when another ability (like the empath or investigator) checks what side you are on. ",
      firstNight:
        "On the first night the story teller will wake you up and show you who the demon is. Afterwards, you will be shown the roles of all other players.",
    },

    {
      id: "10",
      title: "Imp",
      ability:
        "Every night(except for the first) you are awoken and may point to someone around the circle. This player dies. You may even point to yourself! If you point to yourself you die and your minion becomes the new demon. You may also point to a player who has already been killed. If so, no one is killed during the night.",
      firstNight: "The first night you will not be awoken to kill someone.",
    },
  ],
};
