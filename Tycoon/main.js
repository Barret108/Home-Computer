// Clicking

// Variables
let display = document.getElementById("canv");
let money = 0;
let value = 1;
let workers = 1;

let cash = document.getElementById("cash2");
let cstart = "$$$: ";

// Adding Money
display.addEventListener("click", addMoney);

function addMoney() {
  money += Math.round(value * workers);
  cash.innerText = cstart + money;
}

// Upgrades

// Worker Spec

var spec = 35;
let workPrice = document.getElementById("workPrice");
let wlvl = document.getElementById("wlvl");
let wlevel = 2;
let workTitle = document.getElementById("worklev");

function upgradeWorker() {
  if (money >= spec) {
    value = value * 2.2;
    money -= spec;
    cash.innerText = cstart + money;
    spec = spec * 2;
    workPrice.innerText = spec;
    wlevel += 1;
    wlvl.innerText = wlevel;
    if (wlevel < 4) {
      workTitle.innerText = "Graduate";
    } else if (wlevel < 5) {
      workTitle.innerText = "Uni Student";
    } else if (wlevel < 6) {
      workTitle.innerText = "Uni Graduate";
    } else if (wlevel < 7) {
      workTitle.innerText = "New Employee";
    } else if (wlevel < 8) {
      workTitle.innerText = "Employee";
    } else if (wlevel < 9) {
      workTitle.innerText = "W Employee";
    } else if (wlevel < 10) {
      workTitle.innerText = "Manager";
    } else if (wlevel < 11) {
      workTitle.innerText = "Boss";
    } else if (wlevel < 12) {
      workTitle.innerText = "Boss's Boss";
    } else if (wlevel < 13) {
      workTitle.innerText = "Director";
    } else if (wlevel < 14) {
      workTitle.innerText = "CEO";
    } else if (wlevel < 15) {
      workTitle.innerText = "Big Cheese";
    }
  }
}

// Worker Count

var workplusprice = 200;
let workpluscost = document.getElementById("workamPrice");
let workplusamount = document.getElementById("wmlvl");
let workpluslvl = workplusamount + 1;
let workamt = document.getElementById("workeramountlvl");

function upgradeWorkercnt() {
  if (money >= workplusprice) {
    money -= workplusprice;
    workers = workers += 1;
    cash.innerText = cstart + money;
    workplusprice *= 3;
    workpluscost.innerText = workplusprice;
    workplusamount.innerText = workers;
  }
}

// Assistant Count

let assistPrice = document.getElementById("assistantPrice");
let assistCount = document.getElementById("assistantCount");
let assistLevel = document.getElementById("assistantLevel");
let assistLVL = 0;

let assistantPrice = 1000;
let assistantUpgradeCheck = 0;
let assistantCount = 1;

function upgradeAssistant() {
  if (money >= assistantPrice) {
    assistantPrice *= 10;
    assistLVL++;

    assistPrice.innerText = assistantPrice;
    assistCount.innerText = assistLVL;
    assistLevel.innerText = assistLVL + 1;

    assistantCount++;
    function repeatAssistant() {
      const myInt = setInterval(anotherclick, 1000 / assistantCount);
      assistantUpgradeCheck++;
    }
    repeatAssistant();

    function anotherclick() {
      if (assistantUpgradeCheck > 2) {
        assistantCount++;
        repeatAssistant();
        assistantUpgradeCheck = 0;
        clearInterval(myInt);
      } else {
        addMoney();
      }
    }
  }
}
