 /*Search bar in the navbar*/
 function ctrlF(string){
    window.find(string);
}
function search(ele) {
    if(event.key === 'Enter') {
        ctrlF(ele.value);
    }
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navBar');
    if (window.scrollY > 50) {
        nav.classList.add('expanded');
        console.log('expanded added');
    } else {
        nav.classList.remove('expanded');
        console.log('expanded removed');
    }
});

/*this connects the Mute/unmute button to the background music*/
function mute() {
    var aud = document.getElementById("Rain");
    aud.muted=!aud.muted;
}
/*this connects the Play button to the background music*/
function play() {
    var aud = document.getElementById("Rain");

    aud.paused? aud.play() : aud.pause();
}

function toggleColumn(columnId, buttonId, side) {
  var col = document.getElementById(columnId);
  var btn = document.getElementById(buttonId);
  let lang = localStorage.getItem('lang') || 'en';

  if (col.classList.contains('hidden')) {
      col.classList.remove('hidden');
      btn.setAttribute('data-state', 'open');
  } else {
      col.classList.add('hidden');
      btn.setAttribute('data-state', 'closed');
  }
  // Update the button text according to its new state
  const key = btn.getAttribute('data-key');
  const state = btn.getAttribute('data-state');
  const transKey = key + '_' + state;
  if (translations[lang] && translations[lang][transKey]) {
    if(translations[lang][transKey].includes('<')){
      btn.innerHTML = translations[lang][transKey];
    } else {
      btn.textContent = translations[lang][transKey];
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
    const magicBox = document.getElementById('magicbox');
    let animationTimeouts = []; // to store the timeout IDs

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        // Get only images with IDs image1 to image6
        let magicImages = Array.from(magicBox.querySelectorAll('.magic'))
            .filter(img => /^image[1-6]$/.test(img.id));

        // Sort the images numerically (image1, image2, ... image6)
        magicImages.sort((a, b) => {
            const aNum = parseInt(a.id.replace('image', ''), 10);
            const bNum = parseInt(b.id.replace('image', ''), 10);
            return aNum - bNum;
        });

        if (entry.isIntersecting) {
            // Clear any pending timeouts in case of a rapid scroll
            animationTimeouts.forEach(timeout => clearTimeout(timeout));
            animationTimeouts = [];

            // Optionally remove the "appear" class if it was already added
            magicImages.forEach(img => img.classList.remove('appear'));

            // Add the "appear" class sequentially with a delay
            magicImages.forEach((img, index) => {
            let timeout = setTimeout(() => {
                img.classList.add('appear');
            }, index * 500); // 300ms delay between each image;
            animationTimeouts.push(timeout);
            });
        } else {
            // When magicBox leaves view, clear any pending timeouts...
            animationTimeouts.forEach(timeout => clearTimeout(timeout));
            animationTimeouts = [];
            // and remove the "appear" class from all images
            magicImages.forEach(img => img.classList.remove('appear'));
        }
        });
    }, { threshold: 0.4 }); // Trigger when 50% of magicBox is visible

    observer.observe(magicBox);
});

if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    // Remove or disable the audio element on mobile devices
    const audio = document.getElementById("Rain");
    if (audio) {
        audio.parentNode.removeChild(audio);
    }
}

