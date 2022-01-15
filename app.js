const darkToggle = document.getElementById("toggleDark");
let statsBtn;
const accessBtn = document.getElementById("accessBtn");
let searchBtn;
let homeBtn;
let contactBtn;
//Navbar buttons

const icons8Logo = document.getElementById("icons8Logo");
let gitHubLogo = document.getElementsByClassName("gitHubLogo");
const wikiLogo = document.getElementById("wikiLogo");
// const rapidAPIlogo = document.getElementById("rapidAPI");
const footer = document.getElementById("footerSection");
// Footer content

let navIcons = document.getElementsByClassName("navIcon");
// this array will be used to apply a different border color depending on the theme

let isHome = () => {
    return document.head.id === "indexPage";
}
let onContactPage = () => {
    return document.head.id === "contactUsPage";
}
let onSubmitPage = () => {
    return document.head.id === "submit";
}
let onStatsPage = () => {
    return document.head.id === "statsPage";
}

if (isHome()) {
    statsBtn = document.getElementById("stats");
    contactBtn = document.getElementById("contact");
}
if (onContactPage()) {
    homeBtn = document.getElementById("home");
    statsBtn = document.getElementById("stats");
}
if (onStatsPage()) {
    homeBtn = document.getElementById("home");
    contactBtn = document.getElementById("contact");
    searchBtn = document.getElementById("searchBtn");
}

