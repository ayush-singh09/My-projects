const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.to(".bounding-elem",{
        x:0,
        ease:Expo.easeInOut,
        duration:1.5

    })

    tl.from(".yt-logo",{
        rotate:180,
        opacity:0,
        ease:Expo.easeInOut,
        duration:.8
    })
}

firstPageAnimation();