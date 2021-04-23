(function () {
  const hero = document.querySelector("[data-hero]");

  /* Menu */
  const menuButton = document.querySelector('[data-btn="menu"]');
  const menu = document.querySelector("[data-menu]");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    menuButton.classList.toggle("is-active");
  });

  /* Timeline */
  const tl = gsap.timeline({ delay: 1 });

  tl.to(hero, {
    "--maskSize1": "20%",
    duration: 0.5,
    ease: "back.out(2)",
  }).to(hero, {
    "--maskSize2": "28%",
    "--maskSize3": "calc(28% + 0.1rem)",
    duration: 0.5,
    delay: 0.3,
    ease: "back.out(2)",
  });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(hero, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  };

  /* Cursor */
  window.addEventListener("mousemove", throttle(onMouseMove, 10));
})();
