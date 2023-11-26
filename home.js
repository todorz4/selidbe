// dropdown popunjavanje
for (var i = 0; i < 3; i++) {
  for (var j = 1; j <= 5; j++) {
    var option = document.createElement("option");
    option.setAttribute("value", j);
    var text = document.createTextNode(j);
    option.appendChild(text);
    document.getElementById("tc" + (i + 1) + "select").appendChild(option);
  }
}

var gradovi = ["Beograd", "Novi Sad", "Niš", "Kragujevac", "Subotica", "Kraljevo", "Smederevo"];
for (var i = 0; i < gradovi.length; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", gradovi[i]);
  var text = document.createTextNode(gradovi[i]);
  option.appendChild(text);
  document.getElementById("selectGrad").appendChild(option);
}

// slideshow
function changeBackground() {
  var $currentImg = $(".header .image-change .active");
  var $nextImg = $currentImg.next().is(".slide-background")
    ? $currentImg.next()
    : $(".header .image-change .slide-background:first");
  $nextImg.css("z-index", 2);
  $currentImg.fadeOut(3000, function () {
    $currentImg.css("z-index", 1).show().removeClass("active");
    $nextImg.css("z-index", 3).addClass("active");
  });
  setTimeout("changeBackground()", 5000);
}

// brojac od 0 do 4000
const brojacEl = document.getElementById("number-counter");

function brojacF() {
  var n = 0;
  var inc = setInterval(function () {
    if (n > 4000) {
      brojacEl.innerHTML = 4000;
      clearInterval(inc);
      return false;
    }
    n += 23;
    brojacEl.innerHTML = n;
  }, 10);
}

function scrollListener() {
  if (window.scrollY > 100) {
    brojacF();
    document.removeEventListener("scroll", scrollListener, true);
  }
}

if (window.scrollY > 100) {
  brojacF();
} else {
  document.addEventListener("scroll", scrollListener, true);
}

// kontakt forma provera
const tbIme = document.getElementById("tbIme");
const tbEmail = document.getElementById("tbEmail");
const taPoruka = document.getElementById("taPoruka");

function imeProvera() {
  var regIme = /^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})+$/;
  if (tbIme.value.length == 0) {
    document.getElementById("error1").innerHTML = "Popunite ovo polje.";
    return false;
  } else if (!regIme.test(tbIme.value)) {
    document.getElementById("error1").innerHTML = "Neispravan format imena.";
    return false;
  } else {
    document.getElementById("error1").innerHTML = "";
    return true;
  }
}

function emailProvera() {
  var regEmail = /^[a-z]+([\.-]?[a-z]+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]+)+$/;
  if (tbEmail.value.length == 0) {
    document.getElementById("error2").innerHTML = "Popunite ovo polje.";
    return false;
  } else if (!regEmail.test(tbEmail.value)) {
    document.getElementById("error2").innerHTML = "Neispravan format e-maila.";
    return false;
  } else {
    document.getElementById("error2").innerHTML = "";
    return true;
  }
}

function porukaProvera() {
  if (taPoruka.value.length == 0) {
    document.getElementById("error3").innerHTML = "Popunite ovo polje.";
    return false;
  } else {
    document.getElementById("error3").innerHTML = "";
    return true;
  }
}

tbIme.addEventListener("blur", function () {
  imeProvera();
});

tbEmail.addEventListener("blur", function () {
  emailProvera();
});

taPoruka.addEventListener("blur", function () {
  porukaProvera();
});

document.getElementById("contact-send").addEventListener("click", function () {
  var kontaktPoslato = document.getElementById("kontaktPoslato");
  kontaktPoslato.innerHTML = "";
  var ime = imeProvera();
  var email = emailProvera();
  var poruka = porukaProvera();
  if (ime && email && poruka) {
    kontaktPoslato.innerHTML = "Poruka poslata!";
  }
});

