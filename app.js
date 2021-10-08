const darkThemeButton = document.getElementById("toggleDark");
const statsButton = document.getElementById("getStats");
const ttsButton = document.getElementById("toggleTTS");

document.body.addEventListener("keyup", (ev) => {
  
    if (ev.key === "d") {
      darkThemeButton.focus();
    }

    else if (ev.key === "s") {
      statsButton.focus();
    }

    else if (ev.key === "t") {
      ttsButton.focus();
    }

});

darkThemeButton.addEventListener('click', () => {
    darkThemeButton.style.transform = "rotate(180deg)";
    darkThemeButton.style.opacity = 0;
});

darkThemeButton.addEventListener('keyup' , (ev) => {
  if (ev.key === ' ' || ev.key === 'Enter') {
    ev.preventDefault();
    darkThemeButton.click();
  }
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);