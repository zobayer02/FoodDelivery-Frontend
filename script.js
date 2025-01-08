document.addEventListener('DOMContentLoaded', function () {
    const heroCarousel = document.querySelector('#heroCarousel');
  
    // Initialize the Bootstrap carousel with automatic slide changes
    if (heroCarousel) {
      new bootstrap.Carousel(heroCarousel, {
        interval: 3000, // Change slide every 3 seconds
        ride: 'carousel', // Start automatically
      });
    }
  });

  
  // Toggle Function for Boxes
function toggleBox(boxId) {
  // Close any open box
  const allBoxes = document.querySelectorAll(".info-box");
  allBoxes.forEach((box) => {
    if (box.querySelector(`#box-${boxId}`)) {
      box.classList.toggle("active");
    } else {
      box.classList.remove("active");
    }
  });
}


document.querySelector(".message-box-wrapper").addEventListener("click", function () {
  const box = document.querySelector(".message-box");
  box.style.opacity = "1";
  box.style.transform = "scale(1)";
  box.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
});




// Bounce animation for the logo
function handleLogoClick() {
  const logo = document.getElementById("main-logo");
  logo.classList.add("active");

  // Remove bounce animation after a delay
  setTimeout(() => {
    logo.classList.remove("active");
  }, 500);
}

// Bounce animation for social media icons
function handleSocialClick(icon) {
  const icons = document.querySelectorAll(".social-icon");
  icons.forEach((i) => i.classList.remove("active")); // Reset all icons
  icon.classList.add("active");

  // Remove bounce animation after a delay
  setTimeout(() => {
    icon.classList.remove("active");
  }, 500);
}





// Optional: Add any custom interactivity here
document.querySelectorAll('.food-box').forEach(box => {
  box.addEventListener('click', () => {
    console.log("Food box clicked!");
  });
});




