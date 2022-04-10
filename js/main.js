gsap.registerPlugin(ScrollTrigger);
console.clear();

// //  =============  xxxxx  ==========================
// const cowOneAnimation = new TimelineMax({ repeat: -1 });
// const cowTwoAnimation = new TimelineMax({ repeat: -1 });
// const cowThreeAnimation = new TimelineMax({ repeat: -1 });
// const cowFourAnimation = new TimelineMax({ repeat: -1 });
// const cowSmAnimation = new TimelineMax({ repeat: -1 });

// cowOneAnimation
//   // head
//   .to(".cow-head-1", 2, {
//     rotation: -30,
//   })
//   .to(".cow-head-1", 2, {
//     rotation: 0,
//     delay: 2,
//   })
//   .to(
//     ".cow-tail-1",
//     2,
//     {
//       rotation: 45,
//       transformOrigin: "left top",
//     },
//     "-=4"
//   )
//   //left ear
//   .to(
//     ".cow-ear-left-1",
//     3,
//     {
//       rotation: -40,
//       y: 30,
//       x: 7,
//       transformOrigin: "left bottom",
//     },
//     "-=6"
//   )
//   .to(
//     ".cow-ear-left-1",
//     3,
//     {
//       rotation: 0,
//       y: 0,
//       x: 0,
//     },
//     "-=2"
//   )
//   // right ear
//   .to(
//     ".cow-ear-right-1",
//     3,
//     {
//       rotation: -30,

//       transformOrigin: "left bottom",
//     },
//     "-=7"
//   )
//   .to(
//     ".cow-ear-right-1",
//     3,
//     {
//       rotation: 0,

//       transformOrigin: "left bottom",
//     },
//     "-=3"
//   )
//   // tail
//   .to(
//     ".cow-tail-1",
//     2,
//     {
//       rotation: 0,
//       transformOrigin: "left top",
//     },
//     "-=3"
//   );

// cowTwoAnimation

//   .to(".cow-leg-2", 2, {
//     rotation: -27,
//     y: 7,
//     x: 2,
//     //delay: 4,
//     transformOrigin: "left top",
//   })
//   .to(".cow-leg-2", 0.5, {
//     rotation: 0,
//     y: 0,
//     x: 0,
//   })
//   .to(".cow-head-2", 2, {
//     rotation: 10,
//     x: 10,
//     transformOrigin: "top top",
//   })
//   .to(
//     ".cow-ear-left-2",
//     2,
//     {
//       rotation: 15,

//       transformOrigin: "right bottom",
//     },
//     "-=2"
//   )
//   .to(
//     ".cow-ear-right-2",
//     2,
//     {
//       rotation: -5,
//       x: 2,
//       y: -2,

//       transformOrigin: "left bottom",
//     },
//     "-=2"
//   )
//   .to(
//     ".cow-head-2",
//     2,
//     {
//       rotation: 0,
//       x: 0,
//       delay: 5,
//     },
//     "-=4"
//   )
//   .to(".cow-ear-left-2", 2, {
//     rotation: 0,
//     delay: 4,
//   })
//   .to(
//     ".cow-ear-right-2",
//     2,
//     {
//       rotation: 0,
//       x: 0,
//       y: 0,
//     },
//     "-=2"
//   )
//   .to(
//     ".cow-tail-2",
//     2,
//     {
//       rotation: 10,
//       transformOrigin: "right top",
//     },
//     "-=2"
//   )
//   .to(".cow-tail-2", 2, {
//     rotation: 0,
//     transformOrigin: "right top",
//   });

// cowThreeAnimation
//   .to(".cow-head-3", 1, {
//     rotation: 20,
//     x: 18,
//     y: 5,
//     delay: 1.5,
//     transformOrigin: "right top",
//   })
//   .to(".cow-head-3", 1, {
//     rotation: 0,
//     x: 0,
//     y: 0,
//     delay: 3,
//     transformOrigin: "right top",
//   });

// cowFourAnimation
//   .to(".cow-head-4", 1, {
//     rotation: -30,
//     x: -14,
//     y: 5,
//     delay: 3,
//     transformOrigin: "left top",
//   })
//   .to(".cow-head-4", 1, {
//     rotation: 0,
//     x: 0,
//     y: 0,
//     delay: 1,
//   });

// cowSmAnimation

