
/* ===== MOBILE MENU ===== */
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* ===== SECTION NAVIGATION ===== */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const target = document.getElementById(link.dataset.section);
    if (target) target.scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("show");
  });
});

/* ===== DROPDOWNS ===== */
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const menu = btn.nextElementSibling;
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});

/* ===== AYAH SLIDER ===== */
let slides = document.querySelectorAll(".ayah-slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 6000);

/* ===== FOOTER YEAR ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== FORM FEEDBACK ===== */
["contact-form", "donation-form"].forEach(id => {
  const form = document.getElementById(id);
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Form submitted successfully. JazakAllahu khairan!");
    form.reset();
  });
});
/* =====================
   MOBILE MENU
===================== */
const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

menuToggle.onclick = () => {
  navLinks.classList.toggle("show");
};

/* =====================
   SECTION SWITCH
===================== */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(link.dataset.section).classList.add("active");

    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    navLinks.classList.remove("show");
  });
});

/* =====================
   DROPDOWNS
===================== */
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});

/* =====================
   AYAH SLIDER
===================== */
let ayahIndex = 0;
const ayahs = document.querySelectorAll(".ayah-slide");

setInterval(() => {
  ayahs[ayahIndex].classList.remove("active");
  ayahIndex = (ayahIndex + 1) % ayahs.length;
  ayahs[ayahIndex].classList.add("active");
}, 6000);

/* =====================
   FOOTER YEAR
===================== */
document.getElementById("year").textContent = new Date().getFullYear();

