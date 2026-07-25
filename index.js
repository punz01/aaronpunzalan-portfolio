/*------------THEME TOGGLE------------*/

const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

function setThemeIcon() {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('i');
  const isDark = root.getAttribute('data-theme') === 'dark';
  icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

if (themeToggle) {
  setThemeIcon();
  themeToggle.onclick = () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setThemeIcon();
  };
}

/*------------TOGGLE ICON NAVBAR------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
  }
}

/*------------SCROLL SECTION ACTIVE LINK + STICKY HEADER------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        let target = document.querySelector('header nav a[href*=' + id + ']');
        if (target) target.classList.add('active');
      });
    }
  });

  if (header) header.classList.toggle('sticky', window.scrollY > 60);

  if (menuIcon) menuIcon.classList.remove('fa-xmark');
  if (navbar) navbar.classList.remove('active');
});

/*------------SCROLL REVEAL (vanilla IntersectionObserver)------------*/

const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

/*------------TYPED JS------------*/
if (typeof Typed !== 'undefined') {
  const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Developer', 'AI Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });
}

/*------------PROJECT GALLERY DATA------------*/

const galleryData = {
  project1: [
    "img/is1.jpg", "img/is2.jpg", "img/is3.jpg", "img/is4.jpg", "img/is5.jpg",
    "img/is6.jpg", "img/is7.jpg", "img/is8.jpg", "img/is9.jpg",
  ],
  project2: [
    "img/pms1.jpg", "img/pms2.jpg", "img/pms3.jpg", "img/pms4.jpg", "img/pms5.jpg",
  ],
  project3: [
    "img/obj1.jpg", "img/obj2.jpg", "img/obj3.jpg", "img/obj4.jpg", "img/obj5.jpg",
    "img/obj6.jpg", "img/obj7.jpg", "img/obj8.jpg", "img/obj9.jpg", "img/obj10.jpg",
    "img/obj11.jpg", "img/obj12.jpg",
  ],
  project4: [
    "img/shub1.jpg", "img/shub2.jpg", "img/shub3.jpg", "img/shub4.jpg", "img/shub5.jpg",
  ],
  project5: [
    "img/hallyu1.jpg", "img/hallyu2.jpg", "img/hallyu3.jpg", "img/hallyu4.jpg",
    "img/hallyu5.jpg", "img/hallyu6.jpg", "img/hallyu7.jpg",
  ],
  project6: [
    "img/sole1.jpg", "img/sole2.jpg", "img/sole3.jpg", "img/sole4.jpg", "img/sole5.jpg", "img/sole6.jpg",
  ],
  project7: [
    "img/pine1.jpg", "img/pine2.jpg", "img/pine3.jpg", "img/pine4.jpg", "img/pine5.jpg", "img/pine6.jpg",
  ],
  project8: [
    "img/bpoc1.jpg", "img/bpoc2.jpg", "img/bpoc3.jpg", "img/bpoc4.jpg", "img/bpoc5.jpg",
    "img/bpoc6.jpg", "img/bpoc7.jpg", "img/bpoc8.jpg", "img/bpoc9.jpg", "img/bpoc10.jpg",
    "img/bpoc11.jpg", "img/bpoc12.jpg",
  ],
  project9: [
    "img/noti1.jpg", "img/noti2.jpg", "img/noti3.jpg",
  ],
  project10: [
    "img/water1.jpg", "img/water2.jpg", "img/water3.jpg",
  ],
  project11: [
    "img/pay1.jpg", "img/pay2.jpg", "img/pay3.jpg", "img/pay4.jpg", "img/pay5.jpg", "img/pay6.jpg",
  ],
};

let currentImages = [];
let currentIndex = 0;

function openSlider(element) {
  const projectId = element.getAttribute('data-project');
  currentImages = galleryData[projectId];
  currentIndex = 0;

  updateSlider();
  document.getElementById("popupSlider").style.display = "flex";
}

function closeSlider() {
  document.getElementById("popupSlider").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateSlider();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateSlider();
}

function updateSlider() {
  const imageElement = document.getElementById("sliderImage");
  const counterElement = document.getElementById("sliderCounter");

  if (imageElement && counterElement && currentImages.length > 0) {
    imageElement.src = currentImages[currentIndex];
    counterElement.textContent = `${currentIndex + 1} of ${currentImages.length}`;
  }
}

/*------------CONTACT FORM------------*/

function sendEmail() {
  const fullname = document.querySelector("#fullname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const number = document.querySelector("#number").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!fullname || !email || !number || !subject || !message) {
    alert("Please fill out all fields before sending.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const templateParams = { fullname, email, number, subject, message };

  if (typeof emailjs !== 'undefined') {
    emailjs
      .send("service_34wq60a", "template_adnnam3", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email Sent!");
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        alert("Email not sent. Please try again.");
      });
  } else {
    alert("Email service not available.");
  }
}