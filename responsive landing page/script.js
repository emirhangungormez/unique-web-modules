let pageRevealDelay = 2;

gsap.from(".logo a, .contact a", 1.5, {
    top: "25px",
    ease: "power4.inOut",
    stagger: {
        amount: 0.1,
    },
    delay: pageRevealDelay,
});

gsap.from("h1", 1.5, 
    {
        y: 150,
        ease: "power4.inOut",
        stagger: {
            amount: 0.1,
        },
    },
    "<"
);

gsap.from("p", 1.75,
    {
        y: 30,
        ease: "power3.inOut",
        stagger: {
            amount: 0.25,
        },
    },
    "<"
);

gsap.from(".loader-wrapper", 2,{
    scale: 0.8,
    ease: "power1.inOut",
});

gsap.from(".loader", 2, {
    top: "100%",
    ease: "power3.inOut",
});

gsap.to(".loader-wrapper, .pre-loader", 1,
    {
        ease: "power3.inOut",
        delay: 2,
        top: "-100%",
    },
    "-=1"
);

document.addEventListener("mousemove", function(e) {
    let normX = e.clientX / window.innerWidth - 0.5;
    let normY = e.clientY / window.innerHeight - 0.5;

    let moveX = normX * 100;
    let moveY = normY * 50;

    let rotateZ = normX * 25;

    gsap.to(".bubbles", {
        x: moveX,
        y: moveY,
        rotationZ: rotateZ,
        ease: "power2.out",
        duration: 1.5,
    });     
});