//   .to(".cows-head-sm1", 1, {
//     rotation: -10,
//     x: -3,
//     //delay: 3,
//     transformOrigin: "left top",
//   })
//   .to(".cows-head-sm1", 1, {
//     rotation: 0,
//     x: 0,
//     y: 0,
//   })
//   .to(
//     ".cows-head-sm2",
//     1,
//     {
//       rotation: -2,
//       x: -2,
//       y: -1,
//       //delay: 3,
//       transformOrigin: "right top",
//     },
//     "-=1.9"
//   )
//   .to(".cows-head-sm2", 1, {
//     rotation: 0,
//     x: 0,
//     y: 0,
//     //delay: 1,
//   });

// //.to(".cow-tail-1", 1, { rotation: 40, transformOrigin: "left top" });
// // TweenMax.to(".cow-tail-1", 1, {
// //   ,
// //   transformOrigin: "left top",
// //   repeat: -1,
// //   yoyo: true,

// //   ease: "circ.out",
// // });
// // TweenMax.to(".cow-head-1", 1, {
// //   rotation: 20,

// //   repeat: -1,
// //   yoyo: true,
// // });
// // TweenMax.to(".cow-head-1", 1, {
// //   rotation: 10,
// //   delay: 2,

// //   yoyo: true,
// // });

// gsap.set(".centered", { autoAlpha: 1, xPercent: -50, yPercent: -50 });
// gsap.set("h1", { autoAlpha: 1, yPercent: -50 });
// gsap.set(" .slide", { autoAlpha: 1 });
// gsap.set(" .slide.active", { autoAlpha: 1 });
// gsap.set(".go", { autoAlpha: 1 });

// var slides = $(".slide"),
//   activeSlide = $(".slide.active"),
//   next = $(".go-next"),
//   prev = $(".go-prev"),
//   moveSlideTL = gsap.timeline(),
//   lines = $("h1");

// // individual animations per slide ======

// const allSlides = [].slice.call(slides);
// let animations = [];

// for (let [i] of allSlides.entries()) {
//   animations[i] = gsap.timeline({});
// }
// let speed = 100;

// animations[0]
//   .to(".grass2", {
//     yPercent: -10,
//     duration: 1,
//   })
//   .from(".scene1", { scale: 1, yPercent: 0 })
//   .reverse();
// animations[1]
//   .to(".grass2", {
//     yPercent: -30,
//     duration: 1,
//   })
//   .to(".scene1", { scale: 2, duration: 1, yPercent: -30 })

//   .reverse();
// animations[2]
//   .to("#slide01.grass2", {
//     opacity: 0,
//   })
//   .to(".scene1", { scale: 1, duration: 1, yPercent: 0 })
//   .reverse();

// // .to("#slide02 .scene1", {
// //   scale: 2,
// //   yPercent: -30,
// //   duration: 2,
// //   overwrite: true,
// // })
// // .to(
// //   "#slide02 .cows-container",
// //   {
// //     scale: 2.5,
// //     duration: 2,
// //     yPercent: -30,
// //   },
// //   "-=1.9"
// // )
// // .to(
// //   "#slide02 .grass1",
// //   {
// //     yPercent: 100,
// //     duration: 2,
// //   },
// //   "-=1.9"
// // )
// // .to(
// //   "#slide02 .grass2",
// //   {
// //     yPercent: 0,
// //     duration: 2,
// //     ease: "power2.in",
// //   },
// //   "-=1.9"
// // );

// // animations[2]
// // .to("#slide03 .scene1", {
// //   scale: 2,
// //    yPercent: -30,
// //    duration: 2,
// //    overwrite: true,
// //  })
// //  .to("#slide03 .cows-container", {
// //    scale: 2.5,
// //     duration: 2,
// //     yPercent:-30,
// //   },"-=1.9")
// //   .to(
// //     "#slide03 .grass1",
// //     {
// //       yPercent:0,
// //       duration: 2,
// //     },
// //     "-=1.9"
// //   )
// //  .to(
// //    "#slide03 .grass2",
// //    {
// //      yPercent:0,
// //      duration: 2,
// //    },
// //    "-=1.9"
// //  ).reverse()

// //    .
// //    reverse()

// // .from(".apple", {
// //   xPercent: -200,
// //   duration: 0.6,
// //   ease: "elastic.out(0.5, 0.4)",
// //   stagger: -0.4,
// // })
// // .from("#slide02 .lines", { y: 120, duration: 1, delay: 1 }, "-=1.5")

// // .from("#slide02 .grass1", {
// //   y: 10,
// // })
// // .to("#slide02 .grass1", {
// //   y: 100,
// //   ease: "elastic.out(0.5, 0.4)",
// // })

