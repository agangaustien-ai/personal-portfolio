// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
});

// Typing effect for the name
const nameElement = document.querySelector(".c1-2");
const nameText = "Austien";
let index = 0;
let isTyping = true;

function typeWriter() {
  if (isTyping) {
    if (index < nameText.length) {
      nameElement.textContent = nameText.slice(0, index + 1);
      index++;
      setTimeout(typeWriter, 150);
    } else {
      isTyping = false;
      setTimeout(() => {
        isTyping = true;
        index = 0;
        typeWriter();
      }, 2000); // Pause before restarting
    }
  }
}

// Start typing effect when page loads
window.addEventListener("load", () => {
  nameElement.textContent = ""; // Clear initial text
  typeWriter();
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe sections for scroll animation
document
  .querySelectorAll(".section-box, #about, .com-tab, #projects")
  .forEach((section) => {
    observer.observe(section);
  });

// Skills hover effect
document.querySelectorAll(".tc-content > div").forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    skill.style.transform = "scale(1.1)";
    skill.style.transition = "transform 0.3s ease";
  });
  skill.addEventListener("mouseleave", () => {
    skill.style.transform = "scale(1)";
  });
});

// Contact form handling
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const message = document.getElementById("Message").value;

  if (name && email && message) {
    alert(
      `Thank you ${name}! Your message has been sent. I'll get back to you soon.`,
    );
    contactForm.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

// Contact buttons functionality
document.querySelectorAll(".con-button").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    switch (type) {
      case "email":
        window.location.href = `mailto:${value}`;
        break;
      case "phone":
        window.location.href = `tel:${value}`;
        break;
      case "location":
        // Open in Google Maps
        const encodedLocation = encodeURIComponent(value);
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`,
          "_blank",
        );
        break;
    }
  });
});

// Social buttons functionality
document.querySelectorAll(".social-button").forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platform;
    let url = "";

    switch (platform) {
      case "github":
        url = "https://github.com/agangaustien"; // Replace with actual GitHub username
        break;
      case "facebook":
        url = "https://facebook.com/agangaustien"; // Replace with actual Facebook profile
        break;
      case "instagram":
        url = "https://instagram.com/agangaustien"; // Replace with actual Instagram handle
        break;
      case "tiktok":
        url = "https://tiktok.com/@agangaustien"; // Replace with actual TikTok handle
        break;
      case "whatsapp":
        url = "https://wa.me/639971056167"; // Replace with actual WhatsApp number
        break;
    }

    if (url) {
      window.open(url, "_blank");
    }
  });
});

// Home buttons functionality
document.querySelectorAll(".home-button").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "resume") {
      // Replace with actual resume file path
      const resumeUrl = "/main/assets/resume.pdf"; // Update this path
      window.open(resumeUrl, "_blank");
    } else if (action === "contact") {
      // Scroll to contact section
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  });
});
