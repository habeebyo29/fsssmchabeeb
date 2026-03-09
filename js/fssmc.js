document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     NAVIGATION
  ========================= */

  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section, header');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.dataset.section;
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      link.classList.add('active');
      targetSection.classList.add('active');

      targetSection.scrollIntoView({ behavior: 'smooth' });

      if(navLinks) navLinks.classList.remove('show');
    });
  });

  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  /* =========================
     EVENT LABEL LANGUAGE TOGGLE
  ========================= */

  document.querySelectorAll('.event-label').forEach(label => {

    let isArabic = false;

    label.addEventListener('click', () => {
      isArabic = !isArabic;
      label.textContent = isArabic ? label.dataset.ar : label.dataset.en;
    });

  });

  /* =========================
     CARD HOVER EFFECT
  ========================= */

  document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
    });

  });

  document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});


  /* =========================
     DONATION FORM
  ========================= */

  const donationForm = document.getElementById('donation-form');
  const donationFeedback = document.getElementById('donation-feedback');

  if (donationForm) {

    donationForm.addEventListener('submit', function (e) {

      e.preventDefault();

      const name = document.getElementById('donor-name').value;

      donationFeedback.style.display = 'block';

      donationFeedback.textContent =
        `Jazakumullahu Khayran${name ? ', ' + name : ''}! May Allah reward you abundantly. | جزاكم الله خيرا`;

      donationForm.reset();

      setTimeout(() => {
        donationFeedback.style.display = 'none';
      }, 5000);

    });

  }

  /* =========================
     CONTACT FORM
  ========================= */

  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');

  if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

      e.preventDefault();

      const name = document.getElementById('contact-name').value;

      contactFeedback.style.display = 'block';

      contactFeedback.textContent =
        `Thank you for reaching out${name ? ', ' + name : ''}! | شكراً لتواصلك معنا`;

      contactForm.reset();

      setTimeout(() => {
        contactFeedback.style.display = 'none';
      }, 5000);

    });

  }

  /* =========================
     FAQ SCROLL ANIMATION
  ========================= */

  function revealSections() {

    const sections = document.querySelectorAll('#about > section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {

      const top = section.getBoundingClientRect().top;

      if (top < windowHeight - 150) {
        section.classList.add('visible');
      }

    });

  }

  window.addEventListener('scroll', revealSections);
  revealSections();

});


/* =========================
   PRAYER TIMES
========================= */

const CITY = "Lagos";
const COUNTRY = "Nigeria";
const PRAYERS = ["Fajr","Dhuhr","Asr","Maghrib","Isha"];

async function getPrayerTimes() {

  try {

    const res = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${CITY}&country=${COUNTRY}&method=2`
    );

    const data = await res.json();

    return data.data.timings;

  } catch (err) {

    console.error("Prayer API error:", err);

  }

}

function formatTime(time24){

  const [h,m] = time24.split(":");

  const hour = ((+h + 11) % 12 + 1);
  const period = +h >= 12 ? "PM":"AM";

  return `${hour}:${m} ${period}`;

}

function updatePrayerTable(timings){

  PRAYERS.forEach(p => {

    const el = document.getElementById(p);

    if(el) el.textContent = formatTime(timings[p]);

  });

}

async function initPrayerSection(){

  const timings = await getPrayerTimes();

  if(timings){

    updatePrayerTable(timings);

  }

}

initPrayerSection();