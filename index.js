/*------------TOGGLE ICON NAVBAR------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*------------SCROLL SECTION ACTIVE LINK------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*------------STICKY NAVBAR------------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*------------REMOVE TOGGLE ICON AND NAVBAR------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

     /*------------SCROLL REVEAL------------*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.me-container, heading', { origin: 'top'});
ScrollReveal().reveal('.me-img, .cells, .work-card, .certificate-container, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .about-content', { origin: 'right'});

/*------------TYPED JS------------*/
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer', 'UI/UX Designer', 'Web Designer' ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});



  const galleryData = {
    project1: [
      'img/is1.jpg',
      'img/is2.jpg',
      'img/is3.jpg',
      'img/is4.jpg',
      'img/is5.jpg',
      'img/is6.jpg',
      'img/is7.jpg',
      'img/is8.jpg',
      'img/is9.jpg',
    ],
    project2: [
      'img/pms1.jpg',
      'img/pms2.jpg',
      'img/pms3.jpg',
      'img/pms4.jpg',
      'img/pms5.jpg',
    ],
   project3: [
      'img/obj1.jpg',
      'img/obj2.jpg',
      'img/obj3.jpg',
      'img/obj4.jpg',
      'img/obj5.jpg',
      'img/obj6.jpg',
      'img/obj7.jpg',
      'img/obj8.jpg',
      'img/obj9.jpg',
      'img/obj10.jpg',
      'img/obj11.jpg',
      'img/obj12.jpg',
   ],
   project4: [
      'img/shub1.jpg',
      'img/shub2.jpg',
      'img/shub3.jpg',
      'img/shub4.jpg',
      'img/shub5.jpg',
   ],
   project5: [
      'img/hallyu1.jpg',
      'img/hallyu2.jpg',
      'img/hallyu3.jpg',
      'img/hallyu4.jpg',
      'img/hallyu5.jpg',
      'img/hallyu6.jpg',
      'img/hallyu7.jpg',

   ],
   project6: [
      'img/sole1.jpg',
      'img/sole2.jpg',
      'img/sole3.jpg',
      'img/sole4.jpg',
      'img/sole5.jpg',
      'img/sole6.jpg',
   ],
   project7: [
      'img/pine1.jpg',
      'img/pine2.jpg',
      'img/pine3.jpg',
      'img/pine4.jpg',
      'img/pine5.jpg',
      'img/pine6.jpg',

   ],
  };

  let currentImages = [];
  let currentIndex = 0;

  function openSlider(element) {
  const projectId = element.getAttribute('data-project');
  currentImages = galleryData[projectId];
  currentIndex = 0;

  updateSlider(); // <-- use this instead of manually setting the image
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

function sendEmail() {
    const fullname = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const number = document.querySelector("#number").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Check if fields are empty
    if (!fullname || !email || !number || !subject || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      fullname,
      email,
      number,
      subject,
      message,
    };

    // Send the email
    emailjs
      .send("service_34wq60a", "template_adnnam3", templateParams)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email Sent!");
      })
      .catch(function(error) {
        console.error("FAILED...", error);
        alert("Email not sent. Please try again.");
      });
  }












