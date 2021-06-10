let map;

function initMap() {
  const loc = { lat: 12.972442, lng: 77.580643 };
  map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 8,
  });

  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}

// Sticky menu background

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling

// $("#navbar a, .btn").on("click", function (event) {
//   if (this.hash !== "") {
//     event.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top - 100,
//       },
//       800
//     );
//   }
// });

$("#navbar a, .btn").on("click", function (event) {
  //   console.log(this.hash);
  //   console.log(event);

  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