/* Font size and style, When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    var dd=document.getElementById("myDropdown");
    var burgher=document.getElementById("burgher");
    if (dd.style.display == "") {
        dd.style.display = "block";
        burgher.classList.remove('fa-bars');
        burgher.classList.toggle('fa-xmark');
    }
    else{
        dd.style.display = "";
        burgher.classList.remove('fa-xmark');
        burgher.classList.toggle('fa-bars');
    }
}
function myFunction2() {
    var dd2=document.getElementById("myDropdown2");
    var burgher2=document.getElementById("burgher2");
    if (dd2.style.display == "") {
        dd2.style.display = "block";
        burgher2.classList.remove('fa-bars');
        burgher2.classList.toggle('fa-xmark');
    }
    else{
        dd2.style.display = "";
        burgher2.classList.remove('fa-xmark');
        burgher2.classList.toggle('fa-bars');
    }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "block") {
                openDropdown.style.display = "";
            }
        }
        var icon1 = document.getElementById("burgher");
        if (icon1) {
            icon1.classList.remove("fa-xmark");
            icon1.classList.add("fa-bars");
        }
        var icon2 = document.getElementById("burgher2");
        if (icon2) {
            icon2.classList.remove("fa-xmark");
            icon2.classList.add("fa-bars");
        }
    }
}

//this send the user from the navbar to the element (RIGHTFULLY CENTERED NOW)
document.addEventListener('DOMContentLoaded', function() {
    // This code will run once the DOM is fully loaded

    // Select all anchor links that reference an ID on the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default jump behavior

        // Get the target element based on the href attribute
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          // Calculate the target element's position so it's centered in the viewport
          const rect = target.getBoundingClientRect();
          const elementCenter = rect.top + window.scrollY + (rect.height / 2);
          const scrollToPosition = elementCenter - (window.innerHeight / 2);

          // Scroll smoothly to the calculated position
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });

/*FORM SUBMISSION*/
/*function in jquery for handling of the messages in the Contact Me Form*/
$(document).ready(function(){
    // Flag to prevent multiple submissions
    var formSubmitted = false;

    $('#contactForm').on('submit', function(e) {
      // If the form has already been submitted, prevent further submissions.
      if (formSubmitted) {
        e.preventDefault();
        return false;
      }

      console.log("Submit triggered");

      // Check the honeypot field—if it has a value, cancel submission.
      if ($('#honeypot').val().trim() !== "") {
        alert("Bot detected!");
        e.preventDefault();
        return false;
      }

      // Validate Full name using the name attribute.
      var fullName = $('input[name="entry.1712370041"]').val();
      if (fullName.trim().length < 3) {
        alert("Full name must be at least 3 characters.");
        e.preventDefault();
        return false;
      }

      // Validate Message using the name attribute.
      var message = $('textarea[name="entry.822952891"]').val().trim();
      if (message.length < 3) {
        alert("Message must be at least 3 characters.");
        e.preventDefault();
        return false;
      }

      // Change button text and disable submission
      formSubmitted = true;
      $('#submitButton').prop("disabled", true).val("Submitting...");

      setTimeout(function() {
        $('#submitButton').val("Submitted successfully!");
      }, 2000); // Simulating success
    });
  });

/*Navbar expansion on mobile pushes the content down instead of hiding it*/
  function toggleMenu() {
    var navLinks = document.getElementById("navBarLinks");
    navLinks.classList.toggle("active");
    var innercontent = document.getElementById("innercontent");
    var content = document.getElementById("content");

    if (navLinks.classList.contains("active")) {
        // Move inner content down by 60px when menu is open
        innercontent.style.transform = "translateY(450px)";
        content.style.overflow = "auto";
      } else {
        // Reset inner content's transform when menu is closed
        innercontent.style.transform = "translateY(0)";
        content.style.overflow = "hidden";
      }
  }


document.addEventListener("DOMContentLoaded", function () {
    const goTopButton = document.querySelector(".go-top");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) { // Adjust scroll threshold as needed
        goTopButton.classList.add("show");
      } else {
        goTopButton.classList.remove("show");
      }
    });
  });

/*using the mouse to scroll the timeline horizontally or grabbing with the mouse */
const timeline = document.querySelector('.timeline');
timeline.addEventListener('wheel', function(e) {
  // Prevent the default vertical scroll
  e.preventDefault();
  // Scroll horizontally instead—adjust the multiplier if needed
  this.scrollLeft += e.deltaY;
});

document.addEventListener('DOMContentLoaded', () => {
const slider = document.querySelector('.timeline');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
isDown = true;
slider.classList.add('active');
// Get the initial position relative to the slider
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
if (!isDown) return;
e.preventDefault();
// Calculate the current position
const x = e.pageX - slider.offsetLeft;
// Distance moved since mousedown
const walk = (x - startX) * 2; // Multiplier to adjust speed
slider.scrollLeft = scrollLeft - walk;
});
});

/*functions for scrolling the timeline with the buttons*/
document.getElementById("scrollLeftBtn").addEventListener("click", function() {
  scrollTimeline("left");
});

document.getElementById("scrollRightBtn").addEventListener("click", function() {
  scrollTimeline("right");
});