// // animations[2]
// // .to("#slide03 .scene1", {
// //   scale: 2,
// //   yPercent: -30,
// //   duration: 2,
// // })
// // .reverse()

// // animations[3]
// //   .from("#slide04 .lines", {
// //     scale: 0.2,
// //     transformOrigin: "center",
// //     duration: 2,
// //   })
// //   .reverse();

// // ===========================

// //==============================

// function onMouseWheel(event) {
//   //Normalize event wheel delta
//   var delta =
//     event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

//   if (delta < -1) {
//     //scrolling down -> next slide

//     if (!moveSlideTL.isActive()) {
//       animations[0].reverse();
//       animations[1].reverse();
//       animations[2].reverse();

//       var slideFrom = $(".slide.active"),
//         sectionToIndex = slides.index(slideFrom);
//       /// conditions
//       if (sectionToIndex === 1) {
//         animations[1].reverse(2, false).kill();
//       }

//       if (sectionToIndex !== slides.length - 1) {
//         slideTo = slides.eq(sectionToIndex + 1);
//         moveToSlide(slideFrom, slideTo);
//       }
//     }
//   } else if (delta > 1) {
//     // -> prev

//     if (!moveSlideTL.isActive()) {
//       if (!moveSlideTL.isActive()) {
//         animations[0].reverse();

//         animations[2].reverse();

//         var slideFrom = $(".slide.active"),
//           sectionToIndex = slides.index(slideFrom);
//         if (sectionToIndex === 2) {
//           animations[1].reverse(0).kill();
//         }
//         if (sectionToIndex != 0) {
//           slideTo = slides.eq(sectionToIndex - 1);
//           moveToSlide(slideFrom, slideTo);
//         }
//       }
//     }
//   }
//   //event.preventDefault();
// }

// // ============================
// function dotClick() {
//   var slideFrom = $(".slide.active"),
//     sectionToIndex = $(this).index(),
//     sectionToIndex = $(this).index(),
//     slideTo = slides.eq(sectionToIndex);

//   var indexFrom = slideFrom.index();

//   console.log(
//     slideFrom,
//     "from: " + indexFrom,
//     "to: " + sectionToIndex,
//     "slideTo: " + slideTo
//   );

//   //if(slideFrom !== slideTo && !moveSlideTL.isActive()) {  // not working

//   if (indexFrom !== sectionToIndex && !moveSlideTL.isActive()) {
//     moveToSlide(slideFrom, slideTo);
//   }
// }

// // =============================
// function nextClick() {
//   if (!moveSlideTL.isActive()) {
//     var slideFrom = $(".slide.active"),
//       sectionToIndex = slides.index(slideFrom);

//     if (sectionToIndex !== slides.length - 1) {
//       slideTo = slides.eq(sectionToIndex + 1);
//       moveToSlide(slideFrom, slideTo);
//     }
//   }
// }

// function prevClick() {
//   if (!moveSlideTL.isActive()) {
//     var slideFrom = $(".slide.active"),
//       sectionToIndex = slides.index(slideFrom);

//     if (sectionToIndex != 0) {
//       slideTo = slides.eq(sectionToIndex - 1);
//       moveToSlide(slideFrom, slideTo);
//     }
//   }
// }

// // ==============================
// function moveToSlide(slideFrom, slideTo) {
//   gsap.set(".go", { autoAlpha: 1 }); // ????
//   animations[slides.index(slideFrom)].reverse();
//   if (slides.index(slideFrom) < slides.index(slideTo)) {
//     // vorwärts

//     moveSlideTL = gsap
//       .timeline({
//         onComplete: setActiveSlide,
//         onCompleteParams: [slideTo, slideFrom],
//       })
//       .to(slideTo, {
//         xPercent: 0,
//         autoAlpha: 1,
//         duration: 2,
//         className: "slide active",
//       })
//       .to(slideFrom, { autoAlpha: 1, duration: 2, className: "slide" }, "-=2")
//       .set(slideFrom, { xPercent: 0 });
//   } else {
//     moveSlideTL = gsap
//       .timeline({
//         onComplete: setActiveSlide,
//         onCompleteParams: [slideTo, slideFrom],
//       })
//       .set(slideTo, { autoAlpha: 1, xPercent: 0, className: "slide active" })
//       .to(slideTo, { autoAlpha: 1, xPercent: 0, duration: 2 })
//       .to(
//         slideFrom,
//         { autoAlpha: 1, xPercent: 0, duration: 2, className: "slide" },
//         0
//       );
//   }
// }

