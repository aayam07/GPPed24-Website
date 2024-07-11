window.addEventListener("scroll", (e) => {
  const navbar = document.querySelector("header");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else navbar.classList.remove("scrolled");
});

const navToggle = () => {
  const checkbox = document.getElementById("mobile-list-checkbox");
  const navbar = document.querySelector("header");
  if (checkbox.checked) {
    navbar.classList.add("scrolled", "opened");
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "visible";
    navbar.classList.remove("scrolled", "opened");
  }
};

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("DOMContentLoaded", (e) => {
  // console.log(window.location.pathname);
  // animateElement();
  const navBlackPages = ["register.html", "schedule.html"];

  if (navBlackPages.includes(window.location.pathname.split("/")[1])) {
    document.querySelector("header").classList.add("scrolled");
  }
});

const carouselPages = ["index.html", ""];

if (carouselPages.includes(window.location.pathname.split("/")[1])) {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
}

const openVideoOverlay = (linkId) => {
  console.log(linkId);
  document.querySelector(
    "#overlay-player .video-container"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1HeAkA77pNbBzoS971tSfTopvPqHmxQTK/preview" width="640" height="480" allow="autoplay"></iframe>`;
};

const closeOverlayPlayer = () => {
  document.querySelector("#overlay-player").style.display = "none";
  document.querySelector("iframe").remove();
};

document.querySelectorAll("button.openvideobutton").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector("#overlay-player").style.display = "grid";
    openVideoOverlay(e.target.dataset.videoLink);
  });
});

// const footerToBeInsertedPages = [
//   "schedule"
// ]

const insertHeader = () => {
  const container = document.querySelector("body > div .header-container");
  container.innerHTML = `
  <header>
  <nav class="wrapper">
    <div class="logo">
      <a href="index.html">
        <img
          src="images/nav-logo-wobg.png"
          alt=""
        />
      </a>
    </div>
    <label for="mobile-list-checkbox" class="mobile-nav nav__burger">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul class="desktop-nav-list">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      
      <li>
        <a href="register.html">register</a>
      </li>
      <li>
      <a href="events.html">Events</a>
    </li>
      <li>
        <a href="faq.html">FAQs</a>
      </li>
      <li>
        <a href="schedule.html">schedule</a>
      </li>
      <li>
        <a href="gallary.html">Gallary</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
    </ul>
  </nav>
</header>
<input
  type="checkbox"
  onchange="navToggle()"
  id="mobile-list-checkbox"
/>
<div class="mobile-list-container">
  <ul class="mobile-nav-list">
    <li>
      <a href="index.html">Home</a>
    </li>
    <li>
      <a href="about.html">About</a>
    </li>
    
    <li>
      <a href="register.html">register</a>
    </li>
    <li>
    <a href="events.html">Events</a>
  </li>
    <li>
      <a href="faq.html">FAQs</a>
    </li>
    <li>
      <a href="schedule.html">schedule</a>
    </li>
    <li>
      <a href="gallary.html">Gallary</a>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</div>
  `;

  const mobileListItems = document.querySelectorAll(".mobile-nav-list a");

  console.log(mobileListItems);

  mobileListItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("clicked");
      const navToggler = document.querySelector("#mobile-list-checkbox");
      navToggler.checked = false;
      const navbar = document.querySelector("header");
      navbar.classList.toggle("opened");
      navbar.classList.toggle("scrolled");
      document.querySelector("body").style.overflowY = "visible";
    });
  });
};
const insertFooter = () => {
  const container = document.querySelector("body section#footer");
  container.innerHTML = `
  <footer class="wrapper">
  <div class="footer-item">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
        />
      </svg>
    </div>
    <span class="footer-item__title"> Date </span>
    <p>20-22 September, 2024</p>
  </div>
  <div class="footer-item">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
        />
      </svg>
    </div>
    <span class="footer-item__title"> Location </span>
    <p>Kathmandu University, Dhulikhel, Nepal</p>
  </div>
  <div class="footer-item">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
        />
      </svg>
    </div>
    <span class="footer-item__title"> Speakers </span>
    <p>3+ Int. Speakers</p>
  </div>
</footer>
  `;
};

insertHeader();
insertFooter();

const navbar = document.querySelector(".desktop-nav-list");

console.log(navbar);

const autoScrollContainer = document.querySelectorAll(".autoscroll");

autoScrollContainer.forEach((container) => {
  let scrolled = 0;
  const canScroll = container.scrollWidth;

  console.log(canScroll);

  autoScrollInterval = setInterval(() => {
    scrolled += 10;
    console.log(scrolled);
    container.scrollLeft += 100;
  }, 3000);

  // container.addEventListener("mouseover", (e) => {
  //   clearInterval(autoScrollInterval);
  // });
});
