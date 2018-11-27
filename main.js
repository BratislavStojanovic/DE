var krugovi = document.querySelectorAll('.krug');
startSemafor();

function startSemafor() {
  krugovi[0].style.background = "red";
  krugovi[1].style.background = "grey";
  krugovi[2].style.background = "grey";
  setTimeout(function () {
    krugovi[1].style.background = "orange";

  },4000);

  setTimeout(function () {
    krugovi[2].style.background = "green";
    krugovi[0].style.background = "grey";
    krugovi[1].style.background = "grey";
  },6000);

  setTimeout(startSemafor,9000);
}