// function setActiveSlide(active, last) {
//   var currentSlideIndex = slides.index(active);
//   var lastSlideIndex = slides.index(last);

//   animations[currentSlideIndex].reversed(false);
//   animations[lastSlideIndex].progress(0).reversed(true);

//   gsap.to(".navDot.active", { opacity: 0.5, scale: 1 });
//   $(".navDot.active").removeClass("active");
//   $(".navDot").eq(currentSlideIndex).addClass("active");
//   gsap.to(".navDot.active", { opacity: 1, scale: 1.3 });

//   if (currentSlideIndex == 0) {
//     gsap.set(".go-prev", { autoAlpha: 0 });
//   } else {
//     gsap.set(".go-prev", { autoAlpha: 1 });
//   }
//   if (currentSlideIndex == slides.length - 1) {
//     gsap.set(".go-next", { autoAlpha: 0 });
//   } else {
//     gsap.set(".go-next", { autoAlpha: 1 });
//   }
// }

// // ================================
// function init() {
//   for (var i = 0; i < slides.length; i++) {
//     var navDots = $("<div></div>").addClass("navDot").appendTo("nav");
//     gsap.set(".navDot:first-child", {
//       className: "navDot active",
//       opacity: 1,
//       scale: 1.3,
//       transformOrigin: "center",
//     });
//     navDots.on("click", dotClick);
//   }

//   if (slides[0]) {
//     gsap.set(".go-prev", { autoAlpha: 0 });
//   }

//   next.on("click", nextClick);
//   prev.on("click", prevClick);

//   $(window).on("mousewheel DOMMouseScroll", onMouseWheel);
//   //$(window).on("touchmove", onMouseWheel);

//   //gsap.set($(".slide:odd"), { backgroundColor: "#0f8c0d", color: "#333333" });
//   gsap.set(".slide.active", { xPercent: 0 });
//   //animations[0].reversed(false);
// }

// init();

// /////////////////https://codepen.io/mikeK/pen/NWPJeyg?editors=0010
console.clear();

//  =========================  xxxxx  ==========================

gsap.set(".centered", { autoAlpha: 1, xPercent: -50, yPercent: -50 });
gsap.set("h1", { autoAlpha: 1, yPercent: -50 });
gsap.set(" .slide", { autoAlpha: 1, xPercent: 0 });
gsap.set(".go", { autoAlpha: 1, yPercent: -50 });

var slides = $(".slide"),
  activeSlide = $(".slide.active"),
  next = $(".go-next"),
  prev = $(".go-prev"),
  moveSlideTL = gsap.timeline(),
  lines = $("h1");

// Animaciones individuales para cada slider ======

const allSlides = [].slice.call(slides);
let animations = [];

for (let [i] of allSlides.entries()) {
  animations[i] = gsap.timeline({});
}

animations[0] // Smart Training ======
  .from(".scene1", {
    scale: 1,
    yPercent: 0,
  })

  .from(".cows-container", {
    scale: 1,
    yPercent: 0,
  })
  .reverse();
animations[1]
  .to(
    ".scene1",
    {
      scale: 3,
      yPercent: -50,
      duration: 1,
    },
    "-=0.9"
  )
  .to(
    ".cows-container",
    {
      scale: 4,
      yPercent: -60,
      duration: 1,
    },
    "-=1"
  )
  .set(".scene1", {
    scale: 3,
    yPercent: -50,
  })
  .reverse();
// Smart App ======

animations[2]
  //.from(".grass2", { yPercent: 0, duration: 1 }, "-=1")

  .to(".scene1", {
    scale: 0.8,
    yPercent: 0,
  })
  .to(".scene1", {
    scale: 4,
    yPercent: -80,
  })
  .reverse();

animations[3]
  .to(".scene1", {
    scale: 1,
    duration: 1,
  })

  .to(
    ".scene1",
    {
      scale: 1,
      duration: 2,
    },
    "-=1.9"
  )
  .reverse();

animations[4]
  .from("#slide05 .lines", {
    scale: 0.2,
    transformOrigin: "center",
    duration: 2,
  })
  .reverse();

animations[5]
  .from("#slide06 .lines", {
    scale: 0.2,
    transformOrigin: "center",
    duration: 2,
  })
  .reverse();

// Fin animaciones ===========================

// Rueda del ratón ==========================

