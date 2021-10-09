const darkToggle = document.getElementById("toggleDark");
const statsHomeBtn = document.getElementById("stats_home");
const ttsBtn = document.getElementById("ttsBtn");
const searchBtn = document.getElementById("searchBtn");

let epilepsyCheck = false; //This will be used to decide whether to use the transition animations or not
// This will also affect cool down on the dark theme switch

let navIcons = document.getElementsByClassName("navIcon");

darkToggle.addEventListener("click", ()=> {
    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].classList.toggle("dark");
    }

    darkToggle.style.transition = "transform .7s";
    if (darkToggle.getAttribute("src") === "./icons/moon.svg") {
        darkToggle.style.transform = "rotate(180deg)";
        darkToggle.src = "./icons/sun.svg";
        darkToggle.style.transform = "rotate(180deg)"
    } else {
        darkToggle.style.transform = "rotate(180deg)";
        darkToggle.src = "./icons/moon.svg";
        darkToggle.style.transform = "rotate(360deg)";
    }
    
    if (statsHomeBtn.getAttribute("src") === "./icons/stats-dark.svg") {
        statsHomeBtn.src = "./icons/stats-light.svg";
    } else {
        statsHomeBtn.src = "./icons/stats-dark.svg";
    }

    if (ttsBtn.getAttribute("src") === "./icons/mic-dark.svg") {
        ttsBtn.src = "./icons/mic-light.svg";
    } else {
        ttsBtn.src = "./icons/mic-dark.svg";
    }

    if (searchBtn.getAttribute("src") === "./icons/neoDarkSearch.svg") {
        searchBtn.src = "./icons/neoLightSearch.svg";
    } else {
        searchBtn.src = "./icons/neoDarkSearch.svg";
    }

    if (document.body.className === "bootstrap") {
        document.body.className = "bootstrap-dark";
    } else {
        document.body.className = "bootstrap";
    }
});

darkToggle.addEventListener("keyup", ev => {
    if (ev.key === " " || ev.key === "Enter") {
        ev.preventDefault();
        darkToggle.click();
    }
});

statsHomeBtn.addEventListener("keyup", ev => {
    if (ev.key === " " || ev.key === "Enter") {
        ev.preventDefault();
        statsHomeBtn.click();
    }
});

ttsBtn.addEventListener("keyup", ev => {
    if (ev.key === " " || ev.key === "Enter") {
        ev.preventDefault();
        ttsBtn.click();
    }
});

searchBtn.addEventListener("keyup", ev => {
    if (ev.key === " " || ev.key === "Enter") {
        ev.preventDefault();
        searchBtn.click();
    }
});