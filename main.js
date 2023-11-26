// navigacija
const navItems = document.getElementById("nav-items");
const navLinks = ["index.html", "aboutme.html"];
const pages = ["Početna", "O meni"];

for (var i = 0; i < navLinks.length; i++) {
  var navItem = document.createElement("li");
  var navItemLink = document.createElement("a");
  navItemLink.setAttribute("href", navLinks[i]);
  navItemLink.classList.add("nav-link");
  var linkText = document.createTextNode(pages[i]);
  navItemLink.appendChild(linkText);
  navItem.appendChild(navItemLink);
  navItems.appendChild(navItem);
}

// footer social linkovi
const footerSocials = document.querySelector(".social-icons");
const socialLinks = [
  ["fab", "fa-facebook", "https://facebook.com"],
  ["fab", "fa-twitter", "https://twitter.com"],
  ["fab", "fa-instagram", "https://instagram.com"],
  ["fas", "fa-rss-square", "rss.xml"],
  ["fas", "fa-sitemap", "sitemap.xml"],
  ["fas", "fa-file-alt", "dokumentacija.pdf"],
];

for (var i = 0; i < socialLinks.length; i++) {
  var socialLink = document.createElement("a");
  socialLink.setAttribute("href", socialLinks[i][2]);
  socialLink.classList.add("social-icon");
  var socialIcon = document.createElement("i");
  socialIcon.classList.add(socialLinks[i][0], socialLinks[i][1]);
  socialLink.appendChild(socialIcon);
  footerSocials.appendChild(socialLink);
}
$(document).ready(function () {
  // otvori, zatvori navigaciju
  $("#nav-btn").click(function () {
    $("#navbar").stop(true).css({ transform: "translateX(0)" });
  });
  $("#nav-close").click(function () {
    $("#navbar").stop(true).css({ transform: "translateX(-100%)" });
  });

  $("#autor-procitaj").click(function () {
    if ($(".dodatno").height() == 0) {
      $(".dodatno").css("height", "150px");
      $("#autor-procitaj").html("Zatvori");
    } else {
      $(".dodatno").css("height", 0);
      $("#autor-procitaj").html("Pročitaj više");
    }
  });
});
