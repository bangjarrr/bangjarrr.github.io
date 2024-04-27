// Menangani peristiwa apabila button pada tampilan hp saat ditekan

var menuIcon = document.getElementById('menu-icon')
var menuList = document.getElementById('menu-list')
var menuIconX = document.getElementById('menu-iconX')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle ('hidden');
    menuIconX.classList.toggle ('hidden');
    menuList.classList.toggle ('hidden');
});

menuIconX.addEventListener('click', () => {
    menuIcon.classList.toggle ('hidden');
    menuList.classList.toggle ('hidden');
    menuIconX.classList.toggle ('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    var menuLinks = document.querySelectorAll('.nav-item a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;
                var targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Animasi scroll halus
                    var targetOffset = targetElement.offsetTop;
                    var duration = 1500;
                    var startTime = performance.now();

                    function animateScroll(currentTime) {
                        var elapsed = currentTime - startTime;
                        window.scrollTo(0, easeInOutExpo(elapsed, 0, targetOffset, duration));

                        if (elapsed < duration) {
                            requestAnimationFrame(animateScroll);
                        }
                    }

                    function easeInOutExpo(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                        t--;
                        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
                    }

                    requestAnimationFrame(animateScroll);
                }
            }
        });
    });
});


function sendToWA() {
    
    try {
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;
        
        if (!nama || !email || !pesan) {
            alert('Harap isi semua form sebelum mengirim pesan.');
            return;
        }
        
        // FUngsi Validasi EMail
        
        function validateEmail() {
            var emailInput = document.getElementById('email');
            var email = emailInput.value;
        
            // Pola ekspresi reguler untuk validasi email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (emailRegex.test(email)) {
                // Email valid
                return true;
            } else {
                // Email tidak valid
                return false;
            }
        }

        // memanggil alert email valid
        
        if (!validateEmail()) {
            alert('Harap isi email dengan benar sebelum mengirim pesan.');
            return;
        }
        


        const linkWhatsApp = `https://wa.me/6281615650796?text=
                            Name : ${encodeURIComponent(nama)} %20 ,
                            %0A Mail : ${encodeURIComponent(email)} %20 ,
                            %0A Message : ${encodeURIComponent(pesan)} .
                            `
        window.open(linkWhatsApp, '_blank');
    } catch (error) {
        
        // Menangkap dan menanggapi kesalahan
        alert('Terjadi kesalahan: ' + error.message);
    }
}
var myForm = document.getElementById('my-form');

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    myForm.reset();
    sendToWA()
});

document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('darkMode');
    const lightModeBtn = document.getElementById('lightMode');
    const navbar = document.getElementById("navbar");
    const body = document.body;

    function enableDarkTheme() {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        lightModeBtn.style.display = 'block';
        lightModeBtn.style.color = 'white';
        darkModeBtn.style.display = 'none';
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
    }
  
    function enableLightTheme() {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        lightModeBtn.style.display = 'none';
        darkModeBtn.style.display = 'block';
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");

    }
  
    darkModeBtn.addEventListener('click', enableDarkTheme);
    lightModeBtn.addEventListener('click', enableLightTheme);
  
      // Cek preferensi tema di localStorage saat halaman dimuat
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkTheme();
    } else {
        enableLightTheme();
    }
  });