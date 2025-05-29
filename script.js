///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
console.log("Hello World !");
const h1 = document.querySelector(".primary-heading");
const myName = "Bibhas Nath";

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5px";
// });

//////////////////////////////////////////////
//Get Current Year
/////////////////////////////////////////////
const yearN = document.querySelector(".year");
const curY = new Date().getFullYear();
console.log(curY);
yearN.textContent = curY;

//////////////////////////////////////////////
//Mobile Nav will work Now
/////////////////////////////////////////////
const menuBtn = document.querySelector(".mobile-nav");
const Nav = document.querySelector(".navigation");
const mobNav = document.querySelector(".mobile-nav");
menuBtn.addEventListener("click", function () {
  Nav.classList.toggle("mobile-nav-open");
  mobNav.classList.toggle("mobile-nav-open");
});

//////////////////////////////////////////////
//Implemeniting Smooth Scrolling
/////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (l) {
  l.addEventListener("click", function (e) {
    e.preventDefault();
    const href = l.getAttribute("href");
    console.log(href);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //IMPLEMENT SMOOTH SCROLLING
    if (href !== "#" && href.startsWith("#")) {
      console.log(href);
      const stg = document.querySelector(href);
      stg.scrollIntoView({ behavior: "smooth" });
    }
    //MOBILE NAV CLOSE
    if (l.classList.contains("nav-link")) {
      Nav.classList.toggle("mobile-nav-open");
      mobNav.classList.toggle("mobile-nav-open");
    }
  });
});

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // Creates a new event when threshold is zero, basically the element moves out the viewport
  }
);
observer.observe(document.querySelector(".section-hero"));