// poruci - potvrda provera
document.getElementById("potvrda-btn").addEventListener("click", function () {
  var potvrdaOk = 1;
  var tchb1 = document.getElementById("tchb1");
  var tchb2 = document.getElementById("tchb2");
  var tchb3 = document.getElementById("tchb3");
  if (!tchb1.checked && !tchb2.checked && !tchb3.checked) {
    document.getElementById("potvrdaError1").innerHTML = "Odaberite bar jedan proizvod";
    potvrdaOk--;
  } else {
    document.getElementById("potvrdaError1").innerHTML = "";
  }

  if (document.getElementById("selectGrad").value == 0) {
    document.getElementById("potvrdaError2").innerHTML = "Odaberite grad";
    potvrdaOk--;
  } else {
    document.getElementById("potvrdaError2").innerHTML = "";
  }

  if (!/^([A-ZŽŠĐČĆ][a-zžšđčć]{2,}\s)+[0-9]{1,3}$/.test(document.getElementById("tbUlica").value)) {
    document.getElementById("potvrdaError3").innerHTML = "Unesite ispravnu adresu (npr. Vojvode Stepe 8)";
    potvrdaOk--;
  } else {
    document.getElementById("potvrdaError3").innerHTML = "";
  }

  if (!/^06[0-9]{7,9}$/.test(document.getElementById("tbTel").value)) {
    document.getElementById("potvrdaError4").innerHTML = "Unesite ispravan telefon";
    potvrdaOk--;
  } else {
    document.getElementById("potvrdaError4").innerHTML = "";
  }

  if (potvrdaOk == 1) {
    alert("Uspesna porudzbina!");
  }
});

// procitaj-vise dugme
var modalProcitajVise = document.getElementById("modal");
document.getElementById("procitaj-vise").addEventListener("click", function () {
  modalProcitajVise.style.opacity = 1;
  modalProcitajVise.style.visibility = "visible";
});

document.getElementById("close-modal").addEventListener("click", function () {
  modalProcitajVise.style.opacity = 0;
  setTimeout(function () {
    modalProcitajVise.style.visibility = "hidden";
  }, 500);
});

// slider
new Glide(".glide").mount();

$(document).ready(function () {
  setTimeout("changeBackground()", 5000);

  $("#tchb1").change(function () {
    $("#tc1select").attr("disabled", !this.checked);
  });
  $("#tchb2").change(function () {
    $("#tc2select").attr("disabled", !this.checked);
  });
  $("#tchb3").change(function () {
    $("#tc3select").attr("disabled", !this.checked);
  });

  $(".banner-subtitle").animate(
    {
      opacity: 1,
      left: 0,
    },
    1500
  );
  $(".banner-title").animate(
    {
      opacity: 1,
      left: 0,
    },
    1500
  );

  $(".skill").hover(
    function () {
      $(this).css("background-color", "#698f3f");
      $(this).find(".skill-title").css("color", "#fff");
      $(this).find(".skill-icon").css("transform", "translateY(-5px)");
    },
    function () {
      $(this).css("background-color", "#e5e5e5");
      $(this).find(".skill-title").css("color", "#698f3f");
      $(this).find(".skill-icon").css("transform", "translateY(0px)");
    }
  );

  // poruci dugme
  $("#poruci-btn").click(function () {
    $("#poruci-form").css("height", "620px");
    $("html, body")
      .stop(true)
      .animate({ scrollTop: $("#poruci-form").position().top }, 1000);
    return false;
  });

  // skroluj dole na klik
  $("#scroll-down").click(function () {
    $("html, body")
      .stop(true)
      .animate({ scrollTop: $(window).height() }, 1000);
    return false;
  });

  //
  $(".service-btn").click(function () {
    $(this).parent().next().animate(
      {
        top: 0,
      },
      500
    );
  });
  $(".close-service-btn").click(function () {
    $(this).parent().animate(
      {
        top: "-100%",
      },
      500
    );
  });
});
