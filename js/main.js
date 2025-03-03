// Mobil menü işlevselliği
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Menüyü aç/kapa
  nav.classList.toggle("active");

  // Menü animasyonu
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Burger animasyonu
  burger.classList.toggle("toggle");
});

// Sayfa kaydırma animasyonu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll olayında header'ı güncelle
window.addEventListener("scroll", () => {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Sayfa yüklendiğinde animasyon
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = "0";
  setTimeout(() => {
    heroContent.style.transition = "opacity 1s ease-in-out";
    heroContent.style.opacity = "1";
  }, 500);
});
