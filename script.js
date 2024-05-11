
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const menuIconX = document.getElementById("menu-iconX");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden");
    menuIconX.classList.toggle("hidden");
    menuList.classList.toggle("hidden");
});

menuIconX.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden");
    menuList.classList.toggle("hidden");
    menuIconX.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    var menuLinks = document.querySelectorAll(".nav-item a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;
                var targetElement = document.querySelector(hash);

                if (targetElement) {
                    var targetOffset = targetElement.offsetTop;
                    var duration = 1500;
                    var startTime = performance.now();

                    function animateScroll(currentTime) {
                        var elapsed = currentTime - startTime;
                        window.scrollTo(
                            0,
                            easeInOutExpo(elapsed, 0, targetOffset, duration)
                        );

                        if (elapsed < duration) {
                            requestAnimationFrame(animateScroll);
                        }
                    }

                    function easeInOutExpo(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
                        t--;
                        return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b;
                    }

                    requestAnimationFrame(animateScroll);
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("darkMode");
    const lightModeBtn = document.getElementById("lightMode");
    const navbar = document.getElementById("navbar");
    const body = document.body;

    function enableDarkTheme() {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
        lightModeBtn.style.display = "block";
        lightModeBtn.style.color = "white";
        darkModeBtn.style.display = "none";
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
    }

    function enableLightTheme() {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        lightModeBtn.style.display = "none";
        darkModeBtn.style.display = "block";
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
    }

    darkModeBtn.addEventListener("click", enableDarkTheme);
    lightModeBtn.addEventListener("click", enableLightTheme);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        enableDarkTheme();
    } else {
        enableLightTheme();
    }
});