function scrollTimeline(direction) {
  // Get the timeline element and its bounding rectangle
  const timeline = document.querySelector(".timeline-wrapper .timeline");
  const timelineRect = timeline.getBoundingClientRect();
  const entries = timeline.querySelectorAll(".entry");

  if (direction === "right") {
    // For right-scroll, find the first entry whose right side is off-screen on the right
    for (const entry of entries) {
      const entryRect = entry.getBoundingClientRect();
      if (entryRect.right > timelineRect.right) {
        // Scroll so that the entry's left edge aligns with the timeline's left edge
        timeline.scrollTo({ left: entry.offsetLeft, behavior: "smooth" });
        break;
      }
    }
  } else if (direction === "left") {
    // For left-scroll, find the first entry from the right that is partially off-screen on the left
    for (let i = entries.length - 1; i >= 0; i--) {
      const entry = entries[i];
      const entryRect = entry.getBoundingClientRect();
      if (entryRect.left < timelineRect.left) {
        // Instead of aligning the entry's left edge, calculate the scroll position
        // so that the entry's right edge aligns with the timeline's right edge.
        const scrollLeftValue = entry.offsetLeft + entry.offsetWidth - timeline.clientWidth;
        timeline.scrollTo({ left: scrollLeftValue, behavior: "smooth" });
        break;
      }
    }
  }
}

/*READ MROE button function */
function updateReadMoreButtons() {
  const currentLang = localStorage.getItem('lang') || 'en';
  document.querySelectorAll('.read-more').forEach(btn => {
    // Assuming each read-more button is inside an entry that contains .entry-content
    const content = btn.closest('.entry').querySelector('.entry-content');
    btn.textContent = content && content.classList.contains('expanded')
      ? translations[currentLang].readLess
      : translations[currentLang].readMore;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const entries = document.querySelectorAll('.timeline-wrapper .entry');
  entries.forEach(entry => {
    const content = entry.querySelector('.entry-content');
    const btn = entry.querySelector('.read-more');
    if (content && btn) {
      if (content.scrollHeight > 100) {
        btn.style.display = 'block';
      }
      // Set initial text using the current language from localStorage
      let lang = localStorage.getItem('lang') || 'en';
      btn.textContent = content.classList.contains('expanded')
                        ? translations[lang].readLess
                        : translations[lang].readMore;
      btn.addEventListener('click', function() {
        // Re-read language each time, in case it has changed
        let lang = localStorage.getItem('lang') || 'en';
        if (content.classList.contains('expanded')) {
          content.classList.remove('expanded');
          btn.textContent = translations[lang].readMore;
        } else {
          content.classList.add('expanded');
          btn.textContent = translations[lang].readLess;
        }
      });
    }
  });
});


function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const state = el.getAttribute('data-state');
    if(state){
      // Build a compound key for elements with a state (e.g. leftBtn_closed)
      const transKey = key + '_' + state;
      if (translations[lang] && translations[lang][transKey]) {
        if(translations[lang][transKey].includes('<')){
          el.innerHTML = translations[lang][transKey];
        } else {
          el.textContent = translations[lang][transKey];
        }
      }
    } else {
      if (translations[lang] && translations[lang][key]) {
        if(translations[lang][key].includes('<')){
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    }
  });

  // Update the width of the Font Size button (which now should be the actual button)
  const fontSize = document.getElementById("fontSize");
  if (fontSize) {
    fontSize.style.width = lang === 'it' ? "130px" : "100px";
  }

  // Update the CV link based on language (if you have one)
  const cvLink = document.getElementById("view-cv");
  if (cvLink) {
    cvLink.href = lang === 'en' ? "pdf/RG_CV_eng.pdf" : "pdf/RG_CV.pdf";
  }
}

/*this changes the flag icons showed when switching languages */
document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById('language-toggle');

  langBtn.textContent = "";
  langBtn.style.display = 'inline-block';

  /*Check if a language is stored; if not, default to English.*/
  let lang = localStorage.getItem('lang');
  if (!lang) {
    lang = 'en';
    localStorage.setItem('lang', lang);
  }

  setLanguage(lang);

  // When the page is in English, displays the Italian flag (indicating you can switch to Italian)
  langBtn.style.backgroundImage =
    lang === 'en'
      ? "url('images/italian.png')"
      : "url('images/english.png')";
});

document.getElementById('language-toggle').addEventListener('click', function() {
  let currentLang = localStorage.getItem('lang') || 'en';
  let newLang = currentLang === 'en' ? 'it' : 'en';

  setLanguage(newLang);
  localStorage.setItem('lang', newLang);
  updateReadMoreButtons();

  this.style.backgroundImage =
    newLang === 'en'
      ? "url('images/italian.png')"
      : "url('images/english.png')";
});
