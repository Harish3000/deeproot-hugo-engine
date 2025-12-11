document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach((element) => {
        gsap.fromTo(element, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1,
            scrollTrigger: {
              trigger: element, start: "top 80%", toggleActions: "play none none reverse"
            }
          }
        );
      });
      console.log("DeepRoot GSAP Animations Loaded");
  }
});