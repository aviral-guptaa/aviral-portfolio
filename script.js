/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* =========================
   CATEGORY BUTTONS
========================= */

const categoryButtons =
  document.querySelectorAll(".category");

categoryButtons.forEach((button) => {

  button.addEventListener("click", () => {

    categoryButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

  });

});


/* =========================
   BACK TO TOP
========================= */

const topButton =
  document.getElementById("topButton");


topButton.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   HIDE / SHOW TOP BUTTON
========================= */

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topButton.style.opacity = "1";
    topButton.style.pointerEvents = "auto";

  } else {

    topButton.style.opacity = "0";
    topButton.style.pointerEvents = "none";

  }

});


/* =========================
   PROJECT HOVER EFFECT
========================= */

const featuredCard =
  document.querySelector(".featured-card");


featuredCard.addEventListener("mousemove", (event) => {

  const rect =
    featuredCard.getBoundingClientRect();

  const x =
    event.clientX - rect.left;

  const y =
    event.clientY - rect.top;

  const rotateX =
    ((y / rect.height) - 0.5) * -2;

  const rotateY =
    ((x / rect.width) - 0.5) * 2;

  featuredCard.style.transform =
    `perspective(1000px)
     rotateX(${rotateX}deg)
     rotateY(${rotateY}deg)
     translateY(-3px)`;

});


featuredCard.addEventListener("mouseleave", () => {

  featuredCard.style.transform =
    "translateY(0)";

});


/* =========================
   CURRENT YEAR
========================= */

const yearEl =
  document.querySelector(".contact footer span:nth-child(2)");

if (yearEl) {

  yearEl.textContent =
    `© ${new Date().getFullYear()} Aviral Gupta`;

}

/* =========================
   FOOTER
========================= */

const footerYear2 = document.getElementById("footer-year");
if (footerYear2) {
  footerYear2.textContent = new Date().getFullYear();
}

const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    alert("Thanks! " + email + " has been submitted.");
  });
}
