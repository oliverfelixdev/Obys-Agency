let tl = gsap.timeline();
function loaderAnimationFrame() {
  let loaderMain = document.getElementById("loading-experience");
  let loaderLineH1 = document.querySelectorAll(".line h1");
  let loaderCounter = document.querySelector(".line .counter");
  let blinkLoad = document.querySelector(".blink-load");
  tl.from(loaderLineH1, {
    y: 150,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });

  tl.from(blinkLoad, {
    opacity: 0,
    onStart: function () {
      let grow = 0;
      setInterval(() => {
        if (grow < 100) {
          loaderCounter.innerHTML = grow++;
          // clearInterval(dm)
        } else {
          loaderCounter.innerHTML = grow;
        }
      }, 40);
    },
  });

  tl.to(blinkLoad, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  tl.to(loaderMain, {
    opacity: 0,
    duration: 0.7,
    delay: 4,
  });

  tl.to(loaderMain, {
    display: "none",
  });
} loaderAnimationFrame();

function cursorEve() {
  let bodyCrsr = document.querySelector("#cursor");
  document.addEventListener("mousemove", (dets) => {
    gsap.to(bodyCrsr, {
      left: dets.x,
      top: dets.y,
    });
  });
}
cursorEve();

function screen1ANDnavAnimation() {
  let navAnimation = document.querySelector(".nav-bar");
  let screenFirst = document.querySelectorAll(".introductionHeadings h1");
  let bullet1span = document.querySelector(".bullet1span");
  tl.from(navAnimation, {
    opacity: 0,
    duration: 0.5,
    delay: 0.4,
  });
  tl.from(screenFirst, {
    y: 100,
    stagger: 0.2,
    duration: 0.4,
  });

  tl.from(bullet1span, {
    opacity: 0,
    duration: 0.2,
  });
}
screen1ANDnavAnimation();

function screen1ImageAnimationFrame() {
  document.querySelectorAll("#introHeads-resilient").forEach(function (elem) {
    let rotate = 0;
    let diffrot = 0;
    elem.addEventListener("mousemove", function (details) {
      let diff = details.clientY - elem.getBoundingClientRect().top;
      diffrot = details.clientX - rotate;
      rotate = details.clientX;
      gsap.to(elem.querySelector("#introHeads-resilient img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0),
      });
    });

    // mouse leave --------------------------
    elem.addEventListener("mouseleave", function (details) {
      gsap.to(elem.querySelector("#introHeads-resilient img"), {
        opacity: 0,
        ease: Power3,
      });
    });
  });

  /*   document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("introHeads-resilient");
    const hoverImage = document.getElementById("introHeads-resilient img");

    heading.addEventListener("mouseenter", () => {
      hoverImage.style.display = "inline-block";
    });

    heading.addEventListener("mouseleave", () => {
      hoverImage.style.display = "none";
    });

    heading.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const offsetX = (window.innerWidth / 2 - x) / 0.5; // Increase divisor for more curvature
      const offsetY = (window.innerHeight / 2 - y) / 0.5; // Increase divisor for more curvature

      // hoverImage.style.left = `${x}px`;
      // hoverImage.style.top = `${y}px`;
      // hoverImage.style.transform = `translate(-100%, -100%)`;

      // Increase the curvature effect
      hoverImage.style.clipPath = `ellipse(${40 + Math.abs(offsetX)}% ${
        40 + Math.abs(offsetY)
      }% at center)`;
    });
  }); */
}
screen1ImageAnimationFrame();

function preventCRSRelement() {
  let Mycursor = document.querySelector("#cursor");
  let preventCrsr = document.querySelector("#introHeads-resilient");
  preventCrsr.addEventListener("mouseenter", () => {
    Mycursor.style.display = "none";
  });

  preventCrsr.addEventListener("mouseleave", () => {
    Mycursor.style.display = "block";
  });
}
preventCRSRelement();

function videoController() {
  let myVideo = document.getElementById("showreel-vid");
  let playBtn = document.querySelector(".button__play-icon");
  let pauseBtn = document.querySelector(".button__pause-icon");
  let vidControls = document.querySelector(".video-controls");

  playBtn.addEventListener("click", () => {
    if (myVideo.paused) {
      myVideo.play();
      playBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
      vidControls.style.height = "9vw";
      vidControls.style.width = "9vw";
    }
  });

  pauseBtn.addEventListener("click", () => {
    if (myVideo.played) {
      myVideo.pause();
      playBtn.style.display = "inline-block";
      pauseBtn.style.display = "none";
      vidControls.style.height = "11vw";
      vidControls.style.width = "11vw";
    }
  });
}
videoController();

function locoScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#screen-main"),
    smooth: true,
  });
}

locoScroll();