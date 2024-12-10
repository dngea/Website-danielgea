function openNav() {
    document.getElementById("myNav").style.height = "100vh";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0vh";
  }

  function border(){
    document.getElementById("overlayBorder").style.borderBottom = "15px";
  }


  gsap.utils.toArray(".slideText").forEach(text => {
    gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        scroller: text.closest(".horizSlider"),
        horizontal: true,
        trigger: text.closest(".slide"),
        start: "left right",
        end: "left left",
        scrub: true
      }
    })
    .fromTo(text, {x: 250}, {x: -250}, 0)
    .from(text.nextElementSibling, {scale: 0.8}, 0)
  });