// Below section is for cookie handling
const setCookie = (cName, cValue, cExp) => {
    const today = new Date();
    today.setTime(today.getTime() + (cExp * 24 * 60 * 60));
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

    if (onStatsPage()) {
        const sortIcons = document.getElementsByClassName("sorting");
        for (let i = 0; i < sortIcons.length; i++) {
            if (sortIcons[i].getAttribute("src") === "./icons/icons8-sort-32.png") {
                sortIcons[i].src = "./icons/icons8-sort-32-white.png";
            }
            else if (sortIcons[i].getAttribute("src") === "./icons/sort-up-32.png") {
                sortIcons[i].src = "./icons/sort-up-32-white.png";
            }
            else if (sortIcons[i].getAttribute("src") === "./icons/icons8-sort-down-32.png") {
                sortIcons[i].src = "./icons/icons8-sort-down-32-white.png";
            }
            else if (sortIcons[i].getAttribute("src") === "./icons/icons8-sort-down-32-white.png") {
                sortIcons[i].src = "./icons/icons8-sort-down-32.png";
            }
            else if (sortIcons[i].getAttribute("src") === "./icons/sort-up-32-white.png") {
                sortIcons[i].src = "./icons/sort-up-32.png";
            }
            else {
                sortIcons[i].src = "./icons/icons8-sort-32.png";
            }
        }
    }

    if (darkToggle.getAttribute("src") === "./icons/moon.svg") {
        darkToggle.src = "./icons/sun.svg";
    } else {
        darkToggle.src = "./icons/moon.svg";
    }

    if (isHome() || onContactPage()) {
        if (statsBtn.getAttribute("src") === "./icons/stats-dark.svg") {
            statsBtn.src = "./icons/stats-light.svg";
        } else {
            statsBtn.src = "./icons/stats-dark.svg";
        }
    }

    if (onSubmitPage() || onStatsPage() || onContactPage()) {
        if (homeBtn.getAttribute("src") === "./icons/home-dark.svg") {
            homeBtn.src = "./icons/home-light.svg";
        } else {
            homeBtn.src = "./icons/home-dark.svg";
        }
    }

    if (accessBtn.getAttribute("src") === "./icons/accessLight.png") {
        accessBtn.src = "./icons/accessDark.png";
    } else {
        accessBtn.src = "./icons/accessLight.png";
    }

    if (isHome() || onStatsPage()) {
        if (contactBtn.getAttribute("src") === "./icons/icons8-contact-us-100(1).png") {
            contactBtn.src = "./icons/icons8-contact-us-Light.png";
        } else {
            contactBtn.src = "./icons/icons8-contact-us-100(1).png";
        }
    }

    if (onStatsPage()) {
        if (searchBtn.getAttribute("src") === "./icons/neoDarkSearch.svg") {
            searchBtn.src = "./icons/neoLightSearch.svg";
        } else {
            searchBtn.src = "./icons/neoDarkSearch.svg";
        }
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

// This is necessary to only apply the transformations when the button is clicked
const combinedFunction = () => {
    darkToggle.style.transition = "transform .8s";
    if (darkToggle.getAttribute("src") === "./icons/moon.svg") {
        darkToggle.style.border = "2px solid white";
        darkToggle.style.transform = "rotate(180deg)";
    } else {
        darkToggle.style.border = "2px solid black";
        darkToggle.style.transform = "rotate(360deg)";
    }
    enDark();
}
// The two different triggers for dark mode (above and below this line)
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

if (isHome() || onContactPage()) {
    statsBtn.addEventListener("keyup", ev => {
        if (ev.key === " " || ev.key === "Enter") {
            ev.preventDefault();
            statsBtn.click();
        }
    });
}

accessBtn.addEventListener("keyup", ev => {
    if (ev.key === " " || ev.key === "Enter") {
        ev.preventDefault();
        accessBtn.click();
    }
});

if (onStatsPage()) {
    searchBtn.addEventListener("keyup", ev => {
        if (ev.key === " " || ev.key === "Enter") {
            ev.preventDefault();
            searchBtn.click();
        }
    });
}

if (onStatsPage() || isHome()) {
    contactBtn.addEventListener("keyup", ev => {
        if (ev.key === " " || ev.key === "Enter") {
            ev.preventDefault();
            contactBtn.click();
        }
    });
}
// End of key listeners section

// Below section is for hover/focus functionality, due to css causing issues after click
darkToggle.onfocus = darkToggle.onmouseover = () => {
    if (darkToggle.classList.toString() === "navIcon") {
        darkToggle.style.border = "2px solid black";
        darkToggle.style.padding = "2px";
    } else {
        darkToggle.style.border = "2px solid white";
        darkToggle.style.padding = "2px";
    }
}

darkToggle.onblur = darkToggle.onmouseleave = () => {
    darkToggle.style.border = "0px solid transparent";
    darkToggle.style.padding = "0px";
}
// Dark theme button

if (isHome() || onContactPage()) {
    statsBtn.onfocus = statsBtn.onmouseover = () => {
        if (statsBtn.classList.toString() === "navIcon") {
            statsBtn.style.border = "2px solid black";
            statsBtn.style.padding = "2px";
        } else {
            statsBtn.style.border = "2px solid white";
            statsBtn.style.padding = "2px";
        }
    }
    statsBtn.onblur = statsBtn.onmouseleave = () => {
        statsBtn.style.border = "0px solid transparent";
        statsBtn.style.padding = "0px";
    }
}
// Depending on the page, the button may or may not actually be there at all
// If a button is not present, we get into trouble with a null pointer
if (onContactPage() || onStatsPage() || onSubmitPage()) {
    homeBtn.onfocus = homeBtn.onmouseover = () => {
        if (homeBtn.classList.toString() === "navIcon") {
            homeBtn.style.border = "2px solid black";
            homeBtn.style.padding = "2px";
        } else {
            homeBtn.style.border = "2px solid white";
            homeBtn.style.padding = "2px";
        }
    }
    homeBtn.onblur = homeBtn.onmouseleave = () => {
        homeBtn.style.border = "0px solid transparent";
        homeBtn.style.padding = "0px";
    }
}
// Stats button and Home button

accessBtn.onfocus = accessBtn.onmouseover = () => {
    if (accessBtn.classList.toString() === "navIcon") {
        accessBtn.style.border = "2px solid black";
        accessBtn.style.padding = "2px";
    } else {
        accessBtn.style.border = "2px solid white";
        accessBtn.style.padding = "2px";
    }
}
accessBtn.onblur = accessBtn.onmouseleave = () => {
    accessBtn.style.border = "0px solid transparent";
    accessBtn.style.padding = "0px";
}
// TTS button

if (isHome() || onStatsPage()) {
    contactBtn.onfocus = contactBtn.onmouseover = () => {
        if (contactBtn.classList.toString() === "navIcon") {
            contactBtn.style.border = "2px solid black";
            contactBtn.style.padding = "2px";
        } else {
            contactBtn.style.border = "2px solid white";
            contactBtn.style.padding = "2px";
        }
    }
    contactBtn.onblur = contactBtn.onmouseleave = () => {
        contactBtn.style.border = "0px solid transparent";
        contactBtn.style.padding = "0px";
    }
}
// Contact us button

const arabicize = x => {
    if (x.innerHTML === "COVID-19 Informer") {
        x.innerHTML = "مخبر فيروس كورونا";
    } else {
        x.innerHTML = "COVID-19 Informer";
    }
}

const sortTable = (n, numeric) => {
    let rows, i, cellA, cellB, shouldSwitch;
    let switchcount = 0;
    let table = document.getElementById("statsTable");
    let switching = true;
    let direction = "ascending";
    let dirMarker = "";

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            cellA = rows[i].getElementsByTagName("TD")[n];
            if (rows[i + 1].getElementsByTagName("TD")[n] !== null && rows[i + 1].getElementsByTagName("TD")[n] !== undefined) {
                cellB = rows[i + 1].getElementsByTagName("TD")[n];
            }
            if (direction == "ascending") {
                dirMarker = "ascending";
                let x, y;
                if (numeric) {
                    x = Number(cellA.innerHTML);
                    y = Number(cellB.innerHTML);
                } else {
                    x = cellA.innerHTML.toLowerCase();
                    y = cellB.innerHTML.toLowerCase();
                }
                if (x > y) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction == "descending") {
                let x, y;
                if (numeric) {
                    x = Number(cellA.innerHTML);
                    y = Number(cellB.innerHTML);
                } else {
                    x = cellA.innerHTML.toLowerCase();
                    y = cellB.innerHTML.toLowerCase();
                }
                if (x < y) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && direction == "ascending") {
                direction = "descending";
                dirMarker = "descending";
                switching = true;
            }
        }
    }
    toggleSortIcon(n, dirMarker);
}// end of sortTable(n, b) function

