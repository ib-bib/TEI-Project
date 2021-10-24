let isHome = () => {
    return document.head.id === "indexPage";
}
// console.log(isHome());
// this pseudo-variable function will allows to know whether we are home or not
// allows us to determine which button functionality to enable, stats or Home

const darkToggle = document.getElementById("toggleDark");
const statsBtn = document.getElementById("stats");
const ttsBtn = document.getElementById("ttsBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("home");
//Navbar buttons

const icons8Logo = document.getElementById("icons8Logo");
let gitHubLogo = document.getElementsByClassName("gitHubLogo");
const wikiLogo = document.getElementById("wikiLogo");
const footer = document.getElementById("footerSection");
// Footer content

let navIcons = document.getElementsByClassName("navIcon");
// this array will be used to apply a different border color depending on the theme

// Below section is for cookie handling
const setCookie = (cName, cValue, cExp) => {
    const today = new Date();
    today.setTime( today.getTime() + (cExp*24*60*60) );
    let expires = "expires=" + today.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "SameSite=Lax; Secure";
}

const getCookie = (cName) => {
    let name = cName;
    let decodedCookie = decodeURIComponent(document.cookie);
    let stringsArray = decodedCookie.split(";");
    for (let i = 0; i < stringsArray.length; i++) {
        let currentString = stringsArray[i];
        while (currentString.charAt(0) == " ") {
            currentString = currentString.substring(1);
        }
        if (currentString.indexOf(name) == 0) {
            return currentString.slice(name.length, currentString.length);
        }
    }
    return "";
}

let enabledDarkModeCookie = () => {
    return getCookie("theme").toString().includes("dark");
}

const deleteCookie = () => {
    document.cookie = 'theme' + "=" + '' + ";" + "expires=Thu, 18 Dec 2013 12:00:00 UTC" + "SameSite=Lax; Secure";
}
// End of cookie functionality

// Apply dark theme for various components on the site
let enDark = () => {
    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].classList.toggle("dark");
    }

    if (darkToggle.getAttribute("src") === "./icons/moon.svg") {
        darkToggle.src = "./icons/sun.svg";
    } else {
        darkToggle.src = "./icons/moon.svg";
    }
    
    if (isHome()) {
        if (statsBtn.getAttribute("src") === "./icons/stats-dark.svg") {
            statsBtn.src = "./icons/stats-light.svg";
        } else {
            statsBtn.src = "./icons/stats-dark.svg";
        }
    }
    
    if (!isHome()) {
        if (homeBtn.getAttribute("src") === "./icons/home-dark.svg") {
            homeBtn.src = "./icons/home-light.svg";
        } else {
            homeBtn.src = "./icons/home-dark.svg";
        }
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

    if (icons8Logo.getAttribute("src") === "./icons/icons8-icons8.svg") {
        icons8Logo.src = "./icons/icons8-icons8-light.svg";
    } else {
        icons8Logo.src = "./icons/icons8-icons8.svg";
    }

    if (wikiLogo.getAttribute("src") === "./icons/icons8-wikipedia.svg") {
        wikiLogo.src = "./icons/icons8-wikipedia-light.svg";
    } else {
        wikiLogo.src = "./icons/icons8-wikipedia.svg";
    }

    for (let i = 0; i < gitHubLogo.length; i++) {
        let icon = gitHubLogo[i];
        if (icon.getAttribute("src") === "./icons/icons8-github.svg") {
            icon.src = "./icons/icons8-github-light.svg";
        } else {
            icon.src = "./icons/icons8-github.svg"
        }
    }

    if (footer.classList.contains("border-light")) {
        footer.classList.remove("border-light");
        footer.classList.add("border-dark");
    } else {
        footer.classList.remove("border-dark");
        footer.classList.add("border-light")
    }

    if (document.body.className === "bootstrap") {
        document.body.className = "bootstrap-dark";
        setCookie("theme", "dark", 1);
    } else {
        document.body.className = "bootstrap";
        deleteCookie();
    }
}
// This was necessary to only apply the transformations when the button is clicked
const combinedFunction = () => {
    darkToggle.style.transition = "transform .8s";
    if (darkToggle.getAttribute("src") === "./icons/moon.svg") {
        darkToggle.style.border = "2px solid white";
        darkToggle.style.transform = "rotate(180deg)";
    } else {
        darkToggle.style.border = "2px solid black";
        darkToggle.style.transform = "rotate(-180deg)";
    }
    enDark();
}
// The two different triggers for dark mode
if (enabledDarkModeCookie()) {
    enDark();
}
darkToggle.addEventListener("click", combinedFunction);// click event listener to enable dark theme

// Below section is to allow mouse click functionality via keyboard navigation as an alternative
darkToggle.addEventListener("keyup", ev => {
    if (ev.key === " " || ev.key === "Enter") {
        ev.preventDefault();
        darkToggle.click();
        darkToggle.mous
    }
});

if (isHome()) {
    statsBtn.addEventListener("keyup", ev => {
        if (ev.key === " " || ev.key === "Enter") {
            ev.preventDefault();
            statsBtn.click();
        }
    });
}

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
// End of key listeners section

// Below section is for hover/focus functionality, due to css causing issues after click
darkToggle.onmouseover = () => {
    if (darkToggle.classList.toString() === "navIcon") {
        darkToggle.style.border = "2px solid black";
        darkToggle.style.padding = "2px";
    } else {
        darkToggle.style.border = "2px solid white";
        darkToggle.style.padding = "2px";
    }
}

darkToggle.onmouseleave = () => {
    darkToggle.style.border = "0px solid transparent";
    darkToggle.style.padding = "0px";
}
// Dark theme button

if (isHome()) {
    statsBtn.onmouseover = () => {
        if (statsBtn.classList.toString() === "navIcon") {
            statsBtn.style.border = "2px solid black";
            statsBtn.style.padding = "2px";
        } else {
            statsBtn.style.border = "2px solid white";
            statsBtn.style.padding = "2px";
        }
    }
    statsBtn.onmouseleave = () => {
        statsBtn.style.border = "0px solid transparent";
        statsBtn.style.padding = "0px";
    }
}
// Depending on the page, the button may or may not actually be there at all
// If a button is not present, we get into trouble with a null pointer
if (!isHome()) {
    homeBtn.onmouseover = () => {
        if (homeBtn.classList.toString() === "navIcon") {
            homeBtn.style.border = "2px solid black";
            homeBtn.style.padding = "2px";
        } else {
            homeBtn.style.border = "2px solid white";
            homeBtn.style.padding = "2px";
        }
    }
    homeBtn.onmouseleave = () => {
        homeBtn.style.border = "0px solid transparent";
        homeBtn.style.padding = "0px";
    }
}
// Stats button and Home button

ttsBtn.onmouseover = () => {
    if (ttsBtn.classList.toString() === "navIcon") {
        ttsBtn.style.border = "2px solid black";
        ttsBtn.style.padding = "2px";
    } else {
        ttsBtn.style.border = "2px solid white";
        ttsBtn.style.padding = "2px";
    }
}

ttsBtn.onmouseleave = () => {
    ttsBtn.style.border = "0px solid transparent";
    ttsBtn.style.padding = "0px";
}
// TTS button
