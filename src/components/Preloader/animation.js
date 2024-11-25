import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  return new Promise((resolve) => {
    tl.to("body", {
      duration: 0.1,
      css: { overflowY: "hidden" },
      ease: "power3.inOut",
    })
      .to(".texts-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".texts-container span", {
        duration: 1.5,
        delay: 1,
        y: 70,
        skewY: 10,
        opacity: 0,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: resolve,
      })
      .to(".preloader", {
        duration: 0,
        css: { display: "none" },
      })
      .to("body", {
        duration: 0.1,
        css: { overflowY: "scroll" },
        ease: "power3.inOut",
      });
      
  });
};