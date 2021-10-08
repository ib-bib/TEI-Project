const darkToggle = document.getElementById("toggleDark");
// const 

let navIcons = document.getElementsByClassName("navIcon");

darkToggle.addEventListener("click", ()=> {
    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].classList.toggle("dark");
    }

    if (document.body.className === "bootstrap") {
        document.body.className = "bootstrap-dark";
    } else {
        document.body.className = "bootstrap";
    }

    // darkToggle.setAttribute("src")
});