const toggleSortIcon = (index, direction) => {
    const sortIcons = document.getElementsByClassName("sorting");
    for (let i = 0; i < sortIcons.length; i++) {
        if (i !== index) {
            if (document.body.className == "bootstrap") {
                sortIcons[i].src = "./icons/icons8-sort-32.png";
            } else {
                sortIcons[i].src = "./icons/icons8-sort-32-white.png";
            }
        }
    }

    if (direction === "ascending") {
        if (document.body.className == "bootstrap") {
            sortIcons[index].src = "./icons/sort-up-32.png";
            return;
        } else {
            sortIcons[index].src = "./icons/sort-up-32-white.png";
            return;
        }
    } else {
        if (document.body.className == "bootstrap") {
            sortIcons[index].src = "./icons/icons8-sort-down-32.png";
            return;
        } else {
            sortIcons[index].src = "./icons/icons8-sort-down-32-white.png";
            return;
        }
    }

}// end of toggleSortIcon(i, dir)

const filterTable = () => {
    let input, filter, table, tableRows, tableData, i, txtValue;
    input = document.getElementById('sfInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('statsTable');
    tableRows = table.getElementsByTagName('tr');

    for (i = 0; i < tableRows.length; i++) {
        tableData = tableRows[i].getElementsByTagName('td')[0];
        if (tableData) {
            txtValue = tableData.textContent || tableData.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tableRows[i].style.display = "";
            } else {
                tableRows[i].style.display = "none";
            }
        }
    }
}// end of function
