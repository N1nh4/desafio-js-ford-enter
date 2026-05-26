//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(image, texto, link) {
    this.image = image;
    this.texto = texto;
    this.link = link;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._arr = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Render(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 5000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    Carousel.Render();
  }

  static Previous() {
    Carousel._sequence =
      (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
    Carousel.Render();
  }

  static Render() {
    const carouselDiv = document.getElementById("carousel");
    const textoDiv = document.getElementById("carousel-title");
    const atual = Carousel._arr[Carousel._sequence];
    carouselDiv.innerHTML = `<a id="carousel-link" href="${atual.link}"><img src="img/${atual.image}"></a>`;
    textoDiv.innerHTML = `<a id="carousel-title-link" href="${atual.link}">${atual.texto}</a>`;
  }
}