function onMouseWheel(event) {
  //Normalize event wheel delta
  var delta =
    event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

  if (delta < -1) {
    //animations[0].reverse();
    animations[1].reverse();
    animations[2].reverse();
    //scrolling down -> next slide
    if (!moveSlideTL.isActive()) {
      var slideFrom = $(".slide.active"),
        sectionToIndex = slides.index(slideFrom);

      if (sectionToIndex !== slides.length - 1) {
        slideTo = slides.eq(sectionToIndex + 1);
        moveToSlide(slideFrom, slideTo);
      }
    }
  } else if (delta > 1) {
    // animations[0].reverse();
    //animations[1].reverse(0);
    //  animations[2].reverse(0);

    // -> prev
    if (!moveSlideTL.isActive()) {
      if (!moveSlideTL.isActive()) {
        var slideFrom = $(".slide.active"),
          sectionToIndex = slides.index(slideFrom);
        if (sectionToIndex === 2) {
          console.log(sectionToIndex);
          animations[1].reverse(2, false).kill();
        } else {
          animations[1].reverse();
          console.log(sectionToIndex);
        }

        if (sectionToIndex != 0) {
          slideTo = slides.eq(sectionToIndex - 1);
          moveToSlide(slideFrom, slideTo);
        }
      }
    }
  }
  //event.preventDefault();
}

// ============================
function dotClick() {
  var slideFrom = $(".slide.active"),
    sectionToIndex = $(this).index(),
    sectionToIndex = $(this).index(),
    slideTo = slides.eq(sectionToIndex);

  var indexFrom = slideFrom.index();

  console.log(
    slideFrom,
    "from: " + indexFrom,
    "to: " + sectionToIndex,
    "slideTo: " + slideTo
  );

  //if(slideFrom !== slideTo && !moveSlideTL.isActive()) {  // not working

  if (indexFrom !== sectionToIndex && !moveSlideTL.isActive()) {
    moveToSlide(slideFrom, slideTo);
  }
}

// =============================
function nextClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex !== slides.length - 1) {
      slideTo = slides.eq(sectionToIndex + 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function prevClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex != 0) {
      slideTo = slides.eq(sectionToIndex - 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

// ==============================
function moveToSlide(slideFrom, slideTo) {
  gsap.set(".go", { autoAlpha: 1 }); // ????

  if (slides.index(slideFrom) < slides.index(slideTo)) {
    // vorwärts

    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .to(slideTo, { xPercent: 0, duration: 0.5, className: "slide active" })
      .to(slideFrom, { xPercent: 0, duration: 0.5, className: "slide" }, 0)
      .set(slideFrom, { xPercent: 0 }, "-=0.4");
  } else {
    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .set(slideTo, { xPercent: 0, className: "slide active" })
      .to(slideTo, { xPercent: 0, duration: 0.5 })
      .to(
        slideFrom,
        { xPercent: 0, duration: 0.5, className: "slide" },
        "-=0.4"
      );
  }
}

function setActiveSlide(active, last) {
  var currentSlideIndex = slides.index(active);
  var lastSlideIndex = slides.index(last);

  animations[currentSlideIndex].reversed(false);
  animations[lastSlideIndex].progress(0).reversed(true);

  gsap.to(".navDot.active", { opacity: 0.5, scale: 1 });
  $(".navDot.active").removeClass("active");
  $(".navDot").eq(currentSlideIndex).addClass("active");
  gsap.to(".navDot.active", { opacity: 1, scale: 1.3 });

  if (currentSlideIndex == 0) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  } else {
    gsap.set(".go-prev", { autoAlpha: 1 });
  }
  if (currentSlideIndex == slides.length - 1) {
    gsap.set(".go-next", { autoAlpha: 0 });
  } else {
    gsap.set(".go-next", { autoAlpha: 1 });
  }
}

// ================================
function init() {
  for (var i = 0; i < slides.length; i++) {
    var navDots = $("<div></div>").addClass("navDot").appendTo("nav");
    gsap.set(".navDot:first-child", {
      className: "navDot active",
      opacity: 1,
      scale: 1.3,
      transformOrigin: "center",
    });
    navDots.on("click", dotClick);
  }

  if (slides[0]) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  }

  next.on("click", nextClick);
  prev.on("click", prevClick);

  $(window).on("mousewheel DOMMouseScroll", onMouseWheel);
  //$(window).on("touchmove", onMouseWheel);

  gsap.set(".slide.active", { xPercent: 0 });
  animations[0].reversed(false);
}

init();
