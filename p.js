document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "John Ayad <3",
    "sp00ky edition",
    "Sim0n Anticheat",
    "Made With 💖",
    "Enjoy It",
    "Digest It",
    "New Update?? Nah..",
    "Happy Ending",
    "Have a good day!",
    "Morning Wood",
    "Hit my line 😉",
    "Lookin cute tdy 😜",
    "No Pain No gain.",
    "$2.99 to keep playing!",
    "Free Mr. G!",
    "another update?",
  ];

  const home = document.getElementById("home");
  const casino = document.getElementById("casino");
  const credits = document.getElementById("credits");
  const version = document.getElementById("version");
  const body = document.querySelector("body");
  const stats = document.getElementById("stats")
  const areusure = document.getElementById("areusure");
  const emojiContainer = document.getElementById("emoji-container");

  // sounds
  const jemSound = document.getElementById("gem");
  const bombSound = document.getElementById("bomb");
  const cashoutSound = document.getElementById("cashout");
  const clickSound = document.getElementById("click");
  const roll = document.getElementById("roll");
  const rollwin = document.getElementById("rollwin");
  const secret = document.getElementById("secret");
  const dicewin = document.getElementById("dicewin");
  const dicelose = document.getElementById("dicelose");

  // temporary halloween
  //const halloween = document.getElementById("frankenstein");

  var upgrades = [
    {
      name: "x2",
      description: "💣 ",
      cost: 50,
      multiplier: 2,
      purchased: false,
    },
    {
      name: "x3",
      description: "💣 ",
      cost: 300,
      multiplier: 3,
      purchased: false,
    },
    {
      name: "x5",
      description: "💣 ",
      cost: 500,
      multiplier: 5,
      purchased: false,
    },
    {
      name: "x7",
      description: "💣 ",
      cost: 2000,
      multiplier: 7,
      purchased: false,
    },
    {
      name: "x10",
      description: "💣 ",
      cost: 5000,
      multiplier: 10,
      purchased: false,
    },
    {
      name: "x15",
      description: "💣 ",
      cost: 9999,
      multiplier: 15,
      purchased: false,
    },
    {
      name: "x25",
      description: "💣 ",
      cost: 25721,
      multiplier: 25,
      purchased: false,
    },
    {
      name: "x35",
      description: "💣 ",
      cost: 35020,
      multiplier: 35,
      purchased: false,
    },
    {
      name: "x50",
      description: "💣 ",
      cost: 52007,
      multiplier: 50,
      purchased: false,
    },
    {
      name: "x75",
      description: "💣 ",
      cost: 75205,
      multiplier: 75,
      purchased: false,
    },
    {
      name: "x100",
      description: "💣 ",
      cost: 101101,
      multiplier: 100,
      purchased: false,
    },
    {
      name: "x123",
      description: "💣 ",
      cost: 123123,
      multiplier: 123,
      purchased: false,
    },
    {
      name: "x140",
      description: "💣 ",
      cost: 155420,
      multiplier: 140,
      purchased: false,
    },
    {
      name: "x165",
      description: "💣 ",
      cost: 199999,
      multiplier: 165,
      purchased: false,
    },
    {
      name: "x205",
      description: "💣 ",
      cost: 225000,
      multiplier: 205,
      purchased: false,
    },
    {
      name: "x250",
      description: "💣 ",
      cost: 250050,
      multiplier: 250,
      purchased: false,
    },
    {
      name: "x275",
      description: "💣 ",
      cost: 275000,
      multiplier: 275,
      purchased: false,
    },
    {
      name: "x300",
      description: "💣 ",
      cost: 300000,
      multiplier: 300,
      purchased: false,
    },
    {
      name: "x369",
      description: "💣 ",
      cost: 375500,
      multiplier: 369,
      purchased: false,
    },
    {
      name: "x400",
      description: "💣 ",
      cost: 405000,
      multiplier: 400,
      purchased: false,
    },
    {
      name: "x450",
      description: "💣 ",
      cost: 500000,
      multiplier: 450,
      purchased: false,
    },
    {
      name: "x500",
      description: "💣 ",
      cost: 565000,
      multiplier: 500,
      purchased: false,
    },
    {
      name: "x525",
      description: "💣 ",
      cost: 600000,
      multiplier: 525,
      purchased: false,
    },
    {
      name: "x575",
      description: "💣 ",
      cost: 650000,
      multiplier: 575,
      purchased: false,
    },
    {
      name: "x650",
      description: "💣 ",
      cost: 725000,
      multiplier: 650,
      purchased: false,
    },
    {
      name: "x700",
      description: "💣 ",
      cost: 750000,
      multiplier: 700,
      purchased: false,
    },
    {
      name: "x735",
      description: "💣 ",
      cost: 775000,
      multiplier: 735,
      purchased: false,
    },
    {
      name: "x765",
      description: "💣 ",
      cost: 800000,
      multiplier: 765,
      purchased: false,
    },
    {
      name: "x800",
      description: "💣 ",
      cost: 835000,
      multiplier: 805,
      purchased: false,
    },
    {
      name: "x875",
      description: "💣 ",
      cost: 850000,
      multiplier: 850,
      purchased: false,
    },
    {
      name: "x900",
      description: "💣 ",
      cost: 905000,
      multiplier: 900,
      purchased: false,
    },
    {
      name: "x950",
      description: "💣 ",
      cost: 925000,
      multiplier: 925,
      purchased: false,
    },
    {
      name: "x1000",
      description: "💣 ",
      cost: 1000000,
      multiplier: 1000,
      purchased: false,
    },
    {
      name: "x950",
      description: "💣 ",
      cost: 1500000,
      multiplier: 950,
      purchased: false,
    },
    {
      name: "x925",
      description: "💣 ",
      cost: 2000000,
      multiplier: 925,
      purchased: false,
    },
    {
      name: "x900",
      description: "💣 ",
      cost: 2500000,
      multiplier: 900,
      purchased: false,
    },
    {
      name: "x850",
      description: "💣 ",
      cost: 3000000,
      multiplier: 850,
      purchased: false,
    },
    {
      name: "x800",
      description: "💣 ",
      cost: 3500000,
      multiplier: 800,
      purchased: false,
    },
    {
      name: "x1350",
      description: "💣 ",
      cost: 5000000,
      multiplier: 1350,
      purchased: false,
    },
    {
      name: "x9999",
      description: "Prestige!",
      cost: 1694200,
      multiplier: 9999,
      purchased: false,
    },
  ];

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumSignificantDigits: 3,
  });

  // casinos
  var lottoContainer = document.getElementById("lottoCasino");
  var coinflipContainer = document.getElementById("lottoCoinflip");
  var minesContainer = document.getElementById("lottoMines");
  var goalContainer = document.getElementById("lottoGoal");
  var diceContainer = document.getElementById("lottoDice");

  // buttons
  var button = document.getElementById("myButton");
  var multiplier = document.getElementById("myMultiplier");
  var lottoButton = document.getElementById("goLotto");
  var coinflipButton = document.getElementById("goCoinflip");
  var minesButton = document.getElementById("goMines");
  var goalbutton = document.getElementById("goGoal");
  var diceButton = document.getElementById("goDice");
  var guessHeadsButton = document.getElementById("guess-heads");
  var guessTailsButton = document.getElementById("guess-tails");
  var yesReset = document.getElementById("yesreset");
  var noReset = document.getElementById("noreset");
  let upgradeButton = null;

  // utility
  var prestigeCounter = 0;
  var counter = document.getElementById("piggyCounter");
  var gambleMoney = document.getElementById("gambleMoney");
  var container3 = document.getElementById("container3");
  var container4 = document.getElementById("container4");
  var container5 = document.getElementById("container5");
  var myText = document.getElementById("myText");
  var prestigeLevelText = document.getElementById("prestigeLevel");
  var prestigePig = document.getElementById("prestigePig");
  var coin = document.getElementById("coin");
  var statsText = document.getElementById("stats-text");

  const soccerBallEmoji = "⚽";
  const bombEmoji = "💣";
  const boomEmoji = "💥";
  const pigEmojis = ["💸", "🐽", "💰"];

  // random quote
  var enterText = document.getElementById("enter");
  var randomIndex = Math.floor(Math.random() * quotes.length);
  enterText.innerHTML = quotes[randomIndex];

  // variables
  var multiplierCount = 1;
  var count = 0;
  let isPlaying = false;

  // mines minesGameState
  const minesGameState = {
    isOver: true,
    payoutMultiplier: 1,
  };

  // goal minesGameState
  const goalGameState = {
    isOver: true,
    payoutMultiplier: 1,
  };

  // casino stats
  var casinoStatsState = {
    rank: "Casual",
    wagered: 0,
    profit: 0,
    lost: 0,
    wins: 0,
    losses: 0,
  }

  // utilities
  function setCasinoHome() {
    body.style.height = "180px";
    lottoButton.classList.add("casino-nav-active");
    coinflipButton.classList.remove("casino-nav-active");
    minesButton.classList.remove("casino-nav-active");
    goalbutton.classList.remove("casino-nav-active");
    diceButton.classList.remove("casino-nav-active");

    lottoContainer.style.display = "block";
    coinflipContainer.style.display = "none";
    minesContainer.style.display = "none";
    goalContainer.style.display = "none";
    diceContainer.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
  }

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").classList.add("fade-out");
    }, 1000);
  });

  document.addEventListener("keydown", handleKeydown);

  function handleKeydown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  const countST = JSON.parse(localStorage.getItem("count"));
  const multiplierST = JSON.parse(localStorage.getItem("multiplier"));
  const descriptionST = localStorage.getItem("description");
  const upgradesST = JSON.parse(localStorage.getItem("upgrades"));
  const prestigeST = JSON.parse(localStorage.getItem("prestige"));
  const statisticsST = JSON.parse(localStorage.getItem("statistics"));

  if (countST !== null) {
    count = countST;
    counter.textContent = "Pigs +" + count.toLocaleString();
  }
  if (multiplierST !== null) {
    multiplierCount = multiplierST;
    multiplier.textContent = "Multiplier x" + multiplierCount.toLocaleString();
  }
  if (descriptionST !== null) {
    myText.textContent = descriptionST;
  }
  if (prestigeST !== null) {
    prestigeCounter = prestige;
    prestigeLevelText.textContent = "Your prestige level is: " + prestige;

    if (prestigeST != 1) {
      document.getElementById("loading-screen-image").style.width = "60px";
    }

    if (prestigeST == 1) {
      prestigePig.style.width = "10%";
    }

    prestigePig.src = "img/prestige" + prestige + ".png";
    document.getElementById("loading-screen-image").src = "img/prestige" + prestige + ".png";
  }
  if (statisticsST !== null) {
    console.log(statisticsST);
    casinoStatsState.rank = statisticsST.rank;
    casinoStatsState.wagered = statisticsST.wagered;
    casinoStatsState.profit = statisticsST.profit;
    casinoStatsState.lost = statisticsST.lost;
    casinoStatsState.wins = statisticsST.wins;
    casinoStatsState.losses = statisticsST.losses;
  }
  if (upgradesST !== null) {
    upgradesST.forEach((upgrade) => {
      upgradesST.purchased = upgradesST.purchased || false;
    });
  }

  checkUpgrades();

  // Halloween Temporary
  /*
  halloween.addEventListener("click", function () {
    if (secret.paused) {
      secret.loop = true;
      secret.play();
    } else {
      secret.pause();
  
    }
  });
  */

  // Click listener for THE button
  button.addEventListener("click", function () {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }

    if (prestigeCounter > 0) {
      count += (multiplierCount + (multiplierCount * prestigeCounter / 10));
    } else {
      count += multiplierCount;
    }

    let randomPigEmoji = pigEmojis[Math.floor(Math.random() * pigEmojis.length)];
    let randomSize = Math.floor(Math.random() * 21) + 20;
    let randomRotation = Math.floor(Math.random() * 361);
    let randomX = Math.floor(
      Math.random() * (emojiContainer.offsetWidth - randomSize)
    );
    let randomY = Math.floor(
      Math.random() * (emojiContainer.offsetHeight - randomSize)
    );
    let emojiSpan = document.createElement("span");

    emojiSpan.style.fontSize = `${randomSize}px`;
    emojiSpan.style.transform = `rotate(${randomRotation}deg)`;
    emojiSpan.style.left = `${randomX}px`;
    emojiSpan.style.top = `${randomY}px`;
    emojiSpan.textContent = randomPigEmoji;
    emojiContainer.appendChild(emojiSpan);

    setTimeout(() => {
      emojiContainer.removeChild(emojiSpan);
    }, 500);

    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();
    localStorage.setItem('count', count);
    localStorage.setItem('multiplier', multiplierCount);
  })

  // Reset button
  document.querySelectorAll(".goReset").forEach((button) => {
    button.addEventListener("click", function () {
      body.style.height = "180px";

      home.style.display = "none";
      credits.style.display = "none";
      version.style.display = "none";
      casino.style.display = "none";
      stats.style.display = "none"
      areusure.style.display = "flex";

      let areusuretext = document.getElementById("areusure-text");
      prestigeLevelText.textContent = "Your prestige level is: " + prestigeCounter;

      if (multiplierCount == upgrades[upgrades.length - 1].multiplier) {
        areusuretext.innerHTML = "You are <b>eligible</b> to prestige."
      } else {
        areusuretext.innerHTML = "You are <b>ineligible</b> to prestige."
      }

      yesReset.addEventListener("click", function () {
        if (multiplierCount == upgrades[upgrades.length - 1].multiplier) {
          prestigeCounter++;
          localStorage.setItem('prestige', prestigeCounter);
        }
        prestigePig.src = "img/prestige" + prestigeCounter + ".png";

        if (prestigeCounter == 1) {
          prestigePig.style.width = "10%"
        }

        count = 0;
        multiplierCount = 1;
        counter.textContent = "Pigs +0";
        multiplier.textContent = "Multiplier x1";
        myText.style.display = "none";

        upgrades.forEach((upgrade) => (upgrade.purchased = false));
        checkUpgrades();

        casinoStatsState = { rank: "Casual", wagered: 0, profit: 0, lost: 0, wins: 0, losses: 0, };
        localStorage.setItem('count', 0);
        localStorage.setItem('multiplier', 1);
        localStorage.setItem('upgrades', JSON.stringify(upgrades));
        localStorage.setItem('description', "");
        localStorage.setItem('statistics', JSON.stringify(casinoStatsState));

        home.style.display = "block";
        areusure.style.display = "none";
      });

      noReset.addEventListener("click", function () {
        home.style.display = "block";
        areusure.style.display = "none";
      });
    });
  });

  // Slots
  lottoButton.addEventListener("click", () => {
    body.style.height = "180px";
    lottoButton.classList.add("casino-nav-active");
    coinflipButton.classList.remove("casino-nav-active");
    minesButton.classList.remove("casino-nav-active");
    goalbutton.classList.remove("casino-nav-active");
    diceButton.classList.remove("casino-nav-active");

    lottoContainer.style.display = "block";
    coinflipContainer.style.display = "none";
    minesContainer.style.display = "none";
    goalContainer.style.display = "none";
    diceContainer.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
  });

  gambleMoney.addEventListener("click", function () {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }

    var money = parseInt(document.getElementById("money").value);
    var lottoText = document.getElementById("lottoText");
    var images = ["💣 ", "💎"];

    if (isNaN(money) || money < 0) {
      lottoText.innerHTML = "Invalid amount.";
      return;
    }

    if (money > count) {
      lottoText.innerHTML = "Insufficient funds.";
      return;
    }

    count -= money;
    casinoStatsState.wagered += money

    if (roll.paused) {
      roll.play();
    } else {
      roll.pause();
      roll.currentTime = 0;
      roll.play();
    }

    localStorage.setItem('count', count);
    gambleMoney.disabled = true;

    var box1 = Math.random();
    var box2 = Math.random();
    var box3 = Math.random();

    var box1Element = document.getElementById("box1");
    var box2Element = document.getElementById("box2");
    var box3Element = document.getElementById("box3");

    var animationInterval = setInterval(function () {
      box1Element.innerText = images[Math.floor(Math.random() * images.length)];
      box2Element.innerText = images[Math.floor(Math.random() * images.length)];
      box3Element.innerText = images[Math.floor(Math.random() * images.length)];
    }, 100);


    setTimeout(function () {
      clearInterval(animationInterval);

      var diamonds = 0;
      var pig = 0;

      if (box1 < 0.12) {
        box1Element.innerText = "💎";
        box1Element.classList.add("diamond");
        diamonds++;
      } else {
        box1Element.innerText = "💣 ";
        box1Element.classList.add("bomb");
      }

      if (box2 < 0.12) {
        box2Element.innerText = "💎";
        box2Element.classList.add("diamond");
        diamonds++;
      } else if (box2 < 0.05) {
        box2Element.innerText = "🐷";
        box2Element.classList.add("pig");
        pig++;
      } else {
        box2Element.innerText = "💣 ";
        box2Element.classList.add("bomb");
      }

      if (box3 < 0.12) {
        box3Element.innerText = "💎";
        box3Element.classList.add("diamond");
        diamonds++;
      } else {
        box3Element.innerText = "💣 ";
        box3Element.classList.add("bomb");
      }

      if (pig === 1) {
        rollwin.play();
        box1Element.innerText = "🐷";
        box3Element.innerText = "🐷";

        winnings = money * 100;
        lottoText.innerHTML = "Jackpot! You won " + Math.round((winnings - parseInt(document.getElementById("money").value))).toLocaleString() + "!";

        count += Math.round(winnings);

        casinoStatsState.profit += winnings - money
        casinoStatsState.wins += 1
      } else if (diamonds === 1) {
        rollwin.play();
        winnings = money * 3;
        lottoText.innerHTML = "You won " + Math.round((winnings - parseInt(document.getElementById("money").value))).toLocaleString() + "!";
        count += Math.round(winnings);

        casinoStatsState.profit += winnings - money
        casinoStatsState.wins += 1
      } else if (diamonds === 2) {
        rollwin.play();
        winnings = money * 6;
        lottoText.innerHTML = "You won " + Math.round((winnings - parseInt(document.getElementById("money").value))).toLocaleString() + "!";
        count += Math.round(winnings);

        casinoStatsState.profit += winnings - money
        casinoStatsState.wins += 1
      } else if (diamonds === 3) {
        rollwin.play();
        winnings = money * 25;
        lottoText.innerHTML = "You won " + Math.round((winnings - parseInt(document.getElementById("money").value))).toLocaleString() + "!";
        count += Math.round(winnings);

        casinoStatsState.profit += winnings - money
        casinoStatsState.wins += 1
      } else {
        casinoStatsState.lost += money;
        casinoStatsState.losses += 1;
        lottoText.innerHTML = "You lost! :(";
      }

      localStorage.setItem('count', count);
      localStorage.setItem('statistics', JSON.stringify(casinoStatsState));
      counter.textContent = "Pigs +" + count.toLocaleString();
      checkUpgrades();
      gambleMoney.disabled = false;
    }, 1000);
  });

  // Utility functions
  document.querySelectorAll(".goHome").forEach((button) => {
    button.addEventListener("click", function () {
      setCasinoHome();
      body.style.height = "180px";

      credits.style.display = "none";
      casino.style.display = "none";
      version.style.display = "none";
      stats.style.display = "none"
      home.style.display = "block";
    });
  });

  document.querySelectorAll(".goCasino").forEach((button) => {
    button.addEventListener("click", function () {
      setCasinoHome();
      body.style.height = "180px";

      home.style.display = "none";
      credits.style.display = "none";
      version.style.display = "none";
      stats.style.display = "none"
      casino.style.display = "block";
    });
  });

  document.querySelectorAll(".goCredits").forEach((button) => {
    button.addEventListener("click", function () {
      setCasinoHome();
      body.style.height = "180px";

      home.style.display = "none";
      casino.style.display = "none";
      version.style.display = "none";
      stats.style.display = "none"
      credits.style.display = "block";
    });
  });

  document.querySelectorAll(".goVersion").forEach((button) => {
    button.addEventListener("click", function () {
      setCasinoHome();
      body.style.height = "180px";

      home.style.display = "none";
      credits.style.display = "none";
      casino.style.display = "none";
      stats.style.display = "none"
      version.style.display = "block";
    });
  });

  document.querySelectorAll(".goStats").forEach((button) => {
    button.addEventListener("click", function () {
      setCasinoHome();
      console.log(casinoStatsState.wagered)
      if (casinoStatsState.wagered > 50000) {
        casinoStatsState.rank = "Low Roller";
      }
      if (casinoStatsState.wagered > 500000) {
        casinoStatsState.rank = "Mid Roller"
      }
      if (casinoStatsState.wagered > 1500000) {
        casinoStatsState.rank = "High Roller"
      }
      if (casinoStatsState.wagered > 15000000) {
        casinoStatsState.rank = "Pitboss"
      }
      if (casinoStatsState.wagered > 300000000) {
        casinoStatsState.rank = "Kingpin"
      }

      statsText.innerHTML = `
        <b>Rank:</b> ${casinoStatsState.rank.toLocaleString()} <br> 
        <b>Wagered:</b> ${casinoStatsState.wagered.toLocaleString()} Pigs <br> 
        <b>Profit:</b> ${casinoStatsState.profit.toLocaleString()} Pigs <br> 
        <b>Lost:</b> ${casinoStatsState.lost.toLocaleString()} Pigs <br> 
        <b>Wins:</b> ${casinoStatsState.wins.toLocaleString()} <br> 
        <b>Losses:</b> ${casinoStatsState.losses.toLocaleString()}`

      body.style.height = "180px";

      home.style.display = "none";
      credits.style.display = "none";
      casino.style.display = "none";
      version.style.display = "none";
      stats.style.display = "block"
    });
  });

  // Coinflip
  var isPlayingFlip = false;

  coinflipButton.addEventListener("click", () => {
    body.style.height = "180px";

    coinflipButton.classList.add("casino-nav-active");
    lottoButton.classList.remove("casino-nav-active");
    minesButton.classList.remove("casino-nav-active");
    goalbutton.classList.remove("casino-nav-active");
    diceButton.classList.remove("casino-nav-active");

    lottoContainer.style.display = "none";
    minesContainer.style.display = "none";
    goalContainer.style.display = "none";
    diceContainer.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";

    coinflipContainer.style.display = "block";
  });

  guessHeadsButton.addEventListener("click", function () {
    if (coin.classList.contains("spin-heads") || coin.classList.contains("spin-tails")) return;

    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }
    playCoinflip("heads");
  });

  guessTailsButton.addEventListener("click", function () {
    if (coin.classList.contains("spin-heads") || coin.classList.contains("spin-tails")) return;

    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }
    playCoinflip("tails");
  });

  function playCoinflip(guess) {
    var money = parseInt(document.getElementById("money2").value);
    var coinflipText = document.getElementById("coinflipText");

    if (isNaN(money) || money < 0) {
      coinflipText.innerHTML = "Invalid amount.";
      return;
    }

    if (money > count) {
      coinflipText.innerHTML = "Insufficient funds.";
      return;
    }

    count -= money;
    casinoStatsState.wagered += money

    if (isPlaying) {
      return;
    }
    isPlaying = true; // Set flag to true

    const outcome = Math.random() < 0.5 ? "heads" : "tails";

    if (outcome === "heads") {
      coin.classList.add("spin-heads");
    } else {
      coin.classList.add("spin-tails");
    }

    guessHeadsButton.disabled = true;
    guessTailsButton.disabled = true;

    setTimeout(function () {
      if (outcome === guess) {
        if (cashoutSound.paused) {
          cashoutSound.play();
        } else {
          cashoutSound.pause();
          cashoutSound.currentTime = 0;
          cashoutSound.play();
        }

        winnings = money * 2;
        coinflipText.innerHTML = "You won " + Math.round((winnings - parseInt(document.getElementById("money2").value))).toLocaleString() + "!";
        count += Math.round(winnings);

        casinoStatsState.profit += winnings - money
        casinoStatsState.wins += 1
      } else {
        if (bombSound.paused) {
          bombSound.play();
        } else {
          bombSound.pause();
          bombSound.currentTime = 0;
          bombSound.play();
        }
        casinoStatsState.lost += money;
        casinoStatsState.losses += 1
        coinflipText.textContent = "You lost! :(";
      }

      localStorage.setItem('count', count);
      localStorage.setItem('statistics', JSON.stringify(casinoStatsState));

      counter.textContent = "Pigs +" + count.toLocaleString();
      checkUpgrades();

      setTimeout(function () {
        coin.classList.remove("spin-heads", "spin-tails");
        isPlaying = false; // Reset flag to false
      }, 1000);

      money.disabled = false;
      guessHeadsButton.disabled = false;
      guessTailsButton.disabled = false;
    }, 2000);
  }

  // Upgrades
  function checkUpgrades() {
    let availableUpgrades = upgrades.filter((upgrade) => {
      return !upgrade.purchased && count >= upgrade.cost;
    });
    if (availableUpgrades.length > 0 && !upgradeButton) {
      let nextUpgrade = availableUpgrades[0];
      let nextDescription = nextUpgrade.description;
      myText.style.display = "none";
      myText.textContent = nextDescription;
      localStorage.setItem('description', nextDescription);
      upgradeButton = createUpgradeButton(nextUpgrade);
    } else if (upgradeButton) {
      let upgrade = availableUpgrades.find(
        (u) => u.name === upgradeButton.textContent.split(" | ")[0]
      );
      if (!upgrade || count < upgrade.cost) {
        upgradeButton.remove();
        upgradeButton = null;
      }
    }
  }

  function createUpgradeButton(upgrade) {
    const button = document.createElement("button");
    button.textContent = `${upgrade.name} | -${formatter.format(
      upgrade.cost
    )} Pigs`;
    button.classList.add("upgrade-button"); // add class to the button
    button.addEventListener("click", () => {
      if (cashoutSound.paused) {
        cashoutSound.play();
      } else {
        cashoutSound.pause();
        cashoutSound.currentTime = 0;
        cashoutSound.play();
      }

      count -= upgrade.cost;
      multiplierCount = upgrade.multiplier;
      counter.textContent = "Pigs +" + count.toLocaleString();
      multiplier.textContent =
        "Multiplier x" + upgrade.multiplier.toLocaleString();

      upgrade.purchased = true;
      myText.style.display = "flex";
      localStorage.setItem('count', count);
      localStorage.setItem('multiplier', upgrade.multiplier);
      localStorage.setItem('upgrades', JSON.stringify(upgrades));

      upgradeButton = null;
      checkUpgrades();
      button.remove();
    });

    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.appendChild(button);
    return button;
  }

  // Mines
  let bombLocations = [];
  let diamondLocations = [];
  var boxes = document.querySelectorAll(".box-mines");
  var cashoutMinesButton = document.getElementById("cashoutButton");
  var startMinesButton = document.getElementById("moneyButton");

  cashoutMinesButton.disabled = true;

  minesButton.addEventListener("click", () => {
    body.style.height = "200px";

    minesButton.classList.add("casino-nav-active");
    lottoButton.classList.remove("casino-nav-active");
    coinflipButton.classList.remove("casino-nav-active");
    goalbutton.classList.remove("casino-nav-active");
    diceButton.classList.remove("casino-nav-active");

    lottoContainer.style.display = "none";
    coinflipContainer.style.display = "none";
    minesContainer.style.display = "grid";
    goalContainer.style.display = "none";
    diceContainer.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
    container3.style.display = "flex";
  });

  startMinesButton.addEventListener("click", () => {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }

    startGame();
  });

  // Mines Listeners
  boxes.forEach((box, i) => {
    box.innerHTML = "";
    box.dataset.row = Math.floor(i / 3) + 1;
    box.dataset.col = (i % 3) + 1;
  });

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const row = parseInt(box.dataset.row);
      const col = parseInt(box.dataset.col);
      revealTile(row, col);
    });
  });

  cashoutMinesButton.addEventListener("click", () => {
    endGame(true);
  });

  // Functions
  function startGame() {
    var enteredGamble = parseInt(document.getElementById("money3").value);

    if (isNaN(enteredGamble) || enteredGamble < 0) {
      document.getElementById("minesText").innerHTML = "Invalid amount.";
      return;
    }

    if (enteredGamble > count) {
      document.getElementById("minesText").innerHTML = "Insufficient funds.";
      return;
    }

    count -= enteredGamble;

    localStorage.setItem('count', count);
    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();

    startMinesButton.disabled = true;
    document.getElementById("money3").disabled = true;
    cashoutButton.disabled = false;

    // Reset game state
    minesGameState.isOver = false;
    minesGameState.payoutMultiplier = 1;

    // Reset bomb and diamond locations
    bombLocations = [];
    diamondLocations = [];

    // Generate random bomb and diamond locations
    while (bombLocations.length < 3) {
      const location = {
        row: Math.floor(Math.random() * 3) + 1,
        col: Math.floor(Math.random() * 3) + 1,
      };
      if (
        !bombLocations.some(
          (l) => l.row === location.row && l.col === location.col
        )
      ) {
        bombLocations.push(location);
      }
    }

    while (diamondLocations.length < 6) {
      const location = {
        row: Math.floor(Math.random() * 3) + 1,
        col: Math.floor(Math.random() * 3) + 1,
      };
      // Check if the location is not already occupied by a bomb or diamond
      if (
        !diamondLocations.some(
          (l) => l.row === location.row && l.col === location.col
        ) &&
        !bombLocations.some(
          (l) => l.row === location.row && l.col === location.col
        )
      ) {
        diamondLocations.push(location);
      }
    }
  }

  function revealTile(row, col) {
    const boxElement = document.querySelector(
      `[data-row="${row}"][data-col="${col}"]`
    );
    const isBomb = bombLocations.some(
      (location) => location.row === row && location.col === col
    );
    const isDiamond = diamondLocations.some(
      (location) => location.row === row && location.col === col
    );

    if (minesGameState.isOver) return;
    if (boxElement.classList.contains("revealed")) return;

    if (isBomb) {
      if (bombSound.paused) {
        bombSound.play();
      } else {
        bombSound.pause();
        bombSound.currentTime = 0;
        bombSound.play();
      }

      boxElement.innerHTML = "💥";
      boxElement.classList.add("clicked-bomb");
      boxElement.style.backgroundColor = "#ccc";
      endGame();
    } else if (isDiamond) {
      if (jemSound.paused) {
        jemSound.play();
      } else {
        jemSound.pause();
        jemSound.currentTime = 0;
        jemSound.play();
      }

      boxElement.innerHTML = "💎"; // add diamond emoji
      boxElement.style.backgroundColor = "#ccc";
      boxElement.classList.add("revealed");

      if (minesGameState.payoutMultiplier < 1.55) {
        minesGameState.payoutMultiplier += 0.55;
      } else if (minesGameState.payoutMultiplier < 2.48) {
        minesGameState.payoutMultiplier += 0.93;
      } else if (minesGameState.payoutMultiplier < 4.07) {
        minesGameState.payoutMultiplier += 1.59;
      } else if (minesGameState.payoutMultiplier < 12.04) {
        minesGameState.payoutMultiplier += 7.97;
      } else if (minesGameState.payoutMultiplier < 21.89) {
        minesGameState.payoutMultiplier += 9.85;
      } else if (minesGameState.payoutMultiplier < 41.6) {
        minesGameState.payoutMultiplier += 19.71;
      }

      document.getElementById(
        "minesText"
      ).innerHTML = `Multiplier x${minesGameState.payoutMultiplier.toLocaleString()}`;
      if (minesGameState.payoutMultiplier == 41.6) {
        endGame(true);
      }
    }
  }

  function endGame(hasWon = false) {
    minesGameState.isOver = true;

    var winnings =
      minesGameState.payoutMultiplier *
      parseInt(document.getElementById("money3").value);

    cashoutButton.disabled = true;
    document.getElementById("money3").disabled = false;
    startMinesButton.disabled = false;

    // Loop through all the boxes and reveal them
    boxes.forEach((box) => {
      const row = parseInt(box.dataset.row);
      const col = parseInt(box.dataset.col);
      const isBomb = bombLocations.some(
        (location) => location.row === row && location.col === col
      );
      const isDiamond = diamondLocations.some(
        (location) => location.row === row && location.col === col
      );

      if (isBomb) {
        if (box.classList.contains("clicked-bomb")) return;
        box.innerHTML = "💣 "; // add bomb emoji
      } else if (isDiamond) {
        box.innerHTML = "💎"; // add diamond emoji
      }

      box.classList.add("revealed");
    });

    casinoStatsState.wagered += parseInt(document.getElementById("money3").value);

    // Check if the player has won or lost
    if (hasWon) {
      if (cashoutSound.paused) {
        cashoutSound.play();
      } else {
        cashoutSound.pause();
        cashoutSound.currentTime = 0;
        cashoutSound.play();
      }

      document.getElementById("minesText").innerHTML = `You won ${Math.round((winnings - parseInt(document.getElementById("money3").value))).toLocaleString()}!`;
      count += Math.round(winnings);
      casinoStatsState.wins += 1;
      casinoStatsState.profit += winnings - document.getElementById("money3").value
    } else {
      document.getElementById("minesText").innerHTML = `You lost! :(`;
      casinoStatsState.lost += parseInt(document.getElementById("money3").value);
      casinoStatsState.losses += 1;
    }

    localStorage.setItem('count', count);
    localStorage.setItem('statistics', JSON.stringify(casinoStatsState));
    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();

    setTimeout(() => {
      boxes.forEach((box) => {
        box.innerHTML = "";
        box.classList.remove("revealed");
        box.classList.remove("clicked-bomb");
        box.style.backgroundColor = "#fff";
      });

      document.getElementById("minesText").innerHTML = "";
    }, 1000);
  }

  // Goal
  const numBombs = 1;
  const goalBoxes = document.querySelectorAll(".box-goal");
  var startGameButton = document.getElementById("moneyButton2");
  var endGameButton = document.getElementById("cashoutButton2");

  let rowsClicks = [true, false, false, false, false, false, false];
  document.getElementById("cashoutButton2").disabled = true;

  startGameButton.addEventListener("click", () => {
    goalGameState.isOver = false;
    goalGameState.payoutMultiplier = 1;

    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }

    startGoalGame();
  });

  endGameButton.addEventListener("click", () => {
    showAllBoxes();
    if (cashoutSound.paused) {
      cashoutSound.play();
    } else {
      cashoutSound.pause();
      cashoutSound.currentTime = 0;
      cashoutSound.play();
    }

    endGameButton.disabled = true;
    setTimeout(function () {
      endGoalGame(true);
    }, 1500);
  });

  goalbutton.addEventListener("click", () => {
    body.style.height = "200px";

    goalbutton.classList.add("casino-nav-active");
    lottoButton.classList.remove("casino-nav-active");
    coinflipButton.classList.remove("casino-nav-active");
    minesButton.classList.remove("casino-nav-active");
    diceButton.classList.remove("casino-nav-active");

    goalContainer.style.display = "grid";
    lottoContainer.style.display = "none";
    coinflipContainer.style.display = "none";
    minesContainer.style.display = "none";
    diceContainer.style.display = "none";
    container3.style.display = "none";
    container5.style.display = "none";
    container4.style.display = "flex";
  });

  function showAllBoxes() {
    for (let k = 0; k < goalBoxes.length; k++) {
      if (goalBoxes[k].dataset.value === bombEmoji) {
        goalBoxes[k].innerHTML = bombEmoji;
      } else {
        goalBoxes[k].innerHTML = soccerBallEmoji;
      }
    }
  }

  function startGoalGame() {
    var enteredGamble2 = parseInt(document.getElementById("money4").value);

    if (isNaN(enteredGamble2) || enteredGamble2 < 0) {
      document.getElementById("goalText").innerHTML = "Invalid amount.";
      return;
    }

    if (enteredGamble2 > count) {
      document.getElementById("goalText").innerHTML = "Insufficient funds.";
      return;
    }

    count -= enteredGamble2;

    localStorage.setItem('count', count);
    localStorage.setItem('statistics', JSON.stringify(casinoStatsState));
    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();

    document.getElementById("money4").disabled = true;
    startGameButton.disabled = true;
    endGameButton.disabled = false;

    for (let i = 1; i <= 6; i++) {
      let row = document.querySelector("#row-" + i);
      let boxesInRow = Array.from(row.children);
      let numBoxes = boxesInRow.length;

      for (let j = 0; j < numBombs; j++) {
        let randomIndex = Math.floor(Math.random() * numBoxes);
        boxesInRow[randomIndex].dataset.value = bombEmoji;
      }

      boxesInRow.forEach((j) => {
        if (j.dataset.value != bombEmoji) {
          j.dataset.value = soccerBallEmoji;
        }
        j.dataset.row = i;
        j.addEventListener("click", handleGoalClick);
      });
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function endGoalGame(hasWon = false) {
    casinoStatsState.wagered += parseInt(document.getElementById("money4").value);

    var winnings =
      goalGameState.payoutMultiplier *
      parseInt(document.getElementById("money4").value);

    startGameButton.disabled = false;
    goalGameState.isOver = true;
    document.getElementById("money4").disabled = false;

    if (hasWon) {
      document.getElementById("goalText").innerHTML = `You won ${Math.round((winnings - parseInt(document.getElementById("money4").value))).toLocaleString()}!`;

      count += Math.round(winnings);
      casinoStatsState.wins += 1;
      casinoStatsState.profit += winnings - parseInt(document.getElementById("money4").value);
    } else {
      casinoStatsState.lost += parseInt(document.getElementById("money4").value);
      casinoStatsState.losses += 1;
    }

    localStorage.setItem('count', count);
    localStorage.setItem('statistics', JSON.stringify(casinoStatsState));
    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();

    // Remove event listeners from the boxes
    rowsClicks = [true, false, false, false, false, false];
    boxes.forEach((box) => {
      box.removeEventListener("click", handleGoalClick);
    });

    // Loop through each row
    for (let i = 1; i <= 6; i++) {
      // Get the row and shuffle the boxes
      var row = document.querySelector("#row-" + i);
      var shuffledBoxes = shuffleArray(Array.from(row.children));

      // Assign the emojis to the boxes
      for (let j = 0; j < shuffledBoxes.length; j++) {
        shuffledBoxes[j].dataset.value = "";
        shuffledBoxes[j].innerHTML = "";
        shuffledBoxes[j].style.backgroundColor = "#fff";
      }
    }
    // document.getElementById('goalText').innerHTML = '';
  }

  function handleGoalClick() {
    // Display the emoji
    if (goalGameState.isOver) return;

    if (
      rowsClicks[this.dataset.row] == true ||
      rowsClicks[this.dataset.row - 1] == false
    ) {
      return;
    }

    this.innerHTML = this.dataset.value;
    rowsClicks[this.dataset.row] = true;

    // Check if the box contains a bomb
    if (this.dataset.value === bombEmoji) {
      if (bombSound.paused) {
        bombSound.play();
      } else {
        bombSound.pause();
        bombSound.currentTime = 0;
        bombSound.play();
      }

      document.getElementById("goalText").innerHTML = `You lost! :(`;
      rowsClicks = [false, false, false, false, false, false];

      showAllBoxes();
      this.innerHTML = boomEmoji;
      this.style.backgroundColor = "#ccc";

      endGameButton.disabled = true;
      setTimeout(endGoalGame, 1500);
    } else if (this.dataset.value === soccerBallEmoji) {
      if (clickSound.paused) {
        clickSound.play();
      } else {
        clickSound.pause();
        clickSound.currentTime = 0;
        clickSound.play();
      }

      if (goalGameState.payoutMultiplier < 1.45) {
        goalGameState.payoutMultiplier = parseFloat(
          (goalGameState.payoutMultiplier + 0.45).toFixed(2)
        );
      } else if (goalGameState.payoutMultiplier < 2.18) {
        goalGameState.payoutMultiplier = parseFloat(
          (goalGameState.payoutMultiplier + 0.73).toFixed(2)
        );
      } else if (goalGameState.payoutMultiplier < 3.27) {
        goalGameState.payoutMultiplier = parseFloat(
          (goalGameState.payoutMultiplier + 1.09).toFixed(2)
        );
      } else if (goalGameState.payoutMultiplier < 4.91) {
        goalGameState.payoutMultiplier = parseFloat(
          (goalGameState.payoutMultiplier + 1.64).toFixed(2)
        );
      } else if (goalGameState.payoutMultiplier < 7.36) {
        goalGameState.payoutMultiplier = parseFloat(
          (goalGameState.payoutMultiplier + 2.45).toFixed(2)
        );
      } else if (goalGameState.payoutMultiplier < 11.04) {
        goalGameState.payoutMultiplier = parseFloat(
          (goalGameState.payoutMultiplier + 3.68).toFixed(2)
        );
      }

      document.getElementById(
        "goalText"
      ).innerHTML = `Multiplier x${goalGameState.payoutMultiplier}`;

      for (let k = 0; k < goalBoxes.length; k++) {
        if (goalBoxes[k].dataset.row != this.dataset.row) {
          continue;
        }
        if (goalBoxes[k].dataset.value === bombEmoji) {
          goalBoxes[k].innerHTML = bombEmoji;
        } else {
          goalBoxes[k].innerHTML = soccerBallEmoji;
        }
      }

      this.style.backgroundColor = "#ccc";

      if (goalGameState.payoutMultiplier == 11.04) {
        endGameButton.click();
      }
    }
  }

  // dice
  var startDiceButton = document.getElementById("moneyButton3");
  var dice_p = document.getElementById("dice-p");
  var diceImg = document.getElementById("diceImg");

  diceButton.addEventListener("click", () => {
    body.style.height = "200px";

    goalbutton.classList.remove("casino-nav-active");
    lottoButton.classList.remove("casino-nav-active");
    coinflipButton.classList.remove("casino-nav-active");
    minesButton.classList.remove("casino-nav-active");
    diceButton.classList.add("casino-nav-active");

    diceContainer.style.display = "flex";
    lottoContainer.style.display = "none";
    coinflipContainer.style.display = "none";
    minesContainer.style.display = "none";
    goalContainer.style.display = "none";
    container5.style.display = "flex";
    container3.style.display = "none";
    container4.style.display = "none";

    dice_p.style.display = "none";
    diceImg.style.display = "none";
  });


  var rollOverText = document.getElementById("rollOver");
  var multiplierText = document.getElementById("multiplierDice");
  const slider = document.getElementById("rs-range-line");
  const min = slider.min;
  const max = slider.max;
  const value = slider.value;

  slider.style.background = `linear-gradient(to right, #F7879A 0%, #F7879A ${((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

  slider.oninput = function () {
    const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background = `linear-gradient(to right, #F7879A 0%, #F7879A ${percent}%, #DEE2E6 ${percent}%, #DEE2E6 100%)`;
    rollOverText.innerHTML = "Roll over: " + this.value;
    multiplierText.innerHTML = "Multiplier: " + (99 / this.value).toFixed(2);
  };


  setInterval(function () {
    range = document.getElementById("rs-range-line").value;
    rollOverText.innerHTML = "Roll over: " + range;
    multiplierText.innerHTML = "Multiplier: " + (99 / range).toFixed(2);
  }, 100);

  var previousPosition = 0;

  function startDiceGame() {
    var enteredGamble3 = parseInt(document.getElementById("money5").value);

    if (isNaN(enteredGamble3) || enteredGamble3 < 0) {
      document.getElementById("diceText").innerHTML = "Invalid amount.";
      return;
    }

    if (enteredGamble3 > count) {
      document.getElementById("diceText").innerHTML = "Insufficient funds.";
      return;
    }

    count -= enteredGamble3;
    casinoStatsState.wagered += enteredGamble3;
    localStorage.setItem('count', count);
    localStorage.setItem('statistics', JSON.stringify(casinoStatsState));

    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();

    var diceValue = Math.random() * 100;
    dice_p.style.display = "block";
    diceImg.style.display = "block";

    var leftPosition = (diceValue / 100) * 90;

    dice_p.style.setProperty('--previous-position', previousPosition + '%');
    dice_p.style.setProperty('--left-position', leftPosition + '%');

    previousPosition = leftPosition;

    dice_p.style.left = leftPosition + "%";
    dice_p.classList.add("rollIn");

    document.getElementById("diceValue").innerHTML = diceValue.toFixed(2);

    if (isWin(diceValue, range)) {
      casinoStatsState.wins += 1;
      document.getElementById("diceText").innerHTML = "You Win!";
    } else {
      casinoStatsState.lost += enteredGamble3;
      casinoStatsState.losses += 1;
      localStorage.setItem('count', count);
      localStorage.setItem('statistics', JSON.stringify(casinoStatsState));
      document.getElementById("diceText").innerHTML = "You lost! :(";
    }

    document.getElementById("money5").disabled = true;
    startDiceButton.disabled = true;
  }

  function isWin(diceValue, sliderValue) {
    const orangePosition = Math.ceil(((sliderValue - 1) / (slider.max - 1)) * 100);

    if (diceValue > orangePosition) {
      if (dicelose.paused) {
        dicelose.play();
      } else {
        dicelose.pause();
        dicelose.currentTime = 0;
        dicelose.play();
      }

      return false;
    } else {
      if (dicewin.paused) {
        dicewin.play();
      } else {
        dicewin.pause();
        dicewin.currentTime = 0;
        dicewin.play();
      }
      return true;
    }
  }

  function endDiceGame() {
    var winnings = (99 / range) * parseInt(document.getElementById("money5").value);

    startDiceButton.disabled = false;
    document.getElementById("money5").disabled = false;

    if (document.getElementById("diceText").innerHTML == "You Win!") {
      document.getElementById("diceText").innerHTML = `You won ${Math.round((winnings - parseInt(document.getElementById("money5").value))).toLocaleString()}!`;
      count += Math.round(winnings);
      casinoStatsState.profit += Math.round(winnings - document.getElementById("money5").value)
    }

    localStorage.setItem('count', count);
    localStorage.setItem('statistics', JSON.stringify(casinoStatsState));
    counter.textContent = "Pigs +" + count.toLocaleString();
    checkUpgrades();
    slider.disabled = false;

    dice_p.style.left = "0%";
    dice_p.classList.remove("rollIn");
    diceImg.style.display = "none";
    document.getElementById("diceValue").innerHTML = "";
    document.getElementById("rollOver").innerHTML = "";
  }

  startDiceButton.addEventListener("click", () => {
    slider.disabled = true;

    startDiceGame();
    setTimeout(function () {
      endDiceGame(true);
    }, 1500);
  });
});
