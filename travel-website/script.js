const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector(".hero").style.height = window.innerHeight + 'px'
document.querySelector(".hero2").style.height = window.innerHeight + 'px'
document.querySelector(".hero3").style.height = window.innerHeight + 'px'

gsap.from(".effect",{
    onStart: function () {
        $('.effect').textillate({ in: { effect: 'fadeInUp', /*duration:600,*/ delay:2 } });
    },
})

gsap.from(".trav-time",{
    duration:1,
    translateY: 100
})

gsap.from(".logo-main",{
    duration:1,
    translateX: -100,
    duration:1
})

gsap.from(".search",{
    duration:1,
    translateX: 100,
    duration:1
})
